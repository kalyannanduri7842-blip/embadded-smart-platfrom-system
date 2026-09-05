import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const {
  useState,
  useEffect,
  useMemo
} = React;
const API_BASE = 'http://127.0.0.1:4010';

// ==========================================
// Hand-Drawn Pencil Sketch SVG Icon Library
// ==========================================
const IconHouse = ({
  className = "w-5 h-5"
}) => /*#__PURE__*/_jsxs("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/_jsx("path", {
    d: "M3 10.5 L12 3 L21 10.5 V20 C21 20.6 20.5 21 20 21 H4 C3.4 21 3 20.6 3 20 Z"
  }), /*#__PURE__*/_jsx("path", {
    d: "M9 21 V13 H15 V21"
  })]
});
const IconAdmin = ({
  className = "w-5 h-5"
}) => /*#__PURE__*/_jsxs("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/_jsx("path", {
    d: "M4 18 L2 7 L7.5 11 L12 4 L16.5 11 L22 7 L20 18 Z"
  }), /*#__PURE__*/_jsx("line", {
    x1: "4",
    y1: "21",
    x2: "20",
    y2: "21"
  })]
});
const IconOwner = ({
  className = "w-5 h-5"
}) => /*#__PURE__*/_jsxs("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/_jsx("path", {
    d: "M3 9.5 L12 3 L21 9.5 V19 C21 20.1 20.1 21 19 21 H5 C3.9 21 3 20.1 3 19 Z"
  }), /*#__PURE__*/_jsx("circle", {
    cx: "12",
    cy: "11",
    r: "2.5"
  }), /*#__PURE__*/_jsx("path", {
    d: "M7.5 18 C7.5 15.5 9.5 14.5 12 14.5 C14.5 14.5 16.5 15.5 16.5 18"
  })]
});
const IconFamily = ({
  className = "w-5 h-5"
}) => /*#__PURE__*/_jsxs("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/_jsx("circle", {
    cx: "9",
    cy: "7",
    r: "3"
  }), /*#__PURE__*/_jsx("path", {
    d: "M3 19c0-3 3-5 6-5s6 2 6 5"
  }), /*#__PURE__*/_jsx("circle", {
    cx: "16",
    cy: "9",
    r: "2"
  }), /*#__PURE__*/_jsx("path", {
    d: "M14 19c0-2 2-3.5 4.5-3.5S22 17 22 19"
  })]
});
const IconSupport = ({
  className = "w-5 h-5"
}) => /*#__PURE__*/_jsxs("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/_jsx("path", {
    d: "M14.7 6.3 A 3.5 3.5 0 0 0 9.8 11.2 L3 18 L6 21 L12.8 14.2 A 3.5 3.5 0 0 0 17.7 9.3 Z"
  }), /*#__PURE__*/_jsx("path", {
    d: "M16 4 L20 8 M19 3 L21 5"
  })]
});
const IconCart = ({
  className = "w-5 h-5"
}) => /*#__PURE__*/_jsxs("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/_jsx("circle", {
    cx: "9",
    cy: "20",
    r: "1.5"
  }), /*#__PURE__*/_jsx("circle", {
    cx: "18",
    cy: "20",
    r: "1.5"
  }), /*#__PURE__*/_jsx("path", {
    d: "M2.5 3 H5 L7.2 14.5 H19.5 L21.5 6 H6"
  })]
});
const IconBulb = ({
  className = "w-5 h-5"
}) => /*#__PURE__*/_jsxs("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/_jsx("path", {
    d: "M9 18 H15 M10 21 H14"
  }), /*#__PURE__*/_jsx("path", {
    d: "M7 9 C7 5.7 9.2 3 12 3 C14.8 3 17 5.7 17 9 C17 11.5 15.5 13 14.5 14.5 H9.5 C8.5 13 7 11.5 7 9 Z"
  })]
});
const IconSensor = ({
  className = "w-5 h-5"
}) => /*#__PURE__*/_jsxs("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/_jsx("circle", {
    cx: "12",
    cy: "12",
    r: "8",
    strokeDasharray: "3 2"
  }), /*#__PURE__*/_jsx("circle", {
    cx: "12",
    cy: "12",
    r: "3.5"
  }), /*#__PURE__*/_jsx("circle", {
    cx: "12",
    cy: "12",
    r: "1",
    fill: "currentColor"
  })]
});
const IconClimate = ({
  className = "w-5 h-5"
}) => /*#__PURE__*/_jsxs("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/_jsx("path", {
    d: "M14 14.7 V5 A 2 2 0 0 0 10 5 V14.7 A 4 4 0 1 0 14 14.7 Z"
  }), /*#__PURE__*/_jsx("circle", {
    cx: "12",
    cy: "17",
    r: "1.5",
    fill: "currentColor"
  })]
});
const IconEnergy = ({
  className = "w-5 h-5"
}) => /*#__PURE__*/_jsx("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: /*#__PURE__*/_jsx("polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
  })
});
const IconPackage = ({
  className = "w-5 h-5"
}) => /*#__PURE__*/_jsxs("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/_jsx("path", {
    d: "M12 3 L20 7.5 V16.5 L12 21 L4 16.5 V7.5 Z"
  }), /*#__PURE__*/_jsx("path", {
    d: "M12 12 L20 7.5 M12 12 L4 7.5 M12 12 V21"
  })]
});
const IconUsers = ({
  className = "w-5 h-5"
}) => /*#__PURE__*/_jsxs("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/_jsx("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/_jsx("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/_jsx("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87"
  }), /*#__PURE__*/_jsx("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  })]
});
const IconSettings = ({
  className = "w-5 h-5"
}) => /*#__PURE__*/_jsxs("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/_jsx("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/_jsx("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
  })]
});
const PencilHouseBig = () => /*#__PURE__*/_jsxs("svg", {
  className: "w-20 h-20 text-emerald-700 mx-auto",
  viewBox: "0 0 100 100",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/_jsx("path", {
    d: "M50 12 L14 42 L24 42 L24 88 L76 88 L76 42 L86 42 Z",
    strokeDasharray: "320"
  }), /*#__PURE__*/_jsx("path", {
    d: "M40 88 L40 56 L60 56 L60 88"
  }), /*#__PURE__*/_jsx("path", {
    d: "M30 32 L30 18 L38 18 L38 25"
  }), /*#__PURE__*/_jsx("circle", {
    cx: "50",
    cy: "34",
    r: "5",
    strokeWidth: "2"
  })]
});
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('smartnest_token') || '');
  const [activePortal, setActivePortal] = useState('landing');
  const [adminTab, setAdminTab] = useState('customers'); // 'customers', 'complaints', 'products', 'orders', 'settings'
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Auth & Registration Modals
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [loginRole, setLoginRole] = useState('house_owner');
  const [loginEmail, setLoginEmail] = useState('owner@smartnest.local');
  const [loginPassword, setLoginPassword] = useState('DemoOnly-Owner-2026!');
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');

  // Action Modals
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showAddDeviceModal, setShowAddDeviceModal] = useState(false);
  const [showReportDeviceProblemModal, setShowReportDeviceProblemModal] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Platform live state
  const [summaryData, setSummaryData] = useState(null);
  const [adminData, setAdminData] = useState(null);
  const [adminSettings, setAdminSettings] = useState(null);
  const [ownerData, setOwnerData] = useState(null);
  const [familyData, setFamilyData] = useState(null);
  const [supportData, setSupportData] = useState(null);
  const [shopProducts, setShopProducts] = useState([]);
  const showToast = (msg, type = 'success') => {
    setToastMessage({
      msg,
      type
    });
    setTimeout(() => setToastMessage(null), 3500);
  };
  const apiFetch = async (endpoint, options = {}) => {
    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    try {
      const res = await fetch(`${API_BASE}${endpoint}`, {
        ...options,
        headers
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      return data;
    } catch (err) {
      console.error(`API Error on ${endpoint}:`, err);
      throw err;
    }
  };
  const loadPublicSummary = async () => {
    try {
      const data = await fetch(`${API_BASE}/api/public/summary`).then(r => r.json());
      setSummaryData(data);
      const shop = await fetch(`${API_BASE}/api/shop/products`).then(r => r.json());
      if (shop.products) setShopProducts(shop.products);
    } catch (err) {
      console.error('Error fetching public summary/store', err);
    }
  };
  const loadAllDashboards = async () => {
    try {
      const sData = await fetch(`${API_BASE}/api/support/dashboard`, {
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-SUP-01_support_engineer'
        }
      }).then(r => r.json()).catch(() => null);
      if (sData) setSupportData(sData);
      const oData = await fetch(`${API_BASE}/api/owner/dashboard`, {
        headers: {
          'Authorization': token || 'Bearer SMARTNEST_TOKEN_USR-OWN-01_house_owner'
        }
      }).then(r => r.json()).catch(() => null);
      if (oData) setOwnerData(oData);
      const fData = await fetch(`${API_BASE}/api/family/dashboard`, {
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-FAM-01_family_member'
        }
      }).then(r => r.json()).catch(() => null);
      if (fData) setFamilyData(fData);
      const aData = await fetch(`${API_BASE}/api/admin/dashboard`, {
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-ADM-01_admin'
        }
      }).then(r => r.json()).catch(() => null);
      if (aData) {
        const orders = await fetch(`${API_BASE}/api/admin/orders`, {
          headers: {
            'Authorization': 'Bearer SMARTNEST_TOKEN_USR-ADM-01_admin'
          }
        }).then(r => r.json()).catch(() => ({
          orders: []
        }));
        setAdminData({
          ...aData,
          orders: orders.orders || []
        });
      }
      const aSetts = await fetch(`${API_BASE}/api/admin/settings`, {
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-ADM-01_admin'
        }
      }).then(r => r.json()).catch(() => null);
      if (aSetts?.settings) setAdminSettings(aSetts.settings);
    } catch (err) {
      console.error('Error loading dashboards', err);
    }
  };
  useEffect(() => {
    loadPublicSummary();
    loadAllDashboards();
    const interval = setInterval(() => {
      loadPublicSummary();
      loadAllDashboards();
    }, 4000);
    return () => clearInterval(interval);
  }, [token]);
  const setDemoPreset = role => {
    setLoginRole(role);
    if (role === 'admin') {
      setLoginEmail('admin@smartnest.local');
      setLoginPassword('DemoOnly-Admin-2026!');
    } else if (role === 'house_owner') {
      setLoginEmail('owner@smartnest.local');
      setLoginPassword('DemoOnly-Owner-2026!');
    } else if (role === 'family_member') {
      setLoginEmail('family@smartnest.local');
      setLoginPassword('DemoOnly-Family-2026!');
    } else if (role === 'support_engineer') {
      setLoginEmail('support@smartnest.local');
      setLoginPassword('DemoOnly-Support-2026!');
    }
  };

  // When clicking on Admin / Owner / Family / Support, open Login Modal with preset credentials
  const openLoginFor = role => {
    setDemoPreset(role);
    setLoginError('');
    setShowLoginModal(true);
  };
  const handleLogin = async e => {
    if (e) e.preventDefault();
    setLoginError('');
    try {
      const res = await apiFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword
        })
      });
      setToken(res.token);
      localStorage.setItem('smartnest_token', res.token);
      setCurrentUser(res.user);
      setShowLoginModal(false);
      if (res.user.role === 'admin') setActivePortal('admin');else if (res.user.role === 'house_owner') setActivePortal('owner');else if (res.user.role === 'family_member') setActivePortal('family');else if (res.user.role === 'support_engineer') setActivePortal('support');
      showToast(`Welcome back, ${res.user.name}!`);
      loadAllDashboards();
    } catch (err) {
      setLoginError(err.message || 'Login failed. Please check credentials.');
    }
  };

  // ONLY House Owner / Customer Registration
  const handleRegisterOwner = async e => {
    e.preventDefault();
    setRegisterError('');
    const fd = new FormData(e.target);
    try {
      const res = await apiFetch('/api/auth/register-owner', {
        method: 'POST',
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          password: fd.get('password'),
          phone: fd.get('phone'),
          homeName: fd.get('homeName'),
          houseNumber: fd.get('houseNumber'),
          lineAddress: fd.get('lineAddress'),
          villageName: fd.get('villageName'),
          roomsCount: fd.get('roomsCount')
        })
      });
      setToken(res.token);
      localStorage.setItem('smartnest_token', res.token);
      setCurrentUser(res.user);
      setShowRegisterModal(false);
      setActivePortal('owner');
      showToast(res.message);
      loadAllDashboards();
      loadPublicSummary();
    } catch (err) {
      setRegisterError(err.message || 'Registration failed');
    }
  };
  const handleLogout = () => {
    setCurrentUser(null);
    setToken('');
    localStorage.removeItem('smartnest_token');
    setActivePortal('landing');
    showToast('Signed out of SmartNest.');
  };

  // Device Controls (Optimistic ON/OFF & State Switch)
  const handleDeviceCommand = async (deviceId, command, value) => {
    // Instant optimistic update
    setOwnerData(prev => {
      if (!prev) return prev;
      const updated = (prev.devices || []).map(d => {
        if (d.id === deviceId) {
          const dev = {
            ...d
          };
          if (command === 'POWER') {
            dev.powerState = value;
            if (value === 'ON') dev.powerWatts = dev.powerWatts || (dev.type === 'Smart Light' ? 14.5 : dev.type === 'Smart Plug' ? 185 : 45);else if (value === 'OFF') dev.powerWatts = 0;
          } else if (command === 'LOCK') {
            dev.isLocked = value === 'LOCK' || value === true;
          } else if (command === 'TEMPERATURE') {
            dev.targetTemperature = parseFloat(value);
          } else if (command === 'FAN_SPEED') {
            dev.fanSpeed = parseInt(value, 10);
          } else if (command === 'BRIGHTNESS') {
            dev.brightness = parseInt(value, 10);
          }
          return dev;
        }
        return d;
      });
      return {
        ...prev,
        devices: updated
      };
    });
    try {
      const res = await apiFetch('/api/owner/device/command', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-OWN-01_house_owner'
        },
        body: JSON.stringify({
          deviceId,
          command,
          value
        })
      });
      showToast(res.message);
      loadAllDashboards();
    } catch (err) {
      showToast(`Device command updated: ${command} → ${value}`);
    }
  };

  // Family Member Controls Permitted Device
  const handleFamilyDeviceCommand = async (deviceId, command, value) => {
    try {
      const res = await apiFetch('/api/family/device/command', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-FAM-01_family_member'
        },
        body: JSON.stringify({
          deviceId,
          command,
          value
        })
      });
      showToast(res.message);
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Owner Adds Device Manually
  const handleOwnerAddDevice = async e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    try {
      const res = await apiFetch('/api/owner/devices/add', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-OWN-01_house_owner'
        },
        body: JSON.stringify({
          name: fd.get('name'),
          type: fd.get('type'),
          roomName: fd.get('roomName')
        })
      });
      setShowAddDeviceModal(false);
      showToast(res.message);
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Owner Raises Problem -> Dispatched to Support Team
  const handleReportDeviceProblem = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await apiFetch('/api/owner/device/report-problem', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-OWN-01_house_owner'
        },
        body: JSON.stringify({
          deviceId: showReportDeviceProblemModal.id,
          problemType: formData.get('problemType'),
          description: formData.get('description'),
          priority: 'High'
        })
      });
      setShowReportDeviceProblemModal(null);
      showToast(res.message);
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Support Team Actions
  const handleSupportTicketUpdate = async (ticketId, status, notes) => {
    try {
      const res = await apiFetch(`/api/support/tickets/${ticketId}/update`, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-SUP-01_support_engineer'
        },
        body: JSON.stringify({
          status,
          resolutionNotes: notes
        })
      });
      showToast(res.message);
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };
  const handleSupportReplaceDevice = async ticketId => {
    try {
      const res = await apiFetch(`/api/support/tickets/${ticketId}/replace-device`, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-SUP-01_support_engineer'
        }
      });
      showToast(res.message);
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Owner Confirms Resolution (Only then device returns online)
  const handleConfirmFixed = async ticketId => {
    try {
      const res = await apiFetch(`/api/owner/maintenance/${ticketId}/confirm-fixed`, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-OWN-01_house_owner'
        }
      });
      showToast(res.message);
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };
  const handleProblemPersists = async ticketId => {
    try {
      const res = await apiFetch(`/api/owner/maintenance/${ticketId}/problem-persists`, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-OWN-01_house_owner'
        }
      });
      showToast(res.message, 'error');
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Admin Updates Platform & IoT Settings
  const handleSaveSettings = async e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    try {
      const res = await apiFetch('/api/admin/settings', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-ADM-01_admin'
        },
        body: JSON.stringify({
          gatewayPollIntervalSeconds: Number(fd.get('gatewayPollIntervalSeconds')),
          mqttBrokerUrl: fd.get('mqttBrokerUrl'),
          autoFirmwareOta: fd.get('autoFirmwareOta') === 'on',
          supportSlaHours: Number(fd.get('supportSlaHours')),
          emergencySmsAlerts: fd.get('emergencySmsAlerts') === 'on',
          adminEmail: fd.get('adminEmail')
        })
      });
      showToast(res.message);
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Cart & Checkout
  const addToCart = product => {
    if (product.stockQuantity <= 0) {
      showToast(`${product.name} is OUT OF STOCK.`, 'error');
      return;
    }
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? {
          ...item,
          quantity: item.quantity + 1
        } : item);
      }
      return [...prev, {
        ...product,
        quantity: 1
      }];
    });
    showToast(`Added ${product.name} to cart.`);
  };
  const removeFromCart = id => setCart(prev => prev.filter(item => item.id !== id));
  const handleCheckout = async () => {
    try {
      const items = cart.map(i => ({
        productId: i.id,
        quantity: i.quantity
      }));
      const res = await apiFetch('/api/shop/checkout', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-OWN-01_house_owner'
        },
        body: JSON.stringify({
          items
        })
      });
      setCart([]);
      setIsCartOpen(false);
      showToast(res.message);
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Admin Add Product Handler
  const handleAddProduct = async e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    try {
      const res = await apiFetch('/api/admin/inventory/product', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer SMARTNEST_TOKEN_USR-ADM-01_admin'
        },
        body: JSON.stringify({
          name: fd.get('name'),
          category: fd.get('category'),
          price: fd.get('price'),
          stockQuantity: fd.get('stockQuantity'),
          minStockLevel: fd.get('minStockLevel'),
          requiresInstallation: fd.get('requiresInstallation') === 'on',
          installationFee: 250,
          warranty: '2 Years Comprehensive',
          description: fd.get('description')
        })
      });
      setShowAddProductModal(false);
      showToast(res.message);
      loadAllDashboards();
      loadPublicSummary();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen flex flex-col relative z-10 font-sans text-slate-900 bg-transparent",
    children: [toastMessage && /*#__PURE__*/_jsxs("div", {
      className: `fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl shadow-2xl border flex items-center gap-3 text-xs font-bold font-mono transition-all ${toastMessage.type === 'error' ? 'bg-rose-50 text-rose-900 border-rose-200' : 'bg-emerald-50 text-emerald-950 border-emerald-300'}`,
      children: [/*#__PURE__*/_jsx("span", {
        children: toastMessage.type === 'error' ? '[!]' : '[OK]'
      }), /*#__PURE__*/_jsx("span", {
        children: toastMessage.msg
      })]
    }), /*#__PURE__*/_jsx("header", {
      className: "glass-card sticky top-0 z-40 border-b border-emerald-100 shadow-sm",
      children: /*#__PURE__*/_jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-6",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex items-center gap-3 cursor-pointer",
            onClick: () => setActivePortal('landing'),
            children: [/*#__PURE__*/_jsx("div", {
              className: "w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-md",
              children: /*#__PURE__*/_jsx(IconHouse, {
                className: "w-5 h-5 text-white"
              })
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsxs("span", {
                className: "text-xl font-extrabold tracking-tight text-slate-900",
                children: ["Smart", /*#__PURE__*/_jsx("span", {
                  className: "text-emerald-700",
                  children: "Nest"
                })]
              }), /*#__PURE__*/_jsx("span", {
                className: "text-[11px] text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full font-mono ml-2 border border-emerald-200 font-bold",
                children: "Platform"
              })]
            })]
          }), /*#__PURE__*/_jsxs("nav", {
            className: "hidden md:flex items-center gap-1.5 bg-emerald-50/70 p-1.5 rounded-xl text-xs font-bold border border-emerald-100",
            children: [/*#__PURE__*/_jsxs("button", {
              onClick: () => setActivePortal('landing'),
              className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${activePortal === 'landing' ? 'bg-white text-emerald-800 shadow-sm font-bold' : 'text-slate-700 hover:text-emerald-800'}`,
              children: [/*#__PURE__*/_jsx(IconHouse, {
                className: "w-4 h-4 text-emerald-700"
              }), /*#__PURE__*/_jsx("span", {
                children: "Home"
              })]
            }), /*#__PURE__*/_jsxs("button", {
              onClick: () => openLoginFor('admin'),
              className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${activePortal === 'admin' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-700 hover:text-emerald-800 hover:bg-white'}`,
              children: [/*#__PURE__*/_jsx(IconAdmin, {
                className: "w-4 h-4"
              }), /*#__PURE__*/_jsx("span", {
                children: "Portal 1: Admin"
              })]
            }), /*#__PURE__*/_jsxs("button", {
              onClick: () => openLoginFor('house_owner'),
              className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${activePortal === 'owner' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-700 hover:text-emerald-800 hover:bg-white'}`,
              children: [/*#__PURE__*/_jsx(IconOwner, {
                className: "w-4 h-4"
              }), /*#__PURE__*/_jsx("span", {
                children: "Portal 2: House Owner"
              })]
            }), /*#__PURE__*/_jsxs("button", {
              onClick: () => openLoginFor('family_member'),
              className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${activePortal === 'family' ? 'bg-indigo-700 text-white shadow-sm' : 'text-slate-700 hover:text-indigo-800 hover:bg-indigo-50'}`,
              children: [/*#__PURE__*/_jsx(IconFamily, {
                className: "w-4 h-4"
              }), /*#__PURE__*/_jsx("span", {
                children: "Portal 3: Family Member"
              })]
            }), /*#__PURE__*/_jsxs("button", {
              onClick: () => openLoginFor('support_engineer'),
              className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${activePortal === 'support' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-700 hover:text-amber-700 hover:bg-amber-50'}`,
              children: [/*#__PURE__*/_jsx(IconSupport, {
                className: "w-4 h-4"
              }), /*#__PURE__*/_jsx("span", {
                children: "Support Hub"
              })]
            }), /*#__PURE__*/_jsxs("button", {
              onClick: () => setActivePortal('store'),
              className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${activePortal === 'store' ? 'bg-emerald-800 text-white shadow-sm' : 'text-slate-700 hover:text-emerald-800 hover:bg-emerald-50'}`,
              children: [/*#__PURE__*/_jsx(IconCart, {
                className: "w-4 h-4"
              }), /*#__PURE__*/_jsx("span", {
                children: "Store"
              })]
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/_jsxs("button", {
            onClick: () => setIsCartOpen(true),
            className: "relative flex items-center gap-1.5 px-3.5 py-2 text-emerald-900 hover:text-emerald-700 font-bold text-xs rounded-xl bg-emerald-50 border border-emerald-200 transition",
            children: [/*#__PURE__*/_jsx(IconCart, {
              className: "w-4 h-4 text-emerald-700"
            }), /*#__PURE__*/_jsx("span", {
              children: "Cart"
            }), cart.length > 0 && /*#__PURE__*/_jsx("span", {
              className: "ml-1 bg-emerald-700 text-white text-[11px] px-1.5 py-0.2 rounded-full font-mono font-bold",
              children: cart.reduce((a, b) => a + b.quantity, 0)
            })]
          }), /*#__PURE__*/_jsx("button", {
            onClick: () => setShowRegisterModal(true),
            className: "text-xs font-bold px-3.5 py-2 text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-xl border border-emerald-300 transition",
            children: "+ Register Customer"
          }), /*#__PURE__*/_jsx("button", {
            onClick: () => openLoginFor('house_owner'),
            className: "text-xs font-bold px-4 py-2 text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-sm transition",
            children: "Sign In"
          })]
        })]
      })
    }), /*#__PURE__*/_jsxs("main", {
      className: "flex-grow",
      children: [activePortal === 'landing' && /*#__PURE__*/_jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12",
        children: [/*#__PURE__*/_jsxs("section", {
          className: "text-center pt-4 pb-2 max-w-4xl mx-auto space-y-5",
          children: [/*#__PURE__*/_jsx(PencilHouseBig, {}), /*#__PURE__*/_jsx("div", {
            className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-sm",
            children: /*#__PURE__*/_jsx("span", {
              children: "Smart Home, E-commerce Store & Family Permission Living Platform"
            })
          }), /*#__PURE__*/_jsxs("h1", {
            className: "text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight",
            children: ["Your Home. ", /*#__PURE__*/_jsx("span", {
              className: "text-emerald-700",
              children: "Smarter"
            }), ", Safer, Connected."]
          }), /*#__PURE__*/_jsx("p", {
            className: "text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium",
            children: "Register customer properties with house numbers, street lines, and village locations. Buy smart devices, track order deliveries, manage family permissions, and resolve complaints in real time."
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex flex-wrap justify-center gap-3.5 pt-2",
            children: [/*#__PURE__*/_jsxs("button", {
              onClick: () => setShowRegisterModal(true),
              className: "flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm shadow-md transition",
              children: [/*#__PURE__*/_jsx(IconOwner, {
                className: "w-5 h-5 text-white"
              }), /*#__PURE__*/_jsx("span", {
                children: "Register as House Owner / Customer →"
              })]
            }), /*#__PURE__*/_jsx("button", {
              onClick: () => openLoginFor('house_owner'),
              className: "flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm shadow-md transition",
              children: /*#__PURE__*/_jsx("span", {
                children: "Sign In to Dashboard"
              })
            }), /*#__PURE__*/_jsxs("button", {
              onClick: () => setActivePortal('store'),
              className: "flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-emerald-200 text-slate-800 font-extrabold text-sm hover:bg-emerald-50 hover:text-emerald-800 shadow-sm transition",
              children: [/*#__PURE__*/_jsx(IconCart, {
                className: "w-5 h-5 text-emerald-700"
              }), /*#__PURE__*/_jsx("span", {
                children: "Browse Store"
              })]
            })]
          })]
        }), /*#__PURE__*/_jsxs("section", {
          className: "grid grid-cols-1 md:grid-cols-4 gap-5",
          children: [/*#__PURE__*/_jsxs("div", {
            onClick: () => openLoginFor('admin'),
            className: "glass-card p-6 rounded-3xl cursor-pointer hover:border-emerald-500 hover:shadow-md transition space-y-3 border-emerald-100",
            children: [/*#__PURE__*/_jsx("div", {
              className: "w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold border border-emerald-200",
              children: /*#__PURE__*/_jsx(IconAdmin, {
                className: "w-6 h-6 text-emerald-700"
              })
            }), /*#__PURE__*/_jsx("h3", {
              className: "font-extrabold text-slate-900 text-base",
              children: "Portal 1: Admin Operations"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-xs text-slate-600 font-medium",
              children: "Executive control over customer records, house & line addresses, store stock, orders, and complaints."
            }), /*#__PURE__*/_jsx("div", {
              className: "text-xs font-mono font-bold text-emerald-700 pt-2",
              children: "Login as Admin →"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            onClick: () => openLoginFor('house_owner'),
            className: "glass-card p-6 rounded-3xl cursor-pointer hover:border-emerald-500 hover:shadow-md transition space-y-3 border-emerald-100",
            children: [/*#__PURE__*/_jsx("div", {
              className: "w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold border border-emerald-200",
              children: /*#__PURE__*/_jsx(IconOwner, {
                className: "w-6 h-6 text-emerald-700"
              })
            }), /*#__PURE__*/_jsx("h3", {
              className: "font-extrabold text-slate-900 text-base",
              children: "Portal 2: House Owner"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-xs text-slate-600 font-medium",
              children: "Control appliances, register newly purchased hardware, grant family permissions, and track orders."
            }), /*#__PURE__*/_jsx("div", {
              className: "text-xs font-mono font-bold text-emerald-700 pt-2",
              children: "Login as House Owner →"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            onClick: () => openLoginFor('family_member'),
            className: "glass-card p-6 rounded-3xl cursor-pointer hover:border-indigo-400 hover:shadow-md transition space-y-3 border-indigo-100",
            children: [/*#__PURE__*/_jsx("div", {
              className: "w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200",
              children: /*#__PURE__*/_jsx(IconFamily, {
                className: "w-6 h-6 text-indigo-700"
              })
            }), /*#__PURE__*/_jsx("h3", {
              className: "font-extrabold text-slate-900 text-base",
              children: "Portal 3: Family Member"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-xs text-slate-600 font-medium",
              children: "View and control permitted devices (Living Room Light, Fan, AC) and report device problems."
            }), /*#__PURE__*/_jsx("div", {
              className: "text-xs font-mono font-bold text-indigo-700 pt-2",
              children: "Login as Family (Ananya) →"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            onClick: () => openLoginFor('support_engineer'),
            className: "glass-card p-6 rounded-3xl cursor-pointer hover:border-amber-400 hover:shadow-md transition space-y-3 border-amber-100",
            children: [/*#__PURE__*/_jsx("div", {
              className: "w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 font-bold border border-amber-200",
              children: /*#__PURE__*/_jsx(IconSupport, {
                className: "w-6 h-6 text-amber-700"
              })
            }), /*#__PURE__*/_jsx("h3", {
              className: "font-extrabold text-slate-900 text-base",
              children: "Support & Maintenance"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-xs text-slate-600 font-medium",
              children: "Engineering diagnostics hub to review hardware complaints, test telemetry, and dispatch replacements."
            }), /*#__PURE__*/_jsx("div", {
              className: "text-xs font-mono font-bold text-amber-700 pt-2",
              children: "Login as Support Team →"
            })]
          })]
        })]
      }), activePortal === 'admin' && /*#__PURE__*/_jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "glass-card p-6 rounded-3xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("span", {
              className: "text-xs font-mono font-bold uppercase text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200",
              children: "PORTAL 1 — ADMIN OPERATIONS (EXECUTIVE)"
            }), /*#__PURE__*/_jsx("h1", {
              className: "text-2xl font-black text-slate-900 mt-1",
              children: "SmartNest Enterprise Platform"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-xs text-slate-500 font-mono",
              children: "Customers Directory, House Details, Complaints, Inventory, Orders & System Settings"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex flex-wrap gap-2",
            children: [/*#__PURE__*/_jsxs("button", {
              onClick: () => setAdminTab('customers'),
              className: `flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition ${adminTab === 'customers' ? 'bg-emerald-700 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'}`,
              children: [/*#__PURE__*/_jsx(IconUsers, {
                className: "w-4 h-4"
              }), /*#__PURE__*/_jsx("span", {
                children: "Customers & Homes"
              })]
            }), /*#__PURE__*/_jsxs("button", {
              onClick: () => setAdminTab('complaints'),
              className: `flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition ${adminTab === 'complaints' ? 'bg-emerald-700 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'}`,
              children: [/*#__PURE__*/_jsx(IconSupport, {
                className: "w-4 h-4"
              }), /*#__PURE__*/_jsxs("span", {
                children: ["Support Complaints (", (adminData?.maintenanceTickets || []).length, ")"]
              })]
            }), /*#__PURE__*/_jsxs("button", {
              onClick: () => setAdminTab('products'),
              className: `flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition ${adminTab === 'products' ? 'bg-emerald-700 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'}`,
              children: [/*#__PURE__*/_jsx(IconPackage, {
                className: "w-4 h-4"
              }), /*#__PURE__*/_jsx("span", {
                children: "Products & Stock"
              })]
            }), /*#__PURE__*/_jsxs("button", {
              onClick: () => setAdminTab('orders'),
              className: `flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition ${adminTab === 'orders' ? 'bg-emerald-700 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'}`,
              children: [/*#__PURE__*/_jsx(IconCart, {
                className: "w-4 h-4"
              }), /*#__PURE__*/_jsx("span", {
                children: "Orders Fulfillment"
              })]
            }), /*#__PURE__*/_jsxs("button", {
              onClick: () => setAdminTab('settings'),
              className: `flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition ${adminTab === 'settings' ? 'bg-emerald-700 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'}`,
              children: [/*#__PURE__*/_jsx(IconSettings, {
                className: "w-4 h-4"
              }), /*#__PURE__*/_jsx("span", {
                children: "Platform Settings"
              })]
            })]
          })]
        }), adminTab === 'customers' && /*#__PURE__*/_jsxs("div", {
          className: "glass-card rounded-3xl shadow-sm p-6 space-y-4",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex justify-between items-center",
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsxs("h2", {
                className: "text-lg font-black text-slate-900 flex items-center gap-2",
                children: [/*#__PURE__*/_jsx(IconUsers, {
                  className: "w-5 h-5 text-emerald-700"
                }), /*#__PURE__*/_jsx("span", {
                  children: "Registered Customers, Houses, Lines & Villages"
                })]
              }), /*#__PURE__*/_jsx("p", {
                className: "text-xs text-slate-500 font-medium",
                children: "Full customer directory with house numbers, line address, village names, and live order history."
              })]
            }), /*#__PURE__*/_jsxs("span", {
              className: "px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-mono font-bold",
              children: [(adminData?.customers || []).length, " Total House Owners"]
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/_jsxs("table", {
              className: "w-full text-left text-sm",
              children: [/*#__PURE__*/_jsx("thead", {
                className: "bg-slate-50/80 text-slate-700 font-mono text-xs uppercase border-b",
                children: /*#__PURE__*/_jsxs("tr", {
                  children: [/*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Customer Name"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Contact Email & Phone"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Home / Villa Name"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "House & Line Number"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Village / City"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3 text-center",
                    children: "Active Devices"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3 text-center",
                    children: "Total Orders"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3 text-center",
                    children: "Complaints"
                  })]
                })
              }), /*#__PURE__*/_jsx("tbody", {
                className: "divide-y divide-slate-100",
                children: (adminData?.customers || []).map(cust => /*#__PURE__*/_jsxs("tr", {
                  className: "hover:bg-emerald-50/30",
                  children: [/*#__PURE__*/_jsxs("td", {
                    className: "p-3 font-bold text-slate-900",
                    children: [/*#__PURE__*/_jsx("div", {
                      children: cust.name
                    }), /*#__PURE__*/_jsx("div", {
                      className: "text-[10px] text-slate-400 font-mono",
                      children: cust.id
                    })]
                  }), /*#__PURE__*/_jsxs("td", {
                    className: "p-3 text-xs",
                    children: [/*#__PURE__*/_jsx("div", {
                      className: "font-semibold text-slate-800",
                      children: cust.email
                    }), /*#__PURE__*/_jsx("div", {
                      className: "text-slate-500 font-mono",
                      children: cust.phone
                    })]
                  }), /*#__PURE__*/_jsxs("td", {
                    className: "p-3 text-xs font-bold text-emerald-800",
                    children: [/*#__PURE__*/_jsx("div", {
                      children: cust.homeName
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "text-[10px] text-slate-400 font-mono",
                      children: [cust.homeId, " (", cust.roomsCount, " Rooms)"]
                    })]
                  }), /*#__PURE__*/_jsxs("td", {
                    className: "p-3 text-xs",
                    children: [/*#__PURE__*/_jsx("div", {
                      className: "font-bold text-slate-900",
                      children: cust.houseNumber
                    }), /*#__PURE__*/_jsx("div", {
                      className: "text-slate-500",
                      children: cust.lineAddress
                    })]
                  }), /*#__PURE__*/_jsx("td", {
                    className: "p-3 text-xs font-semibold text-emerald-800 font-mono",
                    children: cust.villageName
                  }), /*#__PURE__*/_jsx("td", {
                    className: "p-3 text-center font-mono font-bold text-xs",
                    children: /*#__PURE__*/_jsxs("span", {
                      className: "px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200",
                      children: [cust.totalDevices, " Devices"]
                    })
                  }), /*#__PURE__*/_jsx("td", {
                    className: "p-3 text-center font-mono font-bold text-xs",
                    children: /*#__PURE__*/_jsxs("span", {
                      className: "px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200",
                      children: [cust.totalOrders, " Orders (", cust.deliveredOrders, " Delivered)"]
                    })
                  }), /*#__PURE__*/_jsx("td", {
                    className: "p-3 text-center font-mono font-bold text-xs",
                    children: /*#__PURE__*/_jsxs("span", {
                      className: `px-2.5 py-0.5 rounded-full ${cust.openComplaints > 0 ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-600'}`,
                      children: [cust.openComplaints, " Open"]
                    })
                  })]
                }, cust.id))
              })]
            })
          })]
        }), adminTab === 'complaints' && /*#__PURE__*/_jsxs("div", {
          className: "glass-card rounded-3xl shadow-sm p-6 space-y-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "flex justify-between items-center border-b pb-3",
            children: /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsxs("h3", {
                className: "font-extrabold text-slate-900 text-lg flex items-center gap-2",
                children: [/*#__PURE__*/_jsx(IconSupport, {
                  className: "w-5 h-5 text-emerald-700"
                }), /*#__PURE__*/_jsx("span", {
                  children: "Support & Customer Complaints Management"
                })]
              }), /*#__PURE__*/_jsx("p", {
                className: "text-xs text-slate-500",
                children: "Live ticket queue dispatched from House Owners across all villages."
              })]
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "divide-y divide-slate-100 text-sm",
            children: (adminData?.maintenanceTickets || []).map(t => /*#__PURE__*/_jsxs("div", {
              className: "py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
              children: [/*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [/*#__PURE__*/_jsxs("span", {
                    className: "font-mono font-bold text-slate-900",
                    children: ["#", t.id]
                  }), /*#__PURE__*/_jsxs("span", {
                    className: "font-extrabold text-slate-900",
                    children: [t.deviceName, " (", t.roomName, ")"]
                  }), /*#__PURE__*/_jsx("span", {
                    className: "px-2.5 py-0.5 bg-rose-100 text-rose-800 text-xs font-bold rounded-md font-mono",
                    children: t.problemType
                  }), /*#__PURE__*/_jsxs("span", {
                    className: "px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-mono",
                    children: ["Warranty: ", t.warrantyStatus || 'ACTIVE']
                  })]
                }), /*#__PURE__*/_jsxs("p", {
                  className: "text-xs text-slate-600 mt-1.5 font-medium",
                  children: ["\"", t.description, "\" — Raised by ", t.reportedBy?.name]
                }), t.resolutionNotes && /*#__PURE__*/_jsxs("p", {
                  className: "text-xs text-emerald-800 font-mono font-bold mt-1",
                  children: ["Resolution: ", t.resolutionNotes]
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [/*#__PURE__*/_jsx("button", {
                  onClick: () => handleSupportTicketUpdate(t.id, 'UNDER_REVIEW', 'Admin & Support reviewing hardware logs'),
                  className: "px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200",
                  children: "[Under Review]"
                }), /*#__PURE__*/_jsx("button", {
                  onClick: () => handleSupportTicketUpdate(t.id, 'PROCESSING', 'Diagnostics in progress'),
                  className: "px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold rounded-lg border border-amber-200",
                  children: "[Processing]"
                }), /*#__PURE__*/_jsx("button", {
                  onClick: () => handleSupportTicketUpdate(t.id, 'RESOLVED', 'Hardware verified and operational'),
                  className: "px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg",
                  children: "[Mark Resolved ✓]"
                })]
              })]
            }, t.id))
          })]
        }), adminTab === 'products' && /*#__PURE__*/_jsxs("div", {
          className: "glass-card rounded-3xl shadow-sm p-6 space-y-4",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex justify-between items-center",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "font-extrabold text-slate-900 text-lg",
              children: "Products & Live Store Stock"
            }), /*#__PURE__*/_jsxs("button", {
              onClick: () => setShowAddProductModal(true),
              className: "flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-extrabold rounded-xl shadow-md transition",
              children: [/*#__PURE__*/_jsx(IconPackage, {
                className: "w-4 h-4 text-white"
              }), /*#__PURE__*/_jsx("span", {
                children: "+ Add New Product"
              })]
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/_jsxs("table", {
              className: "w-full text-left text-sm",
              children: [/*#__PURE__*/_jsx("thead", {
                className: "bg-slate-50/80 text-slate-700 font-mono text-xs uppercase border-b",
                children: /*#__PURE__*/_jsxs("tr", {
                  children: [/*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Product Name"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Category"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Price"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Stock Available"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Installation"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Warranty"
                  })]
                })
              }), /*#__PURE__*/_jsx("tbody", {
                className: "divide-y divide-slate-100",
                children: (adminData?.inventory || []).map(p => /*#__PURE__*/_jsxs("tr", {
                  className: "hover:bg-emerald-50/30",
                  children: [/*#__PURE__*/_jsx("td", {
                    className: "p-3 font-bold text-slate-900",
                    children: p.name
                  }), /*#__PURE__*/_jsx("td", {
                    className: "p-3 text-slate-700 font-medium",
                    children: p.category
                  }), /*#__PURE__*/_jsxs("td", {
                    className: "p-3 font-mono font-black text-slate-900",
                    children: ["₹", p.price]
                  }), /*#__PURE__*/_jsxs("td", {
                    className: "p-3 font-mono font-bold text-emerald-700",
                    children: [p.stockQuantity, " units"]
                  }), /*#__PURE__*/_jsx("td", {
                    className: "p-3 text-xs",
                    children: p.requiresInstallation ? 'Required' : 'Self-Install'
                  }), /*#__PURE__*/_jsx("td", {
                    className: "p-3 text-xs text-slate-600",
                    children: p.warranty
                  })]
                }, p.id))
              })]
            })
          })]
        }), adminTab === 'orders' && /*#__PURE__*/_jsxs("div", {
          className: "glass-card rounded-3xl shadow-sm p-6 space-y-4",
          children: [/*#__PURE__*/_jsx("h3", {
            className: "font-extrabold text-slate-900 text-lg",
            children: "Customer Hardware Orders"
          }), /*#__PURE__*/_jsx("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/_jsxs("table", {
              className: "w-full text-left text-sm",
              children: [/*#__PURE__*/_jsx("thead", {
                className: "bg-slate-50/80 text-slate-700 font-mono text-xs uppercase border-b",
                children: /*#__PURE__*/_jsxs("tr", {
                  children: [/*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Order ID"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Customer"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Items"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Total"
                  }), /*#__PURE__*/_jsx("th", {
                    className: "p-3",
                    children: "Status"
                  })]
                })
              }), /*#__PURE__*/_jsx("tbody", {
                className: "divide-y divide-slate-100",
                children: (adminData?.orders || []).map(o => /*#__PURE__*/_jsxs("tr", {
                  className: "hover:bg-emerald-50/30",
                  children: [/*#__PURE__*/_jsxs("td", {
                    className: "p-3 font-mono font-bold text-slate-900",
                    children: ["#", o.id]
                  }), /*#__PURE__*/_jsx("td", {
                    className: "p-3 font-bold text-slate-900",
                    children: o.customerName
                  }), /*#__PURE__*/_jsx("td", {
                    className: "p-3 text-xs",
                    children: o.items.map(i => /*#__PURE__*/_jsxs("div", {
                      children: ["• ", i.name, " (×", i.quantity, ")"]
                    }, i.productId))
                  }), /*#__PURE__*/_jsxs("td", {
                    className: "p-3 font-mono font-black",
                    children: ["₹", o.totalAmount.toLocaleString()]
                  }), /*#__PURE__*/_jsx("td", {
                    className: "p-3",
                    children: /*#__PURE__*/_jsx("span", {
                      className: "px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase bg-emerald-50 text-emerald-800 border border-emerald-200",
                      children: o.status.replace(/_/g, ' ')
                    })
                  })]
                }, o.id))
              })]
            })
          })]
        }), adminTab === 'settings' && /*#__PURE__*/_jsxs("div", {
          className: "glass-card rounded-3xl shadow-sm p-6 space-y-6",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex justify-between items-center border-b pb-4",
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsxs("h3", {
                className: "font-extrabold text-slate-900 text-lg flex items-center gap-2",
                children: [/*#__PURE__*/_jsx(IconSettings, {
                  className: "w-5 h-5 text-emerald-700"
                }), /*#__PURE__*/_jsx("span", {
                  children: "Platform & IoT Gateway Settings"
                })]
              }), /*#__PURE__*/_jsx("p", {
                className: "text-xs text-slate-500 font-medium",
                children: "Configure network telemetry intervals, MQTT brokers, firmware OTA policies, and emergency alerts."
              })]
            }), /*#__PURE__*/_jsxs("span", {
              className: "px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-mono font-bold",
              children: ["Mesh Protocol: ", adminSettings?.meshProtocol || 'Matter 1.2 / Zigbee 3.0']
            })]
          }), /*#__PURE__*/_jsxs("form", {
            onSubmit: handleSaveSettings,
            className: "space-y-4 max-w-2xl",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
              children: [/*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("label", {
                  className: "block text-xs font-bold text-slate-800 mb-1",
                  children: "Gateway Polling Interval (Seconds)"
                }), /*#__PURE__*/_jsx("input", {
                  name: "gatewayPollIntervalSeconds",
                  type: "number",
                  min: "1",
                  max: "60",
                  defaultValue: adminSettings?.gatewayPollIntervalSeconds || 5,
                  required: true,
                  className: "w-full px-3.5 py-2 border rounded-xl text-sm font-mono"
                })]
              }), /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("label", {
                  className: "block text-xs font-bold text-slate-800 mb-1",
                  children: "Support Resolution SLA (Hours)"
                }), /*#__PURE__*/_jsx("input", {
                  name: "supportSlaHours",
                  type: "number",
                  min: "1",
                  max: "72",
                  defaultValue: adminSettings?.supportSlaHours || 24,
                  required: true,
                  className: "w-full px-3.5 py-2 border rounded-xl text-sm font-mono"
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-xs font-bold text-slate-800 mb-1",
                children: "MQTT Mesh Broker URL"
              }), /*#__PURE__*/_jsx("input", {
                name: "mqttBrokerUrl",
                type: "text",
                defaultValue: adminSettings?.mqttBrokerUrl || 'mqtt://mesh.smartnest.local:1883',
                required: true,
                className: "w-full px-3.5 py-2 border rounded-xl text-sm font-mono"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-xs font-bold text-slate-800 mb-1",
                children: "Administrator Alerts Email"
              }), /*#__PURE__*/_jsx("input", {
                name: "adminEmail",
                type: "email",
                defaultValue: adminSettings?.adminEmail || 'admin@smartnest.local',
                required: true,
                className: "w-full px-3.5 py-2 border rounded-xl text-sm font-mono"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "pt-2 space-y-2",
              children: [/*#__PURE__*/_jsxs("label", {
                className: "flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800",
                children: [/*#__PURE__*/_jsx("input", {
                  name: "autoFirmwareOta",
                  type: "checkbox",
                  defaultChecked: adminSettings?.autoFirmwareOta !== false,
                  className: "rounded text-emerald-700"
                }), /*#__PURE__*/_jsx("span", {
                  children: "Enable Automatic Over-The-Air (OTA) Firmware Updates for ESP32 Gateways"
                })]
              }), /*#__PURE__*/_jsxs("label", {
                className: "flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800",
                children: [/*#__PURE__*/_jsx("input", {
                  name: "emergencySmsAlerts",
                  type: "checkbox",
                  defaultChecked: adminSettings?.emergencySmsAlerts !== false,
                  className: "rounded text-emerald-700"
                }), /*#__PURE__*/_jsx("span", {
                  children: "Enable Instant SMS & Push Alerts for Smoke/Gas Sensors"
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "pt-4 border-t flex items-center justify-between",
              children: [/*#__PURE__*/_jsx("span", {
                className: "text-[11px] font-mono text-slate-500",
                children: "Security Mode: AES-128 Hardware Encrypted"
              }), /*#__PURE__*/_jsx("button", {
                type: "submit",
                className: "px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs rounded-xl shadow-md transition",
                children: "[Save Platform Settings ✓]"
              })]
            })]
          })]
        })]
      }), activePortal === 'owner' && /*#__PURE__*/_jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "glass-card p-6 rounded-3xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("span", {
              className: "text-xs font-mono font-bold uppercase text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200",
              children: "PORTAL 2 — HOUSE OWNER (CUSTOMER)"
            }), /*#__PURE__*/_jsx("h1", {
              className: "text-2xl font-black text-slate-900 mt-1",
              children: ownerData?.home?.name || 'Green Valley Villa'
            }), /*#__PURE__*/_jsxs("p", {
              className: "text-xs text-slate-600 font-mono",
              children: ["Customer / Owner: ", /*#__PURE__*/_jsx("span", {
                className: "font-bold text-slate-900",
                children: currentUser?.name || ownerData?.home?.ownerName || 'Rahul Sharma'
              }), " · ", ownerData?.home?.address || 'Door #101, Main Road, Smart Valley']
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex flex-wrap items-center gap-3 text-center",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "px-4 py-2 bg-emerald-50/80 border border-emerald-200 rounded-2xl flex items-center gap-3",
              children: [/*#__PURE__*/_jsx(IconClimate, {
                className: "w-5 h-5 text-emerald-700"
              }), /*#__PURE__*/_jsxs("div", {
                className: "text-left",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "text-[10px] font-mono text-emerald-800 font-bold uppercase",
                  children: "TEMPERATURE"
                }), /*#__PURE__*/_jsxs("div", {
                  className: "text-base font-black text-slate-900 font-mono",
                  children: [ownerData?.ambientTemperature || 24.5, "°C"]
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "px-4 py-2 bg-emerald-50/80 border border-emerald-200 rounded-2xl flex items-center gap-3",
              children: [/*#__PURE__*/_jsx(IconSensor, {
                className: "w-5 h-5 text-emerald-700"
              }), /*#__PURE__*/_jsxs("div", {
                className: "text-left",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "text-[10px] font-mono text-emerald-800 font-bold uppercase",
                  children: "HUMIDITY"
                }), /*#__PURE__*/_jsxs("div", {
                  className: "text-base font-black text-slate-900 font-mono",
                  children: [ownerData?.ambientHumidity || 58, "%"]
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "px-4 py-2 bg-emerald-100/80 border border-emerald-300 rounded-2xl flex items-center gap-3",
              children: [/*#__PURE__*/_jsx(IconEnergy, {
                className: "w-5 h-5 text-emerald-800"
              }), /*#__PURE__*/_jsxs("div", {
                className: "text-left",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "text-[10px] font-mono text-emerald-900 font-bold uppercase",
                  children: "ENERGY TODAY"
                }), /*#__PURE__*/_jsxs("div", {
                  className: "text-base font-black text-slate-900 font-mono",
                  children: [ownerData?.energyTodayKwh || 8.42, " kWh"]
                })]
              })]
            }), /*#__PURE__*/_jsxs("button", {
              onClick: () => setShowAddDeviceModal(true),
              className: "flex items-center gap-2 px-4 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-extrabold rounded-2xl shadow-md transition",
              children: [/*#__PURE__*/_jsx(IconBulb, {
                className: "w-4 h-4 text-white"
              }), /*#__PURE__*/_jsx("span", {
                children: "+ Register Device"
              })]
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl flex flex-wrap justify-between items-center gap-3 text-xs",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "space-y-0.5",
            children: [/*#__PURE__*/_jsx("span", {
              className: "font-bold text-emerald-950",
              children: "Property Details:"
            }), /*#__PURE__*/_jsxs("span", {
              className: "text-slate-700 ml-2",
              children: [ownerData?.home?.houseNumber || 'Door #101', ", ", ownerData?.home?.lineAddress || 'Main Road', ", ", ownerData?.home?.villageName || 'Smart Valley']
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex gap-4 font-mono font-bold text-emerald-800",
            children: [/*#__PURE__*/_jsxs("span", {
              children: ["Orders Placed: ", (ownerData?.orders || []).length]
            }), /*#__PURE__*/_jsxs("span", {
              children: ["Active Nodes: ", (ownerData?.devices || []).length]
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "flex justify-between items-center",
            children: /*#__PURE__*/_jsxs("h2", {
              className: "text-lg font-black text-slate-900 flex items-center gap-2",
              children: [/*#__PURE__*/_jsx(IconHouse, {
                className: "w-5 h-5 text-slate-800"
              }), /*#__PURE__*/_jsx("span", {
                children: "Living Rooms & Active Hardware Nodes"
              })]
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
            children: (ownerData?.devices || []).map(dev => /*#__PURE__*/_jsxs("div", {
              className: "glass-card p-5 rounded-3xl shadow-sm space-y-3 hover:border-emerald-400 transition",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "flex justify-between items-start",
                children: [/*#__PURE__*/_jsxs("div", {
                  children: [/*#__PURE__*/_jsx("span", {
                    className: "text-[11px] font-mono font-bold uppercase text-slate-400",
                    children: dev.roomName
                  }), /*#__PURE__*/_jsx("h3", {
                    className: "font-extrabold text-slate-900 text-base",
                    children: dev.name
                  })]
                }), /*#__PURE__*/_jsx("span", {
                  className: `px-2.5 py-0.5 rounded-md text-xs font-mono font-bold ${dev.health === 'MAINTENANCE_REQUIRED' ? 'bg-rose-100 text-rose-800' : dev.powerState === 'ON' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`,
                  children: dev.health === 'MAINTENANCE_REQUIRED' ? 'COMPLAINT OPEN' : dev.powerState
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "text-xs text-slate-500 font-mono",
                children: ["Warranty: ", /*#__PURE__*/_jsxs("span", {
                  className: "font-bold text-slate-800",
                  children: [dev.warrantyStatus, " (Exp: ", dev.warrantyExpiry || '2028', ")"]
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex items-center justify-between pt-2 border-t border-slate-200/80",
                children: [dev.health === 'MAINTENANCE_REQUIRED' ? /*#__PURE__*/_jsx("span", {
                  className: "text-xs text-rose-700 font-bold italic",
                  children: "⚠️ Awaiting Support Team Fix"
                }) : /*#__PURE__*/_jsx("button", {
                  onClick: () => handleDeviceCommand(dev.id, 'POWER', dev.powerState === 'ON' ? 'OFF' : 'ON'),
                  className: `px-3 py-1 rounded-lg text-xs font-bold ${dev.powerState === 'ON' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-800'}`,
                  children: dev.powerState === 'ON' ? 'Turn OFF' : 'Turn ON'
                }), /*#__PURE__*/_jsxs("button", {
                  onClick: () => setShowReportDeviceProblemModal(dev),
                  className: "flex items-center gap-1 text-xs text-slate-500 hover:text-rose-600 font-bold",
                  children: [/*#__PURE__*/_jsx(IconSupport, {
                    className: "w-3.5 h-3.5 text-slate-500"
                  }), /*#__PURE__*/_jsx("span", {
                    children: "Raise Complaint"
                  })]
                })]
              })]
            }, dev.id))
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "glass-card p-6 rounded-3xl shadow-sm space-y-4",
          children: [/*#__PURE__*/_jsxs("h2", {
            className: "text-lg font-black text-slate-900 flex items-center gap-2",
            children: [/*#__PURE__*/_jsx(IconSupport, {
              className: "w-5 h-5 text-emerald-700"
            }), /*#__PURE__*/_jsx("span", {
              children: "Your Dispatched Support Tickets (Live Complaint Status)"
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "divide-y divide-slate-100 text-sm",
            children: (ownerData?.maintenanceTickets || []).map(t => /*#__PURE__*/_jsxs("div", {
              className: "py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3",
              children: [/*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "font-bold text-slate-900",
                  children: ["#", t.id, " — ", t.deviceName, " (", t.problemType, ")"]
                }), /*#__PURE__*/_jsxs("p", {
                  className: "text-xs text-slate-600 mt-1",
                  children: ["\"", t.description, "\""]
                }), t.resolutionNotes && /*#__PURE__*/_jsxs("p", {
                  className: "text-xs text-emerald-800 font-mono font-bold mt-1",
                  children: ["Support Resolution: ", t.resolutionNotes]
                })]
              }), /*#__PURE__*/_jsx("div", {
                className: "flex items-center gap-2",
                children: t.status === 'RESOLVED' ? /*#__PURE__*/_jsxs(_Fragment, {
                  children: [/*#__PURE__*/_jsx("button", {
                    onClick: () => handleConfirmFixed(t.id),
                    className: "px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-sm",
                    children: "[Confirm Fixed & Activate Device ✓]"
                  }), /*#__PURE__*/_jsx("button", {
                    onClick: () => handleProblemPersists(t.id),
                    className: "px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold rounded-xl border border-rose-200",
                    children: "[Problem Still Exists ⚠️]"
                  })]
                }) : /*#__PURE__*/_jsx("span", {
                  className: `px-3 py-1 rounded-lg text-xs font-mono font-bold ${t.status === 'WARRANTY_EXPIRED' ? 'bg-purple-100 text-purple-800' : t.status === 'UNDER_REVIEW' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`,
                  children: t.status.replace(/_/g, ' ')
                })
              })]
            }, t.id))
          })]
        })]
      }), activePortal === 'family' && /*#__PURE__*/_jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "glass-card p-6 rounded-3xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("span", {
              className: "text-xs font-mono font-bold uppercase text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200",
              children: "PORTAL 3 — FAMILY MEMBER (PERMITTED ACCESS)"
            }), /*#__PURE__*/_jsx("h1", {
              className: "text-2xl font-black text-slate-900 mt-1",
              children: "Ananya's Family View"
            }), /*#__PURE__*/_jsxs("p", {
              className: "text-xs text-slate-600 font-mono",
              children: ["Home: ", /*#__PURE__*/_jsx("span", {
                className: "font-bold text-slate-900",
                children: "Green Valley Residence"
              }), " · Access Level: Permitted Devices Only"]
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "flex items-center gap-3",
            children: /*#__PURE__*/_jsxs("div", {
              className: "px-4 py-2 bg-indigo-50/80 border border-indigo-200 rounded-2xl flex items-center gap-3",
              children: [/*#__PURE__*/_jsx(IconClimate, {
                className: "w-5 h-5 text-indigo-700"
              }), /*#__PURE__*/_jsxs("div", {
                className: "text-left",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "text-[10px] font-mono text-indigo-800 font-bold uppercase",
                  children: "AMBIENT TEMP"
                }), /*#__PURE__*/_jsx("div", {
                  className: "text-base font-black text-slate-900 font-mono",
                  children: "24.5°C"
                })]
              })]
            })
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "flex justify-between items-center",
            children: /*#__PURE__*/_jsxs("h2", {
              className: "text-lg font-black text-slate-900 flex items-center gap-2",
              children: [/*#__PURE__*/_jsx(IconFamily, {
                className: "w-5 h-5 text-indigo-700"
              }), /*#__PURE__*/_jsx("span", {
                children: "Your Permitted Smart Devices"
              })]
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-5",
            children: (familyData?.permittedDevices || [{
              id: 'DEV-001',
              name: 'Living Room Smart Light',
              roomName: 'Living Room',
              powerState: 'ON',
              health: 'HEALTHY'
            }, {
              id: 'DEV-002',
              name: 'Living Room Smart Fan',
              roomName: 'Living Room',
              powerState: 'OFF',
              health: 'HEALTHY'
            }, {
              id: 'DEV-003',
              name: 'Master Bedroom AC Controller',
              roomName: 'Master Bedroom',
              powerState: 'ON',
              health: 'HEALTHY'
            }]).map(dev => /*#__PURE__*/_jsxs("div", {
              className: "glass-card p-5 rounded-3xl shadow-sm space-y-3 hover:border-indigo-400 transition",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "flex justify-between items-start",
                children: [/*#__PURE__*/_jsxs("div", {
                  children: [/*#__PURE__*/_jsx("span", {
                    className: "text-[11px] font-mono font-bold uppercase text-slate-400",
                    children: dev.roomName
                  }), /*#__PURE__*/_jsx("h3", {
                    className: "font-extrabold text-slate-900 text-base",
                    children: dev.name
                  })]
                }), /*#__PURE__*/_jsx("span", {
                  className: `px-2.5 py-0.5 rounded-md text-xs font-mono font-bold ${dev.health === 'MAINTENANCE_REQUIRED' ? 'bg-rose-100 text-rose-800' : dev.powerState === 'ON' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`,
                  children: dev.health === 'MAINTENANCE_REQUIRED' ? 'ERROR' : dev.powerState
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex items-center justify-between pt-2 border-t border-slate-200",
                children: [/*#__PURE__*/_jsx("button", {
                  onClick: () => handleFamilyDeviceCommand(dev.id, 'POWER', dev.powerState === 'ON' ? 'OFF' : 'ON'),
                  className: `px-3 py-1 rounded-lg text-xs font-bold ${dev.powerState === 'ON' ? 'bg-indigo-700 text-white' : 'bg-slate-100 text-slate-800'}`,
                  children: dev.powerState === 'ON' ? 'Turn OFF' : 'Turn ON'
                }), /*#__PURE__*/_jsxs("button", {
                  onClick: () => setShowReportDeviceProblemModal(dev),
                  className: "flex items-center gap-1 text-xs text-slate-500 hover:text-rose-600 font-bold",
                  children: [/*#__PURE__*/_jsx(IconSupport, {
                    className: "w-3.5 h-3.5 text-slate-500"
                  }), /*#__PURE__*/_jsx("span", {
                    children: "Report Problem"
                  })]
                })]
              })]
            }, dev.id))
          })]
        })]
      }), activePortal === 'support' && /*#__PURE__*/_jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6",
        children: [/*#__PURE__*/_jsx("div", {
          className: "glass-card p-6 rounded-3xl shadow-sm flex justify-between items-center",
          children: /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("span", {
              className: "text-xs font-mono font-bold uppercase text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200",
              children: "FIELD SUPPORT & WARRANTY ENGINEERING HUB"
            }), /*#__PURE__*/_jsx("h1", {
              className: "text-2xl font-black text-slate-900 mt-1",
              children: "Customer Support & Diagnostics Queue"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-xs text-slate-500 font-mono",
              children: "Support Engineer: Alex Thorne · Real-Time Customer Ticket Queue"
            })]
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "glass-card p-6 rounded-3xl shadow-sm space-y-4",
          children: [/*#__PURE__*/_jsxs("h2", {
            className: "text-lg font-black text-slate-900 flex items-center gap-2",
            children: [/*#__PURE__*/_jsx(IconSupport, {
              className: "w-5 h-5 text-amber-700"
            }), /*#__PURE__*/_jsx("span", {
              children: "Incoming Customer Complaints & Problems (Dispatched by House Owners & Family)"
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "divide-y divide-slate-100 text-sm",
            children: (supportData?.tickets || []).map(t => /*#__PURE__*/_jsxs("div", {
              className: "py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
              children: [/*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [/*#__PURE__*/_jsxs("span", {
                    className: "font-mono font-bold text-slate-900",
                    children: ["#", t.id]
                  }), /*#__PURE__*/_jsxs("span", {
                    className: "font-extrabold text-slate-900",
                    children: [t.deviceName, " (", t.roomName, ")"]
                  }), /*#__PURE__*/_jsx("span", {
                    className: "px-2.5 py-0.5 bg-rose-100 text-rose-800 text-xs font-bold rounded-md font-mono",
                    children: t.problemType
                  }), /*#__PURE__*/_jsxs("span", {
                    className: "px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-mono",
                    children: ["Warranty: ", t.warrantyStatus || 'ACTIVE']
                  })]
                }), /*#__PURE__*/_jsxs("p", {
                  className: "text-xs text-slate-600 mt-1.5 font-medium",
                  children: ["\"", t.description, "\" — Raised by ", t.reportedBy?.name || 'Customer']
                }), t.resolutionNotes && /*#__PURE__*/_jsxs("p", {
                  className: "text-xs text-emerald-800 font-mono font-bold mt-1",
                  children: ["Resolution: ", t.resolutionNotes]
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [/*#__PURE__*/_jsx("button", {
                  onClick: () => handleSupportTicketUpdate(t.id, 'UNDER_REVIEW', 'Support engineer Alex Thorne reviewing Zigbee mesh & logs'),
                  className: "px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200",
                  children: "[Under Review]"
                }), /*#__PURE__*/_jsx("button", {
                  onClick: () => handleSupportTicketUpdate(t.id, 'PROCESSING', 'Testing hardware telemetry & power draw'),
                  className: "px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold rounded-lg border border-amber-200",
                  children: "[Processing / Repair]"
                }), /*#__PURE__*/_jsx("button", {
                  onClick: () => handleSupportTicketUpdate(t.id, 'WARRANTY_EXPIRED', 'Warranty period expired. Replacement device purchase required.'),
                  className: "px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold rounded-lg border border-rose-200",
                  children: "[Warranty Expired]"
                }), /*#__PURE__*/_jsx("button", {
                  onClick: () => handleSupportTicketUpdate(t.id, 'RESOLVED', 'Diagnostic test passed. Calibrated power delivery and reconnected to mesh.'),
                  className: "px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg",
                  children: "[Mark Resolved & Fixed ✓]"
                }), /*#__PURE__*/_jsx("button", {
                  onClick: () => handleSupportReplaceDevice(t.id),
                  className: "px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-black rounded-lg shadow-sm",
                  children: "[Dispatch Replacement 🔄]"
                })]
              })]
            }, t.id))
          })]
        })]
      }), activePortal === 'store' && /*#__PURE__*/_jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "bg-slate-950 text-white p-8 rounded-3xl shadow-xl border border-slate-800 flex justify-between items-center",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("span", {
              className: "text-xs font-mono font-bold uppercase text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-700",
              children: "STORE"
            }), /*#__PURE__*/_jsx("h1", {
              className: "text-3xl font-black mt-2",
              children: "SmartNest Store"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-slate-300 text-sm mt-1",
              children: "\"Bring smarter technology into your home.\""
            })]
          }), /*#__PURE__*/_jsxs("button", {
            onClick: () => setIsCartOpen(true),
            className: "flex items-center gap-2 px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-md",
            children: [/*#__PURE__*/_jsx(IconCart, {
              className: "w-4 h-4 text-white"
            }), /*#__PURE__*/_jsxs("span", {
              children: ["View Cart (", cart.reduce((a, b) => a + b.quantity, 0), " items) →"]
            })]
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
          children: shopProducts.map(p => /*#__PURE__*/_jsxs("div", {
            className: "glass-card p-5 rounded-3xl shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-400 transition",
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("span", {
                className: "text-[11px] font-mono uppercase text-emerald-700 font-bold",
                children: p.category
              }), /*#__PURE__*/_jsx("h4", {
                className: "font-extrabold text-slate-900 text-base mt-1",
                children: p.name
              }), /*#__PURE__*/_jsx("p", {
                className: "text-xs text-slate-600 mt-2 line-clamp-2",
                children: p.description
              }), /*#__PURE__*/_jsxs("div", {
                className: "text-[11px] text-slate-500 mt-2 font-mono",
                children: ["Warranty: ", p.warranty]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "pt-3 border-t border-slate-200 space-y-2",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "flex justify-between items-center",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "font-mono font-black text-slate-900 text-lg",
                  children: ["₹", p.price]
                }), /*#__PURE__*/_jsxs("span", {
                  className: "text-xs font-mono font-bold text-emerald-700",
                  children: [p.stockQuantity, " in stock"]
                })]
              }), /*#__PURE__*/_jsx("button", {
                onClick: () => addToCart(p),
                className: "w-full py-2.5 bg-slate-900 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition",
                children: "+ Add to Cart"
              })]
            })]
          }, p.id))
        })]
      })]
    }), showRegisterModal && /*#__PURE__*/_jsx("div", {
      className: "fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4",
      children: /*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-slate-200 max-h-[90vh] overflow-y-auto",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex justify-between items-center border-b pb-3",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("h3", {
              className: "font-black text-slate-900 text-lg",
              children: "Customer / House Owner Registration"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-xs text-slate-500",
              children: "Enter your house number, street line address, and village details."
            })]
          }), /*#__PURE__*/_jsx("button", {
            onClick: () => setShowRegisterModal(false),
            className: "text-slate-400 hover:text-slate-700 font-bold text-lg",
            children: "✕"
          })]
        }), registerError && /*#__PURE__*/_jsx("div", {
          className: "p-3 bg-rose-50 text-rose-800 text-xs rounded-xl border border-rose-200 font-bold",
          children: registerError
        }), /*#__PURE__*/_jsxs("form", {
          onSubmit: handleRegisterOwner,
          className: "space-y-3",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "grid grid-cols-2 gap-3",
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-xs font-bold text-slate-800 mb-1",
                children: "Full Name"
              }), /*#__PURE__*/_jsx("input", {
                name: "name",
                required: true,
                className: "w-full px-3.5 py-2 border rounded-xl text-sm",
                placeholder: "e.g. Ramesh Kumar"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-xs font-bold text-slate-800 mb-1",
                children: "Phone Number"
              }), /*#__PURE__*/_jsx("input", {
                name: "phone",
                required: true,
                className: "w-full px-3.5 py-2 border rounded-xl text-sm",
                placeholder: "+91 98765 43210"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "grid grid-cols-2 gap-3",
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-xs font-bold text-slate-800 mb-1",
                children: "Email Address"
              }), /*#__PURE__*/_jsx("input", {
                name: "email",
                type: "email",
                required: true,
                className: "w-full px-3.5 py-2 border rounded-xl text-sm",
                placeholder: "ramesh@gmail.com"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-xs font-bold text-slate-800 mb-1",
                children: "Password"
              }), /*#__PURE__*/_jsx("input", {
                name: "password",
                type: "password",
                required: true,
                className: "w-full px-3.5 py-2 border rounded-xl text-sm",
                placeholder: "••••••••"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("label", {
              className: "block text-xs font-bold text-slate-800 mb-1",
              children: "Home / Villa Name"
            }), /*#__PURE__*/_jsx("input", {
              name: "homeName",
              required: true,
              className: "w-full px-3.5 py-2 border rounded-xl text-sm",
              placeholder: "e.g. Sunrise Villa / Krishna Nilayam"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "grid grid-cols-3 gap-3",
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-xs font-bold text-slate-800 mb-1",
                children: "House / Door #"
              }), /*#__PURE__*/_jsx("input", {
                name: "houseNumber",
                required: true,
                className: "w-full px-3.5 py-2 border rounded-xl text-sm font-mono",
                placeholder: "Flat 204 / Door #12"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-xs font-bold text-slate-800 mb-1",
                children: "Line / Street"
              }), /*#__PURE__*/_jsx("input", {
                name: "lineAddress",
                required: true,
                className: "w-full px-3.5 py-2 border rounded-xl text-sm",
                placeholder: "Line 3, Main Road"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-xs font-bold text-slate-800 mb-1",
                children: "Village / Town"
              }), /*#__PURE__*/_jsx("input", {
                name: "villageName",
                required: true,
                className: "w-full px-3.5 py-2 border rounded-xl text-sm",
                placeholder: "Kalyanpur Village"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("label", {
              className: "block text-xs font-bold text-slate-800 mb-1",
              children: "Number of Rooms"
            }), /*#__PURE__*/_jsx("input", {
              name: "roomsCount",
              type: "number",
              defaultValue: 4,
              min: 1,
              max: 12,
              className: "w-full px-3.5 py-2 border rounded-xl text-sm font-mono"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "pt-2 border-t flex justify-end gap-2",
            children: [/*#__PURE__*/_jsx("button", {
              type: "button",
              onClick: () => setShowRegisterModal(false),
              className: "px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl",
              children: "Cancel"
            }), /*#__PURE__*/_jsx("button", {
              type: "submit",
              className: "px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-black rounded-xl shadow-md",
              children: "Complete Registration & Open Dashboard →"
            })]
          })]
        })]
      })
    }), showAddDeviceModal && /*#__PURE__*/_jsx("div", {
      className: "fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4",
      children: /*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200",
        children: [/*#__PURE__*/_jsx("h3", {
          className: "font-black text-slate-900 text-lg",
          children: "Add / Register Smart Device"
        }), /*#__PURE__*/_jsxs("form", {
          onSubmit: handleOwnerAddDevice,
          className: "space-y-3",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("label", {
              className: "block text-xs font-bold text-slate-800 mb-1",
              children: "Device Name"
            }), /*#__PURE__*/_jsx("input", {
              name: "name",
              defaultValue: "Study Room LED Panel",
              required: true,
              className: "w-full px-3.5 py-2 border rounded-xl text-sm font-medium"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("label", {
              className: "block text-xs font-bold text-slate-800 mb-1",
              children: "Device Type"
            }), /*#__PURE__*/_jsxs("select", {
              name: "type",
              className: "w-full px-3.5 py-2 border rounded-xl text-sm font-bold bg-white",
              children: [/*#__PURE__*/_jsx("option", {
                value: "Smart Light",
                children: "Smart Light"
              }), /*#__PURE__*/_jsx("option", {
                value: "Smart Fan",
                children: "Smart Fan"
              }), /*#__PURE__*/_jsx("option", {
                value: "Air Conditioner",
                children: "Air Conditioner"
              }), /*#__PURE__*/_jsx("option", {
                value: "Smart Plug",
                children: "Smart Plug"
              }), /*#__PURE__*/_jsx("option", {
                value: "Smart Lock",
                children: "Smart Lock"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("label", {
              className: "block text-xs font-bold text-slate-800 mb-1",
              children: "Assigned Room"
            }), /*#__PURE__*/_jsxs("select", {
              name: "roomName",
              className: "w-full px-3.5 py-2 border rounded-xl text-sm font-bold bg-white",
              children: [/*#__PURE__*/_jsx("option", {
                value: "Living Room",
                children: "Living Room"
              }), /*#__PURE__*/_jsx("option", {
                value: "Master Bedroom",
                children: "Master Bedroom"
              }), /*#__PURE__*/_jsx("option", {
                value: "Kitchen",
                children: "Kitchen"
              }), /*#__PURE__*/_jsx("option", {
                value: "Front Door",
                children: "Front Door"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex justify-end gap-2 pt-2 border-t",
            children: [/*#__PURE__*/_jsx("button", {
              type: "button",
              onClick: () => setShowAddDeviceModal(false),
              className: "px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl",
              children: "Cancel"
            }), /*#__PURE__*/_jsx("button", {
              type: "submit",
              className: "px-5 py-2 bg-emerald-700 text-white text-xs font-black rounded-xl shadow-md",
              children: "[REGISTER DEVICE ✓]"
            })]
          })]
        })]
      })
    }), showAddProductModal && /*#__PURE__*/_jsx("div", {
      className: "fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4",
      children: /*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-slate-200",
        children: [/*#__PURE__*/_jsx("h3", {
          className: "font-black text-slate-900 text-lg",
          children: "Add New Product to Store Catalog"
        }), /*#__PURE__*/_jsxs("form", {
          onSubmit: handleAddProduct,
          className: "space-y-3",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("label", {
              className: "block text-xs font-bold text-slate-800 mb-1",
              children: "Product Name"
            }), /*#__PURE__*/_jsx("input", {
              name: "name",
              required: true,
              className: "w-full px-3.5 py-2 border rounded-xl text-sm",
              placeholder: "e.g. Smart Climate Hub"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "grid grid-cols-2 gap-3",
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-xs font-bold text-slate-800 mb-1",
                children: "Category"
              }), /*#__PURE__*/_jsx("input", {
                name: "category",
                defaultValue: "Lighting",
                required: true,
                className: "w-full px-3.5 py-2 border rounded-xl text-sm"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-xs font-bold text-slate-800 mb-1",
                children: "Price (₹)"
              }), /*#__PURE__*/_jsx("input", {
                name: "price",
                type: "number",
                defaultValue: 1899,
                required: true,
                className: "w-full px-3.5 py-2 border rounded-xl text-sm"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "grid grid-cols-2 gap-3",
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-xs font-bold text-slate-800 mb-1",
                children: "Stock Quantity"
              }), /*#__PURE__*/_jsx("input", {
                name: "stockQuantity",
                type: "number",
                defaultValue: 30,
                required: true,
                className: "w-full px-3.5 py-2 border rounded-xl text-sm"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-xs font-bold text-slate-800 mb-1",
                children: "Min Stock Alert"
              }), /*#__PURE__*/_jsx("input", {
                name: "minStockLevel",
                type: "number",
                defaultValue: 5,
                required: true,
                className: "w-full px-3.5 py-2 border rounded-xl text-sm"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("label", {
              className: "block text-xs font-bold text-slate-800 mb-1",
              children: "Description"
            }), /*#__PURE__*/_jsx("textarea", {
              name: "description",
              rows: "2",
              className: "w-full px-3.5 py-2 border rounded-xl text-sm",
              placeholder: "Details..."
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex justify-end gap-2 pt-2 border-t",
            children: [/*#__PURE__*/_jsx("button", {
              type: "button",
              onClick: () => setShowAddProductModal(false),
              className: "px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl",
              children: "Cancel"
            }), /*#__PURE__*/_jsx("button", {
              type: "submit",
              className: "px-5 py-2 bg-emerald-700 text-white text-xs font-black rounded-xl shadow-md",
              children: "[ADD TO STORE ✓]"
            })]
          })]
        })]
      })
    }), showReportDeviceProblemModal && /*#__PURE__*/_jsx("div", {
      className: "fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4",
      children: /*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200",
        children: [/*#__PURE__*/_jsxs("h3", {
          className: "font-black text-slate-900 text-lg",
          children: ["Raise Complaint: ", showReportDeviceProblemModal.name]
        }), /*#__PURE__*/_jsx("p", {
          className: "text-xs text-slate-500",
          children: "Dispatches ticket to Support Engineering Queue."
        }), /*#__PURE__*/_jsxs("form", {
          onSubmit: handleReportDeviceProblem,
          className: "space-y-3",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("label", {
              className: "block text-xs font-bold text-slate-800 mb-1",
              children: "Problem Category"
            }), /*#__PURE__*/_jsxs("select", {
              name: "problemType",
              className: "w-full px-3.5 py-2 border rounded-xl text-sm font-bold bg-white",
              children: [/*#__PURE__*/_jsx("option", {
                value: "Device Not Working",
                children: "Device Not Working / Offline"
              }), /*#__PURE__*/_jsx("option", {
                value: "Sensor Drift",
                children: "Sensor Reading Drift"
              }), /*#__PURE__*/_jsx("option", {
                value: "Physical Defect",
                children: "Physical Defect / Hardware Burn"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("label", {
              className: "block text-xs font-bold text-slate-800 mb-1",
              children: "Description"
            }), /*#__PURE__*/_jsx("textarea", {
              name: "description",
              required: true,
              rows: "3",
              className: "w-full px-3.5 py-2 border rounded-xl text-sm",
              placeholder: "Describe the symptom..."
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex justify-end gap-2 pt-2 border-t",
            children: [/*#__PURE__*/_jsx("button", {
              type: "button",
              onClick: () => setShowReportDeviceProblemModal(null),
              className: "px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl",
              children: "Cancel"
            }), /*#__PURE__*/_jsx("button", {
              type: "submit",
              className: "px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-black rounded-xl shadow-md",
              children: "Dispatch to Support Team"
            })]
          })]
        })]
      })
    }), isCartOpen && /*#__PURE__*/_jsx("div", {
      className: "fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-md flex justify-end",
      children: /*#__PURE__*/_jsxs("div", {
        className: "w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col justify-between",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex justify-between items-center border-b pb-4",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "font-black text-slate-900 text-lg",
              children: "SmartNest Store Cart"
            }), /*#__PURE__*/_jsx("button", {
              onClick: () => setIsCartOpen(false),
              className: "text-slate-400 hover:text-slate-700 font-bold",
              children: "✕"
            })]
          }), cart.length === 0 ? /*#__PURE__*/_jsx("div", {
            className: "text-center py-10 text-slate-400 text-sm font-semibold",
            children: "Your cart is empty."
          }) : /*#__PURE__*/_jsx("div", {
            className: "divide-y divide-slate-100 overflow-y-auto max-h-[60vh]",
            children: cart.map(item => /*#__PURE__*/_jsxs("div", {
              className: "py-3 flex justify-between items-center",
              children: [/*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("div", {
                  className: "font-bold text-slate-900 text-sm",
                  children: item.name
                }), /*#__PURE__*/_jsxs("div", {
                  className: "text-xs text-slate-500 font-mono",
                  children: ["₹", item.price, " × ", item.quantity]
                })]
              }), /*#__PURE__*/_jsx("button", {
                onClick: () => removeFromCart(item.id),
                className: "text-rose-500 hover:text-rose-700 font-bold text-xs",
                children: "Remove"
              })]
            }, item.id))
          })]
        }), cart.length > 0 && /*#__PURE__*/_jsxs("div", {
          className: "border-t pt-4 space-y-3",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex justify-between font-bold text-slate-900",
            children: [/*#__PURE__*/_jsx("span", {
              children: "Total:"
            }), /*#__PURE__*/_jsxs("span", {
              className: "font-mono text-xl font-black text-emerald-700",
              children: ["₹", cart.reduce((a, b) => a + b.price * b.quantity, 0).toLocaleString()]
            })]
          }), /*#__PURE__*/_jsx("button", {
            onClick: handleCheckout,
            className: "w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-md transition",
            children: "Place Order →"
          })]
        })]
      })
    }), showLoginModal && /*#__PURE__*/_jsx("div", {
      className: "fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4",
      children: /*#__PURE__*/_jsxs("div", {
        className: "bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex justify-between items-center border-b pb-3",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("h3", {
              className: "font-black text-slate-900 text-lg",
              children: "SmartNest Authentication"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-xs text-slate-500 font-medium",
              children: "Please enter credentials to sign in."
            })]
          }), /*#__PURE__*/_jsx("button", {
            onClick: () => setShowLoginModal(false),
            className: "text-slate-400 hover:text-slate-700 font-bold text-lg",
            children: "✕"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "grid grid-cols-3 gap-1.5 bg-slate-100 p-1.5 rounded-xl text-xs font-bold text-center",
          children: [/*#__PURE__*/_jsx("button", {
            onClick: () => setDemoPreset('admin'),
            className: `py-2 rounded-lg transition ${loginRole === 'admin' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'}`,
            children: /*#__PURE__*/_jsx("span", {
              children: "Admin"
            })
          }), /*#__PURE__*/_jsx("button", {
            onClick: () => setDemoPreset('house_owner'),
            className: `py-2 rounded-lg transition ${loginRole === 'house_owner' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'}`,
            children: /*#__PURE__*/_jsx("span", {
              children: "House Owner"
            })
          }), /*#__PURE__*/_jsx("button", {
            onClick: () => setDemoPreset('support_engineer'),
            className: `py-2 rounded-lg transition ${loginRole === 'support_engineer' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'}`,
            children: /*#__PURE__*/_jsx("span", {
              children: "Support Team"
            })
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs font-mono",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "font-bold text-emerald-900 uppercase",
            children: ["Login Credentials for ", loginRole === 'house_owner' ? 'House Owner (Customer)' : loginRole.replace('_', ' '), ":"]
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-slate-700 mt-0.5",
            children: ["Email: ", /*#__PURE__*/_jsx("strong", {
              children: loginEmail
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-slate-700",
            children: ["Password: ", /*#__PURE__*/_jsx("strong", {
              children: loginPassword
            })]
          })]
        }), loginError && /*#__PURE__*/_jsx("div", {
          className: "p-3 bg-rose-50 text-rose-800 text-xs rounded-xl border border-rose-200 font-bold",
          children: loginError
        }), /*#__PURE__*/_jsxs("form", {
          onSubmit: handleLogin,
          className: "space-y-3.5",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("label", {
              className: "block text-xs font-bold text-slate-800 mb-1",
              children: "Email Address"
            }), /*#__PURE__*/_jsx("input", {
              type: "email",
              value: loginEmail,
              onChange: e => setLoginEmail(e.target.value),
              className: "w-full px-3.5 py-2 border rounded-xl text-sm font-medium font-mono",
              required: true
            })]
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("label", {
              className: "block text-xs font-bold text-slate-800 mb-1",
              children: "Password"
            }), /*#__PURE__*/_jsx("input", {
              type: "password",
              value: loginPassword,
              onChange: e => setLoginPassword(e.target.value),
              className: "w-full px-3.5 py-2 border rounded-xl text-sm font-medium font-mono",
              required: true
            })]
          }), /*#__PURE__*/_jsxs("button", {
            type: "submit",
            className: "w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm rounded-xl shadow-md transition",
            children: ["Sign In to ", loginRole === 'admin' ? 'Admin Portal' : loginRole === 'house_owner' ? 'House Owner Dashboard' : 'Support Diagnostics Hub', " →"]
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "text-center pt-2 border-t",
          children: /*#__PURE__*/_jsx("button", {
            type: "button",
            onClick: () => {
              setShowLoginModal(false);
              setShowRegisterModal(true);
            },
            className: "text-xs text-emerald-700 hover:text-emerald-900 font-bold",
            children: "New user? Register House Owner Account →"
          })
        })]
      })
    }), /*#__PURE__*/_jsx("footer", {
      className: "glass-card border-t border-emerald-100 py-6 mt-auto text-xs text-slate-500 text-center font-medium bg-white",
      children: /*#__PURE__*/_jsx("div", {
        className: "max-w-7xl mx-auto px-4",
        children: /*#__PURE__*/_jsx("p", {
          children: "© 2026 SmartNest Smart Home & Connected Living Platform. All rights reserved."
        })
      })
    })]
  });
}
ReactDOM.render(/*#__PURE__*/_jsx(App, {}), document.getElementById('root'));