const http = require('http');
const url = require('url');
const { loadDb, saveDb } = require('./db');
const { evaluateAutomations } = require('./automation_engine');
const { tickSimulation } = require('./iot_simulator');

const PORT = process.env.PORT || 4010;

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  });
  res.end(JSON.stringify(data));
}

function getUserFromToken(req, db) {
  const authHeader = req.headers['authorization'] || '';
  if (!authHeader.startsWith('Bearer ')) return null;
  const token = authHeader.replace('Bearer ', '').trim();
  return db.users.find(u => token.includes(u.id) || token.includes(u.email) || token.includes(u.role));
}

// Background IoT Telemetry Simulation Loop
setInterval(() => {
  const db = loadDb();
  tickSimulation(db);
  saveDb(db);
}, 5000);

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    });
    return res.end();
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  const db = loadDb();

  try {
    // ----------------------------------------------------
    // 1. PUBLIC & HEALTH ENDPOINTS
    // ----------------------------------------------------
    if (pathname === '/api/health' && method === 'GET') {
      return sendJson(res, 200, {
        status: 'healthy',
        system: 'SmartNest IoT & Support Operations Platform',
        version: '2.4.3',
        totalConnectedDevices: db.devices.length,
        openComplaints: (db.maintenanceTickets || []).filter(t => t.status !== 'CLOSED').length,
        timestamp: new Date().toISOString()
      });
    }

    if (pathname === '/api/public/summary' && method === 'GET') {
      const onlineDevs = db.devices.filter(d => d.status === 'online').length;
      const totalDevs = db.devices.length;
      const lowStockCount = db.inventory.filter(i => i.isLowStock || i.stockQuantity <= i.minStockLevel).length;

      return sendJson(res, 200, {
        totalHomes: db.homes.length,
        totalHouseOwners: db.users.filter(u => u.role === 'house_owner').length,
        totalFamilyMembers: db.users.filter(u => u.role === 'family_member').length,
        totalConnectedDevices: totalDevs,
        onlineDevices: onlineDevs,
        offlineDevices: totalDevs - onlineDevs,
        pendingOrders: db.orders.filter(o => o.status === 'pending').length,
        openComplaints: (db.maintenanceTickets || []).filter(t => t.status !== 'CLOSED').length,
        pendingInstallations: (db.installationRequests || []).filter(i => i.status !== 'COMPLETED').length
      });
    }

    if (pathname === '/api/shop/products' && method === 'GET') {
      return sendJson(res, 200, { products: db.inventory });
    }

    // ----------------------------------------------------
    // 2. AUTHENTICATION & NEW OWNER REGISTRATION
    // ----------------------------------------------------
    if (pathname === '/api/auth/login' && method === 'POST') {
      const body = await parseBody(req);
      const { email, password } = body;

      const user = db.users.find(u => u.email.toLowerCase() === (email || '').toLowerCase().trim());
      if (!user || user.password !== password) {
        return sendJson(res, 401, { error: 'Invalid credentials. Please verify email and password.' });
      }

      if (user.role === 'family_member' && user.status === 'pending_approval') {
        return sendJson(res, 403, {
          error: 'Access Pending: Your account has been registered but is awaiting access approval by the House Owner.'
        });
      }

      let extraProfile = {};
      if (user.role === 'house_owner') {
        const home = db.homes.find(h => h.id === user.homeId);
        extraProfile.home = home;
      } else if (user.role === 'family_member') {
        const home = db.homes.find(h => h.id === user.homeId);
        const perm = (db.permissions || []).find(p => p.userId === user.id);
        extraProfile.home = home;
        extraProfile.permissions = perm;
      }

      const token = `SMARTNEST_TOKEN_${user.id}_${user.role}_${Date.now()}`;
      return sendJson(res, 200, {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          homeId: user.homeId,
          phone: user.phone,
          status: user.status
        },
        ...extraProfile
      });
    }

    // NEW HOUSE OWNER / CUSTOMER REGISTRATION
    if (pathname === '/api/auth/register-owner' && method === 'POST') {
      const body = await parseBody(req);
      const { name, email, password, phone, homeName, houseNumber, lineAddress, villageName, roomsCount } = body;

      if (!name || !email || !password) {
        return sendJson(res, 400, { error: 'Name, Email, and Password are required.' });
      }

      const existing = db.users.find(u => u.email.toLowerCase() === email.toLowerCase().trim());
      if (existing) {
        return sendJson(res, 409, { error: 'An account with this email address already exists. Please sign in.' });
      }

      const newUserId = `USR-OWN-${String(db.users.filter(u => u.role === 'house_owner').length + 1).padStart(2, '0')}-${Date.now().toString().slice(-3)}`;
      const newHomeId = `HOME-${String(db.homes.length + 1).padStart(3, '0')}`;

      const fullAddress = `${houseNumber || 'Door #101'}, ${lineAddress || 'Main Street, Line 1'}, ${villageName || 'Smart City'}`;

      const newHome = {
        id: newHomeId,
        name: homeName || `${name}'s Residence`,
        ownerId: newUserId,
        ownerName: name,
        houseNumber: houseNumber || 'Door #101',
        lineAddress: lineAddress || 'Main Street, Line 1',
        villageName: villageName || 'Smart City',
        address: fullAddress,
        roomsCount: Number(roomsCount) || 4,
        status: 'active',
        installationDate: new Date().toISOString().split('T')[0],
        gatewayModel: 'ESP32-S3 SmartNest Master Gateway v2.4',
        gatewayStatus: 'online',
        ipAddress: `192.168.1.${110 + db.homes.length}`,
        notes: `Registered Customer Residence in ${villageName || 'Smart City'}.`
      };

      const newUser = {
        id: newUserId,
        name,
        email: email.toLowerCase().trim(),
        password,
        role: 'house_owner',
        homeId: newHomeId,
        phone: phone || '+1-555-0100',
        status: 'active',
        createdAt: new Date().toISOString()
      };

      db.users.push(newUser);
      db.homes.push(newHome);

      // Setup default rooms for new customer
      const defaultRooms = [
        { id: `ROOM-${newHomeId}-1`, homeId: newHomeId, name: 'Living Room', floor: 1, icon: 'couch', description: 'Central Space' },
        { id: `ROOM-${newHomeId}-2`, homeId: newHomeId, name: 'Master Bedroom', floor: 2, icon: 'bed', description: 'Primary Suite' },
        { id: `ROOM-${newHomeId}-3`, homeId: newHomeId, name: 'Kitchen', floor: 1, icon: 'utensils', description: 'Cooking Area' },
        { id: `ROOM-${newHomeId}-4`, homeId: newHomeId, name: 'Front Door', floor: 1, icon: 'door-closed', description: 'Main Entry' }
      ];
      if (!db.rooms) db.rooms = [];
      db.rooms.push(...defaultRooms);

      // Provision initial online smart light device
      const initDev = {
        id: `DEV-${newHomeId}-01`,
        homeId: newHomeId,
        roomId: `ROOM-${newHomeId}-1`,
        roomName: 'Living Room',
        name: 'Living Room Smart Light',
        type: 'Smart Light',
        status: 'online',
        health: 'ONLINE',
        powerState: 'ON',
        brightness: 90,
        powerWatts: 14.0,
        warrantyStatus: 'ACTIVE',
        warrantyExpiry: '2028-09-01',
        installationDate: new Date().toISOString().split('T')[0]
      };
      db.devices.push(initDev);

      // Provision initial sensor
      const initSensor = {
        id: `SENS-${newHomeId}-01`,
        homeId: newHomeId,
        roomId: `ROOM-${newHomeId}-1`,
        roomName: 'Living Room',
        name: 'Living Room Climate Sensor',
        type: 'Temperature & Humidity',
        temperature: 24.2,
        humidity: 56.0,
        batteryLevel: 100,
        status: 'online',
        health: 'ONLINE',
        lastUpdated: new Date().toISOString()
      };
      db.sensors.push(initSensor);

      saveDb(db);

      const token = `SMARTNEST_TOKEN_${newUser.id}_${newUser.role}_${Date.now()}`;
      return sendJson(res, 201, {
        message: `Welcome to SmartNest, ${name}! Your home (${newHome.name}) is registered.`,
        token,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          homeId: newUser.homeId,
          phone: newUser.phone,
          status: newUser.status
        },
        home: newHome
      });
    }

    // ----------------------------------------------------
    // 3. SUPPORT TEAM OPERATIONS & COMPLAINTS WORKFLOW
    // ----------------------------------------------------
    if (pathname.startsWith('/api/support')) {
      const user = getUserFromToken(req, db);
      if (!user || (user.role !== 'support_engineer' && user.role !== 'admin')) {
        return sendJson(res, 403, { error: 'Support Engineer authorization required.' });
      }

      if (pathname === '/api/support/dashboard' && method === 'GET') {
        const tickets = db.maintenanceTickets || [];
        return sendJson(res, 200, {
          engineer: user,
          totalTickets: tickets.length,
          openTickets: tickets.filter(t => t.status === 'OPEN').length,
          underReviewTickets: tickets.filter(t => t.status === 'UNDER_REVIEW').length,
          processingTickets: tickets.filter(t => t.status === 'PROCESSING').length,
          warrantyExpiredTickets: tickets.filter(t => t.status === 'WARRANTY_EXPIRED').length,
          resolvedTickets: tickets.filter(t => t.status === 'RESOLVED').length,
          tickets: tickets
        });
      }

      if (pathname.startsWith('/api/support/tickets/') && pathname.endsWith('/update') && method === 'POST') {
        const ticketId = pathname.replace('/api/support/tickets/', '').replace('/update', '').trim();
        const body = await parseBody(req);
        const { status, adminNotes, resolutionNotes, warrantyAction } = body;
        const ticket = (db.maintenanceTickets || []).find(t => t.id === ticketId);
        if (!ticket) return sendJson(res, 404, { error: 'Ticket not found.' });

        if (status) ticket.status = status;
        if (adminNotes) ticket.adminNotes = adminNotes;
        if (resolutionNotes) ticket.resolutionNotes = resolutionNotes;
        if (warrantyAction) ticket.warrantyAction = warrantyAction;
        ticket.updatedAt = new Date().toISOString();

        if (status === 'RESOLVED') {
          ticket.resolvedAt = new Date().toISOString();
        }

        db.notifications.unshift({
          id: `NOTIF-${Date.now()}`,
          homeId: ticket.homeId,
          userId: ticket.reportedBy?.userId,
          recipientRole: 'house_owner',
          title: `Support Team Update: Ticket #${ticket.id}`,
          message: `Your complaint for ${ticket.deviceName} is now [${ticket.status.replace(/_/g, ' ')}]. ${resolutionNotes || adminNotes || ''}`,
          type: 'SUPPORT',
          isRead: false,
          timestamp: new Date().toISOString()
        });

        saveDb(db);
        return sendJson(res, 200, { message: `Ticket #${ticket.id} status updated to ${ticket.status}. Customer notified.`, ticket });
      }

      if (pathname.startsWith('/api/support/tickets/') && pathname.endsWith('/replace-device') && method === 'POST') {
        const ticketId = pathname.replace('/api/support/tickets/', '').replace('/replace-device', '').trim();
        const body = await parseBody(req);
        const ticket = (db.maintenanceTickets || []).find(t => t.id === ticketId);
        if (!ticket) return sendJson(res, 404, { error: 'Ticket not found.' });

        const newDevId = `DEV-REP-${Math.floor(Math.random() * 900 + 100)}`;
        const newReplacementDev = {
          id: newDevId,
          homeId: ticket.homeId,
          roomName: ticket.roomName,
          name: `${ticket.deviceName} (Warranty Replacement)`,
          type: 'Smart Light',
          status: 'online',
          health: 'ONLINE',
          powerState: 'ON',
          warrantyStatus: 'ACTIVE',
          warrantyExpiry: '2028-09-01',
          installationDate: new Date().toISOString().split('T')[0]
        };

        db.devices.push(newReplacementDev);
        ticket.status = 'RESOLVED';
        ticket.resolutionNotes = `Defective hardware replaced under warranty with fresh unit ID ${newDevId}.`;
        ticket.resolvedAt = new Date().toISOString();

        db.notifications.unshift({
          id: `NOTIF-${Date.now()}`,
          homeId: ticket.homeId,
          userId: ticket.reportedBy?.userId,
          recipientRole: 'house_owner',
          title: 'Replacement Device Dispatched & Installed!',
          message: `Support team Alex Thorne provisioned your replacement device ${newReplacementDev.name}. Please confirm resolution in your dashboard.`,
          type: 'SUPPORT',
          isRead: false,
          timestamp: new Date().toISOString()
        });

        saveDb(db);
        return sendJson(res, 200, { message: `Replacement unit ${newDevId} activated and ticket marked RESOLVED.`, ticket, device: newReplacementDev });
      }
    }

    // ----------------------------------------------------
    // 4. ADMIN OPERATIONS
    // ----------------------------------------------------
    if (pathname.startsWith('/api/admin')) {
      const user = getUserFromToken(req, db);
      if (!user || user.role !== 'admin') {
        return sendJson(res, 403, { error: 'Administrator authorization required.' });
      }

      if (pathname === '/api/admin/dashboard' && method === 'GET') {
        const totalDevs = db.devices.length;
        const onlineDevs = db.devices.filter(d => d.status === 'online').length;
        const lowStock = db.inventory.filter(i => i.stockQuantity <= i.minStockLevel);

        // Enriched Customer List for Admin
        const customers = db.users.filter(u => u.role === 'house_owner').map(u => {
          const home = db.homes.find(h => h.id === u.homeId);
          const userOrders = db.orders.filter(o => o.homeId === u.homeId);
          const userDevs = db.devices.filter(d => d.homeId === u.homeId);
          const userTickets = (db.maintenanceTickets || []).filter(t => t.homeId === u.homeId);
          return {
            id: u.id,
            name: u.name,
            email: u.email,
            phone: u.phone,
            homeId: u.homeId,
            homeName: home?.name || 'Smart Home',
            houseNumber: home?.houseNumber || 'Plot #1',
            lineAddress: home?.lineAddress || 'Main Line',
            villageName: home?.villageName || 'Smart City',
            fullAddress: home?.address || 'Smart City Address',
            roomsCount: home?.roomsCount || 4,
            gatewayStatus: home?.gatewayStatus || 'online',
            totalDevices: userDevs.length,
            totalOrders: userOrders.length,
            deliveredOrders: userOrders.filter(o => o.status === 'delivered' || o.status === 'completed').length,
            openComplaints: userTickets.filter(t => t.status !== 'CLOSED').length,
            createdAt: u.createdAt
          };
        });

        return sendJson(res, 200, {
          totalHomes: db.homes.length,
          totalHouseOwners: db.users.filter(u => u.role === 'house_owner').length,
          totalDevices: totalDevs,
          onlineDevices: onlineDevs,
          offlineDevices: totalDevs - onlineDevs,
          lowStockItemsCount: lowStock.length,
          pendingOrdersCount: db.orders.filter(o => o.status === 'pending').length,
          openComplaintsCount: (db.maintenanceTickets || []).filter(t => t.status !== 'CLOSED').length,
          pendingInstallationsCount: (db.installationRequests || []).filter(i => i.status !== 'COMPLETED').length,
          customers: customers,
          recentOrders: db.orders.slice(0, 8),
          installations: db.installationRequests || [],
          maintenanceTickets: db.maintenanceTickets || [],
          inventory: db.inventory
        });
      }

      if (pathname === '/api/admin/settings' && method === 'GET') {
        if (!db.settings) {
          db.settings = {
            gatewayPollIntervalSeconds: 5,
            mqttBrokerUrl: 'mqtt://mesh.smartnest.local:1883',
            autoFirmwareOta: true,
            supportSlaHours: 24,
            emergencySmsAlerts: true,
            adminEmail: 'admin@smartnest.local',
            meshProtocol: 'Matter 1.2 / Zigbee 3.0',
            encryptionMode: 'AES-128 Hardware Encrypted'
          };
          saveDb(db);
        }
        return sendJson(res, 200, { settings: db.settings });
      }

      if (pathname === '/api/admin/settings' && method === 'POST') {
        const body = await parseBody(req);
        db.settings = { ...(db.settings || {}), ...body, updatedAt: new Date().toISOString() };
        saveDb(db);
        return sendJson(res, 200, { message: 'Platform & IoT Gateway Settings updated successfully.', settings: db.settings });
      }

      if (pathname === '/api/admin/inventory' && method === 'GET') {
        return sendJson(res, 200, { inventory: db.inventory });
      }

      if (pathname === '/api/admin/inventory/product' && method === 'POST') {
        const body = await parseBody(req);
        if (!body.name || !body.price) {
          return sendJson(res, 400, { error: 'Product name and price are required.' });
        }
        const newProd = {
          id: `PROD-${String(db.inventory.length + 1).padStart(3, '0')}`,
          name: body.name,
          category: body.category || 'General',
          sku: body.sku || `SN-SKU-${Date.now()}`,
          price: Number(body.price),
          stockQuantity: Number(body.stockQuantity) || 20,
          minStockLevel: Number(body.minStockLevel) || 5,
          description: body.description || '',
          requiresInstallation: body.requiresInstallation === true,
          installationFee: body.requiresInstallation ? (Number(body.installationFee) || 300) : 0,
          warranty: body.warranty || '1 Year Manufacturer Warranty',
          status: (Number(body.stockQuantity) || 20) <= (Number(body.minStockLevel) || 5) ? 'LOW_STOCK' : 'IN_STOCK',
          isLowStock: (Number(body.stockQuantity) || 20) <= (Number(body.minStockLevel) || 5)
        };
        db.inventory.push(newProd);
        saveDb(db);
        return sendJson(res, 201, { message: `Product ${newProd.name} added to catalog & store successfully.`, product: newProd });
      }

      if (pathname === '/api/admin/inventory/adjust' && method === 'POST') {
        const body = await parseBody(req);
        const { productId, deltaQuantity, reason } = body;
        const prod = db.inventory.find(p => p.id === productId);
        if (!prod) return sendJson(res, 404, { error: 'Product not found.' });

        const newQty = prod.stockQuantity + Number(deltaQuantity);
        if (newQty < 0) return sendJson(res, 400, { error: 'Stock cannot be negative.' });

        prod.stockQuantity = newQty;
        prod.isLowStock = prod.stockQuantity <= prod.minStockLevel;
        prod.status = prod.stockQuantity === 0 ? 'OUT_OF_STOCK' : (prod.isLowStock ? 'LOW_STOCK' : 'IN_STOCK');

        saveDb(db);
        return sendJson(res, 200, { message: `Stock updated for ${prod.name} to ${prod.stockQuantity}.`, product: prod });
      }

      if (pathname === '/api/admin/orders' && method === 'GET') {
        return sendJson(res, 200, { orders: db.orders });
      }

      if (pathname === '/api/admin/orders/confirm' && method === 'POST') {
        const body = await parseBody(req);
        const { orderId } = body;
        const order = db.orders.find(o => o.id === orderId);
        if (!order) return sendJson(res, 404, { error: 'Order not found.' });

        order.items.forEach(it => {
          const prod = db.inventory.find(p => p.id === it.productId);
          if (prod) {
            prod.stockQuantity -= it.quantity;
            prod.isLowStock = prod.stockQuantity <= prod.minStockLevel;
            prod.status = prod.stockQuantity === 0 ? 'OUT_OF_STOCK' : (prod.isLowStock ? 'LOW_STOCK' : 'IN_STOCK');
          }
        });

        order.status = 'accepted';
        order.history.push({ status: 'accepted', timestamp: new Date().toISOString(), note: 'Accepted and stock reserved by Admin' });
        saveDb(db);
        return sendJson(res, 200, { message: `Order #${order.id} accepted.`, order });
      }

      if (pathname === '/api/admin/orders/pack' && method === 'POST') {
        const body = await parseBody(req);
        const { orderId } = body;
        const order = db.orders.find(o => o.id === orderId);
        if (!order) return sendJson(res, 404, { error: 'Order not found.' });

        order.status = 'packed';
        order.history.push({ status: 'packed', timestamp: new Date().toISOString(), note: 'Package packed and verified' });
        saveDb(db);
        return sendJson(res, 200, { message: `Order #${order.id} packed.`, order });
      }

      if (pathname === '/api/admin/orders/dispatch' && method === 'POST') {
        const body = await parseBody(req);
        const { orderId, courier, trackingNumber, expectedDate } = body;
        const order = db.orders.find(o => o.id === orderId);
        if (!order) return sendJson(res, 404, { error: 'Order not found.' });

        order.status = 'out_for_delivery';
        order.delivery = {
          trackingNumber: trackingNumber || `DLV-${Date.now()}`,
          courier: courier || 'Express IoT Logistics',
          expectedDate: expectedDate || 'Tomorrow',
          isDelivered: false
        };
        order.history.push({ status: 'out_for_delivery', timestamp: new Date().toISOString(), note: `Dispatched with ${order.delivery.courier}` });
        saveDb(db);
        return sendJson(res, 200, { message: `Order #${order.id} dispatched.`, order });
      }

      if (pathname === '/api/admin/orders/deliver' && method === 'POST') {
        const body = await parseBody(req);
        const { orderId } = body;
        const order = db.orders.find(o => o.id === orderId);
        if (!order) return sendJson(res, 404, { error: 'Order not found.' });

        order.status = 'delivered';
        if (order.delivery) order.delivery.isDelivered = true;
        order.history.push({ status: 'delivered', timestamp: new Date().toISOString(), note: 'Courier delivered package' });
        saveDb(db);
        return sendJson(res, 200, { message: `Order #${order.id} marked as delivered.`, order });
      }

      if (pathname === '/api/admin/installations' && method === 'GET') {
        return sendJson(res, 200, { installations: db.installationRequests || [] });
      }

      if (pathname === '/api/admin/installations/schedule' && method === 'POST') {
        const body = await parseBody(req);
        const { requestId, scheduledDate, scheduledTimeSlot, technician } = body;
        const inst = (db.installationRequests || []).find(i => i.id === requestId);
        if (!inst) return sendJson(res, 404, { error: 'Request not found.' });

        inst.status = 'SCHEDULED';
        inst.scheduledDate = scheduledDate || '2026-09-05';
        inst.scheduledTimeSlot = scheduledTimeSlot || '10:00 AM – 12:00 PM';
        inst.technician = technician || 'Alex Thorne (Certified Tech #408)';
        saveDb(db);
        return sendJson(res, 200, { message: 'Installation scheduled.', installation: inst });
      }

      if (pathname === '/api/admin/installations/complete' && method === 'POST') {
        const body = await parseBody(req);
        const { requestId } = body;
        const inst = (db.installationRequests || []).find(i => i.id === requestId);
        if (!inst) return sendJson(res, 404, { error: 'Request not found.' });

        inst.status = 'COMPLETED';
        const order = db.orders.find(o => o.id === inst.orderId);
        if (order) order.status = 'installed';
        saveDb(db);
        return sendJson(res, 200, { message: 'Installation completed.', installation: inst });
      }

      if (pathname === '/api/admin/device/activate' && method === 'POST') {
        const body = await parseBody(req);
        const { homeId, roomName, name, type, orderId } = body;

        const newDevId = `DEV-${String(db.devices.length + 1).padStart(3, '0')}`;
        const newDevice = {
          id: newDevId,
          homeId: homeId || 'HOME-001',
          roomName: roomName || 'Living Room',
          name: name || `${type} (New)`,
          type: type || 'Smart Light',
          status: 'online',
          health: 'ONLINE',
          powerState: 'OFF',
          brightness: 100,
          fanSpeed: 1,
          targetTemperature: 24.0,
          acMode: 'cool',
          isLocked: true,
          powerWatts: 0.0,
          warrantyStatus: 'ACTIVE',
          warrantyExpiry: '2028-09-01',
          installationDate: new Date().toISOString().split('T')[0]
        };

        db.devices.push(newDevice);
        if (orderId) {
          const order = db.orders.find(o => o.id === orderId);
          if (order) order.status = 'completed';
        }

        saveDb(db);
        return sendJson(res, 201, { message: `Device ${newDevice.name} activated online!`, device: newDevice });
      }
    }

    // ----------------------------------------------------
    // 5. HOUSE OWNER & STORE OPERATIONS
    // ----------------------------------------------------
    if (pathname.startsWith('/api/owner') || pathname.startsWith('/api/shop')) {
      const user = getUserFromToken(req, db);
      if (!user || (user.role !== 'house_owner' && user.role !== 'admin')) {
        return sendJson(res, 403, { error: 'House Owner authorization required.' });
      }

      const homeId = user.homeId || 'HOME-001';
      const home = db.homes.find(h => h.id === homeId) || db.homes[0];

      if (pathname === '/api/owner/dashboard' && method === 'GET') {
        const homeDevs = db.devices.filter(d => d.homeId === homeId);
        const homeSens = db.sensors.filter(s => s.homeId === homeId);
        const tempSens = homeSens.find(s => s.type === 'Temperature & Humidity');

        return sendJson(res, 200, {
          home,
          ambientTemperature: tempSens ? tempSens.temperature : 24.5,
          ambientHumidity: tempSens ? tempSens.humidity : 58.0,
          energyTodayKwh: 8.42,
          devices: homeDevs,
          sensors: homeSens,
          roomList: db.rooms.filter(r => r.homeId === homeId),
          orders: db.orders.filter(o => o.homeId === homeId),
          maintenanceTickets: (db.maintenanceTickets || []).filter(t => t.homeId === homeId),
          family: db.users.filter(u => u.role === 'family_member' && u.homeId === homeId),
          recentNotifications: (db.notifications || []).filter(n => n.homeId === homeId || n.recipientRole === 'house_owner').slice(0, 6)
        });
      }

      // Owner Adds New Device Manually
      if (pathname === '/api/owner/devices/add' && method === 'POST') {
        const body = await parseBody(req);
        const { name, type, roomName } = body;

        const newDev = {
          id: `DEV-OWN-${Date.now().toString().slice(-4)}`,
          homeId,
          roomName: roomName || 'Living Room',
          name: name || 'New Smart Node',
          type: type || 'Smart Light',
          status: 'online',
          health: 'ONLINE',
          powerState: 'ON',
          brightness: 100,
          powerWatts: 15.0,
          warrantyStatus: 'ACTIVE',
          warrantyExpiry: '2028-09-01',
          installationDate: new Date().toISOString().split('T')[0]
        };

        db.devices.push(newDev);
        saveDb(db);
        return sendJson(res, 201, { message: `Device ${newDev.name} registered and operational in ${newDev.roomName}.`, device: newDev });
      }

      // Owner Raises Complaint / Problem
      if (pathname === '/api/owner/device/report-problem' && method === 'POST') {
        const body = await parseBody(req);
        const { deviceId, problemType, description, priority } = body;
        const dev = db.devices.find(d => d.id === deviceId && d.homeId === homeId);
        if (!dev) return sendJson(res, 404, { error: 'Device not found.' });

        dev.status = 'warning';
        dev.health = 'MAINTENANCE_REQUIRED';

        const newTicketId = `MT-${Math.floor(Math.random() * 9000 + 1000)}`;
        const newTicket = {
          id: newTicketId,
          homeId,
          deviceId: dev.id,
          deviceName: dev.name,
          roomName: dev.roomName,
          reportedBy: { userId: user.id, name: user.name, role: user.role },
          problemType: problemType || 'Device Not Working',
          description: description || 'Issue reported by house owner',
          priority: priority || 'High',
          status: 'OPEN',
          warrantyStatus: dev.warrantyStatus || 'ACTIVE',
          adminNotes: 'Assigned to Support Engineering Team (Alex Thorne)',
          resolutionNotes: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          resolvedAt: null
        };

        if (!db.maintenanceTickets) db.maintenanceTickets = [];
        db.maintenanceTickets.unshift(newTicket);

        // Alert Support Team
        db.notifications.unshift({
          id: `NOTIF-${Date.now()}`,
          homeId: 'ALL',
          userId: 'USR-SUP-01',
          recipientRole: 'support_engineer',
          title: `New Support Ticket: #${newTicket.id}`,
          message: `${user.name} reported [${newTicket.problemType}] on ${dev.name}. Dispatched to support queue.`,
          type: 'SUPPORT',
          isRead: false,
          timestamp: new Date().toISOString()
        });

        saveDb(db);
        return sendJson(res, 201, { message: `Complaint #${newTicket.id} dispatched to Support Engineering Team.`, ticket: newTicket });
      }

      // Owner Confirms Resolution -> Ticket Becomes CLOSED & Device Returns Online
      if (pathname.startsWith('/api/owner/maintenance/') && pathname.endsWith('/confirm-fixed') && method === 'POST') {
        const ticketId = pathname.replace('/api/owner/maintenance/', '').replace('/confirm-fixed', '').trim();
        const ticket = (db.maintenanceTickets || []).find(t => t.id === ticketId && t.homeId === homeId);
        if (!ticket) return sendJson(res, 404, { error: 'Ticket not found.' });

        ticket.status = 'CLOSED';
        ticket.updatedAt = new Date().toISOString();

        // Restore Device Status to Online
        const dev = db.devices.find(d => d.id === ticket.deviceId);
        if (dev) {
          dev.status = 'online';
          dev.health = 'ONLINE';
        }

        saveDb(db);
        return sendJson(res, 200, { message: `Resolution confirmed. Ticket #${ticket.id} closed and device is fully operational.`, ticket });
      }

      if (pathname.startsWith('/api/owner/maintenance/') && pathname.endsWith('/problem-persists') && method === 'POST') {
        const ticketId = pathname.replace('/api/owner/maintenance/', '').replace('/problem-persists', '').trim();
        const ticket = (db.maintenanceTickets || []).find(t => t.id === ticketId && t.homeId === homeId);
        if (!ticket) return sendJson(res, 404, { error: 'Ticket not found.' });

        ticket.status = 'PROCESSING';
        ticket.updatedAt = new Date().toISOString();

        db.notifications.unshift({
          id: `NOTIF-${Date.now()}`,
          homeId: 'ALL',
          userId: 'USR-SUP-01',
          recipientRole: 'support_engineer',
          title: `Problem Still Exists: #${ticket.id}`,
          message: `${user.name} verified device and reported issue persists. Continued support action needed.`,
          type: 'SUPPORT',
          isRead: false,
          timestamp: new Date().toISOString()
        });

        saveDb(db);
        return sendJson(res, 200, { message: `Support team alerted that problem still exists. Status returned to PROCESSING.`, ticket });
      }

      // Owner Device Command
      if (pathname === '/api/owner/device/command' && method === 'POST') {
        const body = await parseBody(req);
        const { deviceId, command, value } = body;
        const dev = db.devices.find(d => d.id === deviceId && d.homeId === homeId);
        if (!dev) return sendJson(res, 404, { error: 'Device not found.' });

        if (command === 'POWER') dev.powerState = value;
        else if (command === 'LOCK') dev.isLocked = value === 'LOCK';
        saveDb(db);
        return sendJson(res, 200, { message: `${dev.name} updated.`, device: dev });
      }

      // Store Products & Checkout
      if (pathname === '/api/shop/products' && method === 'GET') {
        return sendJson(res, 200, { products: db.inventory });
      }

      if (pathname === '/api/shop/checkout' && method === 'POST') {
        const body = await parseBody(req);
        const { items } = body;

        let totalInstallationFee = 0;
        let subtotal = 0;
        for (const it of items) {
          const prod = db.inventory.find(p => p.id === it.productId);
          if (prod && prod.requiresInstallation) totalInstallationFee += (prod.installationFee || 300) * it.quantity;
          if (prod) subtotal += prod.price * it.quantity;
        }

        const newOrder = {
          id: `ORD-${Math.floor(Math.random() * 90000 + 10000)}`,
          homeId,
          userId: user.id,
          customerName: user.name,
          items: items.map(it => {
            const prod = db.inventory.find(p => p.id === it.productId);
            return { productId: prod.id, name: prod.name, price: prod.price, quantity: it.quantity, requiresInstallation: prod.requiresInstallation || false };
          }),
          subtotal,
          installationFee: totalInstallationFee,
          totalAmount: subtotal + totalInstallationFee,
          hasInstallationItems: totalInstallationFee > 0,
          status: 'pending',
          placedAt: new Date().toISOString(),
          history: [{ status: 'pending', timestamp: new Date().toISOString(), note: 'Order placed by House Owner' }]
        };

        db.orders.unshift(newOrder);
        saveDb(db);
        return sendJson(res, 201, { message: `Order #${newOrder.id} placed in SmartNest Store!`, order: newOrder });
      }

      if (pathname === '/api/owner/orders' && method === 'GET') return sendJson(res, 200, { orders: db.orders.filter(o => o.homeId === homeId) });
      if (pathname === '/api/owner/maintenance' && method === 'GET') return sendJson(res, 200, { tickets: (db.maintenanceTickets || []).filter(t => t.homeId === homeId) });
    }

    // ----------------------------------------------------
    // 6. FAMILY MEMBER OPERATIONS
    // ----------------------------------------------------
    if (pathname.startsWith('/api/family')) {
      const user = getUserFromToken(req, db);
      if (!user) return sendJson(res, 401, { error: 'Authentication required.' });

      const homeId = user.homeId || 'HOME-001';
      const permissions = db.permissions.find(p => p.userId === user.id) || { allowedDeviceIds: ['DEV-001', 'DEV-002'] };

      if (pathname === '/api/family/dashboard' && method === 'GET') {
        const allowedDevs = db.devices.filter(d => d.homeId === homeId && (permissions.allowedDeviceIds || []).includes(d.id));
        return sendJson(res, 200, { user, allowedDevices: allowedDevs, maintenanceTickets: (db.maintenanceTickets || []).filter(t => t.reportedBy?.userId === user.id) });
      }

      if (pathname === '/api/family/device/command' && method === 'POST') {
        const body = await parseBody(req);
        const { deviceId, command, value } = body;
        if (!(permissions.allowedDeviceIds || []).includes(deviceId)) {
          return sendJson(res, 403, { error: 'Access Denied: Device not permitted.' });
        }
        const dev = db.devices.find(d => d.id === deviceId);
        if (dev && command === 'POWER') dev.powerState = value;
        saveDb(db);
        return sendJson(res, 200, { message: `${dev?.name} updated.`, device: dev });
      }

      if (pathname === '/api/family/device/report-problem' && method === 'POST') {
        const body = await parseBody(req);
        const { deviceId, problemType, description } = body;
        const dev = db.devices.find(d => d.id === deviceId);

        const newTicketId = `MT-${Math.floor(Math.random() * 9000 + 1000)}`;
        const newTicket = {
          id: newTicketId,
          homeId,
          deviceId: dev?.id,
          deviceName: dev?.name,
          roomName: dev?.roomName,
          reportedBy: { userId: user.id, name: user.name, role: user.role },
          problemType: problemType || 'Device Not Working',
          description: description || 'Problem reported by family member',
          priority: 'Medium',
          status: 'OPEN',
          warrantyStatus: dev?.warrantyStatus || 'ACTIVE',
          adminNotes: 'Assigned to Support Engineering Team',
          resolutionNotes: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        if (!db.maintenanceTickets) db.maintenanceTickets = [];
        db.maintenanceTickets.unshift(newTicket);
        saveDb(db);
        return sendJson(res, 201, { message: `Complaint #${newTicket.id} logged with Support.`, ticket: newTicket });
      }
    }

    return sendJson(res, 404, { error: `API route not found: ${method} ${pathname}` });
  } catch (err) {
    console.error('Server error:', err);
    return sendJson(res, 500, { error: 'Internal server error', details: err.message });
  }
});

server.listen(PORT, () => {
  console.log(`SmartNest IoT & Support Management Server running on port ${PORT}`);
});
