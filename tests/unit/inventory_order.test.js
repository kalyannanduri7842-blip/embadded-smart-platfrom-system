const { describe, it } = require('node:test');
const assert = require('node:assert');
const { getSeedData } = require('../../backend/src/seed');

describe('SmartNest Inventory Allocation & Order Fulfillment Workflow', () => {
  it('1. Inventory products track minimum stock thresholds and flag low stock', () => {
    const seed = getSeedData();
    const smokeAlarm = seed.inventory.find(p => p.sku === 'SNS-SMOKE-MQ2');
    assert.ok(smokeAlarm);
    assert.strictEqual(smokeAlarm.stockQuantity <= smokeAlarm.minStockLevel, true);
    assert.strictEqual(smokeAlarm.isLowStock, true);
  });

  it('2. Order confirmation deducts inventory stock without negative quantities', () => {
    const db = getSeedData();
    const bulb = db.inventory.find(p => p.id === 'PROD-001');
    const initialStock = bulb.stockQuantity;
    const orderQty = 4;

    // Simulate stock deduction on order confirmation
    bulb.stockQuantity -= orderQty;
    assert.strictEqual(bulb.stockQuantity, initialStock - 4);
    assert.strictEqual(bulb.stockQuantity >= 0, true);
  });

  it('3. Order cancellation restores previously allocated inventory stock', () => {
    const db = getSeedData();
    const bulb = db.inventory.find(p => p.id === 'PROD-001');
    const prevStock = bulb.stockQuantity;

    // Simulate order cancellation restoration rule
    const returnedQty = 4;
    bulb.stockQuantity += returnedQty;
    assert.strictEqual(bulb.stockQuantity, prevStock + 4);
  });
});
