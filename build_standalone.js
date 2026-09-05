const fs = require('fs');
const path = require('path');
const vm = require('vm');

async function buildStandalone() {
  console.log('Building 100% standalone, pre-compiled index.html...');
  
  // 1. Fetch Babel standalone for Node pre-compilation
  const res = await fetch('https://unpkg.com/@babel/standalone/babel.min.js');
  const babelCode = await res.text();
  
  const sandbox = { console };
  sandbox.globalThis = sandbox;
  sandbox.window = sandbox;
  sandbox.self = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(babelCode, sandbox);
  const Babel = sandbox.Babel;
  
  // 2. Read app.js and transpile JSX -> pure Vanilla JS
  const appJs = fs.readFileSync(path.join(__dirname, 'frontend', 'app.js'), 'utf8');
  const compiledJs = Babel.transform(appJs, { presets: ['react'] }).code;
  
  // Save compiled JS file
  fs.writeFileSync(path.join(__dirname, 'frontend', 'app.compiled.js'), compiledJs, 'utf8');
  
  // 3. Build single self-contained HTML file that runs anywhere (file:// or http://)
  const standaloneHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SmartNest — Smart Home & Connected Living Platform</title>
  <!-- Google Fonts: Plus Jakarta Sans & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Three.js CDN -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <!-- React 18 & ReactDOM 18 Production CDN (No Babel required at runtime!) -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          },
          colors: {
            emerald: {
              50: '#ecfdf5',
              100: '#d1fae5',
              200: '#a7f3d0',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b',
              950: '#022c22'
            }
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: #f8fafc;
      color: #0f172a;
      overflow-x: hidden;
      margin: 0;
    }

    /* Beautiful 3D Background Canvas Layer */
    #three-bg-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 1;
      opacity: 0.65;
    }

    /* Top Live Bar Ticker */
    .ticker-wrap {
      overflow: hidden;
      white-space: nowrap;
      box-sizing: border-box;
      background: #0f172a;
      color: #94a3b8;
      border-bottom: 1px solid #1e293b;
      position: relative;
      z-index: 50;
    }
    .ticker-content {
      display: inline-block;
      white-space: nowrap;
      padding-left: 100%;
      animation: ticker 32s linear infinite;
    }
    @keyframes ticker {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-100%, 0, 0); }
    }

    /* Clean Pure White Glass Cards */
    .glass-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(226, 232, 240, 0.9);
      box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04);
    }
  </style>
</head>
<body class="antialiased min-h-screen flex flex-col relative text-slate-900 bg-slate-50">

  <!-- 3D Mesh & Constellation Background Canvas -->
  <canvas id="three-bg-canvas"></canvas>

  <!-- Top Live Telemetry Bar -->
  <div class="ticker-wrap py-2 text-xs font-mono">
    <div class="ticker-content flex items-center gap-8 font-semibold">
      <span class="inline-flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <strong class="text-white tracking-wider uppercase">SmartNest Real-Time IoT & Living Platform</strong>
      </span>
      <span>Matter 1.2 & Zigbee 3.0 Mesh Node Link Active</span>
      <span>ESP32-S3 Master Gateway Online</span>
      <span>Green Valley Residence (HOME-001) Armed & Secure</span>
      <span>3 Core Dashboards: Admin · House Owner · Support Team</span>
    </div>
  </div>

  <!-- SPA Root Injection -->
  <div id="root" class="relative z-10 flex-grow flex flex-col"></div>

  <!-- Balanced & Attractive 3D Wireframe + Floating Particles Constellation Engine -->
  <script>
    (function() {
      const canvas = document.getElementById('three-bg-canvas');
      if (!canvas || typeof THREE === 'undefined') return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 28;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const group = new THREE.Group();
      scene.add(group);

      // 1. Balanced Floating 3D Wireframe Geometric Nodes (6 sleek cubes)
      const floatingNodes = [];
      const boxGeo = new THREE.BoxGeometry(3.6, 3.6, 3.6);
      const boxEdges = new THREE.EdgesGeometry(boxGeo);

      for (let i = 0; i < 6; i++) {
        const mat = new THREE.LineBasicMaterial({
          color: i % 2 === 0 ? 0x059669 : 0x10b981,
          transparent: true,
          opacity: 0.45
        });

        const wireframe = new THREE.LineSegments(boxEdges, mat);
        wireframe.position.x = (Math.random() - 0.5) * 46;
        wireframe.position.y = (Math.random() - 0.5) * 30;
        wireframe.position.z = (Math.random() - 0.5) * 16 - 2;
        wireframe.rotation.x = Math.random() * Math.PI;
        wireframe.rotation.y = Math.random() * Math.PI;

        floatingNodes.push({
          mesh: wireframe,
          rotSpeedX: (Math.random() - 0.5) * 0.009,
          rotSpeedY: (Math.random() - 0.5) * 0.009,
          floatOffset: Math.random() * Math.PI * 2,
          initY: wireframe.position.y
        });
        group.add(wireframe);
      }

      // 2. Glowing Ambient Constellation Particles (60 points)
      const particleCount = 60;
      const particleGeo = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        particlePositions[i] = (Math.random() - 0.5) * 55;
        particlePositions[i + 1] = (Math.random() - 0.5) * 38;
        particlePositions[i + 2] = (Math.random() - 0.5) * 22;
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0x059669,
        size: 0.5,
        transparent: true,
        opacity: 0.55
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      group.add(particles);

      // Smooth Gentle Mouse Parallax
      let mouseX = 0, mouseY = 0;
      window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
      });

      let clock = new THREE.Clock();
      function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        floatingNodes.forEach(n => {
          n.mesh.rotation.x += n.rotSpeedX;
          n.mesh.rotation.y += n.rotSpeedY;
          n.mesh.position.y = n.initY + Math.sin(elapsedTime * 1.1 + n.floatOffset) * 1.3;
        });

        particles.rotation.y = elapsedTime * 0.015;

        group.rotation.x += (mouseY * 0.06 - group.rotation.x) * 0.03;
        group.rotation.y += (mouseX * 0.08 - group.rotation.y) * 0.03;

        renderer.render(scene, camera);
      }
      animate();

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    })();
  </script>

  <!-- Pre-compiled Native JavaScript (Runs instantly in file:// and http://) -->
  <script>
${compiledJs}
  </script>
</body>
</html>
`;

  // Write to both root index.html and frontend/index.html
  fs.writeFileSync(path.join(__dirname, 'index.html'), standaloneHtml, 'utf8');
  fs.writeFileSync(path.join(__dirname, 'frontend', 'index.html'), standaloneHtml, 'utf8');
  
  console.log('✅ Successfully built 100% native standalone index.html in root and frontend/!');
}

buildStandalone().catch(console.error);
