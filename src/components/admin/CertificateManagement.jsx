import React, { useState, useEffect, useRef } from 'react';
import { certificateAPI } from '../../services/api';
import toast from 'react-hot-toast';
import './css/CertificateManagement.css';

const CertificateManagement = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [courseType, setCourseType] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  
  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewingCertificate, setViewingCertificate] = useState(null);
  const [editingCertificate, setEditingCertificate] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    studentAddress: '',
    courseName: '',
    courseType: 'Caregiver',
    regdNo: '',
    issueDate: ''
  });
  
  // File states
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [existingImage, setExistingImage] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchCertificates();
  }, [search, courseType, currentPage]);

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const params = {
        page: currentPage,
        limit: 10
      };
      
      if (search) params.search = search;
      if (courseType !== 'All') params.courseType = courseType;
      
      const response = await certificateAPI.getAll(params);
      
      setCertificates(response.data.certificates || []);
      setTotalPages(response.data.totalPages || 1);
      setTotal(response.data.total || 0);
    } catch (error) {
      toast.error('Failed to fetch certificates');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this certificate?')) return;
    
    try {
      await certificateAPI.delete(id);
      toast.success('Certificate deleted successfully');
      fetchCertificates();
    } catch (error) {
      toast.error('Failed to delete certificate');
      console.error(error);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Please upload a valid image file (JPEG, PNG, WEBP)');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    setSelectedFile(file);
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!editingCertificate && !selectedFile) {
      toast.error('Please select a certificate image');
      return;
    }

    try {
      setUploading(true);
      
      const formDataObj = new FormData();
      
      formDataObj.append('studentName', formData.studentName);
      formDataObj.append('studentAddress', formData.studentAddress);
      formDataObj.append('courseName', formData.courseName);
      formDataObj.append('courseType', formData.courseType);
      formDataObj.append('regdNo', formData.regdNo);
      formDataObj.append('issueDate', formData.issueDate || new Date().toISOString().split('T')[0]);
      
      if (selectedFile) {
        formDataObj.append('certificateImage', selectedFile);
      }

      let response;
      if (editingCertificate) {
        response = await certificateAPI.update(editingCertificate._id, formDataObj);
        toast.success('Certificate updated successfully');
      } else {
        response = await certificateAPI.create(formDataObj);
        toast.success('Certificate created successfully');
      }
      
      setShowModal(false);
      resetForm();
      fetchCertificates();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Operation failed');
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleView = (certificate) => {
    setViewingCertificate(certificate);
    setShowViewModal(true);
  };

  const handleEdit = (certificate) => {
    setEditingCertificate(certificate);
    setFormData({
      studentName: certificate.studentName || '',
      studentAddress: certificate.studentAddress || '',
      courseName: certificate.courseName || '',
      courseType: certificate.courseType || 'Caregiver',
      regdNo: certificate.regdNo || '',
      issueDate: certificate.issueDate ? new Date(certificate.issueDate).toISOString().split('T')[0] : ''
    });
    setExistingImage(certificate.certificateImage || '');
    setImagePreview(certificate.certificateImage || null);
    setSelectedFile(null);
    setShowModal(true);
  };

  const resetForm = () => {
    setEditingCertificate(null);
    setFormData({
      studentName: '',
      studentAddress: '',
      courseName: '',
      courseType: 'Caregiver',
      regdNo: '',
      issueDate: ''
    });
    setImagePreview(null);
    setSelectedFile(null);
    setExistingImage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setSelectedFile(null);
    setExistingImage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getCourseBadgeClass = (type) => {
    const classes = {
      'Caregiver': 'course-caregiver',
      'Computer': 'course-computer',
      'Beautician': 'course-beautician'
    };
    return classes[type] || '';
  };

  const formatDate = (date) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading && certificates.length === 0) {
    return (
      <div className="certificate-loading">
        <div className="loading-spinner"></div>
        <p>Loading certificates...</p>
      </div>
    );
  }

  return (
    <div className="certificate-management">
      {/* Header */}
      <div className="management-header">
        <div>
          <h1>Certificates</h1>
          <p>{total} certificates found</p>
        </div>
        <button className="btn-primary" onClick={() => { resetForm(); setShowModal(true); }}>
          + Add Certificate
        </button>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search certificates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-wrapper">
          <select value={courseType} onChange={(e) => setCourseType(e.target.value)}>
            <option value="All">All Types</option>
            <option value="Caregiver">Caregiver</option>
            <option value="Computer">Computer</option>
            <option value="Beautician">Beautician</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="certificates-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Student</th>
              <th>Course</th>
              <th>Regd No</th>
              <th>Type</th>
              <th>Issue Date</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {certificates.length === 0 ? (
              <tr>
                <td colSpan="8" className="empty-state">No certificates found</td>
              </tr>
            ) : (
              certificates.map((cert, index) => (
                <tr key={cert._id}>
                  <td>{(currentPage - 1) * 10 + index + 1}</td>
                  <td>
                    <div className="student-cell">
                      <span className="student-name">{cert.studentName}</span>
                      <span className="student-address">{cert.studentAddress}</span>
                    </div>
                  </td>
                  <td>{cert.courseName}</td>
                  <td><span className="regd-badge">{cert.regdNo}</span></td>
                  <td>
                    <span className={`course-badge ${getCourseBadgeClass(cert.courseType)}`}>
                      {cert.courseType}
                    </span>
                  </td>
                  <td>{formatDate(cert.issueDate)}</td>
                  <td>
                    {cert.certificateImage ? (
                      <img 
                        src={cert.certificateImage} 
                        alt="Certificate" 
                        className="cert-thumbnail"
                        onClick={() => handleView(cert)}
                      />
                    ) : (
                      <span className="no-image">—</span>
                    )}
                  </td>
                  <td>
                    <div className="action-group">
                      <button className="btn-action view" onClick={() => handleView(cert)}>View</button>
                      <button className="btn-action edit" onClick={() => handleEdit(cert)}>Edit</button>
                      <button className="btn-action delete" onClick={() => handleDelete(cert._id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingCertificate ? 'Edit Certificate' : 'Add Certificate'}</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            </div>
            
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Student Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter student name"
                  />
                </div>
                <div className="form-group">
                  <label>Student Address *</label>
                  <input
                    type="text"
                    name="studentAddress"
                    value={formData.studentAddress}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter student address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Course Name *</label>
                  <input
                    type="text"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter course name"
                  />
                </div>
                <div className="form-group">
                  <label>Course Type *</label>
                  <select
                    name="courseType"
                    value={formData.courseType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Caregiver">Caregiver</option>
                    <option value="Computer">Computer</option>
                    <option value="Beautician">Beautician</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Registration Number *</label>
                  <input
                    type="text"
                    name="regdNo"
                    value={formData.regdNo}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 191807/74/075"
                  />
                </div>
                <div className="form-group">
                  <label>Issue Date *</label>
                  <input
                    type="date"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Certificate Image {!editingCertificate && '*'}</label>
                <div className="file-upload-area">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    accept="image/*"
                    className="file-input"
                    id="certificateImage"
                  />
                  <label htmlFor="certificateImage" className="file-upload-label">
                    <span className="upload-icon">📤</span>
                    <span>
                      {selectedFile ? selectedFile.name : (editingCertificate && existingImage ? 'Change image' : 'Click to upload')}
                    </span>
                    <small>JPEG, PNG, WEBP (Max 5MB)</small>
                  </label>
                </div>
                
                {imagePreview && (
                  <div className="image-preview-wrapper">
                    <img src={imagePreview} alt="Certificate preview" className="image-preview" />
                    <button type="button" className="remove-image" onClick={handleRemoveImage}>×</button>
                  </div>
                )}
                
                {uploading && (
                  <div className="upload-progress">
                    <div className="progress-bar"></div>
                    <span>Uploading...</span>
                  </div>
                )}
              </div>

              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn-submit" disabled={uploading}>
                  {uploading ? 'Uploading...' : (editingCertificate ? 'Update' : 'Create')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Modal */}
      {showViewModal && viewingCertificate && (
        <div className="modal-overlay" onClick={() => setShowViewModal(false)}>
          <div className="modal view-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Certificate Details</h2>
              <button className="modal-close" onClick={() => setShowViewModal(false)}>×</button>
            </div>
            
            <div className="view-modal-body">
              <div className="view-image">
                <img src={viewingCertificate.certificateImage} alt="Certificate" />
              </div>
              
              <div className="view-details">
                <div className="detail-item">
                  <span className="label">Student</span>
                  <span className="value">{viewingCertificate.studentName}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Address</span>
                  <span className="value">{viewingCertificate.studentAddress}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Course</span>
                  <span className="value">{viewingCertificate.courseName}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Type</span>
                  <span className={`course-badge ${getCourseBadgeClass(viewingCertificate.courseType)}`}>
                    {viewingCertificate.courseType}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="label">Registration</span>
                  <span className="value regd">{viewingCertificate.regdNo}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Issue Date</span>
                  <span className="value">{formatDate(viewingCertificate.issueDate)}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Status</span>
                  <span className={`status-badge ${viewingCertificate.isVerified ? 'verified' : 'unverified'}`}>
                    {viewingCertificate.isVerified ? 'Verified' : 'Unverified'}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="label">Verifications</span>
                  <span className="value">{viewingCertificate.verificationCount || 0}</span>
                </div>
              </div>
            </div>

            <div className="view-modal-actions">
              <button className="btn-close" onClick={() => setShowViewModal(false)}>Close</button>
              <button className="btn-edit" onClick={() => { setShowViewModal(false); handleEdit(viewingCertificate); }}>Edit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateManagement;