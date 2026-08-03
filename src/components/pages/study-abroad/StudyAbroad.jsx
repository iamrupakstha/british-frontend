// src/components/pages/study-abroad/StudyAbroad.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGraduationCap, 
  FaGlobe, 
  FaUniversity,
  FaCheckCircle,
  FaArrowRight,
  FaPassport,
  FaPlane,
  FaFileAlt,
  FaHandshake,
  FaUsers,
  FaBuilding,
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt
} from 'react-icons/fa';
import PageTitle from '../../common/PageTitle.jsx';

// Hero Image
import StudyAbroadHero from '../../../assets/images/hero/study-abroad.webp';

// Destination Images
import UK from '../../../assets/images/study-abroad/uk.jpg';
import USA from '../../../assets/images/study-abroad/usa.jpg';
import Australia from '../../../assets/images/study-abroad/australia.jpg';
import Canada from '../../../assets/images/study-abroad/canada.jpg';
import Korea from '../../../assets/images/study-abroad/korea.jpg';
import Malta from '../../../assets/images/study-abroad/malta.jpg';
import Europe from '../../../assets/images/study-abroad/europe.jpg';

import './css/studyAbroad.css';

const StudyAbroad = () => {
  // ===== DESTINATIONS DATA =====
  const destinations = [
    {
      id: 1,
      name: 'United Kingdom',
      flag: '🇬🇧',
      image: UK,
      description: 'World-class education with prestigious universities like Oxford, Cambridge, and Imperial College.',
      requirements: 'IELTS 6.0+, Academic Records',
      duration: '1-4 Years',
      intake: 'Sep, Jan, May',
      path: '/study-abroad/uk'
    },
    {
      id: 2,
      name: 'United States',
      flag: '🇺🇸',
      image: USA,
      description: 'Home to the world\'s top universities with diverse programs and research opportunities.',
      requirements: 'IELTS/TOEFL, SAT/ACT',
      duration: '2-4 Years',
      intake: 'Aug, Jan',
      path: '/study-abroad/usa'
    },
    {
      id: 3,
      name: 'Australia',
      flag: '🇦🇺',
      image: Australia,
      description: 'High-quality education system with excellent post-study work opportunities.',
      requirements: 'IELTS 6.0+, Academic Records',
      duration: '1-4 Years',
      intake: 'Feb, Jul',
      path: '/study-abroad/australia'
    },
    {
      id: 4,
      name: 'Canada',
      flag: '🇨🇦',
      image: Canada,
      description: 'Affordable education with a welcoming environment and excellent immigration pathways.',
      requirements: 'IELTS 6.0+, Academic Records',
      duration: '1-4 Years',
      intake: 'Sep, Jan, May',
      path: '/study-abroad/canada'
    },
    {
      id: 5,
      name: 'South Korea',
      flag: '🇰🇷',
      image: Korea,
      description: 'Innovative education system with cutting-edge technology and research facilities.',
      requirements: 'TOPIK, IELTS 5.5+',
      duration: '1-4 Years',
      intake: 'Mar, Sep',
      path: '/study-abroad/korea'
    },
    {
      id: 6,
      name: 'Malta',
      flag: '🇲🇹',
      image: Malta,
      description: 'Quality education in a Mediterranean setting with English as the medium of instruction.',
      requirements: 'IELTS 5.5+, Academic Records',
      duration: '1-3 Years',
      intake: 'Oct, Jan, Apr',
      path: '/study-abroad/malta'
    },
    {
      id: 7,
      name: 'Europe',
      flag: '🇪🇺',
      image: Europe,
      description: 'Diverse education opportunities across Europe with globally recognized universities.',
      requirements: 'IELTS 5.5+, Academic Records',
      duration: '1-4 Years',
      intake: 'Sep, Feb',
      path: '/study-abroad/europe'
    },
  ];

  // ===== SERVICES DATA =====
  const services = [
    {
      icon: <FaPassport />,
      title: 'Visa Assistance',
      description: 'Complete guidance for student visa applications, documentation, and interview preparation.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Application Support',
      description: 'University application assistance, statement of purpose writing, and scholarship guidance.'
    },
    {
      icon: <FaHandshake />,
      title: 'Career Counseling',
      description: 'Expert advice on course selection, university choice, and future career opportunities.'
    },
    {
      icon: <FaPlane />,
      title: 'Pre-Departure Support',
      description: 'Pre-departure orientation, accommodation assistance, and travel guidance.'
    }
  ];

  // ===== WHY STUDY ABROAD =====
  const benefits = [
    {
      icon: <FaGraduationCap />,
      title: 'Global Education',
      description: 'Access to world-class universities and diverse learning environments.'
    },
    {
      icon: <FaGlobe />,
      title: 'International Exposure',
      description: 'Cultural exchange and networking with students from around the world.'
    },
    {
      icon: <FaBuilding />,
      title: 'Career Opportunities',
      description: 'Better job prospects and global career opportunities after graduation.'
    },
    {
      icon: <FaUsers />,
      title: 'Personal Growth',
      description: 'Develop independence, adaptability, and cross-cultural skills.'
    }
  ];

  return (
    <div className="study-abroad-page">
      <PageTitle 
        title="Study Abroad" 
        description="Study abroad consultancy - UK, USA, Australia, Canada, Korea, Malta, Europe. Expert guidance for your global education journey."
      />

      {/* ===== HERO SECTION WITH OVERLAY ===== */}
      <section className="header-hero">
        <div className="header-hero-bg">
          <img src={StudyAbroadHero} alt="Study Abroad" />
        </div>
        <div className="header-hero-overlay"></div>
        <div className="header-hero-content">
          <div className="container">
            <span className="header-hero-tag">Study Abroad</span>
            <h1>Your Global Education Adventure Awaits</h1>
            <p>Explore top study destinations and unlock a world of opportunities with our expert guidance.</p>
            
          </div>
        </div>
      </section>

      {/* ===== ALL DESTINATIONS GRID ===== */}
      <section className="destinations-grid-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">All Destinations</span>
            <h2 className="section-title">Where You Can Study</h2>
            <p className="section-subtitle">Choose from our wide range of study destinations</p>
          </div>

          <div className="destinations-grid">
            {destinations.map((dest) => (
              <Link to={dest.path} className="destination-card" key={dest.id}>
                <div className="dest-image">
                  <img src={dest.image} alt={dest.name} />
                  <span className="dest-flag">{dest.flag}</span>
                </div>
                <div className="dest-info">
                  <h3>{dest.name}</h3>
                  <p>{dest.description}</p>
                  <div className="dest-meta">
                    <span><FaClock /> {dest.duration}</span>
                    <span><FaCalendarAlt /> {dest.intake}</span>
                  </div>
                  <span className="dest-link">Learn More <FaArrowRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Study Abroad</span>
            <h2 className="section-title">Benefits of Studying Abroad</h2>
            <p className="section-subtitle">Transform your future with an international education experience</p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Study Abroad Services</h2>
            <p className="section-subtitle">Comprehensive support for your international education journey</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">Simple steps to make your study abroad dream a reality</p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4>Initial Consultation</h4>
                <p>We understand your goals, academic background, and preferences.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4>University Selection</h4>
                <p>We help you choose the right universities and programs.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4>Application Support</h4>
                <p>Complete assistance with applications and documentation.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h4>Visa Guidance</h4>
                <p>Expert visa application and interview preparation support.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h4>Pre-Departure</h4>
                <p>Orientation and guidance before you leave for your destination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroad;