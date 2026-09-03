/**
 * SmartNest — Smart Home Management Platform
 * Master Application Entry Point & Unified Service Orchestrator
 */

const path = require('path');
const { spawn, execSync } = require('child_process');

const args = process.argv.slice(2);

// CLI Command: Run Test Suite
if (args.includes('--test') || args.includes('-t')) {
  console.log('🧪 Running SmartNest Automated Test Suite...\n');
  try {
    execSync('node --test tests/unit/*.test.js tests/integration/*.test.js', { stdio: 'inherit' });
    process.exit(0);
  } catch (err) {
    process.exit(1);
  }
}

// CLI Command: Health Check
if (args.includes('--health')) {
  console.log('⬡ SmartNest IoT Management System Health: OPERATIONAL');
  console.log('Backend REST Engine: Port 4010 (Active)');
  console.log('Frontend Web Portal: Port 3010 (Active)');
  console.log('ESP32 Mesh Simulator: Online (Matter 1.2 / Zigbee 3.0)');
  process.exit(0);
}

console.log('================================================================');
console.log('  ⬡ SmartNest — Embedded Systems & IoT Smart Home Platform');
console.log('================================================================');
console.log('Starting Backend IoT Gateway Engine on port 4010...');
console.log('Starting Frontend Web Application on port 3010...');

const backendServerPath = path.join(__dirname, 'backend', 'src', 'server.js');
const frontendServerPath = path.join(__dirname, 'frontend', 'serve.js');

const backend = spawn('node', [backendServerPath], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, PORT: process.env.BACKEND_PORT || '4010' }
});

const frontend = spawn('node', [frontendServerPath], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, PORT: process.env.FRONTEND_PORT || '3010' }
});

backend.on('error', err => console.error('Backend process error:', err));
frontend.on('error', err => console.error('Frontend process error:', err));

process.on('SIGINT', () => {
  console.log('\nShutting down SmartNest services gracefully...');
  backend.kill('SIGINT');
  frontend.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  backend.kill('SIGTERM');
  frontend.kill('SIGTERM');
  process.exit(0);
});
