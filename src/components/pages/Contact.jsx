// src/components/pages/Contact.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaUser,
  FaHome
} from 'react-icons/fa';
import PageTitle from '../common/PageTitle.jsx';

// Hero Background Image
import HeroBg from '../../assets/images/resources/british.jpeg';

import './css/Contact.css';

const Contact = () => {
  // ===== FORM STATE =====
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form Data:', formData);
      setFormSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // ===== CONTACT INFO =====
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: ['Birtamod, Bhadrapur Road (Opposite to Yamaha Showroom), Jhapa'],
      link: 'https://maps.google.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: ['+977-23-535918', '9824934350', '9820513922'],
      link: 'tel:+977-023535918'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['britishitbtm@gmail.com'],
      link: 'mailto:britishitbtm@gmail.com'
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Mon - Fri: 6:00 AM - 6:00 PM'],
    },
  ];

  // ===== SOCIAL ICONS =====
  const socialLinks = [
    { icon: <FaFacebook />, label: 'Facebook', url: 'https://www.facebook.com/britishbirtamode', color: '#1877F2' },
    { icon: <FaInstagram />, label: 'Instagram', url: 'https://www.instagram.com/britishinstitution', color: '#E4405F' },
    { icon: <FaTiktok />, label: 'TikTok', url: 'https://www.tiktok.com/@britishinstitution', color: '#000000' },
  ];

  return (
    <div className="contact-page">
      <PageTitle 
        title="Contact Us" 
        description="Get in touch with British Institution - Contact us for admissions, inquiries, and more."
      />

      {/* ===== HERO ===== */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img src={HeroBg} alt="Contact Us" />
        </div>
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <div className="container">
            <span className="contact-hero-tag">Contact Us</span>
            <h1>Get In Touch</h1>
            <p>We'd love to hear from you. Reach out to us for any inquiries.</p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT INFO & FORM ===== */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* ===== LEFT: CONTACT INFO ===== */}
            <div className="contact-info-wrapper">
              <h2>Contact Information</h2>
              <p>Feel free to reach out to us for any questions or inquiries.</p>
              
              <div className="contact-info-list">
                {contactInfo.map((item, index) => (
                  <div className="contact-info-item" key={index}>
                    <div className="contact-info-icon">{item.icon}</div>
                    <div className="contact-info-content">
                      <h4>{item.title}</h4>
                      {item.details.map((detail, i) => (
                        item.link ? (
                          <a 
                            key={i} 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contact-info-link"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={i}>{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h4>Follow Us</h4>
                <div className="contact-social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      style={{ '--social-color': social.color }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== RIGHT: CONTACT FORM ===== */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <p>We'll get back to you as soon as possible.</p>

              {formSubmitted ? (
                <div className="form-success">
                  <FaCheckCircle />
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We will contact you shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        <FaUser /> Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        <FaEnvelope /> Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">
                        <FaPhone /> Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">
                        <FaHome /> Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <FaArrowRight />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== GOOGLE MAP ===== */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Location</span>
            <h2>Find Us on Map</h2>
          </div>
          <div className="map-wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.3425019917154!2d87.98772737542998!3d26.63751417681234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5baf4f07fe047%3A0xf96c366a450b462f!2sBritish%20Language%20%26%20IT%20Institute%20%7C%20British%20Institution%20of%20Education%20Consultancy%20Pvt.%20Ltd.%20%7C%20British%20Caregiver%20Center!5e0!3m2!1sen!2snp!4v1785211169161!5m2!1sen!2snp"          width="100%" 
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="British Institution Location"
            className="google-map">

            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;