# SmartNest Embedded Systems MQTT Protocol Specification

## 1. Overview
SmartNest utilizes an asynchronous MQTT v5.0 / v3.1.1 topic taxonomy over TLS (Port 8883) and WebSocket bridge (Port 4005) for bidirectional communication between ESP32/ARM Cortex-M edge nodes and the SmartNest central gateway.

## 2. Topic Hierarchy

### A. Edge Telemetry (ESP32 → Backend)
* **Topic**: `smartnest/home/{homeId}/telemetry`
* **Payload (JSON)**:
```json
{
  "homeId": "HOME-001",
  "timestamp": 1788424500000,
  "gateway": "ESP32-S3-NODE-01",
  "telemetry": {
    "temperature": 24.5,
    "humidity": 58.0,
    "motionDetected": false,
    "smokeAlert": false,
    "gasAlert": false,
    "waterLeakAlert": false,
    "doorLocked": true,
    "totalPowerWatts": 840.5,
    "cumulativeEnergyKwh": 8.42
  }
}
```

### B. Device Control Commands (Web App / Backend → ESP32)
* **Topic**: `smartnest/home/{homeId}/device/{deviceId}/command`
* **Payload**:
```json
{
  "commandId": "CMD-2026-9811",
  "action": "SET_STATE",
  "actor": "House Owner (David Miller)",
  "state": {
    "power": "ON",
    "speed": 3,
    "targetTemp": 22.0,
    "mode": "cool"
  }
}
```

### C. Panic & Sensor Alert Channel (Immediate QoS 2 Broadcast)
* **Topic**: `smartnest/home/{homeId}/alerts`
* **Payload**:
```json
{
  "alertId": "ALT-2026-004",
  "severity": "CRITICAL",
  "type": "SMOKE_DETECTED",
  "room": "Kitchen",
  "timestamp": "2026-09-03T14:30:00Z"
}
```
