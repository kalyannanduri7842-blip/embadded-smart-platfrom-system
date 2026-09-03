# ⬡ SmartNest — Embedded Systems & IoT Smart Home Management Platform

An enterprise-grade Embedded Systems + IoT Smart Home control and telemetry web application engineered with real-time edge synchronization, ESP32 microcontroller simulation, strict role-based access control, automated safety triggers, energy sub-metering, and hardware order-fulfillment workflows.

---

## 🌟 Key Capabilities

### 1. 🎛️ Three Distinct User Roles & Dedicated Portals
* 👑 **System Administrator**:
  * Complete operational oversight of connected homes, registered house owners, and family members.
  * Centralized device provisioning and hardware health diagnostics.
  * Warehouse inventory catalog with automatic **`LOW STOCK`** threshold detection.
  * Real-time customer order fulfillment workflow with automated stock decrement and cancellation restoration.
  * System security logs and audit trails.
* 🏡 **House Owner (Primary Residential User)**:
  * Room-by-room device control (Living Room, Master Bedroom, Kitchen, Garage, Garden, Front Door).
  * Direct state toggles: Dimmable Smart Lights, Fans with 5-level speed selection, Air Conditioners with mode and target temperature, Biometric Smart Locks, and Smart Plugs with live Wattage telemetry.
  * Live perimeter sensors with simulated panic event testing (PIR Motion, MQ-2 Optical Smoke, MQ-4 Combustible Gas, Water Leak probe).
  * Automated IF-THEN rule engine and device scheduling.
  * Sub-metered energy analytics breaking down daily, weekly, and monthly consumption by appliance category.
  * Family member permission matrix configuration.
  * IoT Hardware Store with shopping cart, demo checkout, and order timeline tracking.
* 👨‍👩‍👧 **Family Member (Restricted Access)**:
  * Strict backend-enforced permission checking.
  * Only view and control authorized devices. Sensitive controls (Smart Deadbolt locks, security disarm, store orders) are strictly forbidden and blocked at the API layer.

### 2. 📟 Embedded Systems & Microcontroller IoT Architecture
* **Target Hardware**: ESP32-WROOM-32D / ESP32-S3 (Dual-Core 240MHz, 520KB SRAM).
* **Protocols**: Matter 1.2, Zigbee 3.0, MQTT v5.0 over TLS 1.3, and HTTP REST telemetry.
* **Edge Firmware**: Included C/C++ Arduino sketch (`embedded/esp32_smart_node.ino`) and header specification (`embedded/esp32_firmware_spec.h`).

---

## 🔐 Demo Accounts Directory

| Role | Email | Password | Home / Scope |
| :--- | :--- | :--- | :--- |
| 👑 **Administrator** | `admin@smartnest.local` | `DemoOnly-Admin-2026!` | Global System & Logistics |
| 🏡 **House Owner (David Miller)** | `owner@smartnest.local` | `DemoOnly-Owner-2026!` | Green Valley Residence (`HOME-001`) |
| 👨‍👩‍👧 **Family Member (Sophia Miller)** | `family@smartnest.local` | `DemoOnly-Family-2026!` | Green Valley Residence (Permitted Devices) |

---

## 🚀 Quickstart & Execution

```bash
# Start unified full-stack application (Backend on 4005, Frontend on 3005)
npm start
# or
node index.js
# or
python main.py
```

* **Frontend Web Application**: [http://localhost:3005](http://localhost:3005)
* **Backend REST API Engine**: [http://127.0.0.1:4005](http://127.0.0.1:4005)

---

## 🧪 Automated Test Suite

```bash
npm test
```
All 16 unit and integration tests run against role authentication, automation rule triggers, inventory progression, and permission gates.
