import React, { useState } from 'react';
import { contactAPI } from '../../services/api';
import toast from 'react-hot-toast';
import './EnrollForm.css';
import PageTitle from '../common/PageTitle';

const EnrollForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '', // Maps to courseInterested
    message: '',
    preferredCountry: '',
    preferredCourse: '',
    address: '',
    interestedIn: 'Course Information'
  });

  const [errors, setErrors] = useState({});

  const courseOptions = [
    'Caregiver Training',
    'Computer Basic',
    'Computer Advanced',
    'Beautician Course',
    'IELTS Preparation',
    'PTE Preparation',
    'English Language',
    'Other'
  ];

  const countryOptions = [
    'UK',
    'USA',
    'Australia',
    'Canada',
    'Korea',
    'Malta',
    'Europe',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10,15}$/.test(formData.phone.replace(/[\s\-()]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Please select a course';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix all errors before submitting');
      return;
    }

    setLoading(true);

    try {
      // Prepare data for API - matches your contact model
      const submitData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject, // Course interested in
        message: formData.message,
        preferredCountry: formData.preferredCountry,
        preferredCourse: formData.preferredCourse,
        interestedIn: 'Course Information' // Auto-set
      };

      const response = await contactAPI.submit(submitData);
      
      if (response.data.success) {
        toast.success('Enrollment form submitted successfully!');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          preferredCountry: '',
          preferredCourse: '',
          address: '',
          interestedIn: 'Course Information'
        });
        setErrors({});
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.response?.data?.message || 'Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="enroll-container">

      <PageTitle 
              title="Enroll Now "
              description="British Institution - Empowering futures with IT, Language & Consultancy" 
      />
        
      <div className="enroll-wrappers">
        <div className="enroll-header">
          <h1>Enroll Now</h1>
          <p>Start your educational journey with British Institution of Education Pvt. Ltd.</p>
        </div>

        <form onSubmit={handleSubmit} className="enroll-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={errors.fullName ? 'error' : ''}
              />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ram123@gmail.com"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="98XXXXXXXX"
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your address"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Course Interested In *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? 'error' : ''}
              >
                <option value="">Select a course</option>
                {courseOptions.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
              {errors.subject && <span className="error-text">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label>Preferred Country</label>
              <select
                name="preferredCountry"
                value={formData.preferredCountry}
                onChange={handleChange}
              >
                <option value="">Select a country</option>
                {countryOptions.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Preferred Course Name (Optional)</label>
            <input
              type="text"
              name="preferredCourse"
              value={formData.preferredCourse}
              onChange={handleChange}
              placeholder="e.g., Computer Basic Course"
            />
          </div>

          <div className="form-group">
            <label>Your Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your educational goals and what you're looking for..."
              rows="5"
              className={errors.message ? 'error' : ''}
            />
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          <button 
            type="submit" 
            className="btn-submit"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Enrollment'}
          </button>
        </form>

        <div className="enroll-footer">
          <p>© {new Date().getFullYear()} British Institution of Education. All rights reserved.</p>
          <p className="secure-text">🔒 Your information is secure and will not be shared</p>
        </div>
      </div>
    </div>
  );
};

export default EnrollForm;