// src/components/pages/study-abroad/StudyKorea.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import PageTitle from '../../common/PageTitle.jsx';

// Korea Images
import KoreaHero from '../../../assets/images/study-abroad/korea.jpg';
import KoreaIntro from '../../../assets/images/study-abroad/korea.jpg';

import './css/Study.css';

const StudyKorea = () => {
  return (
    <div className="study-korea-page">
      <PageTitle 
        title="Study in South Korea" 
        description="Study in South Korea - Innovative education, cutting-edge technology, and rich cultural experiences."
      />

      {/* ===== HERO ===== */}
      <section className="study-hero">
        <div className="study-hero-bg">
          <img src={KoreaHero} alt="Study in South Korea" />
        </div>
        <div className="study-hero-overlay"></div>
        <div className="study-hero-content">
          <div className="container">
            <span className="study-hero-tag">Study Abroad</span>
            <h1>Study in South Korea</h1>
            <p>Innovative education, cutting-edge technology, and rich cultural experiences await you in South Korea.</p>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <div className="study-content">

        {/* Overview */}
        <div className="study-section">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-text">
                <span className="section-tag">Overview</span>
                <h2>Study in South Korea</h2>
                <p>South Korea has emerged as a global education hub with a strong focus on innovation, technology, and research. Home to prestigious institutions like Seoul National University and KAIST, the country offers world-class education in fields like engineering, IT, business, and the arts.</p>
                <p>Korean universities combine academic excellence with cutting-edge research facilities, providing students with a unique learning experience. The country's dynamic culture, rich history, and vibrant cities like Seoul and Busan offer an exciting environment for international students.</p>
                <p>With affordable tuition, generous scholarships, and excellent job opportunities in the Korean job market, South Korea is an increasingly popular destination for Nepali students seeking quality education and global exposure.</p>
              </div>
              <div className="overview-image">
                <img src={KoreaIntro} alt="Study in South Korea" />
              </div>
            </div>
          </div>
        </div>

        {/* Why Korea */}
        <div className="study-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Why Korea</span>
              <h2>Why Study in South Korea?</h2>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <h3>Technology & Innovation</h3>
                <p>South Korea is a global leader in technology and innovation, offering cutting-edge research opportunities.</p>
              </div>
              <div className="why-card">
                <h3>World-Class Universities</h3>
                <p>Korean universities consistently rank among the top in Asia, with excellence in engineering, IT, and business.</p>
              </div>
              <div className="why-card">
                <h3>Rich Culture</h3>
                <p>Experience the unique blend of ancient traditions and modern culture, from K-pop to historic temples.</p>
              </div>
              <div className="why-card">
                <h3>Scholarship Opportunities</h3>
                <p>Numerous scholarships are available for international students, including the prestigious Korean Government Scholarship.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="study-section bg-light">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Requirements</span>
              <h2>Admission Requirements</h2>
            </div>
            <div className="requirements-grid">
              <div className="requirement-item">
                <h3>Academic Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> High school diploma or equivalent</li>
                  <li><FaCheckCircle /> Bachelor's degree for postgraduate programs</li>
                  <li><FaCheckCircle /> Good academic standing (60-70% minimum)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Language Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> TOPIK (Korean) for Korean-taught programs</li>
                  <li><FaCheckCircle /> IELTS: 5.5 - 7.0 for English-taught programs</li>
                  <li><FaCheckCircle /> TOEFL: 80 - 100 for English-taught programs</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Financial Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> Proof of sufficient funds for tuition and living expenses</li>
                  <li><FaCheckCircle /> Bank statements (minimum KRW 10,000,000 per year)</li>
                  <li><FaCheckCircle /> Sponsorship letter (if applicable)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Visa Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> D-2 Student Visa</li>
                  <li><FaCheckCircle /> Certificate of Admission from the university</li>
                  <li><FaCheckCircle /> Valid passport and passport-sized photos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="study-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Application Process</span>
              <h2>How to Apply</h2>
            </div>
            <div className="process-grid">
              <div className="process-item">
                <div className="process-number">1</div>
                <h3>Research and Choose a Program</h3>
                <p>Research universities and programs in South Korea that align with your academic interests.</p>
              </div>
              <div className="process-item">
                <div className="process-number">2</div>
                <h3>Meet Admission Requirements</h3>
                <p>Review admission requirements including academic qualifications and language proficiency.</p>
              </div>
              <div className="process-item">
                <div className="process-number">3</div>
                <h3>Submit Application</h3>
                <p>Apply directly to Korean universities with all required documents and transcripts.</p>
              </div>
              <div className="process-item">
                <div className="process-number">4</div>
                <h3>Visa Application</h3>
                <p>Apply for your D-2 Student Visa after receiving your Certificate of Admission.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudyKorea;