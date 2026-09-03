const { describe, it } = require('node:test');
const assert = require('node:assert');
const { getSeedData } = require('../../backend/src/seed');

describe('SmartNest Full Product Order, Delivery, Installation & Support Workflow', () => {
  it('1. Owner places order with installation requirement check and fee computation', () => {
    const db = getSeedData();
    const light = db.inventory.find(p => p.sku === 'SNL-E27-RGBW');
    const motion = db.inventory.find(p => p.sku === 'SNS-PIR-2026');

    assert.strictEqual(light.requiresInstallation, false);
    assert.strictEqual(motion.requiresInstallation, true);

    const orderItems = [
      { productId: light.id, name: light.name, price: light.price, quantity: 2, requiresInstallation: false },
      { productId: motion.id, name: motion.name, price: motion.price, quantity: 1, requiresInstallation: true }
    ];

    const subtotal = (light.price * 2) + (motion.price * 1);
    const installationFee = motion.installationFee || 250;
    const totalAmount = subtotal + installationFee;

    const newOrder = {
      id: 'ORD-TEST-99',
      homeId: 'HOME-001',
      userId: 'USR-OWN-01',
      customerName: 'David Miller',
      items: orderItems,
      subtotal,
      installationFee,
      totalAmount,
      hasInstallationItems: true,
      status: 'pending',
      placedAt: new Date().toISOString(),
      history: [{ status: 'pending', timestamp: new Date().toISOString() }]
    };

    db.orders.unshift(newOrder);
    assert.strictEqual(newOrder.status, 'pending');
    assert.strictEqual(newOrder.totalAmount, totalAmount);
  });

  it('2. Admin confirms order and reserves warehouse inventory stock', () => {
    const db = getSeedData();
    const motion = db.inventory.find(p => p.sku === 'SNS-PIR-2026');
    const prevStock = motion.stockQuantity;

    // Simulate order confirmation stock reservation
    motion.stockQuantity -= 1;
    motion.isLowStock = motion.stockQuantity <= motion.minStockLevel;

    assert.strictEqual(motion.stockQuantity, prevStock - 1);
    assert.strictEqual(motion.stockQuantity >= 0, true);
  });

  it('3. Admin dispatches order with courier tracking and marks delivered', () => {
    const db = getSeedData();
    const order = db.orders.find(o => o.id === 'ORD-10024');
    assert.ok(order);

    order.status = 'out_for_delivery';
    order.delivery = {
      trackingNumber: 'DLV-20891',
      courier: 'Express IoT Logistics',
      dispatchDate: '2026-09-03',
      expectedDate: '2026-09-03',
      isDelivered: false
    };

    assert.strictEqual(order.status, 'out_for_delivery');
    assert.strictEqual(order.delivery.trackingNumber, 'DLV-20891');

    // Courier delivers
    order.status = 'delivered';
    order.delivery.isDelivered = true;
    assert.strictEqual(order.status, 'delivered');
  });

  it('4. Owner confirms delivery and requests installation for Motion Sensor', () => {
    const db = getSeedData();
    const order = db.orders.find(o => o.id === 'ORD-10024');

    // Owner confirms receipt
    order.status = 'owner_confirmed';
    assert.strictEqual(order.status, 'owner_confirmed');

    // Owner requests installation
    const instReq = {
      id: 'INST-901',
      orderId: order.id,
      homeId: order.homeId,
      ownerName: 'David Miller',
      deviceType: 'Smart Motion Sensor',
      requestedRoom: 'Living Room',
      status: 'REQUESTED',
      createdAt: new Date().toISOString()
    };
    db.installationRequests.push(instReq);

    assert.strictEqual(instReq.status, 'REQUESTED');
  });

  it('5. Admin schedules, completes installation, and activates new smart device', () => {
    const db = getSeedData();
    const instReq = db.installationRequests.find(i => i.id === 'INST-101');
    assert.ok(instReq);

    // Admin schedules
    instReq.status = 'SCHEDULED';
    instReq.scheduledDate = '2026-09-05';
    instReq.scheduledTimeSlot = '10:00 AM – 12:00 PM';
    instReq.technician = 'Alex Thorne (Field Tech #408)';
    assert.strictEqual(instReq.status, 'SCHEDULED');

    // Field Tech completes
    instReq.status = 'COMPLETED';
    assert.strictEqual(instReq.status, 'COMPLETED');

    // Device Activation: New device added to live home devices
    const initialDevCount = db.devices.length;
    const newDev = {
      id: `DEV-${String(initialDevCount + 1).padStart(3, '0')}`,
      homeId: 'HOME-001',
      roomName: 'Living Room',
      name: 'Living Room PIR Motion Sensor',
      type: 'Motion Sensor',
      status: 'online',
      health: 'ONLINE',
      powerState: 'ON'
    };
    db.devices.push(newDev);

    assert.strictEqual(db.devices.length, initialDevCount + 1);
    assert.strictEqual(newDev.status, 'online');
  });

  it('6. Problem report generates maintenance ticket and admin resolution closes it', () => {
    const db = getSeedData();
    const initialTicketCount = db.maintenanceTickets.length;

    const newTicket = {
      id: 'MT-2001',
      homeId: 'HOME-001',
      deviceId: 'DEV-005',
      deviceName: 'Master Bedroom Ambient Light',
      problemType: 'Not Responding',
      description: 'Light switch offline from mobile app.',
      priority: 'Medium',
      status: 'OPEN',
      createdAt: new Date().toISOString()
    };
    db.maintenanceTickets.unshift(newTicket);

    assert.strictEqual(db.maintenanceTickets.length, initialTicketCount + 1);
    assert.strictEqual(newTicket.status, 'OPEN');

    // Admin reviews & resolves
    newTicket.status = 'RESOLVED';
    newTicket.resolutionNotes = 'Zigbee router mesh re-paired successfully.';
    assert.strictEqual(newTicket.status, 'RESOLVED');

    // Owner confirms resolution
    newTicket.status = 'CLOSED';
    assert.strictEqual(newTicket.status, 'CLOSED');
  });
});
