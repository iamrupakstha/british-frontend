// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../../assets/images/logo/white-logo.jpeg';
import BritishCouncilLogo from '../../assets/images/icons/britishcouncil.jpg';
import PearsonLogo from '../../assets/images/icons/pearson.png';
import CTEVTLogo from '../../assets/images/icons/CTEVT.jpg';
import { instituteInfo } from '../../utils/constants.js';
import './css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageError = (key) => {
    setImageErrors(prev => ({ ...prev, [key]: true }));
  };

  const getLogoSrc = (key, primarySrc) => {
    if (imageErrors[key]) {
      const fallbacks = {
        logo: 'https://via.placeholder.com/150x60/1A237E/FFFFFF?text=BRITISH',
        britishCouncil: 'https://via.placeholder.com/100x40/1A237E/FFFFFF?text=British+Council',
        pearson: 'https://via.placeholder.com/100x40/1A237E/FFFFFF?text=Pearson',
        ctevt: 'https://via.placeholder.com/100x40/1A237E/FFFFFF?text=CTEVT',
      };
      return fallbacks[key] || primarySrc;
    }
    return primarySrc;
  };

  const affiliatedLogos = [
    {
      key: 'britishCouncil',
      src: BritishCouncilLogo,
      alt: 'British Council',
      url: 'https://www.britishcouncil.org',
    },
    {
      key: 'pearson',
      src: PearsonLogo,
      alt: 'Pearson',
      url: 'https://www.pearson.com',
    },
    {
      key: 'ctevt',
      src: CTEVTLogo,
      alt: 'CTEVT',
      url: 'https://ctevt.org.np',
    },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Study Abroad', 
      path: '/study-abroad',
      dropdown: [
        { name: 'Study in UK', path: '/study-abroad/uk' },
        { name: 'Study in USA', path: '/study-abroad/usa' },
        { name: 'Study in Australia', path: '/study-abroad/australia' },
        { name: 'Study in Canada', path: '/study-abroad/canada' },
        { name: 'Study in Korea', path: '/study-abroad/korea' },
        { name: 'Study in Malta', path: '/study-abroad/malta' },
        { name: 'Study in Europe', path: '/study-abroad/europe' },
      ]
    },
    { 
      name: 'Courses', 
      path: '/courses',
      dropdown: [
        { name: 'Computer Courses', path: '/courses/computer-courses' },
        { name: 'English Language Courses', path: '/courses/english-courses' },
        { name: 'IELTS/PTE', path: '/courses/ielts-pte' },
        { name: 'Care Giver Training', path: '/courses/care-giver' },
        { name: 'Beautician Courses', path: '/courses/beautician-courses' },
      ]
    },
    { name: 'Resources', path: '/resources' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  // Check if any dropdown item is active
  const isDropdownActive = (link) => {
    if (!link.dropdown) return false;
    return link.dropdown.some(item => window.location.pathname === item.path);
  };

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <div className="top-bar-item">
                <FaMapMarkerAlt className="top-bar-icon" />
                <span className="top-bar-text">{instituteInfo.location}</span>
              </div>
              <div className="top-bar-item">
                <FaPhone className="top-bar-icon" />
                <span className="top-bar-text">{instituteInfo.phone}</span>
              </div>
              <div className="top-bar-item">
                <FaEnvelope className="top-bar-icon" />
                <span className="top-bar-text">{instituteInfo.email}</span>
              </div>
            </div>

            <div className="top-bar-right">
              <span className="top-bar-affiliated-label">CERTIFICATION</span>
              <div className="top-bar-logos">
                {affiliatedLogos.map((logo) => (
                  <a
                    key={logo.key}
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="top-bar-logo-link"
                    title={logo.alt}
                  >
                    <img
                      src={getLogoSrc(logo.key, logo.src)}
                      alt={logo.alt}
                      className="top-bar-logo-img"
                      onError={() => handleImageError(logo.key)}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-inner">
            {/* Logo */}
            <Link to="/" className="navbar-logo">
              <img
                src={getLogoSrc('logo', Logo)}
                alt="British Institution"
                className="navbar-logo-img"
                onError={() => handleImageError('logo')}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="navbar-nav">
              {navLinks.map((link, index) => {
                const isActive = isDropdownActive(link);
                
                return (
                  <div 
                    key={link.path} 
                    className="nav-item"
                    onMouseEnter={() => link.dropdown && setHoveredDropdown(index)}
                    onMouseLeave={() => link.dropdown && setHoveredDropdown(null)}
                  >
                    {link.dropdown ? (
                      <>
                        <NavLink
                          to={link.path}
                          className={({ isActive: isLinkActive }) =>
                            `nav-link nav-link-with-icon ${(isLinkActive || isActive) ? 'active' : ''}`
                          }
                        >
                          {link.name}
                          <FaChevronDown className={`chevron-icon ${hoveredDropdown === index ? 'rotated' : ''}`} />
                        </NavLink>
                        {hoveredDropdown === index && (
                          <div className="dropdown-menu">
                            {link.dropdown.map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.path}
                                className="dropdown-item"
                                onClick={() => setHoveredDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `nav-link ${isActive ? 'active' : ''}`
                        }
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </div>
                );
              })}
              <Link to="/enroll" className="cta-button">
                Enroll Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* ===== MOBILE MENU ===== */}
          <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <div className="mobile-menu-items">
              {navLinks.map((link, index) => {
                const isActive = isDropdownActive(link);
                
                return (
                  <div key={link.path} className="mobile-nav-item">
                    {link.dropdown ? (
                      <>
                        <div 
                          className={`mobile-nav-link-wrapper ${(isActive) ? 'active' : ''}`}
                          onClick={() => {
                            setHoveredDropdown(hoveredDropdown === index ? null : index);
                          }}
                        >
                          <Link 
                            to={link.path} 
                            className="mobile-nav-link-text"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsOpen(false);
                            }}
                          >
                            {link.name}
                          </Link>
                          <FaChevronDown className={`chevron-icon ${hoveredDropdown === index ? 'rotated' : ''}`} />
                        </div>
                        {hoveredDropdown === index && (
                          <div className="mobile-dropdown-menu">
                            {link.dropdown.map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.path}
                                className="mobile-dropdown-item"
                                onClick={() => {
                                  setIsOpen(false);
                                  setHoveredDropdown(null);
                                }}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className="mobile-nav-link"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
              
              <Link
                to="/enroll"
                className="mobile-cta"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </Link>

              <div className="mobile-affiliations">
                <span className="mobile-affiliations-label">AFFILIATED</span>
                <div className="mobile-affiliations-logos">
                  {affiliatedLogos.map((logo) => (
                    <a
                      key={logo.key}
                      href={logo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={getLogoSrc(logo.key, logo.src)}
                        alt={logo.alt}
                        onError={() => handleImageError(logo.key)}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;