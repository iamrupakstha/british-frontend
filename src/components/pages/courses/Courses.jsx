// src/components/pages/Courses.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCheckCircle,
  FaArrowRight,
  FaLaptopCode,
  FaHeart,
  FaBookOpen,
  FaGraduationCap,
  FaClock,
  FaAward,
  FaUsers,
  FaGlobe,
  FaChalkboardTeacher,
  FaLanguage,
  FaHandsHelping,
  FaPaintBrush
} from 'react-icons/fa';
import PageTitle from '../../common/PageTitle.jsx';

// Course Images
import EnglishLanguageImage from '../../../assets/images/courses/english-course.jpg';
import ComputerCoursesImage from '../../../assets/images/courses/computer-course.jpg';
import CareGiverImage from '../../../assets/images/courses/care-giver.jpeg';
import BeauticianCourse from '../../../assets/images/courses/beautician-course.jpg';
import ieltspte from '../../../assets/images/courses/ieltspte.webp';

import courseOverlay from '../../../assets/images/resources/british.jpeg';


import './css/Courses.css';

const Courses = () => {
  // ===== COURSES DATA =====
  const courses = [
    {
      id: 1,
      title: 'Computer Courses',
      category: 'computer',
      description: 'Basic to advanced computer courses, including CTEVT-affiliated programs.',
      image: ComputerCoursesImage,
      link: '/courses/computer-courses',
      icon: <FaLaptopCode />,
      featured: true
    },
    {
      id: 2,
      title: 'Test Preparation',
      category: 'english',
      description: 'IELTS and  PTE preparation with focused coaching.',
      image: ieltspte,
      link: '/courses/ielts-pte',
      icon: <FaChalkboardTeacher />,
      featured: true
    },
    {
      id: 3,
      title: 'English Language Class',
      category: 'english',
      description: 'British & American Based English language classes for all levels.',
      image: EnglishLanguageImage,
      link: '/courses/english-courses',
      icon: <FaLanguage />,
      featured: false
    },
    {
      id: 4,
      title: 'Care Giver Training',
      category: 'caregiver',
      description: 'CTEVT-affiliated child care, aged care and home care courses.',
      image: CareGiverImage,
      link: '/courses/care-giver',
      icon: <FaHandsHelping />,
      featured: false
    },
    {
      id: 5,
      title: 'Beautician Courses',
      category: 'professional',
      description: 'Professional makeup artist and beautician training programs.',
      image: BeauticianCourse,
      link: '/courses/beautician-course',
      icon: <FaPaintBrush />,
      featured: false
    },
  ];

  // ===== CATEGORIES =====
  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'computer', label: 'Computer Courses' },
    { id: 'english', label: 'English Language' },
    { id: 'caregiver', label: 'Care Giver' },
    { id: 'professional', label: 'Beautician' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  // ===== FILTER COURSES =====
  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  // ===== GET CATEGORY ICON =====
  const getCategoryIcon = (id) => {
    switch(id) {
      case 'computer': return <FaLaptopCode />;
      case 'english': return <FaBookOpen />;
      case 'caregiver': return <FaHeart />;
      case 'professional': return <FaGraduationCap />;
      default: return <FaGlobe />;
    }
  };

  return (
    <div className="courses-page">
      <PageTitle 
        title="Our Courses" 
        description="Explore our comprehensive range of courses - IT training, English language, Care Giver, and professional programs."
      />

      {/* ===== HERO - With Overlay Image ===== */}
      <section className="header-hero">
        <div className="header-hero-overlay"></div>
        <img src={courseOverlay} alt="Courses British Institution" className="header-hero-image" />
        <div className="header-hero-content">
          <div className="container">
            <span className="header-hero-tag">Our Courses</span>
            <h1>Explore Courses</h1>
            <p>Explore our comprehensive range of courses designed to help you achieve your goals.</p>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY FILTER ===== */}
      <section className="category-filter">
        <div className="container">
          <div className="filter-wrapper">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              >
                {category.id !== 'all' && getCategoryIcon(category.id)}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COURSES GRID ===== */}
      <section className="courses-grid-section">
        <div className="container">
          {filteredCourses.length === 0 ? (
            <div className="no-courses">
              <p>No courses found in this category.</p>
            </div>
          ) : (
            <div className="courses-grid">
              {filteredCourses.map((course) => (
                <div className="course-card" key={course.id}>
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    {course.featured && (
                      <span className="featured-badge">Featured</span>
                    )}
                    <span className="course-icon">{course.icon}</span>
                  </div>
                  <div className="course-content">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <Link to={course.link} className="course-link">
                      Explore Course <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="courses-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Courses Offered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Practical Training</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">CTEVT</span>
              <span className="stat-label">Affiliated Programs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-courses">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Why Learn With Us?</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon"><FaAward /></div>
              <h3>CTEVT Affiliated</h3>
              <p>Our technical programs are officially recognized by CTEVT.</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><FaUsers /></div>
              <h3>Expert Trainers</h3>
              <p>Learn from qualified instructors with years of experience.</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><FaClock /></div>
              <h3>Flexible Schedule</h3>
              <p>Morning, day, and evening batches to fit your routine.</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><FaGraduationCap /></div>
              <h3>Practical Training</h3>
              <p>Hands-on training with real-world applications.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;