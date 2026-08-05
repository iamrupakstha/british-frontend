import React from 'react'
import './css/CTA.css';
import { Link, NavLink } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const CTA = () => {
  return (
    <div>
      {/* ===== CTA ===== */}
      <section className="cta-sections">
        <div className="container cta-contents">
          <h2>Ready to start your journey?</h2>
          <p>Join British Institution today. Limited seats for the upcoming batch.</p>
          <div className="cta-buttons">
            <Link to="/enroll" className="btn-primary">Enroll now <FaArrowRight/></Link>
            <Link to="/contact" className="btn-outline">Contact us</Link>
          </div>
          <div className="cta-features">
            <span><FaCheckCircle /> CTEVT affiliated</span>
            <span><FaCheckCircle /> 18+ years experience</span>
            <span><FaCheckCircle /> 20000+ students trained</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CTA