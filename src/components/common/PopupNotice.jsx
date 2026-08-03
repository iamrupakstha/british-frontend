// src/components/common/PopupNotice.jsx
import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import PopupBanner from '../../assets/images/resources/popup.jpg';
import './css/PopupNotice.css';

const PopupNotice = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button onClick={onClose} className="popup-close-btn" aria-label="Close">
          <FiX />
        </button>
        
        {/* Image */}
        <img 
          src={PopupBanner} 
          alt="Popup Banner" 
          className="popup-image"
        />
      </div>
    </div>
  );
};

export default PopupNotice;