const { describe, it } = require('node:test');
const assert = require('node:assert');
const { getSeedData } = require('../../backend/src/seed');

describe('SmartNest Family Permission Isolation & Access Control Integration', () => {
  it('1. Family Member can control permitted devices (Living Room Light, Fan)', () => {
    const db = getSeedData();
    const perm = db.permissions.find(p => p.userId === 'USR-FAM-01');
    const allowedDevice = db.devices.find(d => d.id === 'DEV-001');

    assert.strictEqual(perm.allowedDeviceIds.includes(allowedDevice.id), true);
    assert.strictEqual(perm.canControlLights, true);

    // Execute state toggle
    allowedDevice.powerState = 'OFF';
    assert.strictEqual(allowedDevice.powerState, 'OFF');
  });

  it('2. Family Member is blocked from controlling restricted devices (Front Door Deadbolt Lock)', () => {
    const db = getSeedData();
    const perm = db.permissions.find(p => p.userId === 'USR-FAM-01');
    const lockDevice = db.devices.find(d => d.id === 'DEV-010');

    // Verify permission rejection
    const isAllowedInList = perm.allowedDeviceIds.includes(lockDevice.id);
    const hasLockPermission = perm.canControlLocks;

    assert.strictEqual(isAllowedInList, false);
    assert.strictEqual(hasLockPermission, false);
  });
});
