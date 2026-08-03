import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import ChangePassword from './ChangePassword';
import './css/AdminLayout.css';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const navItems = [
    { path: '/admin/dashboard', label: 'Dashboard' },
    { path: '/admin/certificates', label: 'Certificates' },
    { path: '/admin/contacts', label: 'Contacts' },
    { path: '/verify-certificate', label: 'Verify Certificate' },
  ];

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="admin-layout">
      {/* Mobile Menu Button */}
      <button className="s-mobile-menu-btn" onClick={toggleSidebar}>
        <span className="s-menu-icon">☰</span>
      </button>

      {/* Sidebar */}
      <aside className={`asidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="asidebar-header1">
          <h2>Admin Panel</h2>
          <p className="asidebar-subtitle1">British Institution</p>
        </div>
        
        <nav className="asidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`anav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="asidebar-footer">
          <div className="user-info">
            <span className="user-name">{user?.name || 'Admin'}</span>
            <span className="user-email">{user?.email || 'britishinstitution@gmail.com'}</span>
          </div>
          
          {/* ✅ Add Change Password Button */}
          <button 
            onClick={() => setShowChangePassword(true)} 
            className="change-password-btn"
          >
            Change Password
          </button>
          
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <h1>{navItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}</h1>
          <div className="header-right">
            <span className="datetime">{new Date().toLocaleString()}</span>
          </div>
        </header>
        <div className="content-area">
          <Outlet />
        </div>
      </main>

      {/* Change Password Modal */}
      {showChangePassword && (
        <ChangePassword onClose={() => setShowChangePassword(false)} />
      )}
    </div>
  );
};

export default AdminLayout;