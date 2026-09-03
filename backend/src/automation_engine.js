/**
 * SmartNest Automation Engine
 * Evaluates IF-THEN triggers on sensor updates and generates automated commands & alerts.
 */

function evaluateAutomations(db, triggerEvent) {
  const automations = db.automations || [];
  const activeAutomations = automations.filter(a => a.isEnabled && a.homeId === triggerEvent.homeId);

  const executedActions = [];

  activeAutomations.forEach(rule => {
    let triggered = false;

    if (rule.triggerType === 'TEMPERATURE_ABOVE' && triggerEvent.type === 'TEMPERATURE_READING') {
      if (triggerEvent.value > rule.triggerValue) triggered = true;
    } else if (rule.triggerType === 'MOTION_DETECTED' && triggerEvent.type === 'MOTION_EVENT') {
      if (triggerEvent.detected === true) triggered = true;
    } else if (rule.triggerType === 'SMOKE_ALERT' && triggerEvent.type === 'SMOKE_EVENT') {
      if (triggerEvent.alert === true) triggered = true;
    } else if (rule.triggerType === 'GAS_ALERT' && triggerEvent.type === 'GAS_EVENT') {
      if (triggerEvent.alert === true) triggered = true;
    }

    if (triggered) {
      rule.lastTriggered = new Date().toISOString();
      const targetDevice = (db.devices || []).find(d => d.id === rule.targetDeviceId);

      if (rule.action === 'TURN_ON_AC' && targetDevice) {
        targetDevice.powerState = 'ON';
        if (rule.targetTemp) targetDevice.targetTemperature = rule.targetTemp;
      } else if (rule.action === 'TURN_ON_LIGHT' && targetDevice) {
        targetDevice.powerState = 'ON';
      } else if (rule.action === 'UNLOCK_AND_NOTIFY' && targetDevice) {
        targetDevice.isLocked = false;
        db.alerts.unshift({
          id: `ALT-${Date.now()}`,
          homeId: rule.homeId,
          type: 'AUTOMATION_EMERGENCY',
          severity: 'CRITICAL',
          device: targetDevice.name,
          room: targetDevice.roomName,
          message: `Automation triggered: Emergency unlock executed due to active safety alert.`,
          timestamp: new Date().toISOString(),
          isRead: false
        });
      }

      executedActions.push({ ruleId: rule.id, ruleName: rule.name, targetDevice: targetDevice ? targetDevice.name : 'System' });
    }
  });

  return executedActions;
}

module.exports = { evaluateAutomations };
