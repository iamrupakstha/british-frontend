import axios from "axios";

// API Configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

console.log('🔗 API URL:', API_URL);

// Create axios instance
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
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// ============================================
// AUTH APIs
// ============================================
export const authAPI = {
  login: (credentials) => api.post('/admin/login', credentials),
  changePassword: (data) => api.put('/admin/change-password', data),
  forgotPassword: (data) => api.post('/admin/forgot-password', data),
  resetPassword: (token, data) => api.put(`/admin/reset-password/${token}`, data),
};

// ============================================
// CERTIFICATE APIs
// ============================================
export const certificateAPI = {
  getAll: (params) => api.get('/certificates', { params }),
  getById: (id) => api.get(`/certificates/${id}`),
  verify: (regdNo) => api.get(`/certificates/verify/${regdNo}`),
  create: (data) => {
    // For creating with file upload
    if (data instanceof FormData) {
      return api.post('/certificates', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }
    return api.post('/certificates', data);
  },
  update: (id, data) => {
    // For updating with file upload
    if (data instanceof FormData) {
      return api.put(`/certificates/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }
    return api.put(`/certificates/${id}`, data);
  },
  delete: (id) => api.delete(`/certificates/${id}`),
  bulkUpload: (data) => api.post('/certificates/bulk', data),
  getStats: () => api.get('/certificates/stats'),
};

// ============================================
// CONTACT APIs
// ============================================
export const contactAPI = {
  submit: (data) => api.post('/contact', data),
  getAll: (params) => api.get('/contact', { params }),
  getById: (id) => api.get(`/contact/${id}`),
  updateStatus: (id, data) => api.put(`/contact/${id}`, data),
  delete: (id) => api.delete(`/contact/${id}`),
  getStats: () => api.get('/contact/stats'),
};

export default api;