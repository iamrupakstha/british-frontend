import axios from "axios";

// ✅ API Configuration - Use full URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

console.log('API URL:', API_URL); // Debug: Check what URL is being used

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

// Add token to headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Request URL:', config.baseURL + config.url); // Debug: Log full request URL
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.status, error.response?.data); // Debug
    
    if (error.response?.status === 401) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminData');
      window.location.href = '/admin/login';
    }
    
    if (error.response?.status === 404) {
      console.error('API endpoint not found. Check your API URL.');
    }
    
    if (error.response?.status === 403) {
      console.error('Access denied:', error.response.data?.message);
    }
    return Promise.reject(error);
  }
);

// ============================================================
// ADMIN APIs
// ============================================================
export const adminAPI = {
  login: (credentials) => {
    console.log('Login request to:', '/admin/login', credentials); // Debug
    return api.post('/admin/login', credentials);
  },
  getProfile: () => api.get('/admin/profile'),
  changePassword: (data) => api.put('/admin/change-password', data),
  forgotPassword: (data) => api.post('/admin/forgot-password', data),
  resetPassword: (token, data) => api.put(`/admin/reset-password/${token}`, data),
};

export default api;