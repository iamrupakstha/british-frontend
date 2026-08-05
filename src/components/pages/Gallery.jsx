// src/components/pages/Gallery.jsx
import React, { useState } from 'react';
import { 
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaCamera
} from 'react-icons/fa';
import PageTitle from '../common/PageTitle.jsx';

// Hero Background Image
import HeroBg from '../../assets/images/resources/british.jpeg';


// Gallery Images
import Gallery1 from '../../assets/images/courses/picnic.webp';
import Gallery2 from '../../assets/images/courses/english-class2.webp';
import Gallery3 from '../../assets/images/courses/english-class3.webp';
import Gallery4 from '../../assets/images/courses/english-class4.webp';
import Gallery5 from '../../assets/images/courses/sarsawati-puja.webp';
import Gallery6 from '../../assets/images/courses/std.webp';
import Gallery7 from '../../assets/images/courses/tour1.jpg';
import Gallery8 from '../../assets/images/courses/tour2.jpg';
import Gallery9 from '../../assets/images/courses/tour3.jpg';
import Gallery10 from '../../assets/images/resources/tour.jpeg';
import Gallery11 from '../../assets/images/resources/tour1.jpeg';
import Gallery12 from '../../assets/images/courses/tour3.jpg';
import Gallery13 from '../../assets/images/courses/quiz.webp';

import Gallery14 from '../../assets/images/resources/birthday1.jpeg';
import Gallery15 from '../../assets/images/resources/birthday3.jpeg';
import Gallery16 from '../../assets/images/resources/picnic.jpeg';
import Gallery17 from '../../assets/images/resources/picnic2.jpeg';

import './css/Gallery.css';

const Gallery = () => {
  // ===== STATE FOR LIGHTBOX =====
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState([]);

  // ===== GALLERY DATA =====
  const galleryItems = [
    { id: 1, image: Gallery1, title: 'Picnic 2081' },
    { id: 2, image: Gallery2, title: 'English Language Class' },
    { id: 3, image: Gallery3, title: 'English Language Class' },
    { id: 4, image: Gallery4, title: 'English Language Class' },
    { id: 5, image: Gallery5, title: 'Sarasawati Puja 2081' },
    { id: 6, image: Gallery6, title: 'Students' },
    { id: 7, image: Gallery7, title: 'Educational Tour' },
    { id: 8, image: Gallery8, title: 'Educational Tour' },
    { id: 9, image: Gallery9, title: 'Educational Tour' },
    { id: 10, image: Gallery10, title: 'Educational Tour' },
    { id: 11, image: Gallery11, title: 'Educational Tour' },
    { id: 12, image: Gallery12, title: 'Educational Tour' },
    { id: 13, image: Gallery13, title: 'Quiz Competition' },
    { id: 14, image: Gallery14, title: 'Birthday Celebrations' },
    { id: 15, image: Gallery15, title: 'Birthday Celebrations' },
    { id: 16, image: Gallery16, title: 'Picnic' },
    { id: 17, image: Gallery17, title: 'Picnic' },
  ];

  // ===== LIGHTBOX FUNCTIONS =====
  const openLightbox = (index) => {
    setCurrentGallery(galleryItems);
    setCurrentIndex(index);
    setCurrentImage(galleryItems[index].image);
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
    <div className="gallery-page">
      <PageTitle 
        title="Gallery" 
        description="Browse our gallery - photos from events, classes, and activities."
      />

      {/* ===== HERO ===== */}
      <section className="gallery-hero">
        <div className="gallery-hero-bg">
          <img src={HeroBg} alt="Gallery" />
        </div>
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <div className="container">
            <span className="gallery-hero-tag">Gallery</span>
            <h1>Our Gallery</h1>
            <p>Browse through our photos and memories</p>
          </div>
        </div>
      </section>

      {/* ===== GALLERY GRID ===== */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div 
                className="gallery-item" 
                key={item.id}
                onClick={() => openLightbox(index)}
              >
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <FaExpand className="expand-icon" />
                    <div className="gallery-caption">
                      <span>{item.title}</span>
                    </div>
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
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage} alt="Full view" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;