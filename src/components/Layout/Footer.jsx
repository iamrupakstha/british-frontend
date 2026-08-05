// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebook, 
  FaInstagram, 
  FaYoutube,
  FaTiktok,
  FaArrowRight,
  FaClock,
  FaGraduationCap,
  FaHeart,
  FaCode
} from 'react-icons/fa';
import Logo from '../../assets/images/logo/white-logo.jpeg';
import { instituteInfo } from '../../utils/constants.js';
import './css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/study-abroad', label: 'Study Abroad' },
    { to: '/courses', label: 'Courses' },
    { to: '/contact', label: 'Contact' },
    { to: '/verify-certificate', label: 'Verify Certificate' },
    
  ];

  const courseLinks = [
    { to: '/courses/computer-courses', label: 'Computer Courses' },
    { to: '/courses/english-courses', label: 'English Language' },
    { to: '/courses/care-giver', label: 'Care Giver Training' },
    { to: '/courses/ielts-pte', label: 'IELTS/PTE' },
    { to: '/courses/beautician-courses', label: 'Beautician Courses' },
  ];

  const workingHours = [
    { day: 'Sunday - Friday', hours: '6:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: 'Closed' },
  ];

  

  return (
    <footer className="footer">
      {/* ===== MAIN FOOTER ===== */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* ===== Column 1: About & Logo ===== */}
            <div className="footer-col footer-col-about">
              <div className="footer-logo">
                <img src={Logo} alt="British Institution" />
              </div>
              <p className="footer-about-text">
                Empowering futures with quality education, skill development, 
                and international consultancy services since 2008.
              </p>
              <div className="footer-social">
                <h4>Follow Us</h4>
                <div className="footer-social-icons">
                  <a 
                    href={instituteInfo.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon facebook"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a 
                    href={instituteInfo.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon instagram"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href={instituteInfo.tiktok} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon twitter"
                    aria-label="Twitter"
                  >
                    <FaTiktok />
                  </a>                  
                </div>
              </div>
            </div>

            {/* ===== Column 2: Quick Links ===== */}
            <div className="footer-col footer-col-links">
              <h3 className="footer-title">
                Quick Links
              </h3>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>
                      <FaArrowRight className="link-icon" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== Column 3: Courses ===== */}
            <div className="footer-col footer-col-courses">
              <h3 className="footer-title">
                Our Courses
              </h3>
              <ul className="footer-links">
                {courseLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>
                      <FaGraduationCap className="link-icon" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== Column 4: Contact & Hours ===== */}
            <div className="footer-col footer-col-contact">
              <h3 className="footer-title">
                Get In Touch
              </h3>
              
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <p>Birtamod, Bhadrapur Road (Opposite to Yamaha Showroom), Jhapa</p>
                  </div>
                </div>
                
                <div className="footer-contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <p>{instituteInfo.phone}</p>
                  </div>
                </div>
                
                <div className="footer-contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <p>{instituteInfo.email}</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="footer-hours">
                <h4>
                  <FaClock className="hours-icon" />
                  Working Hours
                </h4>
                <ul>
                  {workingHours.map((item, index) => (
                    <li key={index}>
                      <span className="hours-day">{item.day}</span>
                      <span className={`hours-time ${item.hours === 'Closed' ? 'closed' : ''}`}>
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FOOTER BOTTOM ===== */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {currentYear} {instituteInfo.name}. All rights reserved.
            </p>
            
            

            <div className="footer-powered">
              <span className="powered-text">
                <FaHeart className="powered-heart" />
                Powered by 
                <a 
                  href="https://www.rupak63.com.np" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="powered-link"
                >
                  Rupak Shrestha
                </a>
                <FaCode className="powered-code" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;