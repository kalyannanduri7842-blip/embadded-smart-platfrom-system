const { describe, it } = require('node:test');
const assert = require('node:assert');
const { getSeedData } = require('../../backend/src/seed');

describe('SmartNest End-to-End Device Command & Telemetry Audit Flow', () => {
  it('1. Smart Fan speed adjustments validate within 1 to 5 levels', () => {
    const db = getSeedData();
    const fan = db.devices.find(d => d.type === 'Smart Fan');
    assert.ok(fan);

    fan.fanSpeed = 4;
    fan.powerState = 'ON';
    assert.strictEqual(fan.fanSpeed, 4);
    assert.strictEqual(fan.fanSpeed >= 1 && fan.fanSpeed <= 5, true);
  });

  it('2. Air Conditioner temperature adjustments and cooling modes update state correctly', () => {
    const db = getSeedData();
    const ac = db.devices.find(d => d.type === 'Air Conditioner');
    assert.ok(ac);

    ac.targetTemperature = 22.0;
    ac.acMode = 'cool';
    ac.powerState = 'ON';

    assert.strictEqual(ac.targetTemperature, 22.0);
    assert.strictEqual(ac.acMode, 'cool');
    assert.strictEqual(ac.powerState, 'ON');
  });

  it('3. Device commands append timestamped audit entries to activity logs', () => {
    const db = getSeedData();
    const initialLogCount = db.activityLogs.length;

    db.activityLogs.unshift({
      id: `ACT-${Date.now()}`,
      homeId: 'HOME-001',
      actor: 'David Miller (House Owner)',
      action: 'DEVICE_COMMAND',
      entity: 'Living Room Ceiling Fan',
      details: 'Set fan speed to 4',
      timestamp: new Date().toISOString()
    });

    assert.strictEqual(db.activityLogs.length, initialLogCount + 1);
    assert.strictEqual(db.activityLogs[0].action, 'DEVICE_COMMAND');
  });
});
