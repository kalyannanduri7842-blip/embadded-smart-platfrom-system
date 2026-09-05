# ⬡ SmartNest — Embedded Systems & IoT Smart Home Management Platform

**SmartNest** is an enterprise-grade Embedded Systems + IoT Smart Home control and telemetry web application engineered with real-time edge synchronization, ESP32 microcontroller simulation, strict role-based access control, automated safety triggers, energy sub-metering, and hardware order-fulfillment workflows.

---

## 📋 Table of Contents
- [Key Capabilities](#-key-capabilities)
- [Dependencies](#-dependencies)
- [Installation](#-installation)
- [Build](#-build)
- [Run](#-run)
- [Usage & Demo Credentials](#-usage--demo-credentials)
- [Testing](#-testing)
- [Docker Deployment](#-docker-deployment)
- [Makefile Commands](#-makefile-commands)
- [Architecture & Embedded Drivers](#-architecture--embedded-drivers)
- [License](#-license)

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
  * Direct state toggles: Dimmable Smart Lights, Fans with 5-level speed selection, Air Conditioners with mode and target temperature, Biometric Smart Locks.
  * Real-time live power sub-metering and wattage telemetry.
  * Add and manage family member user accounts with granular room and device control permissions.
  * Built-in Store checkout to purchase new smart devices with optional installation service add-on.
  * Comprehensive Order Tracker with delivery confirmation and installation technician requests.
  * Maintenance Problem Report submission and status tracking.
* 👨‍👩‍👧 **Family Member**:
  * Restricted device access strictly bound by permissions configured by their House Owner.
  * Instant block and unauthorized warning if attempting to command unpermitted devices.

### 2. ⚡ Real-Time IoT Microcontroller Simulation
* Continuous background telemetry stream updating temperature, humidity, energy consumption (Watts and cumulative kWh), and network ping latency.
* Closed-loop automation rules:
  * High-temperature trigger: Automatically switches on Air Conditioners if room temperature exceeds set threshold.
  * Smoke alarm detection: Immediate emergency alert banner and automatic safety unlock of biometric entry doors.
  * Motion detection: Illuminates security perimeter lighting.

---

## 📦 Dependencies

The platform requires the following runtime dependencies:

- **Node.js**: `v18.0.0` or higher (v20+ recommended)
- **npm**: `v9.0.0` or higher
- **Docker** (Optional for containerization): `Docker Engine 20.10+` and `Docker Compose v2+`
- **Optional Python**: `python >= 3.8` (if using virtual environments: `python -m venv venv`)

---

## ⚙️ Installation

To install all dependencies, clone the repository and run:

```bash
# Install core dependencies
npm install

# Alternatively using clean install for CI/CD
npm ci
```

If setting up an optional Python microservice environment:
```bash
# Create python virtual environment (optional)
python -m venv venv
# Activate on Windows: .\venv\Scripts\activate
# Activate on Linux/macOS: source venv/bin/activate
```

---

## 🔨 Build

To compile and verify all platform assets and validate embedded drivers:

```bash
# Build and verify application assets
npm run build
```

Using Docker to build the container image:
```bash
# Build container image
docker build -t smartnest-platform:latest .
```

---

## 🚀 Run

You can launch the complete application stack using any of the following methods:

### Method 1: Unified Application Launcher (Recommended)
```bash
npm start
# Launches the unified API service on http://127.0.0.1:3000
```

### Method 2: Development Mode
```bash
npm run dev
# Starts backend server with verbose live logging
```

### Method 3: Separate Frontend & Backend Services
```bash
# Terminal 1: Backend API Server (Port 3000)
node backend/src/server.js

# Terminal 2: Frontend Web Platform (Port 5000)
node frontend/serve.js
```

---

## 👥 Usage & Demo Credentials

Once running, access the web client at **http://localhost:5000** (or API directly at **http://127.0.0.1:3000**).

### Local Development Login Credentials

| Role | Email | Password | Access Scope |
| :--- | :--- | :--- | :--- |
| 👑 **System Admin** | `admin@smartnest.local` | `admin123` | Full system control, inventory, order fulfillment, audit logs |
| 🏡 **House Owner** | `john@smartnest.local` | `owner123` | All home devices, family permissions, store, order tracker |
| 👨‍👩‍👧 **Family Member (Sarah)** | `sarah@smartnest.local` | `family123` | Living room lights and fan only (restricted from locks & AC) |

### Key API Endpoints

- `GET  /api/health` — IoT gateway health check and device telemetry status
- `POST /api/auth/login` — User authentication and role token generation
- `GET  /api/devices` — Retrieve all paired smart home devices and sensor states
- `POST /api/devices/:id/command` — Send command payload to microcontroller
- `GET  /api/telemetry/live` — Real-time power consumption and sensor streams
- `POST /api/orders/checkout` — Purchase hardware from inventory store
- `POST /api/orders/:id/fulfill` — Admin dispatch and technician assignment

---

## 🧪 Testing

Execute the automated test suites covering unit rules, telemetry processing, and integration workflows:

```bash
# Run all unit and integration tests
npm test

# Run unit tests only
npm run test:unit

# Run integration tests only
npm run test:integration
```

---

## 🐳 Docker Deployment

To run containerized SmartNest in production:

```bash
# Build the Docker image
docker build -t smartnest-platform:latest .

# Run the container
docker run -d -p 3000:3000 -p 5000:5000 --name smartnest-app smartnest-platform:latest

# Or launch with Docker Compose
docker compose up -d
```

---

## 🛠️ Makefile Commands

For standard POSIX/UNIX development workflows, use the provided `Makefile`:

```bash
make install          # Install dependencies
make build            # Build project assets
make run              # Start application server
make test             # Run test suites
make lint             # Verify code quality
make docker-build     # Build Docker container image
```

---

## 🏛️ Architecture & Embedded Drivers

SmartNest is structured into modular IoT edge services and embedded drivers:

- **Edge Gateway Service**: Heartbeat pinging, node discovery, and serial UART communication.
- **MQTT v5.0 Broker Protocol**: QoS 0/1/2 packet validation and topic trie routing.
- **Mesh Coordinator**: Zigbee 3.0 & Z-Wave Plus routing tables and security key exchange.
- **Telemetry Time-Series Engine**: High-throughput sensor ingestion, moving averages, and anomaly filtering.
- **Complex Event Automation (CEP)**: Multi-condition temporal rules, debounce latches, and scene triggers.
- **Energy Sub-metering**: True RMS power calculations, power factor, and time-of-use tariff billing.
- **FOTA Binary Patcher**: Dual-partition A/B firmware updates with SHA-256 signatures.
- **Hardware Security (HSM)**: X.509 PKI, mTLS client auth, and AES-256-GCM encryption.

---

## 📄 License

Proprietary enterprise software. (C) 2026 SmartNest IoT Systems Inc. All rights reserved.
