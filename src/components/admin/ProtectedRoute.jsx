import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './css/ProtectedRoute.css';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, user } = useAuth();
  
  console.log('🔒 ProtectedRoute - isAuthenticated:', isAuthenticated);
  console.log('🔒 ProtectedRoute - loading:', loading);
  console.log('🔒 ProtectedRoute - user:', user);
  
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    console.log('🔒 Redirecting to login...');
    return <Navigate to="/admin/login" replace />;
  }
  
  console.log('🔒 Rendering protected content...');
  return children;
};

export default ProtectedRoute;