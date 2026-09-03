/**
 * SmartNest IoT Device & Sensor Simulation Engine
 * Periodically drifts sensor parameters (temperature, humidity, energy consumption)
 * and maintains realistic live IoT hardware states.
 */

function tickSimulation(db) {
  if (!db || !db.sensors) return;

  db.sensors.forEach(s => {
    if (s.type === 'Temperature & Humidity') {
      // Subtle natural drift +/- 0.1 C
      const deltaT = (Math.random() - 0.5) * 0.2;
      s.temperature = parseFloat((Math.max(18.0, Math.min(32.0, s.temperature + deltaT))).toFixed(1));

      const deltaH = (Math.random() - 0.5) * 0.4;
      s.humidity = parseFloat((Math.max(40.0, Math.min(75.0, s.humidity + deltaH))).toFixed(1));
      s.lastUpdated = new Date().toISOString();
    } else if (s.type === 'Energy Meter') {
      // Small cumulative energy increment based on online active devices
      const activeDevicesCount = (db.devices || []).filter(d => d.homeId === s.homeId && d.powerState === 'ON').length;
      const powerKw = (activeDevicesCount * 0.15) + 0.35;
      s.livePowerWatts = parseFloat((powerKw * 1000 + (Math.random() * 20)).toFixed(1));
      s.energyTodayKwh = parseFloat((s.energyTodayKwh + (powerKw / 3600)).toFixed(3));
      s.lastUpdated = new Date().toISOString();
    }
  });
}

module.exports = { tickSimulation };
