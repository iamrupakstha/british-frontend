// src/components/pages/courses/CareGiverCourses.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaAward,
  FaUsers,
  FaGlobe,
  FaGraduationCap,
  FaHeart,
  FaHandsHelping,
  FaBed,
  FaWheelchair,
  FaHospital,
  FaBuilding,
  FaClipboardList,
  FaUserGraduate,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope
} from 'react-icons/fa';
import PageTitle from '../../common/PageTitle.jsx';

// Course Images
import CareGiverImage from '../../../assets/images/courses/care-giver1.webp';
import courseOverlay from '../../../assets/images/courses/care-giver.jpeg';

import './css/CareGiverCourses.css';

const CareGiverCourses = () => {
  // ===== COURSES DATA =====
  const courses = [
    {
      id: 1,
      title: 'Child Care',
      description: 'Comprehensive training in child care including child development, health, safety, and nutrition. Learn to provide quality care for children of all ages.',
      icon: <FaHeart />,
      duration: 'CTEVT / 390 hours'
    },
    {
      id: 2,
      title: 'Aged Care',
      description: 'Professional training in elderly care including health monitoring, medication management, and compassionate care for senior citizens.',
      icon: <FaHandsHelping />,
      duration: 'CTEVT / 390 hours'
    },
    {
      id: 3,
      title: 'Home Care',
      description: 'Complete home care training including home management, personal care, safety protocols, and first aid for home-based caregiving.',
      icon: <FaBuilding />,
      duration: 'CTEVT / 390 hours'
    },
    {
      id: 4,
      title: 'G to G Caregiver',
      description: 'Global to Global caregiver training with international standards and best practices for caregiving across different cultures and settings.',
      icon: <FaGlobe />,
      duration: 'CTEVT / 390 hours'
    }
  ];

  // ===== FACILITIES DATA =====
  const facilities = [
    { icon: <FaHospital />, title: 'ICU Bed', description: 'Hands-on training with ICU bed equipment and patient monitoring systems.' },
    { icon: <FaAward />, title: 'Hoist Machine', description: 'Practical training with hoist machine operation and patient transfer techniques.' },
    { icon: <FaWheelchair />, title: 'Deluxe Wheelchair', description: 'Training on deluxe wheelchair handling and safe patient transfer procedures.' },
    { icon: <FaBuilding />, title: 'Own Care Center', description: 'In-house care center for practical training and real-world caregiving experience.' },
  ];

  // ===== TRAINING FEATURES =====
  const trainingFeatures = [
    'World-Class Training',
    'Internship Facility',
    'Regular Practical Classes',
    'CTEVT Curriculum 390 Credit Hours',
    'Hands-on Training',
    'Industry Expert Trainers',
    'Real-world Simulation',
    'Patient Care Techniques',
    'Emergency Response Training',
    'Communication Skills'
  ];

  return (
    <div className="caregiver-courses-page">
      <PageTitle 
        title="Care Giver Courses" 
        description="CTEVT affiliated Care Giver training programs - Child Care, Aged Care, Home Care, and G to G Caregiver training."
      />

      {/* ===== HERO ===== */}
      <section className="courses-hero">
        <div className="courses-hero-overlay"></div>
        <img src={courseOverlay} alt="Care Giver Courses" className="courses-hero-image" />
        <div className="courses-hero-content">
          <div className="container">
            <span className="courses-hero-tag">Care Giver Courses</span>
            <h1>Professional Care Giver Training</h1>
            <p>Our training is designed to provide world-class education and practical skills for aspiring caregivers.</p>
          </div>
        </div>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text">
              <span className="section-tag">Overview</span>
              <h2>About Care Giver Training</h2>
              <p>British Care Giver Center provides comprehensive caregiver training programs affiliated with CTEVT. Our curriculum is designed to meet international standards with 390 credit hours of intensive training.</p>
              <p>We offer specialized training in Child Care, Aged Care, Home Care, and G to G Caregiver programs. Our training includes both theoretical knowledge and practical experience to prepare students for real-world caregiving situations.</p>
              <div className="overview-highlights">
                <div className="highlight-item">
                  <FaGraduationCap />
                  <div>
                    <h4>CTEVT Affiliated</h4>
                    <p>Government recognized certification</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaClock />
                  <div>
                    <h4>390 Credit Hours</h4>
                    <p>Comprehensive curriculum</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaAward />
                  <div>
                    <h4>World-Class Training</h4>
                    <p>International standards</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaUsers />
                  <div>
                    <h4>Expert Trainers</h4>
                    <p>Qualified professionals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview-image">
              <img src={CareGiverImage} alt="Care Giver Training" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR COURSES ===== */}
      <section className="courses-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Courses</span>
            <h2>CTEVT / 390 Hours</h2>
            <p>Comprehensive training programs for aspiring caregivers</p>
          </div>
          
          <div className="courses-grid">
            {courses.map((course) => (
              <div className="course-card" key={course.id}>
                <div className="course-icon">{course.icon}</div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <span className="course-badge">{course.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FACILITIES ===== */}
      <section className="facilities-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Facilities</span>
            <h2>Our Training Facilities</h2>
            <p>State-of-the-art facilities for hands-on caregiver training</p>
          </div>
          
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div className="facility-card" key={index}>
                <div className="facility-icon">{facility.icon}</div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRAINING FEATURES ===== */}
      <section className="training-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Training</span>
            <h2>Training Features</h2>
            <p>World-class training with practical experience and internship opportunities</p>
          </div>
          
          <div className="training-grid">
            {trainingFeatures.map((feature, index) => (
              <div className="training-card" key={index}>
                <FaCheckCircle />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareGiverCourses;