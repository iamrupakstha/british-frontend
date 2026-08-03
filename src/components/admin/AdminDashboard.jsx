import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { certificateAPI, contactAPI } from '../../services/api';
import toast from 'react-hot-toast';
import './css/AdminDashboard.css';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalCertificates: 0,
    totalContacts: 0,
    pendingContacts: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      const [certStats, contactStats] = await Promise.all([
        certificateAPI.getStats(),
        contactAPI.getStats()
      ]);
      
      setStats({
        totalCertificates: certStats.data.stats?.total || 0,
        totalContacts: contactStats.data.stats?.total || 0,
        pendingContacts: contactStats.data.stats?.pending || 0
      });
    } catch (error) {
      toast.error('Failed to load dashboard data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-content">
            <span className="stat-label">Total Certificates</span>
            <span className="stat-number">{stats.totalCertificates}</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-content">
            <span className="stat-label">Total Contacts</span>
            <span className="stat-number">{stats.totalContacts}</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-content">
            <span className="stat-label">Pending Contacts</span>
            <span className="stat-number">{stats.pendingContacts}</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="content-grid">
        <div className="content-card">
          <h3>Quick Actions</h3>
          <div className="quick-actions">
            <Link to="/admin/certificates" className="action-link">
              Manage Certificates
            </Link>
            <Link to="/admin/contacts" className="action-link">
              View Contacts
            </Link>
            <Link to="/admin/certificates" className="action-link">
              Add Certificate
            </Link>
          </div>
        </div>

        <div className="content-card">
          <h3>System Status</h3>
          <div className="status-items">
            <div className="status-item">
              <span className="status-label">Server</span>
              <span className="status-value online">Online</span>
            </div>
            <div className="status-item">
              <span className="status-label">Database</span>
              <span className="status-value online">Connected</span>
            </div>
            <div className="status-item">
              <span className="status-label">Last Login</span>
              <span className="status-value">
                {user?.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;