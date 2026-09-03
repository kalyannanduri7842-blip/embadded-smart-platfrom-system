/**
 * SmartNest Embedded Systems Architecture
 * ESP32 / ESP8266 IoT Gateway & Edge Sensor Controller Specification
 *
 * Microcontroller Target: ESP32-WROOM-32D / ESP32-S3 (Dual Core 240MHz, 520KB SRAM)
 * Connectivity: Wi-Fi 802.11 b/g/n, BLE 5.0, Zigbee 3.0 via CC2652P, Matter 1.2
 * Protocol: MQTT over TLS v1.3 (Port 8883) / HTTP REST Telemetry (Port 4005)
 */

#ifndef SMARTNEST_FIRMWARE_SPEC_H
#define SMARTNEST_FIRMWARE_SPEC_H

#include <stdint.h>
#include <stdbool.h>

#define SMARTNEST_FIRMWARE_VERSION "2.4.1"
#define SMARTNEST_HARDWARE_REVISION "REV-D-2026"
#define MAX_ATTACHED_DEVICES 32
#define TELEMETRY_INTERVAL_MS 3000
#define MQTT_HEARTBEAT_INTERVAL_MS 15000

typedef enum {
    DEV_TYPE_SMART_LIGHT = 0x01,
    DEV_TYPE_SMART_SWITCH = 0x02,
    DEV_TYPE_SMART_FAN = 0x03,
    DEV_TYPE_AC = 0x04,
    DEV_TYPE_SMART_LOCK = 0x05,
    DEV_TYPE_SMART_PLUG = 0x06,
    DEV_TYPE_TEMP_HUMIDITY = 0x10,
    DEV_TYPE_MOTION_PIR = 0x11,
    DEV_TYPE_SMOKE_MQ2 = 0x12,
    DEV_TYPE_GAS_MQ4 = 0x13,
    DEV_TYPE_WATER_LEAK = 0x14,
    DEV_TYPE_ENERGY_METER = 0x20
} DeviceType_t;

typedef enum {
    STATE_OFFLINE = 0,
    STATE_ONLINE = 1,
    STATE_WARNING = 2,
    STATE_MAINTENANCE = 3
} DeviceStatus_t;

typedef struct {
    char deviceId[24];
    char homeId[16];
    char roomName[24];
    DeviceType_t type;
    DeviceStatus_t status;
    bool powerState;
    uint8_t fanSpeed;        // 1 to 5
    float targetTemperature; // e.g. 24.0 C
    char acMode[12];         // "cool", "heat", "fan", "auto"
    bool isLocked;           // For smart door locks
    float currentPowerWatts; // Instantaneous power load
    float energyTotalKwh;    // Cumulative energy consumption
    uint32_t lastReportTimestamp;
} SmartDeviceNode_t;

typedef struct {
    float ambientTemperature;
    float ambientHumidity;
    bool motionDetected;
    bool smokeAlert;
    bool gasAlert;
    bool waterLeakAlert;
    bool frontDoorOpen;
    float liveVoltage;
    float liveCurrentAmps;
} SensorTelemetryFrame_t;

#endif // SMARTNEST_FIRMWARE_SPEC_H
