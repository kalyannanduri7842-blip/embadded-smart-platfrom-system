const { useState, useEffect, useMemo } = React;

const API_BASE = 'http://127.0.0.1:4010';

// ==========================================
// Hand-Drawn Pencil Sketch SVG Icon Library
// ==========================================
const IconHouse = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.5 L12 3 L21 10.5 V20 C21 20.6 20.5 21 20 21 H4 C3.4 21 3 20.6 3 20 Z" />
    <path d="M9 21 V13 H15 V21" />
  </svg>
);

const IconAdmin = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 18 L2 7 L7.5 11 L12 4 L16.5 11 L22 7 L20 18 Z" />
    <line x1="4" y1="21" x2="20" y2="21" />
  </svg>
);

const IconOwner = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5 L12 3 L21 9.5 V19 C21 20.1 20.1 21 19 21 H5 C3.9 21 3 20.1 3 19 Z" />
    <circle cx="12" cy="11" r="2.5" />
    <path d="M7.5 18 C7.5 15.5 9.5 14.5 12 14.5 C14.5 14.5 16.5 15.5 16.5 18" />
  </svg>
);

const IconFamily = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3" />
    <path d="M3 19c0-3 3-5 6-5s6 2 6 5" />
    <circle cx="16" cy="9" r="2" />
    <path d="M14 19c0-2 2-3.5 4.5-3.5S22 17 22 19" />
  </svg>
);

const IconSupport = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3 A 3.5 3.5 0 0 0 9.8 11.2 L3 18 L6 21 L12.8 14.2 A 3.5 3.5 0 0 0 17.7 9.3 Z" />
    <path d="M16 4 L20 8 M19 3 L21 5" />
  </svg>
);

const IconCart = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
    <path d="M2.5 3 H5 L7.2 14.5 H19.5 L21.5 6 H6" />
  </svg>
);

const IconBulb = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18 H15 M10 21 H14" />
    <path d="M7 9 C7 5.7 9.2 3 12 3 C14.8 3 17 5.7 17 9 C17 11.5 15.5 13 14.5 14.5 H9.5 C8.5 13 7 11.5 7 9 Z" />
  </svg>
);

const IconSensor = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8" strokeDasharray="3 2" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const IconClimate = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 14.7 V5 A 2 2 0 0 0 10 5 V14.7 A 4 4 0 1 0 14 14.7 Z" />
    <circle cx="12" cy="17" r="1.5" fill="currentColor" />
  </svg>
);

const IconEnergy = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconPackage = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 L20 7.5 V16.5 L12 21 L4 16.5 V7.5 Z" />
    <path d="M12 12 L20 7.5 M12 12 L4 7.5 M12 12 V21" />
  </svg>
);

