// src/components/pages/courses/EnglishCourses.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCheckCircle,
  FaArrowRight,
  FaBookOpen,
  FaClock,
  FaAward,
  FaUsers,
  FaGlobe,
  FaGraduationCap,
  FaLanguage,
  FaChalkboardTeacher,
  FaFileAlt,
  FaUserGraduate,
  FaMicrophone,
  FaPenFancy,
  FaBookReader,
  FaHeadphones,
  FaClipboardList,
  FaPassport,
  FaHandshake,
  FaBriefcase
} from 'react-icons/fa';
import PageTitle from '../../common/PageTitle.jsx';

// Course Images
import EnglishLanguageImage from '../../../assets/images/courses/english-class1.webp';
import courseOverlay from '../../../assets/images/courses/english-course.jpg';

import './css/EnglishCourses.css';

const EnglishCourses = () => {
  // ===== TABS DATA =====
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'o-level', label: 'O/A Level One' },
    { id: 'b-level', label: 'B Level One' },
    { id: 'c-level', label: 'C Level One' },
    { id: 'visa-interview', label: 'Visa & Interview' },
    { id: 'uk-lifeskill', label: 'UK Lifeskill A1' },
    { id: 'proficiency', label: 'Proficiency Tests' },
    { id: 'test-centers', label: 'Test Centers' },
  ];

  const [activeTab, setActiveTab] = useState('overview');

  // ===== COURSE LEVELS =====
  const levels = [
    {
      id: 'o-level',
      title: 'O/A Level One (Career Oriented Course)',
      description: 'For those who want to speak and write English fluently. Available for 1,2,3,4,5,6 months (British & American Based). Ideal for Academic Level enhancement, Job Interview preparation, and English Research.',
      duration: '4 Months',
      level: 'A1/A2',
      price: 'Rs. 15,000/-',
      features: ['British & American Based Curriculum', 'Academic Level Enhancement', 'Job Interview Preparation', 'English Research Skills', 'Speaking & Writing Practice']
    },
    {
      id: 'b-level',
      title: 'B Level One (Career Oriented Course)',
      description: 'Designed to enhance fluency and speed in English. IELTS/TOEFL Based. Ideal for Air Hostess, TV Presenter, News Reader, Radio RJ/VJ/DJ, Customer Service, Abroad Study, and those who want to become confident presenters.',
      duration: '3 Months',
      level: 'B1/B2',
      price: 'Rs. 15,000/-',
      features: ['IELTS/TOEFL Based Curriculum', 'Fluency & Speed Enhancement', 'Air Hostess Preparation', 'TV/Radio Presenter Training', 'Customer Service Skills', 'Abroad Study Preparation']
    },
    {
      id: 'c-level',
      title: 'C Level One (Career Oriented Course)',
      description: 'Advanced level English mastery for professional communication skills. Ideal for those who want to achieve mastery in English at the highest level.',
      duration: '1.6 Months',
      level: 'C1/C2',
      price: 'Rs. 15,000/-',
      features: ['Advanced Fluency', 'Professional Communication', 'Mastery Level English', 'Business English', 'Presentation Skills']
    }
  ];

  // ===== VISA & INTERVIEW PREPARATION =====
  const visaInterviewInfo = {
    title: 'Visa & Interview Preparation',
    description: 'Comprehensive preparation for visa interviews and job interviews. Our expert trainers help you build confidence and communication skills for successful interviews.',
    duration: '2 Months',
    price: 'Rs. 12,000/-',
    features: [
      'Visa Interview Preparation',
      'Job Interview Skills',
      'Mock Interview Sessions',
      'Confidence Building',
      'Communication Skills',
      'Body Language Training',
      'Common Questions Practice',
      'Personalized Feedback'
    ],
    sections: [
      { icon: <FaPassport />, name: 'Visa Interview', description: 'Prepare for student visa, tourist visa, and immigration interviews with expert guidance.' },
      { icon: <FaHandshake />, name: 'Job Interview', description: 'Master job interview techniques, including answering common questions and presenting yourself professionally.' },
      { icon: <FaBriefcase />, name: 'Professional Skills', description: 'Develop professional communication skills, including email writing, phone etiquette, and workplace communication.' },
      { icon: <FaMicrophone />, name: 'Mock Interviews', description: 'Practice with realistic mock interviews and receive constructive feedback from expert trainers.' },
    ]
  };

  // ===== UK LIFESKILL A1 ENGLISH =====
  const ukLifeskillInfo = {
    title: 'UK Lifeskill A1 English',
    description: 'UK Lifeskill A1 English is a test for individuals applying for a UK visa. It assesses your ability to communicate in English at a basic level for everyday situations.',
    duration: '2 Months',
    price: 'Rs. 10,000/-',
    features: [
      'UKVI Approved',
      'Basic Communication Skills',
      'Speaking & Listening Focus',
      'Everyday English',
      'Practice Tests',
      'Expert Trainers',
      'Flexible Schedule'
    ],
    sections: [
      { icon: <FaMicrophone />, name: 'Speaking', description: 'Basic conversation skills for everyday situations, including introducing yourself and asking simple questions.' },
      { icon: <FaHeadphones />, name: 'Listening', description: 'Understanding basic spoken English in everyday contexts like shopping, travel, and social interactions.' },
      { icon: <FaBookOpen />, name: 'Reading', description: 'Reading and understanding simple texts, signs, and instructions.' },
      { icon: <FaPenFancy />, name: 'Writing', description: 'Writing simple sentences and filling out basic forms.' },
    ]
  };

  // ===== PROFICIENCY TESTS =====
  const proficiencyTests = [
    'O Level 1 / A Level 1',
    'UK Lifeskill A1 English',
    'Interview Preparation',
    'VISA Preparation',
    'IELTS - AT & GT',
    'UKVI IELTS - AT & GT',
    'Israel A2 English'
  ];

  // ===== TEST CENTERS =====
  const testCenters = [
    { name: 'IDP', icon: <FaUsers />, description: 'IELTS Test Partner' },
    { name: 'British Council', icon: <FaGlobe />, description: 'IELTS & English Testing' },
    { name: 'Pearson Tests of English', icon: <FaGraduationCap />, description: 'PTE Academic' }
  ];

  return (
    <div className="english-courses-page">
      <PageTitle 
        title="English Courses" 
        description="English Language Courses - O/A Level, B Level, C Level, UK Lifeskill, Visa & Interview Preparation."
      />

      {/* ===== HERO ===== */}
      <section className="courses-hero">
        <div className="courses-hero-overlay"></div>
        <img src={courseOverlay} alt="English Courses" className="courses-hero-image" />
        <div className="courses-hero-content">
          <div className="container">
            <span className="courses-hero-tag">English Courses</span>
            <h1>English Language Courses</h1>
            <p>All hardworking and talented learners become native-like English speakers with our top-tier Right Consultant English Trainers in Nepal.</p>
          </div>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Learn English with British Institution</h2>
            <p>All hardworking and talented learners become native-like English speakers with our top-tier Right Consultant English Trainers in Nepal. We offer comprehensive English language courses designed for all levels.</p>
            <div className="intro-features">
              <span><FaCheckCircle /> British & American Based</span>
              <span><FaCheckCircle /> Expert Trainers</span>
              <span><FaCheckCircle /> Flexible Schedule</span>
              <span><FaCheckCircle /> Career Oriented</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TABS NAVIGATION ===== */}
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
                  <h2>English Language Programs</h2>
                  <p>We offer comprehensive English language courses designed for all levels - from beginners to advanced. Our programs are British & American based, ensuring you learn authentic English.</p>
                  <div className="overview-highlights">
                    <div className="highlight-item">
                      <FaGraduationCap />
                      <div>
                        <h4>4 Levels</h4>
                        <p>From A1 to C2</p>
                      </div>
                    </div>
                    <div className="highlight-item">
                      <FaClock />
                      <div>
                        <h4>Flexible Duration</h4>
                        <p>1.6 to 6 Months</p>
                      </div>
                    </div>
                    <div className="highlight-item">
                      <FaAward />
                      <div>
                        <h4>Certified Trainers</h4>
                        <p>British & American Experts</p>
                      </div>
                    </div>
                    <div className="highlight-item">
                      <FaGlobe />
                      <div>
                        <h4>Global Recognition</h4>
                        <p>IELTS, UKVI, TOEFL</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overview-image">
                  <img src={EnglishLanguageImage} alt="English Courses" />
                </div>
              </div>
            </div>
          )}

          {/* ===== O/A LEVEL TAB ===== */}
          {activeTab === 'o-level' && (
            <div className="tab-panel level-panel">
              <div className="level-header">
                <h2>O/A Level One (Career Oriented Course)</h2>
                <p>For those who want to speak and write English fluently. Available for 1,2,3,4,5,6 months (British & American Based). Ideal for Academic Level enhancement, Job Interview preparation, and English Research.</p>
              </div>
              <div className="level-details">
                <div className="level-info">
                  <span><FaClock /> Duration: 4 Months</span>
                  <span><FaUserGraduate /> Level: A1/A2 (Beginners)</span>
                  <span><FaAward /> Price: Rs. 15,000/-</span>
                </div>
                <ul className="level-features">
                  {levels[0].features.map((feature, index) => (
                    <li key={index}><FaCheckCircle /> {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ===== B LEVEL TAB ===== */}
          {activeTab === 'b-level' && (
            <div className="tab-panel level-panel">
              <div className="level-header">
                <h2>B Level One (Career Oriented Course)</h2>
                <p>Designed to enhance fluency and speed in English. IELTS/TOEFL Based. Ideal for Air Hostess, TV Presenter, News Reader, Radio RJ/VJ/DJ, Customer Service, Abroad Study, and those who want to become confident presenters.</p>
              </div>
              <div className="level-details">
                <div className="level-info">
                  <span><FaClock /> Duration: 3 Months</span>
                  <span><FaUserGraduate /> Level: B1/B2 (Intermediate)</span>
                  <span><FaAward /> Price: Rs. 15,000/-</span>
                </div>
                <ul className="level-features">
                  {levels[1].features.map((feature, index) => (
                    <li key={index}><FaCheckCircle /> {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ===== C LEVEL TAB ===== */}
          {activeTab === 'c-level' && (
            <div className="tab-panel level-panel">
              <div className="level-header">
                <h2>C Level One (Career Oriented Course)</h2>
                <p>Advanced level English mastery for professional communication skills. Ideal for those who want to achieve mastery in English at the highest level.</p>
              </div>
              <div className="level-details">
                <div className="level-info">
                  <span><FaClock /> Duration: 1.6 Months</span>
                  <span><FaUserGraduate /> Level: C1/C2 (Advanced)</span>
                  <span><FaAward /> Price: Rs. 15,000/-</span>
                </div>
                <ul className="level-features">
                  {levels[2].features.map((feature, index) => (
                    <li key={index}><FaCheckCircle /> {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ===== VISA & INTERVIEW PREPARATION TAB ===== */}
          {activeTab === 'visa-interview' && (
            <div className="tab-panel visa-interview-panel">
              <div className="test-header">
                <h2>{visaInterviewInfo.title}</h2>
                <p>{visaInterviewInfo.description}</p>
              </div>
              
              <div className="test-info-grid">
                <div className="test-info-cards">
                  <div className="info-card">
                    <FaClock className="info-icon" />
                    <h4>Duration</h4>
                    <p>{visaInterviewInfo.duration}</p>
                  </div>
                  <div className="info-card">
                    <FaAward className="info-icon" />
                    <h4>Price</h4>
                    <p>{visaInterviewInfo.price}</p>
                  </div>
                </div>
                
                <div className="test-sections">
                  <h3>What You'll Learn</h3>
                  <div className="sections-grid">
                    {visaInterviewInfo.sections.map((section, index) => (
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
                  {visaInterviewInfo.features.map((feature, index) => (
                    <li key={index}><FaCheckCircle /> {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ===== UK LIFESKILL A1 TAB ===== */}
          {activeTab === 'uk-lifeskill' && (
            <div className="tab-panel uk-lifeskill-panel">
              <div className="test-header">
                <h2>{ukLifeskillInfo.title}</h2>
                <p>{ukLifeskillInfo.description}</p>
              </div>
              
              <div className="test-info-grid">
                <div className="test-info-cards">
                  <div className="info-card">
                    <FaClock className="info-icon" />
                    <h4>Duration</h4>
                    <p>{ukLifeskillInfo.duration}</p>
                  </div>
                  <div className="info-card">
                    <FaAward className="info-icon" />
                    <h4>Price</h4>
                    <p>{ukLifeskillInfo.price}</p>
                  </div>
                </div>
                
                <div className="test-sections">
                  <h3>Test Sections</h3>
                  <div className="sections-grid">
                    {ukLifeskillInfo.sections.map((section, index) => (
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
                  {ukLifeskillInfo.features.map((feature, index) => (
                    <li key={index}><FaCheckCircle /> {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ===== PROFICIENCY TESTS TAB ===== */}
          {activeTab === 'proficiency' && (
            <div className="tab-panel proficiency-panel">
              <h2>English Proficiency Tests</h2>
              <p>Prepare for internationally recognized English proficiency tests with our expert guidance.</p>
              <div className="proficiency-grid">
                {proficiencyTests.map((test, index) => (
                  <div className="proficiency-card" key={index}>
                    <FaCheckCircle />
                    <span>{test}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== TEST CENTERS TAB ===== */}
          {activeTab === 'test-centers' && (
            <div className="tab-panel centers-panel">
              <h2>Test Centers</h2>
              <p>We are affiliated with the following test centers for English proficiency exams.</p>
              <div className="centers-grid">
                {testCenters.map((center, index) => (
                  <div className="center-card" key={index}>
                    <div className="center-icon">{center.icon}</div>
                    <h3>{center.name}</h3>
                    <p>{center.description}</p>
                  </div>
                ))}
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
            <h2>Why Learn English With Us?</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon"><FaAward /></div>
              <h3>Expert Trainers</h3>
              <p>Learn from certified British & American English trainers.</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><FaGlobe /></div>
              <h3>Global Recognition</h3>
              <p>IELTS, UKVI, PTE and TOEFL preparation available.</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><FaClock /></div>
              <h3>Flexible Schedule</h3>
              <p>Morning, day, and evening batches available.</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><FaGraduationCap /></div>
              <h3>Career Oriented</h3>
              <p>Courses designed for academic and professional success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Master English?</h2>
            <p>Join British Institution today and become fluent in English with our expert trainers.</p>
            <Link to="/contact" className="btn-primary">
              Enroll Now <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnglishCourses;