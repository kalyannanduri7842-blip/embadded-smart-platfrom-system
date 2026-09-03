const { describe, it } = require('node:test');
const assert = require('node:assert');
const { getSeedData } = require('../../backend/src/seed');

describe('SmartNest Role-Based Access Control & User Directory', () => {
  const seed = getSeedData();

  it('1. Contains exactly the 3 required roles: Admin, House Owner, Family Member', () => {
    const roles = new Set(seed.users.map(u => u.role));
    assert.strictEqual(roles.has('admin'), true);
    assert.strictEqual(roles.has('house_owner'), true);
    assert.strictEqual(roles.has('family_member'), true);
    assert.strictEqual(roles.size, 3);
  });

  it('2. House Owners are strictly associated with their assigned home', () => {
    const owner = seed.users.find(u => u.email === 'owner@smartnest.local');
    assert.ok(owner);
    assert.strictEqual(owner.homeId, 'HOME-001');

    const home = seed.homes.find(h => h.id === owner.homeId);
    assert.ok(home);
    assert.strictEqual(home.ownerId, owner.id);
  });

  it('3. Family Members inherit home linkage and granular permission specifications', () => {
    const familyMember = seed.users.find(u => u.email === 'family@smartnest.local');
    assert.ok(familyMember);
    assert.strictEqual(familyMember.homeId, 'HOME-001');

    const perm = seed.permissions.find(p => p.userId === familyMember.id);
    assert.ok(perm);
    assert.strictEqual(perm.canControlLocks, false); // Sensitive controls restricted by default
  });
});
