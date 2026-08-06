// src/components/pages/Resources.jsx
import React, { useState } from 'react';
import { 
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import PageTitle from '../common/PageTitle.jsx';

// Hero Background Image
import HeroBg from '../../assets/images/resources/british.jpeg';


// Banner Images
import Banner1 from '../../assets/images/resources/after-see.jpg';
import Banner2 from '../../assets/images/resources/beauty-parlour.jpg';
import Banner3 from '../../assets/images/resources/study-korea.jpg';
import StudentSuccess1 from '../../assets/images/students/visa-success5.jpg';
import StudentSuccess2 from '../../assets/images/students/visa-success6.jpg';
import StudentSuccess3 from '../../assets/images/students/visa-success7.jpg';
import StudentSuccess4 from '../../assets/images/students/visa-success8.jpg';
import StudentSuccess5 from '../../assets/images/students/visa-success9.jpg';
import StudentSuccess6 from '../../assets/images/students/visa-success10.jpg';
import StudentSuccess7 from '../../assets/images/students/visa-success11.jpg';
import StudentSuccess8 from '../../assets/images/students/visa-success12.jpeg';
import StudentSuccess9 from '../../assets/images/students/visa-success13.jpeg';


// brochers
import Brochure1 from '../../assets/images/resources/brocher_page-0001.jpg';
import Brochure2 from '../../assets/images/resources/brocher_page-0002.jpg';
import Brochure3 from '../../assets/images/resources/brocher_page-0003.jpg';
import Brochure4 from '../../assets/images/resources/brocher_page-0004.jpg';
import Brochure5 from '../../assets/images/resources/brocher_page-0005.jpg';
import Brochure6 from '../../assets/images/resources/brocher_page-0005.jpg';

import './css/Resources.css';

const Resources = () => {
  // ===== STATE FOR LIGHTBOX =====
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState([]);

  // ===== BANNER DATA =====
  const banners = [
    { id: 1, image: Banner1 },
    { id: 2, image: Banner2 },
    { id: 3, image: StudentSuccess1 },
    { id: 4, image: StudentSuccess2 },
    { id: 5, image: StudentSuccess3 },
    { id: 6, image: StudentSuccess4 },
    { id: 7, image: StudentSuccess5 },
    { id: 8, image: StudentSuccess6 },
    { id: 9, image: StudentSuccess7 },
    { id: 10, image: StudentSuccess8 },
    { id: 11, image: StudentSuccess9 },
  ];

  // ===== BROCHURE DATA =====
  const brochures = [
    { id: 1, image: Brochure1 },
    { id: 2, image: Brochure2 },
    { id: 3, image: Brochure3 },
    { id: 4, image: Brochure4 },
    { id: 5, image: Brochure5 },
    { id: 6, image: Brochure6 },
  ];

  // ===== LIGHTBOX FUNCTIONS =====
  const openLightbox = (images, index) => {
    setCurrentGallery(images);
    setCurrentIndex(index);
    setCurrentImage(images[index].image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    setCurrentGallery([]);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (currentIndex < currentGallery.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentImage(currentGallery[currentIndex + 1].image);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentImage(currentGallery[currentIndex - 1].image);
    }
  };

  // ===== KEYBOARD NAVIGATION =====
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentIndex, currentGallery]);

  return (
    <div className="resources-page">
      <PageTitle 
        title="Resources" 
        description="Browse our resources - banners and brochures."
      />

      {/* ===== HERO WITH BACKGROUND IMAGE ===== */}
      <section className="resources-hero">
        <div className="resources-hero-bg">
          <img src={HeroBg} alt="Resources" />
        </div>
        <div className="resources-hero-overlay"></div>
        <div className="resources-hero-content">
          <div className="container">
            <span className="resources-hero-tag">Resources</span>
            <h1>Our Resources</h1>
            <p>Browse through our banners and brochures</p>
          </div>
        </div>
      </section>

      {/* ===== BROCHURES SECTION ===== */}
      <section className="brochures-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Brochures</span>
            <h2>Brochure Gallery</h2>
          </div>
          <div className="brochures-grid">
            {brochures.map((brochure, index) => (
              <div 
                className="brochure-card" 
                key={brochure.id}
                onClick={() => openLightbox(brochures, index)}
              >
                <div className="brochure-image">
                  <img src={brochure.image} alt="Brochure" />
                  <div className="brochure-overlay">
                    <FaExpand className="expand-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BANNERS SECTION ===== */}
      <section className="banners-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Banners & Student Success</span>
            <h2>Banner Gallery</h2>
          </div>
          <div className="banners-grid">
            {banners.map((banner, index) => (
              <div 
                className="banner-card" 
                key={banner.id}
                onClick={() => openLightbox(banners, index)}
              >
                <div className="banner-image">
                  <img src={banner.image} alt="Banner" />
                  <div className="banner-overlay">
                    <FaExpand className="expand-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ===== LIGHTBOX ===== */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FaTimes />
          </button>
          
          {currentGallery.length > 1 && (
            <>
              <button 
                className="lightbox-nav lightbox-prev" 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                disabled={currentIndex === 0}
              >
                <FaChevronLeft />
              </button>
              <button 
                className="lightbox-nav lightbox-next" 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                disabled={currentIndex === currentGallery.length - 1}
              >
                <FaChevronRight />
              </button>
              <div className="lightbox-counter">
                {currentIndex + 1} / {currentGallery.length}
              </div>
            </>
          )}
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage} alt="Full view" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;