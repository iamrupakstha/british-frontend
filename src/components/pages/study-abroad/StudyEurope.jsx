// src/components/pages/study-abroad/StudyEurope.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import PageTitle from '../../common/PageTitle.jsx';

// Europe Images
import EuropeHero from '../../../assets/images/study-abroad/europe.jpg';
import EuropeIntro from '../../../assets/images/study-abroad/europe.jpg';

import './css/Study.css';

const StudyEurope = () => {
  return (
    <div className="study-europe-page">
      <PageTitle 
        title="Study in Europe" 
        description="Study in Europe - Diverse education opportunities across Europe with globally recognized universities."
      />

      {/* ===== HERO ===== */}
      <section className="study-hero">
        <div className="study-hero-bg">
          <img src={EuropeHero} alt="Study in Europe" />
        </div>
        <div className="study-hero-overlay"></div>
        <div className="study-hero-content">
          <div className="container">
            <span className="study-hero-tag">Study Abroad</span>
            <h1>Study in Europe</h1>
            <p>Diverse education opportunities across Europe with globally recognized universities await you.</p>
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
                <h2>Study in Europe</h2>
                <p>Europe offers a diverse range of study opportunities across its many countries, from the historic universities of the UK to the innovative institutions of Germany, the Netherlands, and beyond. With hundreds of world-class universities, Europe is a top destination for Nepali students seeking quality education and cultural experiences.</p>
                <p>European universities offer programs in various fields including engineering, business, computer science, medicine, and the arts. Many programs are taught in English, and there are numerous scholarship opportunities available for international students.</p>
                <p>The Bologna Process ensures that qualifications are recognized across Europe, and students can benefit from a multicultural environment with the opportunity to travel across the continent.</p>
              </div>
              <div className="overview-image">
                <img src={EuropeIntro} alt="Study in Europe" />
              </div>
            </div>
          </div>
        </div>

        {/* Why Europe */}
        <div className="study-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Why Europe</span>
              <h2>Why Study in Europe?</h2>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <h3>Diverse Options</h3>
                <p>Choose from hundreds of universities across multiple countries with a wide range of programs and specializations.</p>
              </div>
              <div className="why-card">
                <h3>Bologna Process</h3>
                <p>Qualifications are recognized across Europe, providing international recognition and mobility for graduates.</p>
              </div>
              <div className="why-card">
                <h3>Scholarships</h3>
                <p>Numerous scholarship opportunities are available for international students, including Erasmus+ and national scholarships.</p>
              </div>
              <div className="why-card">
                <h3>Travel Opportunities</h3>
                <p>Explore diverse cultures, languages, and historic cities across Europe during your studies.</p>
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
                  <li><FaCheckCircle /> Good academic standing (varies by country and program)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Language Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> IELTS: 5.5 - 7.5 (depending on program)</li>
                  <li><FaCheckCircle /> TOEFL: 70 - 100 (depending on program)</li>
                  <li><FaCheckCircle /> PTE Academic: 50 - 76 (depending on program)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Financial Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> Proof of sufficient funds for tuition and living expenses</li>
                  <li><FaCheckCircle /> Bank statements (varies by country, typically €8,000-€12,000 per year)</li>
                  <li><FaCheckCircle /> Sponsorship letter (if applicable)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Visa Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> Student Visa (varies by country)</li>
                  <li><FaCheckCircle /> Letter of Acceptance from the university</li>
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
                <p>Research universities and programs across Europe that align with your academic interests and career goals.</p>
              </div>
              <div className="process-item">
                <div className="process-number">2</div>
                <h3>Meet Admission Requirements</h3>
                <p>Review admission requirements including academic qualifications and language proficiency for your chosen country.</p>
              </div>
              <div className="process-item">
                <div className="process-number">3</div>
                <h3>Submit Application</h3>
                <p>Apply directly to European universities with all required documents and transcripts.</p>
              </div>
              <div className="process-item">
                <div className="process-number">4</div>
                <h3>Visa Application</h3>
                <p>Apply for your Student Visa after receiving your Letter of Acceptance from the university.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudyEurope;