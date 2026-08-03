// src/components/pages/courses/BeauticianCourses.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaAward,
  FaUsers,
  FaGraduationCap,
  FaStar,
  FaPaintBrush,
  FaHands,
  FaSpa,
  FaHeart,
  FaCrown
} from 'react-icons/fa';
import PageTitle from '../../common/PageTitle.jsx';

// Course Images
import BeauticianImage from '../../../assets/images/courses/beautician-course.jpg';
import courseOverlay from '../../../assets/images/courses/beautician-course.jpg';

import './css/BeauticianCourses.css';
import { FiScissors } from 'react-icons/fi';

const BeauticianCourses = () => {
  // ===== 45 DAYS COURSE TOPICS =====
  const shortCourseTopics = [
    'Basic Makeup',
    'Half Cut Crease',
    'Full Cut Crease',
    'Smokey Eye Makeup',
    'Party Makeup',
    'Halo Makeup',
    'Bridal Makeup',
    'Product Knowledge',
    'Hair Zuro'
  ];

  // ===== 3 MONTHS COURSE TOPICS =====
  const longCourseTopics = [
    'Threading',
    'Cleansing',
    'Waxing',
    'Facial',
    'Roller Setting',
    'Heena Art (Mehendi)',
    'Oil Massage',
    'Blow Dry',
    'Manicure & Pedicure',
    'Hair Putup / Hair Zuro',
    'Hair Cutting',
    'Hair Highlight',
    'Hair Straight'
  ];

  // ===== WHY CHOOSE BEAUTICIAN COURSE =====
  const features = [
    'Professional Makeup Artist Training',
    'Hands-on Practical Experience',
    'Industry Expert Trainers',
    'Modern Equipment & Products',
    'Career Guidance & Support',
    'Certificate Upon Completion'
  ];

  return (
    <div className="beautician-courses-page">
      <PageTitle 
        title="Beautician Courses" 
        description="Professional Makeup Artist Training - 45 Days and 3 Months courses with comprehensive beauty training."
      />

      {/* ===== HERO ===== */}
      <section className="courses-hero">
        <div className="courses-hero-overlay"></div>
        <img src={courseOverlay} alt="Beautician Courses" className="courses-hero-image" />
        <div className="courses-hero-content">
          <div className="container">
            <span className="courses-hero-tag">Beautician Courses</span>
            <h1>Professional Makeup Artist Course</h1>
            <p>Under the Education Enhancement Campaign, 300 individuals will receive free training this year.</p>
          </div>
        </div>
      </section>

           {/* ===== OVERVIEW + IMAGE ===== */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text">
              <span className="section-tag">Overview</span>
              <h2>About Beautician Course</h2>
              <p>Our Professional Beautician Course is designed to transform you into a skilled makeup artist. With comprehensive training in makeup techniques, hair styling, and beauty treatments, you'll be ready to start your career in the beauty industry.</p>
              <p>The course covers both theoretical knowledge and practical skills, ensuring you gain hands-on experience with professional tools and products.</p>
              <div className="overview-highlights">
                <div className="highlight-item">
                  <FaClock />
                  <div>
                    <h4>Flexible Duration</h4>
                    <p>45 Days or 3 Months</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaAward />
                  <div>
                    <h4>Professional Certification</h4>
                    <p>Recognized certificate upon completion</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaUsers />
                  <div>
                    <h4>Expert Trainers</h4>
                    <p>Industry professionals</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaStar />
                  <div>
                    <h4>Practical Training</h4>
                    <p>Hands-on experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview-image">
              <img src={BeauticianImage} alt="Beautician Training" />
            </div>
          </div>
        </div>
      </section>


      {/* ===== COURSES OVERVIEW ===== */}
      <section className="courses-overview">
        <div className="container">
          <div className="courses-overview-grid">
            {/* 45 Days Course */}
            <div className="course-overview-card short-course">
              <div className="course-overview-header">
                <div className="course-overview-icon">
                  <FaClock />
                </div>
                <h2>45 Days Course</h2>
                <p>Basic to Professional Makeup Training</p>
              </div>
              <div className="course-overview-content">
                <ul>
                  {shortCourseTopics.map((topic, index) => (
                    <li key={index}><FaCheckCircle /> {topic}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3 Months Course */}
            <div className="course-overview-card long-course">
              <div className="course-overview-header">
                <div className="course-overview-icon">
                  <FaAward />
                </div>
                <h2>3 Months Course</h2>
                <p>Professional Beautician Course</p>
              </div>
              <div className="course-overview-content">
                <ul>
                  {longCourseTopics.map((topic, index) => (
                    <li key={index}><FaCheckCircle /> {topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCHOLARSHIP HIGHLIGHT ===== */}
      <section className="scholarship-highlight">
        <div className="container">
          <div className="scholarship-banner">
            <div className="scholarship-icon">
              <FaCrown />
            </div>
            <div className="scholarship-content">
              <h2>🎓 300 Free Training!</h2>
              <p>Under the Education Enhancement Campaign, 300 individuals will receive free training this year.</p>
              <p className="scholarship-detail">Selected candidates will be provided with comprehensive beautician training at absolutely no cost.</p>
              <Link to="/contact" className="btn-scholarship">
                Apply for Scholarship <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Why Choose Our Beautician Course?</h2>
          </div>
          <div className="why-grid">
            {features.map((feature, index) => (
              <div className="why-item" key={index}>
                <div className="why-icon"><FaStar /></div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeauticianCourses;