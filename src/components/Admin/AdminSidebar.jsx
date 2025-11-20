import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      isActive
        ? 'bg-teal-500 text-white shadow-md'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <aside
      className={`bg-gray-800 text-white h-screen sticky top-0 transition-all duration-300 flex flex-col ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo & Toggle */}
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        {!isCollapsed && (
          <div className="text-xl font-bold">
            <span className="text-teal-400">Admin</span>
            <span>Panel</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-700 transition-colors ml-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-300 ${
              isCollapsed ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <NavLink to="/admin" end className={navLinkClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          {!isCollapsed && <span>Dashboard</span>}
        </NavLink>

        <NavLink to="/admin/products" className={navLinkClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
          {!isCollapsed && <span>Ürün Yönetimi</span>}
        </NavLink>

        <div className={`${isCollapsed ? 'hidden' : 'pt-4 mt-4 border-t border-gray-700'}`}>
          <p className="text-xs text-gray-400 px-4 mb-2">DİĞER</p>
        </div>

        <NavLink to="/" className={navLinkClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {!isCollapsed && <span>Ana Siteye Dön</span>}
        </NavLink>
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3 text-sm text-gray-400">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center font-bold text-white">
              A
            </div>
            <div>
              <p className="font-medium text-white">Admin User</p>
              <p className="text-xs">admin@shop.com</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default AdminSidebar;
