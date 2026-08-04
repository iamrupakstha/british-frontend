import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import './css/AdminLogin.css';
import PageTitle from '../common/PageTitle.jsx';


const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // ✅ Validate fields
    if (!email || !password) {
      setError('Please enter your email and password');
      return;
    }

    setLoading(true);

    try {
      console.log('🔐 Submitting login...');
      const result = await login(email, password);
      console.log('📥 Login result:', result);
      
      // ✅ Only redirect on success
      if (result.success) {
        toast.success('Welcome back!');
        console.log('✅ Navigating to dashboard...');
        // ✅ Small delay to ensure state updates
        setTimeout(() => {
          navigate('/admin/dashboard', { replace: true });
        }, 300);
      } else {
        // ✅ Show error in form - NO REDIRECT
        const errorMsg = result.message || 'Invalid email or password. Please try again.';
        setError(errorMsg);
        toast.error(errorMsg);
        // ✅ Keep user on login page
      }
    } catch (error) {
      console.error('❌ Login error:', error);
      const errorMsg = error.message || 'An error occurred during login';
      setError(errorMsg);
      toast.error(errorMsg);
      // ✅ Keep user on login page
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <PageTitle title="Login Page" description="Login Page" />
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <div className="login-logo">📜</div>
          <h1>Login</h1>
          <p>British Institution of Education</p>
        </div>
        
        <form onSubmit={handleSubmit} className="admin-login-form">
          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(''); 
                }}
                placeholder="Email Address"
                required
                autoComplete="email"
                className={error ? 'input-error' : ''}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(''); 
                }}
                placeholder="Password"
                required
                autoComplete="current-password"
                className={error ? 'input-error' : ''}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="btn-login"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-small"></span>
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>
        
        <div className="admin-login-footer">
          <Link to="/">← Back to Home</Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminLogin;