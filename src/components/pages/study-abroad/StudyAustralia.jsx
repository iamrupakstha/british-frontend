// src/components/pages/study-abroad/StudyAustralia.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import PageTitle from '../../common/PageTitle.jsx';

// Australia Images
import AustraliaHero from '../../../assets/images/study-abroad/australia.jpg';
import AustraliaIntro from '../../../assets/images/study-abroad/australia.jpg';

import './css/Study.css';

const StudyAustralia = () => {
  return (
    <div className="study-australia-page">
      <PageTitle 
        title="Study in Australia" 
        description="Study in Australia - World-class education, vibrant campuses, and excellent post-study work opportunities."
      />

      {/* ===== HERO ===== */}
      <section className="study-hero">
        <div className="study-hero-bg">
          <img src={AustraliaHero} alt="Study in Australia" />
        </div>
        <div className="study-hero-overlay"></div>
        <div className="study-hero-content">
          <div className="container">
            <span className="study-hero-tag">Study Abroad</span>
            <h1>Study in Australia</h1>
            <p>World-class education, stunning landscapes, and vibrant multicultural cities await you in Australia.</p>
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
                <h2>Study in Australia</h2>
                <p>Australia is home to some of the world's top universities, with seven institutions ranked in the global top 100. Known for its high-quality education system, innovative research, and welcoming environment, Australia attracts over 500,000 international students each year.</p>
                <p>Australian universities offer a wide range of programs across fields like engineering, medicine, business, and the arts. The country's education system emphasizes practical learning, critical thinking, and industry connections, preparing graduates for successful careers.</p>
                <p>Beyond academics, Australia offers an incredible lifestyle with beautiful beaches, diverse wildlife, and vibrant cities. With excellent post-study work opportunities and pathways to permanent residency, Australia remains a top choice for Nepali students.</p>
              </div>
              <div className="overview-image">
                <img src={AustraliaIntro} alt="Study in Australia" />
              </div>
            </div>
          </div>
        </div>

        {/* Why Australia */}
        <div className="study-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Why Australia</span>
              <h2>Why Study in Australia?</h2>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <h3>World-Class Universities</h3>
                <p>Seven Australian universities are ranked in the global top 100, offering world-class education and research opportunities.</p>
              </div>
              <div className="why-card">
                <h3>High Quality of Life</h3>
                <p>Australia consistently ranks among the top countries for quality of life, safety, and student satisfaction.</p>
              </div>
              <div className="why-card">
                <h3>Post-Study Work</h3>
                <p>Graduates can work in Australia for up to 2-4 years after completing their studies, gaining valuable international experience.</p>
              </div>
              <div className="why-card">
                <h3>Multicultural Society</h3>
                <p>Join a diverse and inclusive community with students from over 190 countries, fostering global connections.</p>
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
                  <li><FaCheckCircle /> IELTS: 6.0 - 7.5 (depending on program)</li>
                  <li><FaCheckCircle /> TOEFL: 79 - 100 (depending on program)</li>
                  <li><FaCheckCircle /> PTE Academic: 54 - 76 (depending on program)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Financial Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> Proof of sufficient funds for tuition and living expenses</li>
                  <li><FaCheckCircle /> Bank statements (minimum AUD 21,041 per year)</li>
                  <li><FaCheckCircle /> Sponsorship letter (if applicable)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Visa Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> Student Visa (Subclass 500)</li>
                  <li><FaCheckCircle /> Confirmation of Enrolment (CoE)</li>
                  <li><FaCheckCircle /> Overseas Student Health Cover (OSHC)</li>
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
                <p>Research universities and programs in Australia that align with your academic and career goals.</p>
              </div>
              <div className="process-item">
                <div className="process-number">2</div>
                <h3>Meet Admission Requirements</h3>
                <p>Review admission requirements including academic qualifications and English language proficiency.</p>
              </div>
              <div className="process-item">
                <div className="process-number">3</div>
                <h3>Submit Application</h3>
                <p>Apply directly to Australian universities or through authorized agents with all required documents.</p>
              </div>
              <div className="process-item">
                <div className="process-number">4</div>
                <h3>Visa Application</h3>
                <p>Apply for your Student Visa (Subclass 500) after receiving your Confirmation of Enrolment (CoE).</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudyAustralia;