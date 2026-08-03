// src/components/pages/study-abroad/StudyUK.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCheckCircle,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import PageTitle from '../../common/PageTitle.jsx';

// UK Images
import UKHero from '../../../assets/images/study-abroad/uk.jpg';
import UKIntro from '../../../assets/images/study-abroad/uk.jpg';

import './css/Study.css';

const StudyUK = () => {

  return (
    <div className="study-uk-page">
      <PageTitle 
        title="Study in UK" 
        description="Study in United Kingdom - World-class education at prestigious universities."
      />

      {/* ===== HERO ===== */}
      <section className="study-hero">
        <div className="study-hero-bg">
          <img src={UKHero} alt="Study in UK" />
        </div>
        <div className="study-hero-overlay"></div>
        <div className="study-hero-content">
          <div className="container">
            <span className="study-hero-tag">Study Abroad</span>
            <h1>Study in United Kingdom</h1>
            <p>World-class education, rich cultural heritage, and globally recognized degrees await you in the UK.</p>
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
                <h2>Study in United Kingdom</h2>
                <p>The United Kingdom is a global leader in education, attracting over 600,000 international students each year with its high academic standards and wide range of programs. Renowned institutions such as Oxford, Cambridge, and the London School of Economics offer world-class teaching and cutting-edge research across fields like science, engineering, business, and law.</p>
                <p>For Nepali students, the UK provides an excellent opportunity to gain a prestigious qualification in a highly respected academic environment. Beyond academics, the UK offers a rich cultural experience with diverse communities, historic landmarks, and vibrant cities.</p>
                <p>Students can benefit from scholarships, financial aid, and part-time work opportunities, along with potential career pathways after graduation. With its strong focus on both academic excellence and personal growth, the UK remains a top destination for Nepali students seeking quality education and global exposure.</p>
              </div>
              <div className="overview-image">
                <img src={UKIntro} alt="Study in UK" />
              </div>
            </div>
          </div>
        </div>

        {/* Why UK */}
        <div className="study-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Why UK</span>
              <h2>Why Study in UK?</h2>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <h3>World-Class Education</h3>
                <p>UK universities consistently rank among the top in the world, offering globally recognized degrees and cutting-edge research opportunities.</p>
              </div>
              <div className="why-card">
                <h3>Rich Cultural Heritage</h3>
                <p>Experience centuries of history, world-famous museums, and diverse cultural experiences in vibrant cities like London, Edinburgh, and Manchester.</p>
              </div>
              <div className="why-card">
                <h3>Diverse Community</h3>
                <p>Join a vibrant international student community from over 200 countries, fostering global connections and cross-cultural understanding.</p>
              </div>
              <div className="why-card">
                <h3>Global Recognition</h3>
                <p>UK degrees are recognized and respected by employers and universities worldwide, providing a competitive edge in the global job market.</p>
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
                  <li><FaCheckCircle /> Bank statements (minimum £1,334 per month)</li>
                  <li><FaCheckCircle /> Sponsorship letter (if applicable)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>Visa Requirements</h3>
                <ul>
                  <li><FaCheckCircle /> Student Visa (Tier 4)</li>
                  <li><FaCheckCircle /> CAS (Confirmation of Acceptance for Studies)</li>
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
                <p>Start by researching universities and programs in the UK that align with your academic interests and career goals. Consider factors such as program requirements, language of instruction, and available scholarships.</p>
              </div>
              <div className="process-item">
                <div className="process-number">2</div>
                <h3>Meet Admission Requirements</h3>
                <p>Review the admission requirements for your chosen program, including academic qualifications, language proficiency (IELTS/TOEFL/PTE), and any specific prerequisites. Ensure you meet these requirements before proceeding.</p>
              </div>
              <div className="process-item">
                <div className="process-number">3</div>
                <h3>Submit Application</h3>
                <p>Complete and submit your application through UCAS or directly to the university. Include all required documents such as transcripts, letters of recommendation, and a statement of purpose.</p>
              </div>
              <div className="process-item">
                <div className="process-number">4</div>
                <h3>Visa Application</h3>
                <p>After receiving your offer letter, apply for your UK Student Visa (Tier 4). Prepare all necessary documents including your CAS (Confirmation of Acceptance for Studies) and financial evidence.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudyUK;