import React, { createContext, useState, useContext, useEffect } from "react";
import { authAPI } from "../services/api";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [error, setError] = useState(null);

  // ============================================
  // 🔄 LOAD USER ON APP START
  // ============================================

  useEffect(() => {
    const loadUser = () => {
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      
      if (storedToken && storedUser && storedUser !== 'undefined' && storedUser !== 'null') {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setToken(storedToken);
          console.log('✅ User loaded from localStorage:', parsedUser);
        } catch (e) {
          console.warn('⚠️ Invalid user data in localStorage');
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setToken(null);
          setUser(null);
        }
      }
      setLoading(false);
    };
    
    loadUser();
  }, []);

  // ============================================
  // 🔑 ADMIN LOGIN
  // ============================================

  const login = async (email, password) => {
    try {
      setError(null);
      console.log('🔑 Attempting admin login...');
      
      const response = await authAPI.login({ email, password });
      
      console.log('📦 Login response:', response.data);
      
      if (!response.data.success) {
        throw new Error(response.data.message || 'Login failed');
      }

      const authToken = response.data.token;
      if (!authToken) {
        throw new Error('No token received from server');
      }

      // Get user data from response
      let userData = response.data.data || response.data.admin || response.data.user;
      
      if (!userData) {
        if (response.data.id || response.data._id) {
          userData = {
            id: response.data.id || response.data._id,
            name: response.data.name || 'Admin',
            email: response.data.email || email,
            role: 'admin',
            isFirstLogin: response.data.isFirstLogin || false
          };
        } else {
          throw new Error('No user data received from server');
        }
      }

      console.log('✅ Login successful:', userData);

      // Store token and user in localStorage
      localStorage.setItem('token', authToken);
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Update state
      setToken(authToken);
      setUser(userData);

      return { 
        success: true, 
        user: userData,
        requiresPasswordChange: userData.isFirstLogin || false
      };
    } catch (error) {
      console.error('❌ Login error:', error);
      
      let errorMessage = 'Login failed. Please try again.';
      
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = 'Invalid email or password. Please try again.';
        } else if (error.response.status === 404) {
          errorMessage = 'Server not found. Please check your connection.';
        } else if (error.response.data?.message) {
          errorMessage = error.response.data.message;
        }
      } else if (error.request) {
        errorMessage = 'No response from server. Please check your connection.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
      return { 
        success: false, 
        message: errorMessage 
      };
    }
  };

  // ============================================
  // 🔐 CHANGE PASSWORD
  // ============================================

  const changePassword = async (currentPassword, newPassword) => {
    try {
      setError(null);
      const response = await authAPI.changePassword({
        currentPassword,
        newPassword
      });
      
      if (response.data.success) {
        // Update token if provided
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          setToken(response.data.token);
        }
        return { success: true };
      }
      return { 
        success: false, 
        message: response.data.message || 'Password change failed' 
      };
    } catch (error) {
      console.error('❌ Password change error:', error);
      const message = error.response?.data?.message || 'Password change failed';
      setError(message);
      return { success: false, message };
    }
  };

  // ============================================
  // 🚪 LOGOUT
  // ============================================

  const logout = () => {
    console.log('👋 Logging out...');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    setError(null);
  };

  // ============================================
  // 📊 COMPUTED VALUES
  // ============================================

  const isAuthenticated = !!user && !!token;

  // Debug logging
  useEffect(() => {
    console.log('🔍 Auth State:', { 
      isAuthenticated, 
      user: user?.name || user?.email, 
      hasToken: !!token,
      loading
    });
  }, [user, isAuthenticated, token, loading]);

  // ============================================
  // 📤 PROVIDE VALUE - ✅ ADDED changePassword
  // ============================================

  const value = {
    user,
    loading,
    token,
    error,
    login,
    logout,
    changePassword, // ✅ ADD THIS
    isAuthenticated,
    setUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;