const { describe, it } = require('node:test');
const assert = require('node:assert');
const { evaluateAutomations } = require('../../backend/src/automation_engine');
const { getSeedData } = require('../../backend/src/seed');

describe('SmartNest IoT Automation & Rule Evaluation Engine', () => {
  it('1. High temperature trigger automatically activates Air Conditioner', () => {
    const db = getSeedData();
    const ac = db.devices.find(d => d.id === 'DEV-002');
    ac.powerState = 'OFF';

    const results = evaluateAutomations(db, {
      homeId: 'HOME-001',
      type: 'TEMPERATURE_READING',
      value: 29.5
    });

    assert.strictEqual(results.length, 1);
    assert.strictEqual(ac.powerState, 'ON');
  });

  it('2. Motion event triggers target lighting in active security perimeter', () => {
    const db = getSeedData();
    const light = db.devices.find(d => d.id === 'DEV-001');
    light.powerState = 'OFF';

    const results = evaluateAutomations(db, {
      homeId: 'HOME-001',
      type: 'MOTION_EVENT',
      detected: true
    });

    assert.strictEqual(results.length, 1);
    assert.strictEqual(light.powerState, 'ON');
  });

  it('3. Smoke alarm detection dispatches emergency alert and executes safety unlock', () => {
    const db = getSeedData();
    const lock = db.devices.find(d => d.id === 'DEV-010');
    lock.isLocked = true;

    const initialAlertsCount = db.alerts.length;
    evaluateAutomations(db, {
      homeId: 'HOME-001',
      type: 'SMOKE_EVENT',
      alert: true
    });

    assert.strictEqual(lock.isLocked, false);
    assert.strictEqual(db.alerts.length, initialAlertsCount + 1);
    assert.strictEqual(db.alerts[0].severity, 'CRITICAL');
  });
});