const IconUsers = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconSettings = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const PencilHouseBig = () => (
  <svg className="w-20 h-20 text-emerald-700 mx-auto" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 12 L14 42 L24 42 L24 88 L76 88 L76 42 L86 42 Z" strokeDasharray="320" />
    <path d="M40 88 L40 56 L60 56 L60 88" />
    <path d="M30 32 L30 18 L38 18 L38 25" />
    <circle cx="50" cy="34" r="5" strokeWidth="2" />
  </svg>
);

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
    setToastMessage({ msg, type });
    setTimeout(() => setToastMessage(null), 3500);
  };

  const apiFetch = async (endpoint, options = {}) => {
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    try {
      const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
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
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-SUP-01_support_engineer' }
      }).then(r => r.json()).catch(() => null);
      if (sData) setSupportData(sData);

      const oData = await fetch(`${API_BASE}/api/owner/dashboard`, {
        headers: { 'Authorization': token || 'Bearer SMARTNEST_TOKEN_USR-OWN-01_house_owner' }
      }).then(r => r.json()).catch(() => null);
      if (oData) setOwnerData(oData);

      const fData = await fetch(`${API_BASE}/api/family/dashboard`, {
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-FAM-01_family_member' }
      }).then(r => r.json()).catch(() => null);
      if (fData) setFamilyData(fData);

      const aData = await fetch(`${API_BASE}/api/admin/dashboard`, {
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-ADM-01_admin' }
      }).then(r => r.json()).catch(() => null);
      if (aData) {
        const orders = await fetch(`${API_BASE}/api/admin/orders`, {
          headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-ADM-01_admin' }
        }).then(r => r.json()).catch(() => ({ orders: [] }));
        setAdminData({ ...aData, orders: orders.orders || [] });
      }

      const aSetts = await fetch(`${API_BASE}/api/admin/settings`, {
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-ADM-01_admin' }
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

  const setDemoPreset = (role) => {
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
  const openLoginFor = (role) => {
    setDemoPreset(role);
    setLoginError('');
    setShowLoginModal(true);
  };

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setLoginError('');
    try {
      const res = await apiFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: loginEmail, password: loginPassword })
      });
      setToken(res.token);
      localStorage.setItem('smartnest_token', res.token);
      setCurrentUser(res.user);
      setShowLoginModal(false);

      if (res.user.role === 'admin') setActivePortal('admin');
      else if (res.user.role === 'house_owner') setActivePortal('owner');
      else if (res.user.role === 'family_member') setActivePortal('family');
      else if (res.user.role === 'support_engineer') setActivePortal('support');
      showToast(`Welcome back, ${res.user.name}!`);
      loadAllDashboards();
    } catch (err) {
      setLoginError(err.message || 'Login failed. Please check credentials.');
    }
  };

  // ONLY House Owner / Customer Registration
  const handleRegisterOwner = async (e) => {
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

  // Device Controls
  const handleDeviceCommand = async (deviceId, command, value) => {
    try {
      const res = await apiFetch('/api/owner/device/command', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-OWN-01_house_owner' },
        body: JSON.stringify({ deviceId, command, value })
      });
      showToast(res.message);
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Family Member Controls Permitted Device
  const handleFamilyDeviceCommand = async (deviceId, command, value) => {
    try {
      const res = await apiFetch('/api/family/device/command', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-FAM-01_family_member' },
        body: JSON.stringify({ deviceId, command, value })
      });
      showToast(res.message);
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Owner Adds Device Manually
  const handleOwnerAddDevice = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    try {
      const res = await apiFetch('/api/owner/devices/add', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-OWN-01_house_owner' },
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
  const handleReportDeviceProblem = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await apiFetch('/api/owner/device/report-problem', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-OWN-01_house_owner' },
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
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-SUP-01_support_engineer' },
        body: JSON.stringify({ status, resolutionNotes: notes })
      });
      showToast(res.message);
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const handleSupportReplaceDevice = async (ticketId) => {
    try {
      const res = await apiFetch(`/api/support/tickets/${ticketId}/replace-device`, {
        method: 'POST',
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-SUP-01_support_engineer' }
      });
      showToast(res.message);
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Owner Confirms Resolution (Only then device returns online)
  const handleConfirmFixed = async (ticketId) => {
    try {
      const res = await apiFetch(`/api/owner/maintenance/${ticketId}/confirm-fixed`, {
        method: 'POST',
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-OWN-01_house_owner' }
      });
      showToast(res.message);
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const handleProblemPersists = async (ticketId) => {
    try {
      const res = await apiFetch(`/api/owner/maintenance/${ticketId}/problem-persists`, {
        method: 'POST',
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-OWN-01_house_owner' }
      });
      showToast(res.message, 'error');
      loadAllDashboards();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Admin Updates Platform & IoT Settings
  const handleSaveSettings = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    try {
      const res = await apiFetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-ADM-01_admin' },
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
  const addToCart = (product) => {
    if (product.stockQuantity <= 0) {
      showToast(`${product.name} is OUT OF STOCK.`, 'error');
      return;
    }
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to cart.`);
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));

  const handleCheckout = async () => {
    try {
      const items = cart.map(i => ({ productId: i.id, quantity: i.quantity }));
      const res = await apiFetch('/api/shop/checkout', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-OWN-01_house_owner' },
        body: JSON.stringify({ items })
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
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    try {
      const res = await apiFetch('/api/admin/inventory/product', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer SMARTNEST_TOKEN_USR-ADM-01_admin' },
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

  return (
    <div className="min-h-screen flex flex-col relative z-10 font-sans text-slate-900 bg-transparent">
      {/* Toast Alert */}
      {toastMessage && (
        <div className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl shadow-2xl border flex items-center gap-3 text-xs font-bold font-mono transition-all ${
          toastMessage.type === 'error' ? 'bg-rose-50 text-rose-900 border-rose-200' : 'bg-emerald-50 text-emerald-950 border-emerald-300'
        }`}>
          <span>{toastMessage.type === 'error' ? '[!]' : '[OK]'}</span>
          <span>{toastMessage.msg}</span>
        </div>
      )}

      {/* Main Top Navigation Bar */}
      <header className="glass-card sticky top-0 z-40 border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePortal('landing')}>
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-md">
                <IconHouse className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900">Smart<span className="text-emerald-700">Nest</span></span>
                <span className="text-[11px] text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full font-mono ml-2 border border-emerald-200 font-bold">Platform</span>
              </div>
            </div>

            {/* Top Navigation: Clicking Portals opens Login Credentials Modal */}
            <nav className="hidden md:flex items-center gap-1.5 bg-emerald-50/70 p-1.5 rounded-xl text-xs font-bold border border-emerald-100">
              <button
                onClick={() => setActivePortal('landing')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${activePortal === 'landing' ? 'bg-white text-emerald-800 shadow-sm font-bold' : 'text-slate-700 hover:text-emerald-800'}`}
              >
                <IconHouse className="w-4 h-4 text-emerald-700" />
                <span>Home</span>
              </button>
              <button
                onClick={() => openLoginFor('admin')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${activePortal === 'admin' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-700 hover:text-emerald-800 hover:bg-white'}`}
              >
                <IconAdmin className="w-4 h-4" />
                <span>Portal 1: Admin</span>
              </button>
              <button
                onClick={() => openLoginFor('house_owner')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${activePortal === 'owner' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-700 hover:text-emerald-800 hover:bg-white'}`}
              >
                <IconOwner className="w-4 h-4" />
                <span>Portal 2: House Owner</span>
              </button>
              <button
                onClick={() => openLoginFor('family_member')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${activePortal === 'family' ? 'bg-indigo-700 text-white shadow-sm' : 'text-slate-700 hover:text-indigo-800 hover:bg-indigo-50'}`}
              >
                <IconFamily className="w-4 h-4" />
                <span>Portal 3: Family Member</span>
              </button>
              <button
                onClick={() => openLoginFor('support_engineer')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${activePortal === 'support' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-700 hover:text-amber-700 hover:bg-amber-50'}`}
              >
                <IconSupport className="w-4 h-4" />
                <span>Support Hub</span>
              </button>
              <button
                onClick={() => setActivePortal('store')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${activePortal === 'store' ? 'bg-emerald-800 text-white shadow-sm' : 'text-slate-700 hover:text-emerald-800 hover:bg-emerald-50'}`}
              >
                <IconCart className="w-4 h-4" />
                <span>Store</span>
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1.5 px-3.5 py-2 text-emerald-900 hover:text-emerald-700 font-bold text-xs rounded-xl bg-emerald-50 border border-emerald-200 transition"
            >
              <IconCart className="w-4 h-4 text-emerald-700" />
              <span>Cart</span>
              {cart.length > 0 && (
                <span className="ml-1 bg-emerald-700 text-white text-[11px] px-1.5 py-0.2 rounded-full font-mono font-bold">
                  {cart.reduce((a, b) => a + b.quantity, 0)}
                </span>
              )}
            </button>

            <button
              onClick={() => setShowRegisterModal(true)}
              className="text-xs font-bold px-3.5 py-2 text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-xl border border-emerald-300 transition"
            >
              + Register Customer
            </button>

            <button
              onClick={() => openLoginFor('house_owner')}
              className="text-xs font-bold px-4 py-2 text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-sm transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Main Portals Router */}
      <main className="flex-grow">
        {/* ============================================================== */}
        {/* LANDING PAGE                                                   */}
        {/* ============================================================== */}
        {activePortal === 'landing' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
            <section className="text-center pt-4 pb-2 max-w-4xl mx-auto space-y-5">
              <PencilHouseBig />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-sm">
                <span>Smart Home, E-commerce Store & Family Permission Living Platform</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Your Home. <span className="text-emerald-700">Smarter</span>, Safer, Connected.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
                Register customer properties with house numbers, street lines, and village locations. Buy smart devices, track order deliveries, manage family permissions, and resolve complaints in real time.
              </p>

              <div className="flex flex-wrap justify-center gap-3.5 pt-2">
                <button
                  onClick={() => setShowRegisterModal(true)}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm shadow-md transition"
                >
                  <IconOwner className="w-5 h-5 text-white" />
                  <span>Register as House Owner / Customer →</span>
                </button>
                <button
                  onClick={() => openLoginFor('house_owner')}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm shadow-md transition"
                >
                  <span>Sign In to Dashboard</span>
                </button>
                <button
                  onClick={() => setActivePortal('store')}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-emerald-200 text-slate-800 font-extrabold text-sm hover:bg-emerald-50 hover:text-emerald-800 shadow-sm transition"
                >
                  <IconCart className="w-5 h-5 text-emerald-700" />
                  <span>Browse Store</span>
                </button>
              </div>
            </section>

            {/* 4 Core Dashboards Info Cards */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div
                onClick={() => openLoginFor('admin')}
                className="glass-card p-6 rounded-3xl cursor-pointer hover:border-emerald-500 hover:shadow-md transition space-y-3 border-emerald-100"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold border border-emerald-200">
                  <IconAdmin className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">Portal 1: Admin Operations</h3>
                <p className="text-xs text-slate-600 font-medium">Executive control over customer records, house & line addresses, store stock, orders, and complaints.</p>
                <div className="text-xs font-mono font-bold text-emerald-700 pt-2">Login as Admin →</div>
              </div>

              <div
                onClick={() => openLoginFor('house_owner')}
                className="glass-card p-6 rounded-3xl cursor-pointer hover:border-emerald-500 hover:shadow-md transition space-y-3 border-emerald-100"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold border border-emerald-200">
                  <IconOwner className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">Portal 2: House Owner</h3>
                <p className="text-xs text-slate-600 font-medium">Control appliances, register newly purchased hardware, grant family permissions, and track orders.</p>
                <div className="text-xs font-mono font-bold text-emerald-700 pt-2">Login as House Owner →</div>
              </div>

              <div
                onClick={() => openLoginFor('family_member')}
                className="glass-card p-6 rounded-3xl cursor-pointer hover:border-indigo-400 hover:shadow-md transition space-y-3 border-indigo-100"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">
                  <IconFamily className="w-6 h-6 text-indigo-700" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">Portal 3: Family Member</h3>
                <p className="text-xs text-slate-600 font-medium">View and control permitted devices (Living Room Light, Fan, AC) and report device problems.</p>
                <div className="text-xs font-mono font-bold text-indigo-700 pt-2">Login as Family (Ananya) →</div>
              </div>

              <div
                onClick={() => openLoginFor('support_engineer')}
                className="glass-card p-6 rounded-3xl cursor-pointer hover:border-amber-400 hover:shadow-md transition space-y-3 border-amber-100"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 font-bold border border-amber-200">
                  <IconSupport className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">Support & Maintenance</h3>
                <p className="text-xs text-slate-600 font-medium">Engineering diagnostics hub to review hardware complaints, test telemetry, and dispatch replacements.</p>
                <div className="text-xs font-mono font-bold text-amber-700 pt-2">Login as Support Team →</div>
              </div>
            </section>
          </div>
        )}

        {/* ============================================================== */}
        {/* PORTAL 1: ADMIN OPERATIONS & CUSTOMERS DIRECTORY               */}
        {/* ============================================================== */}
        {activePortal === 'admin' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            <div className="glass-card p-6 rounded-3xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">PORTAL 1 — ADMIN OPERATIONS (EXECUTIVE)</span>
                <h1 className="text-2xl font-black text-slate-900 mt-1">SmartNest Enterprise Platform</h1>
                <p className="text-xs text-slate-500 font-mono">Customers Directory, House Details, Complaints, Inventory, Orders & System Settings</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setAdminTab('customers')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition ${adminTab === 'customers' ? 'bg-emerald-700 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'}`}
                >
                  <IconUsers className="w-4 h-4" />
                  <span>Customers & Homes</span>
                </button>
                <button
                  onClick={() => setAdminTab('complaints')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition ${adminTab === 'complaints' ? 'bg-emerald-700 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'}`}
                >
                  <IconSupport className="w-4 h-4" />
                  <span>Support Complaints ({(adminData?.maintenanceTickets || []).length})</span>
                </button>
                <button
                  onClick={() => setAdminTab('products')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition ${adminTab === 'products' ? 'bg-emerald-700 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'}`}
                >
                  <IconPackage className="w-4 h-4" />
                  <span>Products & Stock</span>
                </button>
                <button
                  onClick={() => setAdminTab('orders')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition ${adminTab === 'orders' ? 'bg-emerald-700 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'}`}
                >
                  <IconCart className="w-4 h-4" />
                  <span>Orders Fulfillment</span>
                </button>
                <button
                  onClick={() => setAdminTab('settings')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition ${adminTab === 'settings' ? 'bg-emerald-700 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'}`}
                >
                  <IconSettings className="w-4 h-4" />
                  <span>Platform Settings</span>
                </button>
              </div>
            </div>

            {/* TAB 1: ALL REGISTERED CUSTOMERS & HOMES DIRECTORY */}
            {adminTab === 'customers' && (
              <div className="glass-card rounded-3xl shadow-sm p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                      <IconUsers className="w-5 h-5 text-emerald-700" />
                      <span>Registered Customers, Houses, Lines & Villages</span>
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">Full customer directory with house numbers, line address, village names, and live order history.</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-mono font-bold">
                    {(adminData?.customers || []).length} Total House Owners
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50/80 text-slate-700 font-mono text-xs uppercase border-b">
                      <tr>
                        <th className="p-3">Customer Name</th>
                        <th className="p-3">Contact Email & Phone</th>
                        <th className="p-3">Home / Villa Name</th>
                        <th className="p-3">House & Line Number</th>
                        <th className="p-3">Village / City</th>
                        <th className="p-3 text-center">Active Devices</th>
                        <th className="p-3 text-center">Total Orders</th>
                        <th className="p-3 text-center">Complaints</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {(adminData?.customers || []).map(cust => (
                        <tr key={cust.id} className="hover:bg-emerald-50/30">
                          <td className="p-3 font-bold text-slate-900">
                            <div>{cust.name}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{cust.id}</div>
                          </td>
                          <td className="p-3 text-xs">
                            <div className="font-semibold text-slate-800">{cust.email}</div>
                            <div className="text-slate-500 font-mono">{cust.phone}</div>
                          </td>
                          <td className="p-3 text-xs font-bold text-emerald-800">
                            <div>{cust.homeName}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{cust.homeId} ({cust.roomsCount} Rooms)</div>
                          </td>
                          <td className="p-3 text-xs">
                            <div className="font-bold text-slate-900">{cust.houseNumber}</div>
                            <div className="text-slate-500">{cust.lineAddress}</div>
                          </td>
                          <td className="p-3 text-xs font-semibold text-emerald-800 font-mono">
                            {cust.villageName}
                          </td>
                          <td className="p-3 text-center font-mono font-bold text-xs">
                            <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200">
                              {cust.totalDevices} Devices
                            </span>
                          </td>
                          <td className="p-3 text-center font-mono font-bold text-xs">
                            <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200">
                              {cust.totalOrders} Orders ({cust.deliveredOrders} Delivered)
                            </span>
                          </td>
                          <td className="p-3 text-center font-mono font-bold text-xs">
                            <span className={`px-2.5 py-0.5 rounded-full ${cust.openComplaints > 0 ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-600'}`}>
                              {cust.openComplaints} Open
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 2: SUPPORT COMPLAINTS & TICKETS */}
            {adminTab === 'complaints' && (
              <div className="glass-card rounded-3xl shadow-sm p-6 space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                      <IconSupport className="w-5 h-5 text-emerald-700" />
                      <span>Support & Customer Complaints Management</span>
                    </h3>
                    <p className="text-xs text-slate-500">Live ticket queue dispatched from House Owners across all villages.</p>
                  </div>
                </div>

                <div className="divide-y divide-slate-100 text-sm">
                  {(adminData?.maintenanceTickets || []).map(t => (
                    <div key={t.id} className="py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-900">#{t.id}</span>
                          <span className="font-extrabold text-slate-900">{t.deviceName} ({t.roomName})</span>
                          <span className="px-2.5 py-0.5 bg-rose-100 text-rose-800 text-xs font-bold rounded-md font-mono">{t.problemType}</span>
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-mono">Warranty: {t.warrantyStatus || 'ACTIVE'}</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1.5 font-medium">"{t.description}" — Raised by {t.reportedBy?.name}</p>
                        {t.resolutionNotes && <p className="text-xs text-emerald-800 font-mono font-bold mt-1">Resolution: {t.resolutionNotes}</p>}
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => handleSupportTicketUpdate(t.id, 'UNDER_REVIEW', 'Admin & Support reviewing hardware logs')}
                          className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200"
                        >
                          [Under Review]
                        </button>
                        <button
                          onClick={() => handleSupportTicketUpdate(t.id, 'PROCESSING', 'Diagnostics in progress')}
                          className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold rounded-lg border border-amber-200"
                        >
                          [Processing]
                        </button>
                        <button
                          onClick={() => handleSupportTicketUpdate(t.id, 'RESOLVED', 'Hardware verified and operational')}
                          className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg"
                        >
                          [Mark Resolved ✓]
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: PRODUCTS & INVENTORY */}
            {adminTab === 'products' && (
              <div className="glass-card rounded-3xl shadow-sm p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-extrabold text-slate-900 text-lg">Products & Live Store Stock</h3>
                  <button
                    onClick={() => setShowAddProductModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-extrabold rounded-xl shadow-md transition"
                  >
                    <IconPackage className="w-4 h-4 text-white" />
                    <span>+ Add New Product</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50/80 text-slate-700 font-mono text-xs uppercase border-b">
                      <tr>
                        <th className="p-3">Product Name</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Stock Available</th>
                        <th className="p-3">Installation</th>
                        <th className="p-3">Warranty</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {(adminData?.inventory || []).map(p => (
                        <tr key={p.id} className="hover:bg-emerald-50/30">
                          <td className="p-3 font-bold text-slate-900">{p.name}</td>
                          <td className="p-3 text-slate-700 font-medium">{p.category}</td>
                          <td className="p-3 font-mono font-black text-slate-900">₹{p.price}</td>
                          <td className="p-3 font-mono font-bold text-emerald-700">{p.stockQuantity} units</td>
                          <td className="p-3 text-xs">{p.requiresInstallation ? 'Required' : 'Self-Install'}</td>
                          <td className="p-3 text-xs text-slate-600">{p.warranty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 4: ORDERS */}
            {adminTab === 'orders' && (
              <div className="glass-card rounded-3xl shadow-sm p-6 space-y-4">
                <h3 className="font-extrabold text-slate-900 text-lg">Customer Hardware Orders</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50/80 text-slate-700 font-mono text-xs uppercase border-b">
                      <tr>
                        <th className="p-3">Order ID</th>
                        <th className="p-3">Customer</th>
                        <th className="p-3">Items</th>
                        <th className="p-3">Total</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {(adminData?.orders || []).map(o => (
                        <tr key={o.id} className="hover:bg-emerald-50/30">
                          <td className="p-3 font-mono font-bold text-slate-900">#{o.id}</td>
                          <td className="p-3 font-bold text-slate-900">{o.customerName}</td>
                          <td className="p-3 text-xs">
                            {o.items.map(i => <div key={i.productId}>• {i.name} (×{i.quantity})</div>)}
                          </td>
                          <td className="p-3 font-mono font-black">₹{o.totalAmount.toLocaleString()}</td>
                          <td className="p-3">
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase bg-emerald-50 text-emerald-800 border border-emerald-200">
                              {o.status.replace(/_/g, ' ')}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 5: PLATFORM & IOT GATEWAY SETTINGS */}
            {adminTab === 'settings' && (
              <div className="glass-card rounded-3xl shadow-sm p-6 space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                      <IconSettings className="w-5 h-5 text-emerald-700" />
                      <span>Platform & IoT Gateway Settings</span>
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Configure network telemetry intervals, MQTT brokers, firmware OTA policies, and emergency alerts.</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-mono font-bold">
                    Mesh Protocol: {adminSettings?.meshProtocol || 'Matter 1.2 / Zigbee 3.0'}
                  </span>
                </div>

                <form onSubmit={handleSaveSettings} className="space-y-4 max-w-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Gateway Polling Interval (Seconds)</label>
                      <input
                        name="gatewayPollIntervalSeconds"
                        type="number"
                        min="1"
                        max="60"
                        defaultValue={adminSettings?.gatewayPollIntervalSeconds || 5}
                        required
                        className="w-full px-3.5 py-2 border rounded-xl text-sm font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Support Resolution SLA (Hours)</label>
                      <input
                        name="supportSlaHours"
                        type="number"
                        min="1"
                        max="72"
                        defaultValue={adminSettings?.supportSlaHours || 24}
                        required
                        className="w-full px-3.5 py-2 border rounded-xl text-sm font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">MQTT Mesh Broker URL</label>
                    <input
                      name="mqttBrokerUrl"
                      type="text"
                      defaultValue={adminSettings?.mqttBrokerUrl || 'mqtt://mesh.smartnest.local:1883'}
                      required
                      className="w-full px-3.5 py-2 border rounded-xl text-sm font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Administrator Alerts Email</label>
                    <input
                      name="adminEmail"
                      type="email"
                      defaultValue={adminSettings?.adminEmail || 'admin@smartnest.local'}
                      required
                      className="w-full px-3.5 py-2 border rounded-xl text-sm font-mono"
                    />
                  </div>

                  <div className="pt-2 space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
                      <input
                        name="autoFirmwareOta"
                        type="checkbox"
                        defaultChecked={adminSettings?.autoFirmwareOta !== false}
                        className="rounded text-emerald-700"
                      />
                      <span>Enable Automatic Over-The-Air (OTA) Firmware Updates for ESP32 Gateways</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
                      <input
                        name="emergencySmsAlerts"
                        type="checkbox"
                        defaultChecked={adminSettings?.emergencySmsAlerts !== false}
                        className="rounded text-emerald-700"
                      />
                      <span>Enable Instant SMS & Push Alerts for Smoke/Gas Sensors</span>
                    </label>
                  </div>

                  <div className="pt-4 border-t flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500">Security Mode: AES-128 Hardware Encrypted</span>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs rounded-xl shadow-md transition"
                    >
                      [Save Platform Settings ✓]
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* PORTAL 2: HOUSE OWNER / CUSTOMER DASHBOARD                     */}
        {/* ============================================================== */}
        {activePortal === 'owner' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            <div className="glass-card p-6 rounded-3xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">PORTAL 2 — HOUSE OWNER (CUSTOMER)</span>
                <h1 className="text-2xl font-black text-slate-900 mt-1">{ownerData?.home?.name || 'Green Valley Villa'}</h1>
                <p className="text-xs text-slate-600 font-mono">
                  Customer / Owner: <span className="font-bold text-slate-900">{currentUser?.name || ownerData?.home?.ownerName || 'Rahul Sharma'}</span> · {ownerData?.home?.address || 'Door #101, Main Road, Smart Valley'}
                </p>
              </div>

              {/* Top Dashboard Metrics */}
              <div className="flex flex-wrap items-center gap-3 text-center">
                <div className="px-4 py-2 bg-emerald-50/80 border border-emerald-200 rounded-2xl flex items-center gap-3">
                  <IconClimate className="w-5 h-5 text-emerald-700" />
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-emerald-800 font-bold uppercase">TEMPERATURE</div>
                    <div className="text-base font-black text-slate-900 font-mono">{ownerData?.ambientTemperature || 24.5}°C</div>
                  </div>
                </div>

                <div className="px-4 py-2 bg-emerald-50/80 border border-emerald-200 rounded-2xl flex items-center gap-3">
                  <IconSensor className="w-5 h-5 text-emerald-700" />
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-emerald-800 font-bold uppercase">HUMIDITY</div>
                    <div className="text-base font-black text-slate-900 font-mono">{ownerData?.ambientHumidity || 58}%</div>
                  </div>
                </div>

                <div className="px-4 py-2 bg-emerald-100/80 border border-emerald-300 rounded-2xl flex items-center gap-3">
                  <IconEnergy className="w-5 h-5 text-emerald-800" />
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-emerald-900 font-bold uppercase">ENERGY TODAY</div>
                    <div className="text-base font-black text-slate-900 font-mono">{ownerData?.energyTodayKwh || 8.42} kWh</div>
                  </div>
                </div>

                <button
                  onClick={() => setShowAddDeviceModal(true)}
                  className="flex items-center gap-2 px-4 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-extrabold rounded-2xl shadow-md transition"
                >
                  <IconBulb className="w-4 h-4 text-white" />
                  <span>+ Register Device</span>
                </button>
              </div>
            </div>

            {/* Customer Home Information Banner */}
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl flex flex-wrap justify-between items-center gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-emerald-950">Property Details:</span>
                <span className="text-slate-700 ml-2">{ownerData?.home?.houseNumber || 'Door #101'}, {ownerData?.home?.lineAddress || 'Main Road'}, {ownerData?.home?.villageName || 'Smart Valley'}</span>
              </div>
              <div className="flex gap-4 font-mono font-bold text-emerald-800">
                <span>Orders Placed: {(ownerData?.orders || []).length}</span>
                <span>Active Nodes: {(ownerData?.devices || []).length}</span>
              </div>
            </div>

            {/* Room Devices Grid */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <IconHouse className="w-5 h-5 text-slate-800" />
                  <span>Living Rooms & Active Hardware Nodes</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {(ownerData?.devices || []).map(dev => (
                  <div key={dev.id} className="glass-card p-5 rounded-3xl shadow-sm space-y-3 hover:border-emerald-400 transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[11px] font-mono font-bold uppercase text-slate-400">{dev.roomName}</span>
                        <h3 className="font-extrabold text-slate-900 text-base">{dev.name}</h3>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-md text-xs font-mono font-bold ${
                        dev.health === 'MAINTENANCE_REQUIRED' ? 'bg-rose-100 text-rose-800' : (dev.powerState === 'ON' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600')
                      }`}>
                        {dev.health === 'MAINTENANCE_REQUIRED' ? 'COMPLAINT OPEN' : dev.powerState}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 font-mono">
                      Warranty: <span className="font-bold text-slate-800">{dev.warrantyStatus} (Exp: {dev.warrantyExpiry || '2028'})</span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/80">
                      {dev.health === 'MAINTENANCE_REQUIRED' ? (
                        <span className="text-xs text-rose-700 font-bold italic">⚠️ Awaiting Support Team Fix</span>
                      ) : (
                        <button
                          onClick={() => handleDeviceCommand(dev.id, 'POWER', dev.powerState === 'ON' ? 'OFF' : 'ON')}
                          className={`px-3 py-1 rounded-lg text-xs font-bold ${dev.powerState === 'ON' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-800'}`}
                        >
                          {dev.powerState === 'ON' ? 'Turn OFF' : 'Turn ON'}
                        </button>
                      )}

                      <button
                        onClick={() => setShowReportDeviceProblemModal(dev)}
                        className="flex items-center gap-1 text-xs text-slate-500 hover:text-rose-600 font-bold"
                      >
                        <IconSupport className="w-3.5 h-3.5 text-slate-500" />
                        <span>Raise Complaint</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Complaint Tickets with Live Status & Confirmation Gate */}
            <div className="glass-card p-6 rounded-3xl shadow-sm space-y-4">
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <IconSupport className="w-5 h-5 text-emerald-700" />
                <span>Your Dispatched Support Tickets (Live Complaint Status)</span>
              </h2>
              <div className="divide-y divide-slate-100 text-sm">
                {(ownerData?.maintenanceTickets || []).map(t => (
                  <div key={t.id} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <div className="font-bold text-slate-900">#{t.id} — {t.deviceName} ({t.problemType})</div>
                      <p className="text-xs text-slate-600 mt-1">"{t.description}"</p>
                      {t.resolutionNotes && <p className="text-xs text-emerald-800 font-mono font-bold mt-1">Support Resolution: {t.resolutionNotes}</p>}
                    </div>

                    <div className="flex items-center gap-2">
                      {t.status === 'RESOLVED' ? (
                        <>
                          <button
                            onClick={() => handleConfirmFixed(t.id)}
                            className="px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-sm"
                          >
                            [Confirm Fixed & Activate Device ✓]
                          </button>
                          <button
                            onClick={() => handleProblemPersists(t.id)}
                            className="px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold rounded-xl border border-rose-200"
                          >
                            [Problem Still Exists ⚠️]
                          </button>
                        </>
                      ) : (
                        <span className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${
                          t.status === 'WARRANTY_EXPIRED' ? 'bg-purple-100 text-purple-800' : (t.status === 'UNDER_REVIEW' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800')
                        }`}>
                          {t.status.replace(/_/g, ' ')}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* PORTAL 3: FAMILY MEMBER DASHBOARD                              */}
        {/* ============================================================== */}
        {activePortal === 'family' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            <div className="glass-card p-6 rounded-3xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">PORTAL 3 — FAMILY MEMBER (PERMITTED ACCESS)</span>
                <h1 className="text-2xl font-black text-slate-900 mt-1">Ananya's Family View</h1>
                <p className="text-xs text-slate-600 font-mono">
                  Home: <span className="font-bold text-slate-900">Green Valley Residence</span> · Access Level: Permitted Devices Only
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-indigo-50/80 border border-indigo-200 rounded-2xl flex items-center gap-3">
                  <IconClimate className="w-5 h-5 text-indigo-700" />
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-indigo-800 font-bold uppercase">AMBIENT TEMP</div>
                    <div className="text-base font-black text-slate-900 font-mono">24.5°C</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Permitted Devices List */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <IconFamily className="w-5 h-5 text-indigo-700" />
                  <span>Your Permitted Smart Devices</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {(familyData?.permittedDevices || [
                  { id: 'DEV-001', name: 'Living Room Smart Light', roomName: 'Living Room', powerState: 'ON', health: 'HEALTHY' },
                  { id: 'DEV-002', name: 'Living Room Smart Fan', roomName: 'Living Room', powerState: 'OFF', health: 'HEALTHY' },
                  { id: 'DEV-003', name: 'Master Bedroom AC Controller', roomName: 'Master Bedroom', powerState: 'ON', health: 'HEALTHY' }
                ]).map(dev => (
                  <div key={dev.id} className="glass-card p-5 rounded-3xl shadow-sm space-y-3 hover:border-indigo-400 transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[11px] font-mono font-bold uppercase text-slate-400">{dev.roomName}</span>
                        <h3 className="font-extrabold text-slate-900 text-base">{dev.name}</h3>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-md text-xs font-mono font-bold ${
                        dev.health === 'MAINTENANCE_REQUIRED' ? 'bg-rose-100 text-rose-800' : (dev.powerState === 'ON' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600')
                      }`}>
                        {dev.health === 'MAINTENANCE_REQUIRED' ? 'ERROR' : dev.powerState}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                      <button
                        onClick={() => handleFamilyDeviceCommand(dev.id, 'POWER', dev.powerState === 'ON' ? 'OFF' : 'ON')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold ${dev.powerState === 'ON' ? 'bg-indigo-700 text-white' : 'bg-slate-100 text-slate-800'}`}
                      >
                        {dev.powerState === 'ON' ? 'Turn OFF' : 'Turn ON'}
                      </button>

                      <button
                        onClick={() => setShowReportDeviceProblemModal(dev)}
                        className="flex items-center gap-1 text-xs text-slate-500 hover:text-rose-600 font-bold"
                      >
                        <IconSupport className="w-3.5 h-3.5 text-slate-500" />
                        <span>Report Problem</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* PORTAL 4: CUSTOMER SUPPORT TEAM DASHBOARD                      */}
        {/* ============================================================== */}
        {activePortal === 'support' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            <div className="glass-card p-6 rounded-3xl shadow-sm flex justify-between items-center">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">FIELD SUPPORT & WARRANTY ENGINEERING HUB</span>
                <h1 className="text-2xl font-black text-slate-900 mt-1">Customer Support & Diagnostics Queue</h1>
                <p className="text-xs text-slate-500 font-mono">Support Engineer: Alex Thorne · Real-Time Customer Ticket Queue</p>
              </div>
            </div>

            {/* Support Tickets Queue */}
            <div className="glass-card p-6 rounded-3xl shadow-sm space-y-4">
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <IconSupport className="w-5 h-5 text-amber-700" />
                <span>Incoming Customer Complaints & Problems (Dispatched by House Owners & Family)</span>
              </h2>
              <div className="divide-y divide-slate-100 text-sm">
                {(supportData?.tickets || []).map(t => (
                  <div key={t.id} className="py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-slate-900">#{t.id}</span>
                        <span className="font-extrabold text-slate-900">{t.deviceName} ({t.roomName})</span>
                        <span className="px-2.5 py-0.5 bg-rose-100 text-rose-800 text-xs font-bold rounded-md font-mono">{t.problemType}</span>
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-mono">Warranty: {t.warrantyStatus || 'ACTIVE'}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1.5 font-medium">"{t.description}" — Raised by {t.reportedBy?.name || 'Customer'}</p>
                      {t.resolutionNotes && <p className="text-xs text-emerald-800 font-mono font-bold mt-1">Resolution: {t.resolutionNotes}</p>}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => handleSupportTicketUpdate(t.id, 'UNDER_REVIEW', 'Support engineer Alex Thorne reviewing Zigbee mesh & logs')}
                        className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200"
                      >
                        [Under Review]
                      </button>

                      <button
                        onClick={() => handleSupportTicketUpdate(t.id, 'PROCESSING', 'Testing hardware telemetry & power draw')}
                        className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold rounded-lg border border-amber-200"
                      >
                        [Processing / Repair]
                      </button>

                      <button
                        onClick={() => handleSupportTicketUpdate(t.id, 'WARRANTY_EXPIRED', 'Warranty period expired. Replacement device purchase required.')}
                        className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold rounded-lg border border-rose-200"
                      >
                        [Warranty Expired]
                      </button>

                      <button
                        onClick={() => handleSupportTicketUpdate(t.id, 'RESOLVED', 'Diagnostic test passed. Calibrated power delivery and reconnected to mesh.')}
                        className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg"
                      >
                        [Mark Resolved & Fixed ✓]
                      </button>

                      <button
                        onClick={() => handleSupportReplaceDevice(t.id)}
                        className="px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-black rounded-lg shadow-sm"
                      >
                        [Dispatch Replacement 🔄]
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* PORTAL 5: SMARTNEST STORE EXPERIENCE                           */}
        {/* ============================================================== */}
        {activePortal === 'store' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <div className="bg-slate-950 text-white p-8 rounded-3xl shadow-xl border border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-700">STORE</span>
                <h1 className="text-3xl font-black mt-2">SmartNest Store</h1>
                <p className="text-slate-300 text-sm mt-1">"Bring smarter technology into your home."</p>
              </div>
              <button onClick={() => setIsCartOpen(true)} className="flex items-center gap-2 px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-md">
                <IconCart className="w-4 h-4 text-white" />
                <span>View Cart ({cart.reduce((a, b) => a + b.quantity, 0)} items) →</span>
              </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {shopProducts.map(p => (
                <div key={p.id} className="glass-card p-5 rounded-3xl shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-400 transition">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-emerald-700 font-bold">{p.category}</span>
                    <h4 className="font-extrabold text-slate-900 text-base mt-1">{p.name}</h4>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">{p.description}</p>
                    <div className="text-[11px] text-slate-500 mt-2 font-mono">Warranty: {p.warranty}</div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="font-mono font-black text-slate-900 text-lg">₹{p.price}</div>
                      <span className="text-xs font-mono font-bold text-emerald-700">{p.stockQuantity} in stock</span>
                    </div>
                    <button
                      onClick={() => addToCart(p)}
                      className="w-full py-2.5 bg-slate-900 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition"
                    >
                      + Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* MODAL: ONLY HOUSE OWNER / CUSTOMER REGISTRATION */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="font-black text-slate-900 text-lg">Customer / House Owner Registration</h3>
                <p className="text-xs text-slate-500">Enter your house number, street line address, and village details.</p>
              </div>
              <button onClick={() => setShowRegisterModal(false)} className="text-slate-400 hover:text-slate-700 font-bold text-lg">✕</button>
            </div>

            {registerError && <div className="p-3 bg-rose-50 text-rose-800 text-xs rounded-xl border border-rose-200 font-bold">{registerError}</div>}

            <form onSubmit={handleRegisterOwner} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Full Name</label>
                  <input name="name" required className="w-full px-3.5 py-2 border rounded-xl text-sm" placeholder="e.g. Ramesh Kumar" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Phone Number</label>
                  <input name="phone" required className="w-full px-3.5 py-2 border rounded-xl text-sm" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Email Address</label>
                  <input name="email" type="email" required className="w-full px-3.5 py-2 border rounded-xl text-sm" placeholder="ramesh@gmail.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Password</label>
                  <input name="password" type="password" required className="w-full px-3.5 py-2 border rounded-xl text-sm" placeholder="••••••••" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Home / Villa Name</label>
                <input name="homeName" required className="w-full px-3.5 py-2 border rounded-xl text-sm" placeholder="e.g. Sunrise Villa / Krishna Nilayam" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">House / Door #</label>
                  <input name="houseNumber" required className="w-full px-3.5 py-2 border rounded-xl text-sm font-mono" placeholder="Flat 204 / Door #12" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Line / Street</label>
                  <input name="lineAddress" required className="w-full px-3.5 py-2 border rounded-xl text-sm" placeholder="Line 3, Main Road" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Village / Town</label>
                  <input name="villageName" required className="w-full px-3.5 py-2 border rounded-xl text-sm" placeholder="Kalyanpur Village" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Number of Rooms</label>
                <input name="roomsCount" type="number" defaultValue={4} min={1} max={12} className="w-full px-3.5 py-2 border rounded-xl text-sm font-mono" />
              </div>

              <div className="pt-2 border-t flex justify-end gap-2">
                <button type="button" onClick={() => setShowRegisterModal(false)} className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-black rounded-xl shadow-md">
                  Complete Registration & Open Dashboard →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: HOUSE OWNER ADDS NEW DEVICE DIRECTLY */}
      {showAddDeviceModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200">
            <h3 className="font-black text-slate-900 text-lg">Add / Register Smart Device</h3>
            <form onSubmit={handleOwnerAddDevice} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Device Name</label>
                <input name="name" defaultValue="Study Room LED Panel" required className="w-full px-3.5 py-2 border rounded-xl text-sm font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Device Type</label>
                <select name="type" className="w-full px-3.5 py-2 border rounded-xl text-sm font-bold bg-white">
                  <option value="Smart Light">Smart Light</option>
                  <option value="Smart Fan">Smart Fan</option>
                  <option value="Air Conditioner">Air Conditioner</option>
                  <option value="Smart Plug">Smart Plug</option>
                  <option value="Smart Lock">Smart Lock</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Assigned Room</label>
                <select name="roomName" className="w-full px-3.5 py-2 border rounded-xl text-sm font-bold bg-white">
                  <option value="Living Room">Living Room</option>
                  <option value="Master Bedroom">Master Bedroom</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Front Door">Front Door</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-2 border-t">
                <button type="button" onClick={() => setShowAddDeviceModal(false)} className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-emerald-700 text-white text-xs font-black rounded-xl shadow-md">[REGISTER DEVICE ✓]</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADMIN ADDS NEW PRODUCT */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-slate-200">
            <h3 className="font-black text-slate-900 text-lg">Add New Product to Store Catalog</h3>
            <form onSubmit={handleAddProduct} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Product Name</label>
                <input name="name" required className="w-full px-3.5 py-2 border rounded-xl text-sm" placeholder="e.g. Smart Climate Hub" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Category</label>
                  <input name="category" defaultValue="Lighting" required className="w-full px-3.5 py-2 border rounded-xl text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Price (₹)</label>
                  <input name="price" type="number" defaultValue={1899} required className="w-full px-3.5 py-2 border rounded-xl text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Stock Quantity</label>
                  <input name="stockQuantity" type="number" defaultValue={30} required className="w-full px-3.5 py-2 border rounded-xl text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Min Stock Alert</label>
                  <input name="minStockLevel" type="number" defaultValue={5} required className="w-full px-3.5 py-2 border rounded-xl text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Description</label>
                <textarea name="description" rows="2" className="w-full px-3.5 py-2 border rounded-xl text-sm" placeholder="Details..." />
              </div>
              <div className="flex justify-end gap-2 pt-2 border-t">
                <button type="button" onClick={() => setShowAddProductModal(false)} className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-emerald-700 text-white text-xs font-black rounded-xl shadow-md">[ADD TO STORE ✓]</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: REPORT PROBLEM / RAISE COMPLAINT */}
      {showReportDeviceProblemModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200">
            <h3 className="font-black text-slate-900 text-lg">Raise Complaint: {showReportDeviceProblemModal.name}</h3>
            <p className="text-xs text-slate-500">Dispatches ticket to Support Engineering Queue.</p>
            <form onSubmit={handleReportDeviceProblem} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Problem Category</label>
                <select name="problemType" className="w-full px-3.5 py-2 border rounded-xl text-sm font-bold bg-white">
                  <option value="Device Not Working">Device Not Working / Offline</option>
                  <option value="Sensor Drift">Sensor Reading Drift</option>
                  <option value="Physical Defect">Physical Defect / Hardware Burn</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Description</label>
                <textarea name="description" required rows="3" className="w-full px-3.5 py-2 border rounded-xl text-sm" placeholder="Describe the symptom..." />
              </div>
              <div className="flex justify-end gap-2 pt-2 border-t">
                <button type="button" onClick={() => setShowReportDeviceProblemModal(null)} className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-black rounded-xl shadow-md">Dispatch to Support Team</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-md flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-4">
                <h3 className="font-black text-slate-900 text-lg">SmartNest Store Cart</h3>
                <button onClick={() => setIsCartOpen(false)} className="text-slate-400 hover:text-slate-700 font-bold">✕</button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-10 text-slate-400 text-sm font-semibold">Your cart is empty.</div>
              ) : (
                <div className="divide-y divide-slate-100 overflow-y-auto max-h-[60vh]">
                  {cart.map(item => (
                    <div key={item.id} className="py-3 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                        <div className="text-xs text-slate-500 font-mono">₹{item.price} × {item.quantity}</div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-rose-500 hover:text-rose-700 font-bold text-xs">Remove</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Total:</span>
                  <span className="font-mono text-xl font-black text-emerald-700">₹{cart.reduce((a, b) => a + b.price * b.quantity, 0).toLocaleString()}</span>
                </div>
                <button onClick={handleCheckout} className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-md transition">
                  Place Order →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Official Sign In Modal with Pre-filled Role Credentials */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="font-black text-slate-900 text-lg">SmartNest Authentication</h3>
                <p className="text-xs text-slate-500 font-medium">Please enter credentials to sign in.</p>
              </div>
              <button onClick={() => setShowLoginModal(false)} className="text-slate-400 hover:text-slate-700 font-bold text-lg">✕</button>
            </div>

            {/* Quick 4-Role Switcher */}
            <div className="grid grid-cols-4 gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold text-center">
              <button onClick={() => setDemoPreset('admin')} className={`py-2 rounded-lg transition ${loginRole === 'admin' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'}`}>
                <span>Admin</span>
              </button>
              <button onClick={() => setDemoPreset('house_owner')} className={`py-2 rounded-lg transition ${loginRole === 'house_owner' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'}`}>
                <span>Owner</span>
              </button>
              <button onClick={() => setDemoPreset('family_member')} className={`py-2 rounded-lg transition ${loginRole === 'family_member' ? 'bg-indigo-700 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'}`}>
                <span>Family</span>
              </button>
              <button onClick={() => setDemoPreset('support_engineer')} className={`py-2 rounded-lg transition ${loginRole === 'support_engineer' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'}`}>
                <span>Support</span>
              </button>
            </div>

            {/* Account Credentials Box */}
            <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs font-mono">
              <div className="font-bold text-emerald-900 uppercase">Login Credentials for {loginRole.replace('_', ' ')}:</div>
              <div className="text-slate-700 mt-0.5">Email: <strong>{loginEmail}</strong></div>
              <div className="text-slate-700">Password: <strong>{loginPassword}</strong></div>
            </div>

            {loginError && <div className="p-3 bg-rose-50 text-rose-800 text-xs rounded-xl border border-rose-200 font-bold">{loginError}</div>}

            <form onSubmit={handleLogin} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Email Address</label>
                <input type="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} className="w-full px-3.5 py-2 border rounded-xl text-sm font-medium font-mono" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Password</label>
                <input type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} className="w-full px-3.5 py-2 border rounded-xl text-sm font-medium font-mono" required />
              </div>
              <button type="submit" className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm rounded-xl shadow-md transition">
                Sign In to {loginRole === 'admin' ? 'Admin Portal' : (loginRole === 'house_owner' ? 'House Owner Dashboard' : (loginRole === 'family_member' ? 'Family Member Dashboard' : 'Support Hub'))} →
              </button>
            </form>

            <div className="text-center pt-2 border-t">
              <button
                type="button"
                onClick={() => { setShowLoginModal(false); setShowRegisterModal(true); }}
                className="text-xs text-emerald-700 hover:text-emerald-900 font-bold"
              >
                New user? Register House Owner Account →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="glass-card border-t border-emerald-100 py-6 mt-auto text-xs text-slate-500 text-center font-medium bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 SmartNest Smart Home & Connected Living Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
