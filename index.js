/**
 * SMARTNEST — Embedded Systems & IoT Smart Home Management Platform
 * Unified Application Entry Point
 */

'use strict';

console.log('======================================================================');
console.log('⬡ SmartNest Embedded Systems & IoT Smart Home Platform');
console.log('Environment: ' + (process.env.NODE_ENV || 'production'));
console.log('Version: 1.0.0');
console.log('======================================================================');

const services = {
  EdgeGatewayService: require('./backend/src/services/edge_gateway_service'),
  MqttBrokerProtocolService: require('./backend/src/services/mqtt_broker_protocol_service'),
  ZigbeeZwaveMeshService: require('./backend/src/services/zigbee_zwave_mesh_service'),
  TelemetryTimeSeriesService: require('./backend/src/services/telemetry_timeseries_service'),
  ComplexEventAutomationService: require('./backend/src/services/complex_event_automation_service'),
  EnergySubmeteringService: require('./backend/src/services/energy_submetering_service'),
  FotaFirmwareUpdateService: require('./backend/src/services/fota_firmware_update_service'),
  DeviceSecurityHsmService: require('./backend/src/services/device_security_hsm_service'),
  ClimateHvacPidService: require('./backend/src/services/climate_hvac_pid_service'),
  BiometricAccessControlService: require('./backend/src/services/biometric_access_control_service'),
  CircadianLightingService: require('./backend/src/services/circadian_lighting_service'),
  VideoRtspWebRtcService: require('./backend/src/services/video_rtsp_webrtc_service'),
  WarehouseInventoryService: require('./backend/src/services/warehouse_inventory_service'),
  OrderFulfillmentTechnicianService: require('./backend/src/services/order_fulfillment_technician_service'),
  OccupancyGeofencingService: require('./backend/src/services/occupancy_geofencing_service'),
  WaterManagementLeakService: require('./backend/src/services/water_management_leak_service'),
  SolarBatteryMicrogridService: require('./backend/src/services/solar_battery_microgrid_service'),
  EmergencySafetyHazardService: require('./backend/src/services/emergency_safety_hazard_service'),
  VoiceNluIntentService: require('./backend/src/services/voice_nlu_intent_service'),
  PredictiveMaintenanceMtbfService: require('./backend/src/services/predictive_maintenance_mtbf_service')
};

function startServer(port = 3000) {
  process.env.PORT = String(port);
  const server = require('./backend/src/server');
  return server;
}

if (require.main === module) {
  startServer(process.env.PORT || 3000);
}

module.exports = {
  services,
  startServer
};
