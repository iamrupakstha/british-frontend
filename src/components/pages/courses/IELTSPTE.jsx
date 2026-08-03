// src/components/pages/courses/IELTSPTE.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaAward,
  FaUsers,
  FaGlobe,
  FaGraduationCap,
  FaBookOpen,
  FaMicrophone,
  FaPenFancy,
  FaBookReader,
  FaHeadphones,
  FaStar,
  FaClipboardList,
  FaFileAlt
} from 'react-icons/fa';
import PageTitle from '../../common/PageTitle.jsx';

// Course Images
import IELTSPTEImage from '../../../assets/images/courses/ieltspte.webp';
import courseOverlay from '../../../assets/images/courses/ieltspte.webp';

import './css/IELTSPTE.css';

const IELTSPTE = () => {
  // ===== TABS =====
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'ielts', label: 'IELTS' },
    { id: 'pte', label: 'PTE' },
    { id: 'compare', label: 'IELTS vs PTE' },
  ];

  const [activeTab, setActiveTab] = useState('overview');

  // ===== IELTS SECTIONS =====
  const ieltsSections = [
    { icon: <FaMicrophone />, name: 'Speaking', description: '11-14 minutes face-to-face interview with a certified examiner.' },
    { icon: <FaPenFancy />, name: 'Writing', description: '60 minutes - 2 tasks (Academic/General Training).' },
    { icon: <FaBookReader />, name: 'Reading', description: '60 minutes - 3 passages with 40 questions.' },
    { icon: <FaHeadphones />, name: 'Listening', description: '30 minutes - 4 sections with 40 questions.' },
  ];

  // ===== PTE SECTIONS =====
  const pteSections = [
    { icon: <FaMicrophone />, name: 'Speaking', description: 'Repeat sentence, describe image, retell lecture, answer short questions.' },
    { icon: <FaPenFancy />, name: 'Writing', description: 'Summarize written text, essay writing (20-40 minutes).' },
    { icon: <FaBookReader />, name: 'Reading', description: 'Fill in the blanks, multiple choice, reorder paragraphs.' },
    { icon: <FaHeadphones />, name: 'Listening', description: 'Summarize spoken text, multiple choice, fill in the blanks.' },
  ];

  // ===== COMPARISON DATA =====
  const comparisonData = [
    { feature: 'Test Format', ielts: 'Paper-based or Computer-based', pte: 'Computer-based only' },
    { feature: 'Speaking Test', ielts: 'Face-to-face with examiner', pte: 'Computer-recorded' },
    { feature: 'Results Time', ielts: '13 days (paper), 3-5 days (computer)', pte: '48-72 hours' },
    { feature: 'Scoring', ielts: 'Band score 0-9', pte: 'Score 10-90' },
    { feature: 'Test Duration', ielts: '2 hours 45 minutes', pte: '2 hours' },
    { feature: 'Global Acceptance', ielts: '10,000+ organizations', pte: '3,000+ organizations' },
  ];

  // ===== IELTS INFO =====
  const ieltsInfo = {
    title: 'IELTS (International English Language Testing System)',
    description: 'IELTS is the world\'s most popular English language test for higher education and global migration. Accepted by over 10,000 organizations worldwide including universities, employers, and immigration authorities.',
    duration: '2 Hours 45 Minutes',
    scoreRange: 'Band 0 - 9',
    features: ['Academic Training (AT)', 'General Training (GT)', 'UKVI Approved', 'Global Recognition'],
    price: 'Rs. 7,500/-',
  };

  // ===== PTE INFO =====
  const pteInfo = {
    title: 'PTE Academic (Pearson Test of English)',
    description: 'PTE Academic is a computer-based English language test for study abroad and immigration. Accepted by thousands of universities worldwide, with fast results and AI-powered scoring.',
    duration: '2 Hours',
    scoreRange: '10 - 90',
    features: ['Computer-Based Test', 'Fast Results (48-72 hours)', 'AI Scoring System', 'UKVI Approved'],
    price: 'Rs. 8,500/-',
  };

  return (
    <div className="ielts-pte-page">
      <PageTitle 
        title="IELTS/PTE Preparation" 
        description="IELTS and PTE preparation courses - Expert training for your English proficiency test."
      />

      {/* ===== HERO ===== */}
      <section className="courses-hero">
        <div className="courses-hero-overlay"></div>
        <img src={courseOverlay} alt="IELTS/PTE Preparation" className="courses-hero-image" />
        <div className="courses-hero-content">
          <div className="container">
            <span className="courses-hero-tag">Test Preparation</span>
            <h1>IELTS & PTE Preparation</h1>
            <p>Achieve your target score with our expert training and comprehensive preparation programs.</p>
          </div>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>English Proficiency Test Preparation</h2>
            <p>Prepare for IELTS and PTE with our expert trainers. We provide comprehensive training covering all test sections, strategies, and practice materials to help you achieve your target score.</p>
            <div className="intro-stats">
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">7.5+</span>
                <span className="stat-label">Average IELTS Score</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students Trained</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Expert Trainers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TABS ===== */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TAB CONTENT ===== */}
      <section className="tab-content-section">
        <div className="container">
          
          {/* ===== OVERVIEW TAB ===== */}
          {activeTab === 'overview' && (
            <div className="tab-panel overview-panel">
              <div className="overview-grid">
                <div className="overview-text">
                  <h2>IELTS & PTE Preparation Programs</h2>
                  <p>We offer comprehensive preparation programs for both IELTS and PTE Academic. Our courses are designed to help you achieve your target score with expert guidance, practice materials, and proven strategies.</p>
                  <div className="overview-highlights">
                    <div className="highlight-item">
                      <FaAward />
                      <div>
                        <h4>Expert Trainers</h4>
                        <p>Certified and experienced instructors</p>
                      </div>
                    </div>
                    <div className="highlight-item">
                      <FaClock />
                      <div>
                        <h4>Flexible Duration</h4>
                        <p>45 Days intensive training</p>
                      </div>
                    </div>
                    <div className="highlight-item">
                      <FaBookOpen />
                      <div>
                        <h4>Practice Materials</h4>
                        <p>Mock tests and study resources</p>
                      </div>
                    </div>
                    <div className="highlight-item">
                      <FaGlobe />
                      <div>
                        <h4>Global Recognition</h4>
                        <p>Accepted worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overview-image">
                  <img src={IELTSPTEImage} alt="IELTS & PTE Preparation" />
                </div>
              </div>
            </div>
          )}

          {/* ===== IELTS TAB ===== */}
          {activeTab === 'ielts' && (
            <div className="tab-panel ielts-panel">
              <div className="test-header">
                <h2>{ieltsInfo.title}</h2>
                <p>{ieltsInfo.description}</p>
              </div>
              
              <div className="test-info-grid">
                <div className="test-info-cards">
                  <div className="info-card">
                    <FaClock className="info-icon" />
                    <h4>Duration</h4>
                    <p>{ieltsInfo.duration}</p>
                  </div>
                  <div className="info-card">
                    <FaStar className="info-icon" />
                    <h4>Score Range</h4>
                    <p>{ieltsInfo.scoreRange}</p>
                  </div>
                  <div className="info-card">
                    <FaAward className="info-icon" />
                    <h4>Price</h4>
                    <p>{ieltsInfo.price}</p>
                  </div>
                </div>
                
                <div className="test-sections">
                  <h3>Test Sections</h3>
                  <div className="sections-grid">
                    {ieltsSections.map((section, index) => (
                      <div className="section-card" key={index}>
                        <div className="section-icon">{section.icon}</div>
                        <div>
                          <h4>{section.name}</h4>
                          <p>{section.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <ul className="test-features">
                  {ieltsInfo.features.map((feature, index) => (
                    <li key={index}><FaCheckCircle /> {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ===== PTE TAB ===== */}
          {activeTab === 'pte' && (
            <div className="tab-panel pte-panel">
              <div className="test-header">
                <h2>{pteInfo.title}</h2>
                <p>{pteInfo.description}</p>
              </div>
              
              <div className="test-info-grid">
                <div className="test-info-cards">
                  <div className="info-card">
                    <FaClock className="info-icon" />
                    <h4>Duration</h4>
                    <p>{pteInfo.duration}</p>
                  </div>
                  <div className="info-card">
                    <FaStar className="info-icon" />
                    <h4>Score Range</h4>
                    <p>{pteInfo.scoreRange}</p>
                  </div>
                  <div className="info-card">
                    <FaAward className="info-icon" />
                    <h4>Price</h4>
                    <p>{pteInfo.price}</p>
                  </div>
                </div>
                
                <div className="test-sections">
                  <h3>Test Sections</h3>
                  <div className="sections-grid">
                    {pteSections.map((section, index) => (
                      <div className="section-card" key={index}>
                        <div className="section-icon">{section.icon}</div>
                        <div>
                          <h4>{section.name}</h4>
                          <p>{section.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <ul className="test-features">
                  {pteInfo.features.map((feature, index) => (
                    <li key={index}><FaCheckCircle /> {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ===== COMPARE TAB ===== */}
          {activeTab === 'compare' && (
            <div className="tab-panel compare-panel">
              <h2>IELTS vs PTE</h2>
              <p>Compare IELTS and PTE to choose the right test for your needs.</p>
              
              <div className="compare-table-wrapper">
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>IELTS</th>
                      <th>PTE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index}>
                        <td><strong>{item.feature}</strong></td>
                        <td>{item.ielts}</td>
                        <td>{item.pte}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Why Prepare With Us?</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon"><FaAward /></div>
              <h3>Expert Trainers</h3>
              <p>Learn from certified and experienced IELTS & PTE trainers.</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><FaBookOpen /></div>
              <h3>Practice Materials</h3>
              <p>Access to comprehensive study materials and mock tests.</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><FaUsers /></div>
              <h3>Small Batches</h3>
              <p>Personalized attention with limited batch sizes.</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><FaGlobe /></div>
              <h3>Global Recognition</h3>
              <p>Prepare for tests accepted worldwide.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IELTSPTE;