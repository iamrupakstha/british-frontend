// src/components/pages/study-abroad/StudyCanada.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import PageTitle from '../../common/PageTitle.jsx';

// Canada Images
import CanadaHero from '../../../assets/images/study-abroad/canada.jpg';
import CanadaIntro from '../../../assets/images/study-abroad/canada.jpg';

import './css/Study.css';

const StudyCanada = () => {
  return (
    <div className="study-canada-page">
      <PageTitle 
        title="Study in Canada" 
        description="Study in Canada - High-quality education, affordable tuition, and excellent immigration pathways."
      />

      {/* ===== HERO ===== */}
      <section className="study-hero">
        <div className="study-hero-bg">
          <img src={CanadaHero} alt="Study in Canada" />
        </div>
        <div className="study-hero-overlay"></div>
        <div className="study-hero-content">
          <div className="container">
            <span className="study-hero-tag">Study Abroad</span>
            <h1>Study in Canada</h1>
            <p>High-quality education, affordable tuition, and excellent immigration pathways await you in Canada.</p>
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
                <h2>Study in Canada</h2>
                <p>Canada is a global leader in education, with several universities ranked among the top in the world. Known for its welcoming environment, affordable tuition, and high quality of life, Canada attracts over 500,000 international students annually from more than 150 countries.</p>
                <p>Canadian universities offer a wide range of programs across fields like business, engineering, computer science, and the arts. The country's education system emphasizes practical learning, innovation, and research, preparing graduates for successful careers.</p>
                <p>Canada offers excellent post-graduation work opportunities through the PGWP program and clear pathways to permanent residency, making it an ideal destination for Nepali students seeking quality education and long-term career prospects.</p>
              </div>
              <div className="overview-image">
                <img src={CanadaIntro} alt="Study in Canada" />
              </div>
            </div>
          </div>
        </div>

        {/* Why Canada */}
        <div className="study-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Why Canada</span>
              <h2>Why Study in Canada?</h2>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <h3>High-Quality Education</h3>
                <p>Canadian universities consistently rank among the top globally, offering world-class education and research opportunities.</p>
              </div>
              <div className="why-card">
                <h3>Affordable Tuition</h3>
                <p>Canada offers competitive tuition fees and living costs compared to other popular study destinations like the USA and UK.</p>
              </div>
              <div className="why-card">
                <h3>Post-Graduation Work</h3>
                <p>The Post-Graduation Work Permit (PGWP) allows graduates to gain valuable Canadian work experience for up to 3 years.</p>
              </div>
              <div className="why-card">
                <h3>Immigration Pathways</h3>
                <p>Canada offers clear pathways to permanent residency through programs like the Canadian Experience Class and Provincial Nominee Programs.</p>
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
                  <li><FaCheckCircle /> TOEFL: 80 - 100 (depending on program)</li>
                  <li><FaCheckCircle /> PTE Academic: 54 - 76 (depending on program)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Financial Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> Proof of sufficient funds for tuition and living expenses</li>
                  <li><FaCheckCircle /> Bank statements (minimum CAD 10,000 per year)</li>
                  <li><FaCheckCircle /> Sponsorship letter (if applicable)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Visa Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> Study Permit</li>
                  <li><FaCheckCircle /> Letter of Acceptance from a DLI</li>
                  <li><FaCheckCircle /> Proof of financial support</li>
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
                <p>Research Designated Learning Institutions (DLIs) and programs in Canada that match your goals.</p>
              </div>
              <div className="process-item">
                <div className="process-number">2</div>
                <h3>Meet Admission Requirements</h3>
                <p>Review admission requirements including academic qualifications and English language proficiency.</p>
              </div>
              <div className="process-item">
                <div className="process-number">3</div>
                <h3>Submit Application</h3>
                <p>Apply directly to Canadian universities with all required documents and transcripts.</p>
              </div>
              <div className="process-item">
                <div className="process-number">4</div>
                <h3>Visa Application</h3>
                <p>Apply for your Study Permit after receiving your Letter of Acceptance from a DLI.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudyCanada;