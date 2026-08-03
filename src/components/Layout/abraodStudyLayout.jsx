// src/components/Layout/StudyAbroadLayout.jsx
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  FaCheckCircle, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaHome,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import PageTitle from '../common/PageTitle';

// UK Hero Image
import UKHero from '../../assets/images/study-abroad/uk.jpg';

// Other Destinations Images
import Australia from '../../assets/images/study-abroad/australia.jpg';
import Canada from '../../assets/images/study-abroad/canada.jpg';
import USA from '../../assets/images/study-abroad/usa.jpg';
import Korea from '../../assets/images/study-abroad/korea.jpg';
import Malta from '../../assets/images/study-abroad/malta.jpg';
import Europe from '../../assets/images/study-abroad/europe.jpg';

import './css/abroadstudyLayout.css'

const StudyAbroadLayout = () => {
  // ===== FORM STATE =====
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: ''
      });
    }, 3000);
  };

  // ===== OTHER DESTINATIONS =====
  const otherDestinations = [
    { name: 'Study in UK', flag: '🇬🇧', path: '/study-abroad/uk', image: UKHero },
    { name: 'Study in Australia', flag: '🇦🇺', path: '/study-abroad/australia', image: Australia },
    { name: 'Study in Canada', flag: '🇨🇦', path: '/study-abroad/canada', image: Canada },
    { name: 'Study in USA', flag: '🇺🇸', path: '/study-abroad/usa', image: USA },
    { name: 'Study in South Korea', flag: '🇰🇷', path: '/study-abroad/korea', image: Korea },
    { name: 'Study in Malta', flag: '🇪🇺', path: '/study-abroad/malta', image: Malta },
    { name: 'Study in Europe', flag: '🇪🇺', path: '/study-abroad/europe', image: Europe },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 4;
  const totalSlides = Math.ceil(otherDestinations.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const visibleDestinations = otherDestinations.slice(
    currentSlide * itemsPerPage,
    currentSlide * itemsPerPage + itemsPerPage
  );

  return (
    <>
      <PageTitle title="Study Abroad" />

      {/* ===== OUTLET FOR CHILD ROUTES ===== */}
      <Outlet />

      {/* ===== OTHER DESTINATIONS ===== */}
      <section className="study-section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Explore More</span>
            <h2>Other Destinations</h2>
            <p>Discover more study destinations around the world</p>
          </div>
          <div className="destinations-slider">
            <button onClick={prevSlide} className="slider-arrow prev">
              <FaChevronLeft />
            </button>
            <div className="destinations-track">
              {visibleDestinations.map((dest, index) => (
                <Link to={dest.path} className="dest-slide" key={index}>
                  <img src={dest.image} alt={dest.name} />
                  <div className="dest-slide-overlay">
                    <span className="slide-flag">{dest.flag}</span>
                    <h4>{dest.name}</h4>
                  </div>
                </Link>
              ))}
            </div>
            <button onClick={nextSlide} className="slider-arrow next">
              <FaChevronRight />
            </button>
          </div>
          <div className="slider-dots">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLY NOW FORM ===== */}
      <section className="study-section apply-section">
        <div className="container">
          <div className="apply-wrapper">
            <div className="apply-content">
              <div className="section-header">
                <span className="section-tag">Apply Now</span>
                <h2>Request a Call Back</h2>
                <p>We help you find the appropriate institution based on your academic, financial &amp; location preferences.</p>
              </div>

              {formSubmitted ? (
                <div className="form-success">
                  <FaCheckCircle />
                  <h3>Thank You!</h3>
                  <p>Your request has been submitted. We will contact you shortly.</p>
                </div>
              ) : (
                <form className="apply-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label><FaUser /> Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label><FaEnvelope /> Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label><FaPhone /> Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label><FaHome /> Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Your Address"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-primary">Apply Now</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default StudyAbroadLayout;