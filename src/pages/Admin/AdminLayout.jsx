import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faTimes, 
  faHome, 
  faUsers, 
  faBox, 
  faShoppingCart, 
  faChartLine, 
  faCog,
  faSearch,
  faBell,
  faUserCircle,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/admin', icon: faHome, label: 'Dashboard' },
    { path: '/admin/users', icon: faUsers, label: 'Users' },
    { path: '/admin/products', icon: faBox, label: 'Products' },
    { path: '/admin/orders', icon: faShoppingCart, label: 'Orders' },
    { path: '/admin/analytics', icon: faChartLine, label: 'Analytics' },
    { path: '/admin/settings', icon: faCog, label: 'Settings' },
  ];

  const isActive = (path) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar - Desktop */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white transition-all duration-300 z-40 hidden md:block ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-purple-700">
          {sidebarOpen && (
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Admin Panel
            </h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
          </button>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-4 transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 border-l-4 border-white'
                  : 'hover:bg-purple-700/50'
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-xl" />
              {sidebarOpen && <span className="ml-4 font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-purple-700">
          <button className="flex items-center w-full px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            <FontAwesomeIcon icon={faSignOutAlt} />
            {sidebarOpen && <span className="ml-4">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Sidebar - Mobile */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white transition-transform duration-300 z-50 w-64 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-purple-700">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center px-6 py-4 transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 border-l-4 border-white'
                  : 'hover:bg-purple-700/50'
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-xl" />
              <span className="ml-4 font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? 'md:ml-64' : 'md:ml-20'
        }`}
      >
        {/* Top Bar */}
        <header className="bg-white shadow-md sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors md:hidden"
              >
                <FontAwesomeIcon icon={faBars} className="text-gray-700" />
              </button>
              
              <div className="relative hidden sm:block">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <FontAwesomeIcon icon={faBell} className="text-gray-700 text-xl" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center gap-3 pl-4 border-l border-gray-300">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold text-gray-800">Admin User</p>
                  <p className="text-xs text-gray-500">admin@example.com</p>
                </div>
                <button className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white hover:shadow-lg transition-shadow">
                  <FontAwesomeIcon icon={faUserCircle} className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
