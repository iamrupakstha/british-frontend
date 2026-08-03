import React, { useState } from 'react';
import { certificateAPI } from '../../services/api';
import toast from 'react-hot-toast';
import './VerifyCertificate.css';

const VerifyCertificate = () => {
  const [regdNo, setRegdNo] = useState('');
  const [loading, setLoading] = useState(false);
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState(null);

  const handleVerify = async (e) => {
    e.preventDefault();
    
    if (!regdNo.trim()) {
      setError('Please enter a registration number');
      return;
    }

    setLoading(true);
    setError(null);
    setCertificate(null);

    try {
      const response = await certificateAPI.verify(regdNo.trim());
      
      if (response.data.success && response.data.verified) {
        setCertificate(response.data.certificate);
        toast.success('Certificate verified successfully!');
      } else {
        setError('Certificate not found or not verified');
      }
    } catch (error) {
      if (error.response?.status === 404) {
        setError('No certificate found with this registration number');
      } else {
        setError('Failed to verify certificate. Please try again.');
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCourseBadgeClass = (type) => {
    const classes = {
      'Caregiver': 'course-caregiver',
      'Computer': 'course-computer',
      'Beautician': 'course-beautician'
    };
    return classes[type] || '';
  };

  return (
    <div className="verify-container">
      <div className="verify-wrapper">
        <div className="verify-header">
          <div className="verify-icon">📜</div>
          <h1>Certificate Verification</h1>
          <p>Enter the registration number to verify the authenticity of a certificate</p>
        </div>

        <form onSubmit={handleVerify} className="verify-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter Registration Number"
              value={regdNo}
              onChange={(e) => {
                setRegdNo(e.target.value);
                setError(null);
                setCertificate(null);
              }}
              disabled={loading}
              className={error ? 'input-error' : ''}
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Verifying...' : 'Verify'}
            </button>
          </div>
          {error && (
            <div className="verify-error">
              <span className="error-icon">⚠️</span>
              <p>{error}</p>
            </div>
          )}
        </form>

        {loading && (
          <div className="verify-loading">
            <div className="spinner"></div>
            <p>Verifying certificate...</p>
          </div>
        )}

        {certificate && (
          <div className="verify-result">
            <div className="result-header">
              <div className="result-icon">✅</div>
              <h2>Certificate Verified</h2>
              <span className="result-badge verified">Verified</span>
            </div>

            <div className="certificate-details">
              <div className="detail-row">
                <span className="label">Student Name</span>
                <span className="value">{certificate.studentName}</span>
              </div>
              <div className="detail-row">
                <span className="label">Address</span>
                <span className="value">{certificate.studentAddress}</span>
              </div>
              <div className="detail-row">
                <span className="label">Course</span>
                <span className="value">{certificate.courseName}</span>
              </div>
              <div className="detail-row">
                <span className="label">Course Type</span>
                <span className="value">
                  <span className={`course-badge ${getCourseBadgeClass(certificate.courseType)}`}>
                    {certificate.courseType}
                  </span>
                </span>
              </div>
              <div className="detail-row">
                <span className="label">Registration Number</span>
                <span className="value regd-number">{certificate.regdNo}</span>
              </div>
              <div className="detail-row">
                <span className="label">Issue Date</span>
                <span className="value">{formatDate(certificate.issueDate)}</span>
              </div>
              <div className="detail-row">
                <span className="label">Status</span>
                <span className="value">
                  <span className="status-verified">✅ Verified</span>
                </span>
              </div>
            </div>

            {certificate.certificateImage && (
              <div className="certificate-image">
                <h3>Certificate Scan</h3>
                <div className="image-wrapper">
                  <img 
                    src={certificate.certificateImage} 
                    alt="Certificate" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<p class="no-image">Certificate image not available</p>';
                    }}
                  />
                </div>
              </div>
            )}

            <div className="result-footer">
              <p>This certificate is issued by <strong>British Institution of Education Pvt. Ltd.</strong></p>
            </div>
          </div>
        )}

        <div className="verify-footer">
          <p>&copy; {new Date().getFullYear()} British Institution of Education. All rights reserved.</p>
          <a href="/">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;