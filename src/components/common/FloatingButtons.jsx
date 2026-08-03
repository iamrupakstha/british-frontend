// src/components/common/FloatingButtons.jsx
import React, { useState, useEffect } from 'react';
import { 
  FiChevronUp, 
  FiFacebook, 
  FiInstagram, 
  FiYoutube,
  FiMessageCircle,
  FiX
} from 'react-icons/fi';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { instituteInfo } from '../../utils/constants';
import './css/FloatingButtons.css';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // WhatsApp
  const phoneNumber = 9852674563;
  const whatsappLink = `https://wa.me/977${phoneNumber}?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20courses.`;

  // Social Links
  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FiFacebook />,
      url: instituteInfo.facebook || 'https://www.facebook.com/britishbirtamode',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: <FiInstagram />,
      url: 'https://www.instagram.com/britishinstitution/',
      color: '#E4405F'
    },
    {
      name: 'TikTok',
      icon: <FaTiktok />,
      url: 'https://www.tiktok.com/@britishinstitution',
      color: '#000000'
    },
  ];

  // Scroll to top visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // WhatsApp button visibility after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-buttons">
      {/* ===== MAIN TOGGLE BUTTON ===== */}
      <button
        onClick={toggleMenu}
        className={`floating-toggle ${isOpen ? 'open' : ''}`}
        aria-label="Toggle social menu"
      >
        {isOpen ? <FiX /> : <FiMessageCircle />}
      </button>

      {/* ===== SOCIAL ICONS MENU ===== */}
      <div className={`floating-social-menu ${isOpen ? 'open' : ''}`}>
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-social-item"
            style={{ '--delay': `${index * 0.1}s`, '--social-color': social.color }}
            aria-label={social.name}
          >
            <span className="social-tooltip">{social.name}</span>
            <span className="social-icon-wrapper">
              {social.icon}
            </span>
          </a>
        ))}
      </div>

      {/* ===== WHATSAPP BUTTON ===== */}
      <div className="floating-whatsapp-wrapper">
        {showTooltip && (
          <div className="floating-tooltip">
            <p>Chat with us on WhatsApp! 😊</p>
            <div className="floating-tooltip-arrow"></div>
          </div>
        )}

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`floating-whatsapp ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={() => {
            setIsHovered(true);
            setShowTooltip(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setShowTooltip(false);
          }}
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp />
          <span className="whatsapp-pulse"></span>
          <span className="whatsapp-badge">1</span>
        </a>
      </div>

      {/* ===== SCROLL TO TOP BUTTON ===== */}
      <button
        onClick={scrollToTop}
        className={`floating-scroll-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <FiChevronUp />
      </button>
    </div>
  );
};

export default FloatingButtons;