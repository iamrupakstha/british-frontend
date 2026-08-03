// src/components/pages/ComputerCourses.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCheckCircle,
  FaArrowRight,
  FaLaptopCode,
  FaClock,
  FaAward,
  FaUsers,
  FaBookOpen,
  FaCertificate,
  FaGraduationCap,
  FaCalendarAlt,
  FaLayerGroup
} from 'react-icons/fa';
import PageTitle from '../../common/PageTitle.jsx';

// Course Images
import ComputerCoursesImage from '../../../assets/images/courses/computer-course.jpg';
import courseOverlay from '../../../assets/images/courses/course-overlay.jpg';

import './css/ComputerCourses.css';

const ComputerCourses = () => {
  // ===== COURSES DATA =====
  const courses = [
    {
      id: 1,
      title: 'Basic Course',
      description: 'Learn the fundamentals of computers, including hardware, software, and basic operations.',
      duration: '3 Months',
      level: 'Beginner',
      image: ComputerCoursesImage,
      features: ['Computer Basics', 'MS Office', 'Internet & Email', 'Typing Skills'],
      affiliated: false,
      path: '/basic-course'
    },
    {
      id: 2,
      title: 'Office Package',
      description: 'Master Microsoft Office applications for professional and personal use.',
      duration: '3 Months',
      level: 'Beginner',
      image: ComputerCoursesImage,
      features: ['MS Word', 'MS Excel', 'MS PowerPoint', 'MS Access'],
      affiliated: false,
      path: '/office-package'
    },
    {
      id: 3,
      title: 'Computer Operator',
      description: 'Comprehensive training to become a professional computer operator.',
      duration: '6 Months',
      level: 'Intermediate',
      image: ComputerCoursesImage,
      features: ['Hardware & Software', 'Networking Basics', 'Office Applications', 'Data Entry'],
      affiliated: true,
      affiliatedBy: 'CTEVT',
      path: '/computer-operator'
    },
    {
      id: 4,
      title: 'Diploma in Hardware Networking',
      description: 'In-depth training in computer hardware and networking.',
      duration: '12 Months',
      level: 'Advanced',
      image: ComputerCoursesImage,
      features: ['Hardware Maintenance', 'Network Setup', 'Server Management', 'Security Basics'],
      affiliated: true,
      affiliatedBy: 'CTEVT',
      path: '/hardware-networking'
    },
    {
      id: 5,
      title: 'Graphic Designing',
      description: 'Learn professional graphic design skills using industry-standard tools.',
      duration: '3 Months',
      level: 'Intermediate',
      image: ComputerCoursesImage,
      features: ['Photoshop', 'Illustrator', 'CorelDRAW', 'Design Principles'],
      affiliated: false,
      path: '/graphic-designing'
    },
    {
      id: 6,
      title: 'Accounting Package',
      description: 'Master accounting software and financial management skills.',
      duration: '3 Months',
      level: 'Intermediate',
      image: ComputerCoursesImage,
      features: ['Tally', 'QuickBooks', 'Financial Accounting', 'Taxation Basics'],
      affiliated: false,
      path: '/accounting-package'
    }
  ];

 

  return (
    <div className="computer-courses-page">
      <PageTitle 
        title="Computer Courses" 
        description="Explore our comprehensive range of computer courses - from basic to advanced, including CTEVT-affiliated programs."
      />

      {/* ===== HERO ===== */}
      <section className="header-hero">
        <div className="header-hero-overlay"></div>
        <img src={courseOverlay} alt="Computer Courses" className="header-hero-image" />
        <div className="header-hero-content">
          <div className="container">
            <span className="header-hero-tag">Computer Courses</span>
            <h1>Computer & IT Training</h1>
            <p>From basic to advanced, including CTEVT-affiliated programs. Build your career in IT.</p>
          </div>
        </div>
      </section>

      {/* ===== COURSES LIST ===== */}
      <section className="courses-list-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Programs</span>
            <h2>Computer Courses We Offer</h2>
            <p>Choose from our range of courses designed to build your IT career</p>
          </div>

          <div className="courses-list">
            {courses.map((course, index) => (
              <div className={`course-item ${index % 2 === 0 ? 'even' : 'odd'}`} key={course.id}>
                <div className="course-item-image">
                  <img src={course.image} alt={course.title} />
                  {course.affiliated && (
                    <span className="affiliated-badge">
                      <FaAward /> {course.affiliatedBy}
                    </span>
                  )}
                </div>
                <div className="course-item-content">
                  <div className="course-item-header">
                    <h3>{course.title}</h3>
                    <div className="course-tags">
                      <span className="tag duration"><FaClock /> {course.duration}</span>
                      <span className="tag level">{course.level}</span>
                      {course.affiliated && (
                        <span className="tag affiliated">CTEVT Affiliated</span>
                      )}
                    </div>
                  </div>
                  <p className="course-item-description">{course.description}</p>
                  <div className="course-item-features">
                    <h4>What You'll Learn:</h4>
                    <ul>
                      {course.features.map((feature, idx) => (
                        <li key={idx}><FaCheckCircle /> {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AFFILIATION ===== */}
      <section className="affiliation-section">
        <div className="container">
          <div className="affiliation-content">
            <div className="affiliation-icon">
              <FaCertificate />
            </div>
            <div className="affiliation-text">
              <h2>CTEVT Affiliated Programs</h2>
              <p>Our Computer Operator and Diploma in Hardware Networking programs are officially affiliated with CTEVT (Council for Technical Education and Vocational Training).</p>
              <ul>
                <li><FaCheckCircle /> Government Recognized Certification</li>
                <li><FaCheckCircle /> Industry Standard Curriculum</li>
                <li><FaCheckCircle /> Qualified Instructors</li>
                <li><FaCheckCircle /> Practical Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Why Learn With Us?</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon"><FaAward /></div>
              <h3>CTEVT Affiliated</h3>
              <p>Government recognized programs with industry-standard curriculum.</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><FaUsers /></div>
              <h3>Expert Trainers</h3>
              <p>Learn from qualified instructors with years of industry experience.</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><FaClock /></div>
              <h3>Flexible Schedule</h3>
              <p>Morning, day, and evening batches to fit your routine.</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><FaGraduationCap /></div>
              <h3>Practical Training</h3>
              <p>Hands-on training with real-world applications and projects.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComputerCourses;