// src/components/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaGraduationCap, FaUsers, FaAward, FaGlobe } from 'react-icons/fa';

import PageTitle from '../common/PageTitle.jsx';
// Import images (you'll need to add these images)
import AboutHeroImage from '../../assets/images/resources/british.jpeg';
import FounderImage from '../../assets/images/team/watshal-bhattarai.jpg';
import AboutProcessImage from '../../assets/images/team/process.jpg';
import TimelineImage from '../../assets/images/team/timeline.jpg';

// Team Members Images
import CounsellorImage from '../../assets/images/team/Anjana.jpg';
import ComputerInstructorImage from '../../assets/images/team/Anjana.jpg';
import DikshyaGhimireImage from '../../assets/images/team/dikshya_ghimire.jpeg';
import IeltsTeacherImage from '../../assets/images/team/asmita.jpg';
import BimalGuragainImage from '../../assets/images/team/Bimal_Guragain.jpeg';
import RajShresthaImage from '../../assets/images/team/Raj_Shrestha.jpeg';
import VinishaRaiImage from '../../assets/images/team/Vinisha_Rai.jpeg';
import LilaPandayImage from '../../assets/images/team/Lila_Panday.jpeg';
import RamChamlagainImage from '../../assets/images/team/Ram_Chamlagai.jpeg';
import PratikImage from '../../assets/images/team/pratik.png';
import './css/About.css';

