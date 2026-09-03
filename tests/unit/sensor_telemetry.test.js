const { describe, it } = require('node:test');
const assert = require('node:assert');
const { tickSimulation } = require('../../backend/src/iot_simulator');
const { getSeedData } = require('../../backend/src/seed');

describe('SmartNest IoT Edge Sensors & Telemetry Processing', () => {
  it('1. Temperature & Humidity sensor telemetry updates maintain physiological bounds', () => {
    const db = getSeedData();
    const tempSens = db.sensors.find(s => s.type === 'Temperature & Humidity');
    assert.ok(tempSens);

    tickSimulation(db);
    assert.strictEqual(typeof tempSens.temperature, 'number');
    assert.strictEqual(tempSens.temperature >= 18.0 && tempSens.temperature <= 32.0, true);
    assert.strictEqual(tempSens.humidity >= 40.0 && tempSens.humidity <= 75.0, true);
  });

  it('2. Sub-meter energy reading calculates instantaneous power and cumulative kWh', () => {
    const db = getSeedData();
    const energySens = db.sensors.find(s => s.type === 'Energy Meter');
    assert.ok(energySens);

    const initialKwh = energySens.energyTodayKwh;
    tickSimulation(db);
    assert.strictEqual(energySens.energyTodayKwh >= initialKwh, true);
    assert.strictEqual(energySens.livePowerWatts > 0, true);
  });
});
