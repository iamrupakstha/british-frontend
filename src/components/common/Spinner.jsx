// src/components/common/Spinner.jsx
import React from 'react';
import { images } from '../../assets/images';
import './css/Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-wrapper">
        {/* Spinner Ring */}
        <div className="spinner-ring">
          <div className="spinner-ring-track"></div>
          <div className="spinner-ring-animated"></div>
          
          {/* Logo in Center */}
          <div className="spinner-logo">
            <img 
              src={images.logo} 
              alt="British Institution" 
            />
          </div>
        </div>
        
        <p className="spinner-text">
          Loading...
        </p>
        
        {/* Loading dots animation */}
        <div className="spinner-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;