const About = () => {
  // ===== TIMELINE DATA =====
  const timeline = [
    { year: '2008', title: 'Foundation', description: 'British Institution was established with a vision to provide quality education and skill development in Nepal.' },
    { year: '2010', title: 'Computer Courses', description: 'Introduced comprehensive computer courses for students.' },
    { year: '2015', title: 'Study Abroad Services', description: 'Launched comprehensive study abroad consultancy services for students.' },
    { year: '2018', title: 'Partnership with British Council', description: 'Became an official partner with British Council for English language testing.' },
    { year: '2024', title: 'CTEVT Affiliation', description: 'Received official affiliation from CTEVT for technical and vocational programs.' },
    { year: '2025', title: 'Caregiver Training', description: 'Launched comprehensive caregiver training for students.' },
    { year: '2026', title: '10000+ Students Trained', description: 'Reached the milestone of training over 20,000+ students across all programs.' },
  ];

  // ===== TEAM MEMBERS =====
  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Watshal Bhattarai',
      position: 'CEO & Founder',
      image: FounderImage,
      isFounder: true,
    },
    {
      id: 2,
      name: 'Miss Anjana Bhattarai',
      position: 'Treasurer',
      image: CounsellorImage,
    },
    {
      id: 3,
      name: 'Miss Asmita Bastola',
      position: 'Counsellor',
      image: IeltsTeacherImage,
    },
    {
      id: 3,
      name: 'Mrs. Lila Panday',
      position: 'Counsellor',
      image: LilaPandayImage,
    },
    {
      id: 4,
      name: 'Miss Dikshya Ghimire',
      position: 'Counsellor',
      image: DikshyaGhimireImage,
    },
    {
      id: 5,
      name: 'Mr. Bimal Guragain',
      position: 'English Teacher',
      image: BimalGuragainImage,
    },
    {
      id: 6,
      name: 'Mr. Ram Chamlagain',
      position: 'English Teacher',
      image: RamChamlagainImage,
    },
    {
      id: 7,
      name: 'Miss Vinisha Rai',
      position: 'English Teacher',
      image: VinishaRaiImage,
    },
    
    {
      id: 8,
      name: 'Mr. Raj Shrestha',
      position: 'Computer Teacher',
      image: RajShresthaImage,
    },
    {
      id: 9,
      name: 'Mr. Pratik Bhattarai',
      position: 'Computer Teacher',
      image: PratikImage,
    },
  ];

  // ===== PROCESS STEPS =====
  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We understand your goals, interests, and academic background to create a personalized plan.',
    },
    {
      step: '02',
      title: 'Program Selection',
      description: 'We help you choose the right course, university, or training program that matches your aspirations.',
    },
    {
      step: '03',
      title: 'Training & Preparation',
      description: 'We provide expert training, test preparation, and skill development for your chosen program.',
    },
    {
      step: '04',
      title: 'Application & Visa',
      description: 'We guide you through the entire application process, from documentation to visa approval.',
    },
  ];

  return (
    <div className="about-page">

      <PageTitle 
        title="About Us"
        description="Learn about British Institution - Our mission, vision, and journey since 2008." 
      />
      {/* ===== HERO SECTION ===== */}
      <section className="header-hero">
        <div className="header-hero-overlay"></div>
        <img src={AboutHeroImage} alt="About British Institution" className="header-hero-image" />
        <div className="header-hero-content">
          <div className="container">
            <span className="header-hero-tag">About Us</span>
            <h1>Empowering Futures Since 2008</h1>
            <p>British Institution of Education Pvt. Ltd. is a trusted educational center committed to quality education, skill development, and career guidance.</p>
          </div>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">Welcome to British Institution</h2>
              <p>
                British Institution of Education Pvt. Ltd. is a trusted and experienced educational center, proudly serving students since 2008. With a strong commitment to quality education and skill development, we have been helping individuals achieve their academic and career goals for over a decade.
              </p>
              <p>
                Our programs are designed to meet the needs of students from different backgrounds and help them build a successful future. With qualified instructors, a supportive learning environment, and a focus on practical knowledge, we aim to empower our students with the skills and confidence they need.
              </p>
              <div className="about-intro-stats">
                <div>
                  <span className="stats-number">18+</span>
                  <span className="stats-label">Years of Excellence</span>
                </div>
                <div>
                  <span className="stats-number">20K+</span>
                  <span className="stats-label">Students Trained</span>
                </div>
                <div>
                  <span className="stats-number">20+</span>
                  <span className="stats-label">Courses Offered</span>
                </div>
              </div>
            </div>
            <div className="about-intro-image">
              <img src={AboutHeroImage} alt="British Institution Campus" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOUNDER / CEO MESSAGE ===== */}
      <section className="about-founder">
        <div className="container">
          <div className="about-founder-grid">
            <div className="about-founder-image">
              <img src={FounderImage} alt="Mr. Watschal Bhattarai - Founder & CEO" />
              <div className="founder-badge">Founder & CEO</div>
            </div>
            <div className="about-founder-text">
              <span className="section-tag">Message From</span>
              <h2 className="section-title">Mr. Watshal Bhattarai</h2>
              <h3>Founder & CEO, British Institution</h3>
              <p>
                "At British Institution, we believe that education is the most powerful tool to transform lives. 
                Since 2008, we have been dedicating to providing quality education and training that empowers 
                individuals to achieve their dreams.
              </p>
              <p>
                Our mission is to bridge the gap between aspirations and opportunities by offering world-class 
                training, expert guidance, and unwavering support. Whether it's pursuing higher education abroad, 
                mastering a new skill, or advancing your career, we are here to guide you every step of the way."
              </p>
              <div className="founder-signature">
                <span>Watshal Bhattarai</span>
                <p>Founder & CEO, British Institution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="about-mission">
        <div className="container">
          <div className="about-mission-grid">
            <div className="mission-box">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide accessible, quality education and skill development programs that empower individuals 
                to achieve their academic and career goals while contributing to the growth of the community.
              </p>
              <ul>
                <li><FaCheckCircle /> Quality Education</li>
                <li><FaCheckCircle /> Skill Development</li>
                <li><FaCheckCircle /> Career Guidance</li>
                <li><FaCheckCircle /> Community Growth</li>
              </ul>
            </div>
            <div className="vision-box">
              <div className="mission-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To become a leading educational institution in Nepal, recognized for excellence in IT training, 
                language education, and international consultancy services.
              </p>
              <ul>
                <li><FaCheckCircle /> Excellence in Education</li>
                <li><FaCheckCircle /> Global Recognition</li>
                <li><FaCheckCircle /> Innovation & Growth</li>
                <li><FaCheckCircle /> Student Success</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR PROCESS ===== */}
      <section className="about-process">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">A step-by-step approach to help you achieve your goals</p>
          </div>
          <div className="about-process-grid">
            {processSteps.map((step) => (
              <div className="process-card" key={step.step}>
                <div className="process-step-number">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                <span className="process-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="about-timeline">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">British Institution Timeline</h2>
            <p className="section-subtitle">A journey of excellence and growth since 2008</p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={item.year}>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="about-team">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Team</span>
            <h2 className="section-title">Meet Our Experts</h2>
            <p className="section-subtitle">Dedicated professionals committed to your success</p>
          </div>
          <div className="about-team-grid">
            {teamMembers.map((member) => (
              <div className={`team-card ${member.isFounder ? 'founder-card' : ''}`} key={member.id}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  {member.isFounder && <span className="team-founder-badge">Founder</span>}
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p className="team-position">{member.position}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;