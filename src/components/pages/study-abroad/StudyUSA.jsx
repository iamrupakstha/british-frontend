// src/components/pages/study-abroad/StudyUSA.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import PageTitle from '../../common/PageTitle.jsx';

// USA Images
import USAHero from '../../../assets/images/study-abroad/usa.jpg';
import USAIntro from '../../../assets/images/study-abroad/usa.jpg';

import './css/Study.css';

const StudyUSA = () => {
  return (
    <div className="study-usa-page">
      <PageTitle 
        title="Study in USA" 
        description="Study in United States - World-class education at prestigious American universities."
      />

      {/* ===== HERO ===== */}
      <section className="study-hero">
        <div className="study-hero-bg">
          <img src={USAHero} alt="Study in USA" />
        </div>
        <div className="study-hero-overlay"></div>
        <div className="study-hero-content">
          <div className="container">
            <span className="study-hero-tag">Study Abroad</span>
            <h1>Study in United States</h1>
            <p>World-class education, diverse campuses, and endless opportunities await you in the USA.</p>
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
                <h2>Study in United States</h2>
                <p>The United States is home to the world's largest number of international students, with over 1 million choosing to study in the USA each year. With prestigious Ivy League institutions, cutting-edge research facilities, and a diverse range of programs, the USA offers unparalleled educational opportunities.</p>
                <p>American universities are known for their flexible curriculum, allowing students to explore multiple disciplines before choosing a major. The USA also offers excellent post-graduation work opportunities through OPT and STEM OPT programs, making it a top destination for students seeking global career prospects.</p>
                <p>From the bustling streets of New York to the tech hub of Silicon Valley, the USA provides a dynamic environment for personal and professional growth. With world-class faculty, state-of-the-art facilities, and a multicultural student body, studying in the USA is a transformative experience.</p>
              </div>
              <div className="overview-image">
                <img src={USAIntro} alt="Study in USA" />
              </div>
            </div>
          </div>
        </div>

        {/* Why USA */}
        <div className="study-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Why USA</span>
              <h2>Why Study in USA?</h2>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <h3>Academic Excellence</h3>
                <p>US universities consistently rank among the top globally, with cutting-edge research and world-renowned faculty.</p>
              </div>
              <div className="why-card">
                <h3>Flexible Curriculum</h3>
                <p>Explore multiple disciplines before choosing your major, allowing you to discover your true passion.</p>
              </div>
              <div className="why-card">
                <h3>Diverse Campuses</h3>
                <p>Join a multicultural community with students from over 200 countries, fostering global connections.</p>
              </div>
              <div className="why-card">
                <h3>Career Opportunities</h3>
                <p>Post-graduation work options including OPT and STEM OPT provide valuable international work experience.</p>
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
                  <li><FaCheckCircle /> SAT/ACT scores (for undergraduate)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Language Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> TOEFL: 80 - 100 (depending on program)</li>
                  <li><FaCheckCircle /> IELTS: 6.5 - 7.5 (depending on program)</li>
                  <li><FaCheckCircle /> Duolingo: 110 - 130 (accepted by many universities)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Financial Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> Proof of sufficient funds for tuition and living expenses</li>
                  <li><FaCheckCircle /> Bank statements (minimum $20,000 - $30,000 per year)</li>
                  <li><FaCheckCircle /> Sponsorship letter (if applicable)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Visa Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> F-1 Student Visa</li>
                  <li><FaCheckCircle /> I-20 form from the university</li>
                  <li><FaCheckCircle /> SEVIS fee payment receipt</li>
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
                <p>Research universities and programs in the USA that align with your academic interests and career goals.</p>
              </div>
              <div className="process-item">
                <div className="process-number">2</div>
                <h3>Meet Admission Requirements</h3>
                <p>Review admission requirements including academic qualifications, language proficiency, and standardized test scores.</p>
              </div>
              <div className="process-item">
                <div className="process-number">3</div>
                <h3>Submit Application</h3>
                <p>Complete applications through the Common App or university portals with all required documents.</p>
              </div>
              <div className="process-item">
                <div className="process-number">4</div>
                <h3>Visa Application</h3>
                <p>Apply for your F-1 Student Visa after receiving your I-20 form from the university.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudyUSA;