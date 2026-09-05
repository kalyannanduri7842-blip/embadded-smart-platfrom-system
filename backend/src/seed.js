function getSeedData() {
  const users = [
    {
      id: 'USR-ADM-01',
      name: 'Marcus Sterling',
      email: 'admin@smartnest.local',
      password: 'DemoOnly-Admin-2026!',
      role: 'admin',
      phone: '+1-555-0199',
      status: 'active',
      createdAt: '2026-01-10T08:00:00Z'
    },
    {
      id: 'USR-SUP-01',
      name: 'Alex Thorne',
      email: 'support@smartnest.local',
      password: 'DemoOnly-Support-2026!',
      role: 'admin', // Support Team Administrator & Field Engineer
      department: 'Field Support & Diagnostics',
      phone: '+1-555-0155',
      status: 'active',
      createdAt: '2026-01-12T08:30:00Z'
    },
    {
      id: 'USR-OWN-01',
      name: 'Rahul Sharma',
      email: 'owner@smartnest.local',
      password: 'DemoOnly-Owner-2026!',
      role: 'house_owner',
      homeId: 'HOME-001',
      phone: '+1-555-0142',
      status: 'active',
      createdAt: '2026-01-15T09:30:00Z'
    },
    {
      id: 'USR-OWN-01-ALIAS',
      name: 'Rahul Sharma',
      email: 'rahul@smartnest.local',
      password: 'DemoOnly-Owner-2026!',
      role: 'house_owner',
      homeId: 'HOME-001',
      phone: '+1-555-0142',
      status: 'active',
      createdAt: '2026-01-15T09:30:00Z'
    },
    {
      id: 'USR-FAM-01',
      name: 'Ananya Sharma',
      email: 'family@smartnest.local',
      password: 'DemoOnly-Family-2026!',
      role: 'family_member',
      homeId: 'HOME-001',
      relationship: 'Daughter',
      phone: '+1-555-0178',
      status: 'active',
      accessApproved: true,
      createdAt: '2026-01-18T10:00:00Z'
    },
    {
      id: 'USR-FAM-02',
      name: 'Rohan Sharma',
      email: 'rohan@smartnest.local',
      password: 'DemoOnly-Family-2026!',
      role: 'family_member',
      homeId: 'HOME-001',
      relationship: 'Son',
      phone: '+1-555-0182',
      status: 'pending_approval',
      accessApproved: false,
      createdAt: '2026-01-20T11:00:00Z'
    },
    {
      id: 'USR-OWN-02',
      name: 'Elena Rostova',
      email: 'owner2@smartnest.local',
      password: 'DemoOnly-Owner-2026!',
      role: 'house_owner',
      homeId: 'HOME-002',
      phone: '+1-555-0191',
      status: 'active',
      createdAt: '2026-02-01T09:00:00Z'
    }
  ];

  const homes = [
    {
      id: 'HOME-001',
      name: 'Green Valley Residence',
      ownerId: 'USR-OWN-01',
      ownerName: 'Rahul Sharma',
      address: '742 Evergreen Terrace, Sector 4, Smart City',
      roomsCount: 6,
      status: 'active',
      installationDate: '2026-01-15',
      gatewayModel: 'ESP32-S3 SmartNest Master Gateway v2.4',
      gatewayStatus: 'online',
      ipAddress: '192.168.1.100',
      notes: 'Primary smart villa with Matter 1.2 and Zigbee 3.0 mesh nodes.'
    },
    {
      id: 'HOME-002',
      name: 'Sunset Palms Villa',
      ownerId: 'USR-OWN-02',
      ownerName: 'Elena Rostova',
      address: '108 Ocean Boulevard, Palm Heights',
      roomsCount: 5,
      status: 'active',
      installationDate: '2026-02-01',
      gatewayModel: 'ESP32-WROOM Edge Node Gateway v2.2',
      gatewayStatus: 'online',
      ipAddress: '192.168.1.105',
      notes: 'Solar-integrated smart residence with automated HVAC.'
    }
  ];

  const rooms = [
    { id: 'ROOM-101', homeId: 'HOME-001', name: 'Living Room', floor: 1, icon: 'couch', description: 'Central Family Space' },
    { id: 'ROOM-102', homeId: 'HOME-001', name: 'Master Bedroom', floor: 2, icon: 'bed', description: 'Primary Bedroom Suite' },
    { id: 'ROOM-103', homeId: 'HOME-001', name: 'Kitchen', floor: 1, icon: 'utensils', description: 'Culinary & Gas Safety Area' },
    { id: 'ROOM-104', homeId: 'HOME-001', name: 'Garage', floor: 1, icon: 'car', description: 'Vehicle & Sub-meter Hub' },
    { id: 'ROOM-105', homeId: 'HOME-001', name: 'Garden', floor: 1, icon: 'trees', description: 'Outdoor Solar Perimeter' },
    { id: 'ROOM-106', homeId: 'HOME-001', name: 'Front Door', floor: 1, icon: 'door-closed', description: 'Biometric Access & Entryway' }
  ];

  const devices = [
    {
      id: 'DEV-001',
      homeId: 'HOME-001',
      roomId: 'ROOM-101',
      roomName: 'Living Room',
      name: 'Living Room Ceiling Light',
      type: 'Smart Light',
      status: 'online',
      health: 'ONLINE',
      powerState: 'ON',
      brightness: 85,
      powerWatts: 14.5,
      warrantyStatus: 'ACTIVE',
      warrantyExpiry: '2028-01-16',
      manufacturer: 'SmartNest Lumen Series',
      model: 'SNL-E27-RGBW',
      installationDate: '2026-01-16'
    },
    {
      id: 'DEV-002',
      homeId: 'HOME-001',
      roomId: 'ROOM-101',
      roomName: 'Living Room',
      name: 'Living Room Air Conditioner',
      type: 'Air Conditioner',
      status: 'online',
      health: 'ONLINE',
      powerState: 'ON',
      targetTemperature: 23.5,
      acMode: 'cool',
      fanLevel: 3,
      powerWatts: 1250.0,
      warrantyStatus: 'ACTIVE',
      warrantyExpiry: '2029-01-16',
      manufacturer: 'SmartNest Climate Inverter',
      model: 'SNC-18K-INV',
      installationDate: '2026-01-16'
    },
    {
      id: 'DEV-003',
      homeId: 'HOME-001',
      roomId: 'ROOM-101',
      roomName: 'Living Room',
      name: 'Living Room Ceiling Fan',
      type: 'Smart Fan',
      status: 'online',
      health: 'ONLINE',
      powerState: 'OFF',
      fanSpeed: 3,
      powerWatts: 0.0,
      warrantyStatus: 'ACTIVE',
      warrantyExpiry: '2028-01-16',
      manufacturer: 'AeroSmart BLDC',
      model: 'AS-FAN-1200',
      installationDate: '2026-01-16'
    },
    {
      id: 'DEV-004',
      homeId: 'HOME-001',
      roomId: 'ROOM-101',
      roomName: 'Living Room',
      name: 'Media Center Smart Plug',
      type: 'Smart Plug',
      status: 'online',
      health: 'ONLINE',
      powerState: 'ON',
      powerWatts: 185.0,
      warrantyStatus: 'ACTIVE',
      warrantyExpiry: '2028-01-16',
      manufacturer: 'SmartNest PowerNode',
      model: 'SNP-16A-MET',
      installationDate: '2026-01-16'
    },
    {
      id: 'DEV-005',
      homeId: 'HOME-001',
      roomId: 'ROOM-102',
      roomName: 'Master Bedroom',
      name: 'Master Bedroom Ambient Light',
      type: 'Smart Light',
      status: 'warning',
      health: 'MAINTENANCE_REQUIRED',
      powerState: 'OFF',
      brightness: 60,
      powerWatts: 0.0,
      warrantyStatus: 'ACTIVE',
      warrantyExpiry: '2027-01-16',
      manufacturer: 'SmartNest Lumen Series',
      model: 'SNL-E27-WARM',
      installationDate: '2026-01-16'
    },
    {
      id: 'DEV-006',
      homeId: 'HOME-001',
      roomId: 'ROOM-102',
      roomName: 'Master Bedroom',
      name: 'Bedroom AC',
      type: 'Air Conditioner',
      status: 'online',
      health: 'ONLINE',
      powerState: 'OFF',
      targetTemperature: 24.0,
      acMode: 'cool',
      fanLevel: 2,
      powerWatts: 0.0,
      warrantyStatus: 'ACTIVE',
      warrantyExpiry: '2029-01-16',
      manufacturer: 'SmartNest Climate Inverter',
      model: 'SNC-12K-INV',
      installationDate: '2026-01-16'
    },
    {
      id: 'DEV-007',
      homeId: 'HOME-001',
      roomId: 'ROOM-103',
      roomName: 'Kitchen',
      name: 'Kitchen Counter Lights',
      type: 'Smart Light',
      status: 'online',
      health: 'ONLINE',
      powerState: 'ON',
      brightness: 100,
      powerWatts: 22.0,
      warrantyStatus: 'ACTIVE',
      warrantyExpiry: '2028-01-16',
      manufacturer: 'SmartNest Strip LED',
      model: 'SNS-5M-WHITE',
      installationDate: '2026-01-16'
    },
    {
      id: 'DEV-008',
      homeId: 'HOME-001',
      roomId: 'ROOM-103',
      roomName: 'Kitchen',
      name: 'Kitchen Exhaust Hood & Fan',
      type: 'Smart Fan',
      status: 'online',
      health: 'ONLINE',
      powerState: 'ON',
      fanSpeed: 2,
      powerWatts: 45.0,
      warrantyStatus: 'ACTIVE',
      warrantyExpiry: '2028-01-16',
      manufacturer: 'SmartNest AeroFlow',
      model: 'SNA-EXH-400',
      installationDate: '2026-01-16'
    },
    {
      id: 'DEV-009',
      homeId: 'HOME-001',
      roomId: 'ROOM-104',
      roomName: 'Garage',
      name: 'Garage Motorized Door Opener',
      type: 'Smart Switch',
      status: 'online',
      health: 'ONLINE',
      powerState: 'OFF',
      powerWatts: 0.0,
      warrantyStatus: 'ACTIVE',
      warrantyExpiry: '2029-01-16',
      manufacturer: 'LiftMaster Smart Relay',
      model: 'LM-RELAY-100',
      installationDate: '2026-01-16'
    },
    {
      id: 'DEV-010',
      homeId: 'HOME-001',
      roomId: 'ROOM-106',
      roomName: 'Front Door',
      name: 'Front Door Smart Deadbolt',
      type: 'Smart Lock',
      status: 'online',
      health: 'ONLINE',
      isLocked: true,
      batteryLevel: 94,
      warrantyStatus: 'ACTIVE',
      warrantyExpiry: '2029-01-16',
      manufacturer: 'SecureGuard Biometric',
      model: 'SG-LOCK-PRO',
      installationDate: '2026-01-16'
    },
    {
      id: 'DEV-011',
      homeId: 'HOME-001',
      roomId: 'ROOM-105',
      roomName: 'Garden',
      name: 'Garden Pathway 12V Glow Lights',
      type: 'Smart Light',
      status: 'online',
      health: 'ONLINE',
      powerState: 'ON',
      brightness: 75,
      powerWatts: 38.0,
      warrantyStatus: 'ACTIVE',
      warrantyExpiry: '2028-01-16',
      manufacturer: 'SmartNest SolarLine',
      model: 'SN-GLOW-12V',
      installationDate: '2026-01-16'
    },
    {
      id: 'DEV-012',
      homeId: 'HOME-001',
      roomId: 'ROOM-101',
      roomName: 'Balcony',
      name: 'Balcony Warm Accent Lamp',
      type: 'Smart Light',
      status: 'online',
      health: 'ONLINE',
      powerState: 'ON',
      brightness: 80,
      powerWatts: 12.0,
      warrantyStatus: 'ACTIVE',
      warrantyExpiry: '2028-01-16',
      manufacturer: 'SmartNest Lumen Series',
      model: 'SNL-E27-BALC',
      installationDate: '2026-01-16'
    }
  ];

  const sensors = [
    {
      id: 'SENS-001',
      homeId: 'HOME-001',
      roomId: 'ROOM-101',
      roomName: 'Living Room',
      name: 'Living Room Temp & Humidity Sensor',
      type: 'Temperature & Humidity',
      temperature: 24.5,
      humidity: 58.0,
      batteryLevel: 96,
      status: 'online',
      health: 'ONLINE',
      lastUpdated: new Date().toISOString()
    },
    {
      id: 'SENS-002',
      homeId: 'HOME-001',
      roomId: 'ROOM-101',
      roomName: 'Living Room',
      name: 'Living Room Motion Detector',
      type: 'Motion Sensor',
      motionDetected: false,
      batteryLevel: 92,
      status: 'online',
      health: 'ONLINE',
      lastUpdated: new Date().toISOString()
    },
    {
      id: 'SENS-003',
      homeId: 'HOME-001',
      roomId: 'ROOM-103',
      roomName: 'Kitchen',
      name: 'Kitchen MQ-2 Smoke Detector',
      type: 'Smoke Sensor',
      smokeAlert: false,
      smokePpm: 45,
      batteryLevel: 100,
      status: 'online',
      health: 'ONLINE',
      lastUpdated: new Date().toISOString()
    },
    {
      id: 'SENS-007',
      homeId: 'HOME-001',
      roomId: 'ROOM-101',
      roomName: 'Living Room',
      name: 'Whole Home Energy Sub-Meter',
      type: 'Energy Meter',
      livePowerWatts: 840.5,
      energyTodayKwh: 8.42,
      voltage: 230.1,
      currentAmps: 3.65,
      status: 'online',
      health: 'ONLINE',
      lastUpdated: new Date().toISOString()
    }
  ];

  const permissions = [
    {
      id: 'PERM-001',
      homeId: 'HOME-001',
      userId: 'USR-FAM-01',
      userName: 'Ananya Sharma',
      canControlLights: true,
      canControlAC: true,
      canControlFans: true,
      canControlPlugs: true,
      canViewSensors: true,
      canControlLocks: false,
      allowedDeviceIds: ['DEV-001', 'DEV-002', 'DEV-003', 'DEV-004', 'DEV-005', 'DEV-007']
    },
    {
      id: 'PERM-002',
      homeId: 'HOME-001',
      userId: 'USR-FAM-02',
      userName: 'Rohan Sharma',
      canControlLights: true,
      canControlAC: false,
      canControlFans: true,
      canControlPlugs: false,
      canViewSensors: true,
      canControlLocks: false,
      allowedDeviceIds: ['DEV-001', 'DEV-003', 'DEV-007']
    }
  ];

  const automations = [
    {
      id: 'AUTO-001',
      homeId: 'HOME-001',
      name: 'High Temperature Auto-Cool',
      triggerType: 'TEMPERATURE_ABOVE',
      triggerValue: '28.0',
      targetDeviceId: 'DEV-002',
      action: 'TURN_ON_AC',
      isEnabled: true,
      lastTriggered: null
    },
    {
      id: 'AUTO-002',
      homeId: 'HOME-001',
      name: 'Night Motion Security Light',
      triggerType: 'MOTION_DETECTED',
      triggerValue: 'true',
      targetDeviceId: 'DEV-001',
      action: 'TURN_ON_LIGHT',
      isEnabled: true,
      lastTriggered: null
    },
    {
      id: 'AUTO-003',
      homeId: 'HOME-001',
      name: 'Smoke Emergency Broadcast',
      triggerType: 'SMOKE_ALERT',
      triggerValue: 'true',
      targetDeviceId: 'DEV-010',
      action: 'UNLOCK_AND_NOTIFY',
      isEnabled: true,
      lastTriggered: null
    }
  ];

  const inventory = [
    {
      id: 'PROD-001',
      name: 'Smart RGBW LED Bulb (E27)',
      category: 'Lighting',
      sku: 'SNL-E27-RGBW',
      price: 1299,
      stockQuantity: 50,
      minStockLevel: 10,
      description: '16M color dimmable Zigbee 3.0 & Matter certified 9W smart bulb.',
      requiresInstallation: false,
      installationFee: 0,
      warranty: '2 Years Replacement',
      status: 'IN_STOCK',
      isLowStock: false
    },
    {
      id: 'PROD-002',
      name: 'Smart PIR Motion Sensor',
      category: 'Security',
      sku: 'SNS-PIR-2026',
      price: 1899,
      stockQuantity: 20,
      minStockLevel: 5,
      description: 'Ultra-low power wide angle 120-degree passive infrared motion detector.',
      requiresInstallation: true,
      installationFee: 250,
      warranty: '1 Year Comprehensive',
      status: 'IN_STOCK',
      isLowStock: false
    },
    {
      id: 'PROD-003',
      name: '16A Smart Power Plug with Energy Monitor',
      category: 'Energy Monitoring',
      sku: 'SNP-16A-MET',
      price: 999,
      stockQuantity: 30,
      minStockLevel: 8,
      description: 'High-current smart plug supporting AC and heavy appliances with real-time kWh telemetry.',
      requiresInstallation: false,
      installationFee: 0,
      warranty: '2 Years Manufacturer',
      status: 'IN_STOCK',
      isLowStock: false
    },
    {
      id: 'PROD-004',
      name: 'Smart Door & Window Contact Sensor',
      category: 'Security',
      sku: 'SNS-DOOR-MAG',
      price: 1499,
      stockQuantity: 18,
      minStockLevel: 6,
      description: 'Magnetic reed switch sensor with anti-tamper and 2-year coin cell longevity.',
      requiresInstallation: false,
      installationFee: 0,
      warranty: '1 Year Warranty',
      status: 'IN_STOCK',
      isLowStock: false
    },
    {
      id: 'PROD-005',
      name: 'Smart Indoor Temperature & Humidity Gauge',
      category: 'Climate',
      sku: 'SNS-TH-DHT',
      price: 1599,
      stockQuantity: 14,
      minStockLevel: 5,
      description: 'High-precision digital Swiss sensor with e-ink display and Bluetooth/Zigbee mesh.',
      requiresInstallation: false,
      installationFee: 0,
      warranty: '1 Year Warranty',
      status: 'IN_STOCK',
      isLowStock: false
    },
    {
      id: 'PROD-006',
      name: 'Photoelectric Smart Smoke & Fire Alarm',
      category: 'Sensors',
      sku: 'SNS-SMOKE-MQ2',
      price: 2499,
      stockQuantity: 7,
      minStockLevel: 8,
      description: 'EN 14604 certified optical smoke detector with 85dB siren and cloud notification.',
      requiresInstallation: true,
      installationFee: 350,
      warranty: '3 Years Comprehensive',
      status: 'LOW_STOCK',
      isLowStock: true
    },
    {
      id: 'PROD-007',
      name: 'Biometric Touchscreen Smart Deadbolt Lock',
      category: 'Security',
      sku: 'SG-LOCK-PRO',
      price: 8999,
      stockQuantity: 12,
      minStockLevel: 4,
      description: 'Bank-grade fingerprint, keypad PIN, emergency physical key, and Matter connectivity.',
      requiresInstallation: true,
      installationFee: 500,
      warranty: '3 Years Doorlock Warranty',
      status: 'IN_STOCK',
      isLowStock: false
    },
    {
      id: 'PROD-008',
      name: 'Matter In-Wall Dual Relay Smart Switch',
      category: 'Controllers',
      sku: 'SN-RELAY-2CH',
      price: 1799,
      stockQuantity: 25,
      minStockLevel: 5,
      description: 'Hidden in-wall switch module making conventional light switches smart with Zigbee & Matter.',
      requiresInstallation: true,
      installationFee: 250,
      warranty: '2 Years Replacement',
      status: 'IN_STOCK',
      isLowStock: false
    },
    {
      id: 'PROD-009',
      name: 'Motorized Smart Curtain & Blind Robot',
      category: 'Controllers',
      sku: 'SN-CURTAIN-ROB',
      price: 3499,
      stockQuantity: 15,
      minStockLevel: 3,
      description: 'Automated track-mounted curtain robot with solar charging and sunrise/sunset schedules.',
      requiresInstallation: true,
      installationFee: 300,
      warranty: '2 Years Manufacturer',
      status: 'IN_STOCK',
      isLowStock: false
    },
    {
      id: 'PROD-010',
      name: 'Smart 2K Wi-Fi Video Doorbell with Chime',
      category: 'Security',
      sku: 'SN-VBELL-2K',
      price: 4999,
      stockQuantity: 10,
      minStockLevel: 4,
      description: '2K HDR video doorbell with 2-way audio, AI human detection, and night vision.',
      requiresInstallation: true,
      installationFee: 350,
      warranty: '2 Years Warranty',
      status: 'IN_STOCK',
      isLowStock: false
    },
    {
      id: 'PROD-011',
      name: 'Smart Combustible Gas & Methane Leak Sensor',
      category: 'Sensors',
      sku: 'SNS-GAS-MQ4',
      price: 2199,
      stockQuantity: 16,
      minStockLevel: 5,
      description: 'Kitchen LPG & methane gas leak alarm with auto-shutoff valve control trigger.',
      requiresInstallation: true,
      installationFee: 300,
      warranty: '2 Years Comprehensive',
      status: 'IN_STOCK',
      isLowStock: false
    },
    {
      id: 'PROD-012',
      name: 'Whole-Home DIN-Rail Smart Energy Sub-Meter',
      category: 'Energy Monitoring',
      sku: 'SN-EMETER-DIN',
      price: 3899,
      stockQuantity: 9,
      minStockLevel: 4,
      description: 'Bi-directional electrical panel sub-meter monitoring whole-house kWh, voltage, and power surges.',
      requiresInstallation: true,
      installationFee: 450,
      warranty: '3 Years Warranty',
      status: 'IN_STOCK',
      isLowStock: false
    },
    {
      id: 'PROD-013',
      name: 'Smart Ceiling BLDC Fan Speed Controller',
      category: 'Controllers',
      sku: 'SN-FAN-REG5',
      price: 1999,
      stockQuantity: 22,
      minStockLevel: 6,
      description: '5-speed capacitive fan regulator with smooth modulation and Alexa/Home Assistant support.',
      requiresInstallation: true,
      installationFee: 250,
      warranty: '2 Years Replacement',
      status: 'IN_STOCK',
      isLowStock: false
    },
    {
      id: 'PROD-014',
      name: 'Smart Flood & Water Leak Detection Sensor',
      category: 'Sensors',
      sku: 'SNS-WATER-IP67',
      price: 1299,
      stockQuantity: 28,
      minStockLevel: 6,
      description: 'IP67 waterproof dual-probe flood sensor for kitchens, washing machines, and water heaters.',
      requiresInstallation: false,
      installationFee: 0,
      warranty: '2 Years Warranty',
      status: 'IN_STOCK',
      isLowStock: false
    },
    {
      id: 'PROD-015',
      name: 'Universal Smart IR Blaster & AC Hub',
      category: 'Climate',
      sku: 'SN-IR-BLAST360',
      price: 1499,
      stockQuantity: 35,
      minStockLevel: 8,
      description: '360-degree infrared hub automating conventional ACs, TVs, and set-top boxes.',
      requiresInstallation: false,
      installationFee: 0,
      warranty: '1 Year Comprehensive',
      status: 'IN_STOCK',
      isLowStock: false
    },
    {
      id: 'PROD-016',
      name: 'Smart Ambient RGB Symphony Floor Lamp',
      category: 'Lighting',
      sku: 'SNL-FLOOR-RGB',
      price: 2799,
      stockQuantity: 18,
      minStockLevel: 4,
      description: '1.4m standing corner LED floor lamp with dynamic music rhythm sync and scenes.',
      requiresInstallation: false,
      installationFee: 0,
      warranty: '2 Years Replacement',
      status: 'IN_STOCK',
      isLowStock: false
    }
  ];

  const orders = [
    {
      id: 'ORD-10024',
      homeId: 'HOME-001',
      userId: 'USR-OWN-01',
      customerName: 'Rahul Sharma',
      items: [
        { productId: 'PROD-001', name: 'Smart RGBW LED Bulb (E27)', price: 1299, quantity: 2, subtotal: 2598, requiresInstallation: false },
        { productId: 'PROD-002', name: 'Smart PIR Motion Sensor', price: 1899, quantity: 1, subtotal: 1899, requiresInstallation: true }
      ],
      subtotal: 4497,
      installationFee: 250,
      deliveryFee: 0,
      totalAmount: 4747,
      hasInstallationItems: true,
      status: 'delivered',
      placedAt: '2026-09-02T16:45:00Z',
      shippingAddress: '742 Evergreen Terrace, Sector 4, Smart City',
      delivery: {
        trackingNumber: 'DLV-20891',
        courier: 'Express IoT Logistics',
        dispatchDate: '2026-09-03',
        expectedDate: '2026-09-03',
        notes: 'Fragile IoT Sensor Hardware Package',
        isDelivered: true
      },
      history: [
        { status: 'pending', timestamp: '2026-09-02T16:45:00Z', note: 'Order created by House Owner' },
        { status: 'accepted', timestamp: '2026-09-02T17:10:00Z', note: 'Stock allocated and order accepted by Admin' },
        { status: 'packing', timestamp: '2026-09-02T17:45:00Z', note: 'Package verified and boxed by warehouse' },
        { status: 'ready_for_dispatch', timestamp: '2026-09-03T08:00:00Z', note: 'Handed to express courier' },
        { status: 'out_for_delivery', timestamp: '2026-09-03T09:30:00Z', note: 'Out with delivery agent' },
        { status: 'delivered', timestamp: '2026-09-03T11:15:00Z', note: 'Package delivered at front door by courier' }
      ]
    }
  ];

  const installationRequests = [
    {
      id: 'INST-101',
      orderId: 'ORD-10024',
      homeId: 'HOME-001',
      ownerName: 'Rahul Sharma',
      deviceType: 'Smart Motion Sensor',
      productId: 'PROD-002',
      requestedRoom: 'Living Room',
      status: 'SCHEDULED',
      scheduledDate: '2026-09-04',
      scheduledTimeSlot: '10:00 AM – 12:00 PM',
      technician: 'Alex Thorne (SmartNest Certified Field Tech #408)',
      notes: 'Mount sensor on northeast corner wall for maximum coverage.',
      createdAt: '2026-09-03T11:30:00Z'
    }
  ];

  const maintenanceTickets = [
    {
      id: 'MT-1008',
      homeId: 'HOME-001',
      deviceId: 'DEV-005',
      deviceName: 'Master Bedroom Ambient Light',
      roomName: 'Master Bedroom',
      reportedBy: {
        userId: 'USR-OWN-01',
        name: 'Rahul Sharma',
        role: 'house_owner'
      },
      problemType: 'Device Not Working',
      description: 'The light is not responding to toggle commands from the dashboard.',
      priority: 'High',
      status: 'UNDER_REVIEW',
      warrantyStatus: 'ACTIVE',
      adminNotes: 'Field support team testing Zigbee channel 15 signal drift.',
      resolutionNotes: 'Mesh router channel refreshed and new Zigbee bridge provisioned.',
      createdAt: '2026-09-03T10:20:00Z',
      updatedAt: '2026-09-03T11:45:00Z',
      resolvedAt: null
    }
  ];

  const alerts = [
    {
      id: 'ALT-001',
      homeId: 'HOME-001',
      type: 'LOW_STOCK',
      severity: 'WARNING',
      device: 'Inventory Depot',
      room: 'Central Warehouse',
      message: 'Photoelectric Smart Smoke & Fire Alarm is below minimum stock level.',
      timestamp: '2026-09-03T08:15:00Z',
      isRead: false
    }
  ];

  const notifications = [
    {
      id: 'NOTIF-001',
      homeId: 'HOME-001',
      userId: 'USR-OWN-01',
      recipientRole: 'house_owner',
      title: 'Support Update: Ticket MT-1008',
      message: 'Support Engineering (Alex Thorne) has updated your complaint for Master Bedroom Ambient Light to [Under Review].',
      type: 'SUPPORT',
      isRead: false,
      timestamp: '2026-09-03T11:45:00Z'
    }
  ];

  const energyHistory = {
    todayTotalKwh: 8.42,
    weekTotalKwh: 64.8,
    monthTotalKwh: 284.5,
    deviceBreakdown: [
      { name: 'Air Conditioning (HVAC)', kwh: 4.85, percentage: 57.6, color: '#059669' },
      { name: 'Lighting (All Rooms)', kwh: 1.15, percentage: 13.7, color: '#3b82f6' },
      { name: 'Kitchen Appliances & Plugs', kwh: 1.42, percentage: 16.8, color: '#d97706' }
    ]
  };

  const activityLogs = [
    {
      id: 'ACT-001',
      homeId: 'HOME-001',
      actor: 'Rahul Sharma (House Owner)',
      action: 'DEVICE_COMMAND',
      entity: 'Living Room Ceiling Light',
      details: 'Turned ON via Web Dashboard (85% Brightness)',
      timestamp: '2026-09-03T12:15:00Z'
    }
  ];

  return {
    users,
    homes,
    rooms,
    devices,
    sensors,
    permissions,
    automations,
    inventory,
    orders,
    installationRequests,
    maintenanceTickets,
    alerts,
    notifications,
    energyHistory,
    activityLogs
  };
}

module.exports = { getSeedData };
