// src/components/pages/study-abroad/StudyMalta.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import PageTitle from '../../common/PageTitle.jsx';

// Malta Images
import MaltaHero from '../../../assets/images/study-abroad/malta.jpg';
import MaltaIntro from '../../../assets/images/study-abroad/malta.jpg';

import './css/Study.css';

const StudyMalta = () => {
  return (
    <div className="study-malta-page">
      <PageTitle 
        title="Study in Malta" 
        description="Study in Malta - Quality education in a Mediterranean setting with English as the medium of instruction."
      />

      {/* ===== HERO ===== */}
      <section className="study-hero">
        <div className="study-hero-bg">
          <img src={MaltaHero} alt="Study in Malta" />
        </div>
        <div className="study-hero-overlay"></div>
        <div className="study-hero-content">
          <div className="container">
            <span className="study-hero-tag">Study Abroad</span>
            <h1>Study in Malta</h1>
            <p>Quality education in a Mediterranean setting with English as the medium of instruction awaits you in Malta.</p>
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
                <h2>Study in Malta</h2>
                <p>Malta is a beautiful Mediterranean island nation offering high-quality education in a unique and vibrant setting. With English as one of the official languages and a British-style education system, Malta is an ideal destination for Nepali students seeking a European education experience.</p>
                <p>The University of Malta is the country's premier institution, offering a wide range of programs in fields like business, engineering, medicine, and the arts. Malta's education system follows the Bologna Process, ensuring international recognition of qualifications.</p>
                <p>Beyond academics, Malta offers a rich cultural experience with its historic cities, stunning coastlines, and Mediterranean lifestyle. The country is also a member of the Schengen Area, allowing students to travel freely across Europe.</p>
              </div>
              <div className="overview-image">
                <img src={MaltaIntro} alt="Study in Malta" />
              </div>
            </div>
          </div>
        </div>

        {/* Why Malta */}
        <div className="study-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Why Malta</span>
              <h2>Why Study in Malta?</h2>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <h3>English-Taught Programs</h3>
                <p>All programs are taught in English, making it accessible for international students from Nepal and other countries.</p>
              </div>
              <div className="why-card">
                <h3>European Education</h3>
                <p>Benefit from the Bologna Process and gain qualifications recognized across Europe and the world.</p>
              </div>
              <div className="why-card">
                <h3>Affordable Living</h3>
                <p>Malta offers affordable living costs compared to other European countries, making it budget-friendly for students.</p>
              </div>
              <div className="why-card">
                <h3>Travel Opportunities</h3>
                <p>As a Schengen country, students can travel freely across 26 European countries during their studies.</p>
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
                  <li><FaCheckCircle /> Good academic standing (50-60% minimum)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Language Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> IELTS: 5.5 - 7.0 (depending on program)</li>
                  <li><FaCheckCircle /> TOEFL: 70 - 100 (depending on program)</li>
                  <li><FaCheckCircle /> PTE Academic: 50 - 70 (depending on program)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Financial Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> Proof of sufficient funds for tuition and living expenses</li>
                  <li><FaCheckCircle /> Bank statements (minimum €5,000 per year)</li>
                  <li><FaCheckCircle /> Sponsorship letter (if applicable)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Visa Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> Student Visa (Schengen)</li>
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
                <p>Research programs at the University of Malta and other institutions that align with your goals.</p>
              </div>
              <div className="process-item">
                <div className="process-number">2</div>
                <h3>Meet Admission Requirements</h3>
                <p>Review admission requirements including academic qualifications and English language proficiency.</p>
              </div>
              <div className="process-item">
                <div className="process-number">3</div>
                <h3>Submit Application</h3>
                <p>Apply directly to Maltese universities with all required documents and transcripts.</p>
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

export default StudyMalta;