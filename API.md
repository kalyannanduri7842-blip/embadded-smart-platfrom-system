# SmartNest REST API & Endpoint Reference

## 1. Public & Auth Endpoints
* `GET /api/health` — Returns system health, online edge gateways count, and version.
* `GET /api/public/summary` — Returns real-time network overview and moving news ticker string.
* `POST /api/auth/login` — Authenticates user via email and password; returns JWT token and profile.

## 2. Administrator Operations
* `GET /api/admin/dashboard` — Global telemetry, device connectivity, and order summary.
* `GET/POST /api/admin/homes` — List and provision new residential gateways.
* `GET /api/admin/owners` — List registered house owners and home assignments.
* `GET /api/admin/family-members` — List family accounts and permissions.
* `GET/POST /api/admin/devices` — Device provisioning and registration.
* `GET/POST /api/admin/inventory` — Product catalog and warehouse stock management.
* `POST /api/admin/inventory/adjust` — Adjust stock quantities with audit trail.
* `GET /api/admin/orders` — View customer orders.
* `POST /api/admin/orders/status` — Advance order status (`pending → confirmed → processing → shipped → delivered` or `cancelled`). Automatically updates warehouse stock.

## 3. House Owner Endpoints
* `GET /api/owner/dashboard` — Live home overview, environmental metrics, and security status.
* `GET /api/owner/rooms` — Room-by-room device and sensor catalog.
* `POST /api/owner/device/command` — Direct hardware command (`POWER`, `FAN_SPEED`, `AC_TEMP`, `AC_MODE`, `LOCK`).
* `GET /api/owner/sensors` — Real-time sensor telemetry.
* `POST /api/owner/sensors/trigger-demo` — Simulated sensor alert injection (`motion`, `smoke`, `gas`).
* `GET /api/owner/security` — Perimeter defense and contact sensors.
* `GET/POST /api/owner/automations` — Manage IF-THEN automation rules.
* `GET /api/owner/energy` — Energy sub-metering analytics and breakdown.
* `GET/POST /api/owner/family` — Family permissions management.
* `GET /api/shop/products` — Hardware store catalog.
* `POST /api/shop/checkout` — Create hardware order with stock reservation.
* `GET /api/owner/orders` — Order tracking and delivery timeline.

## 4. Family Member Endpoints
* `GET /api/family/dashboard` — Permitted home controls.
* `POST /api/family/device/command` — Execute command on authorized devices only (strictly enforced).
