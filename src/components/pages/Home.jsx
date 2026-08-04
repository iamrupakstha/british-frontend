// src/components/pages/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaFacebook,
} from 'react-icons/fa';

// Hero Images
import britishImage from '../../assets/images/resources/british.webp';

import StudyAbroadImage from '../../assets/images/courses/study-abroad.webp';
import EnglishLanguageImage from '../../assets/images/courses/english-class3.webp';
import ComputerCoursesImage from '../../assets/images/courses/computer-course.jpg';
import CareGiverImage from '../../assets/images/courses/care-giver.jpeg';
import BeauticianCoure from '../../assets/images/courses/beautician-course.jpg';
import ieltspte from '../../assets/images/courses/ieltspte.webp';

// Destination Images
import UK from '../../assets/images/study-abroad/uk.jpg';
import USA from '../../assets/images/study-abroad/usa.jpg';
import Australia from '../../assets/images/study-abroad/australia.jpg';
import Canada from '../../assets/images/study-abroad/canada.jpg';
import Korea from '../../assets/images/study-abroad/korea.jpg';
import Malta from '../../assets/images/study-abroad/malta.jpg';
import Europe from '../../assets/images/study-abroad/europe.jpg';

// Visa Success
import visaSuccess1 from '../../assets/images/students/vis-success1.jpg';
import visaSuccess2 from '../../assets/images/students/vis-success3.jpg';
import visaSuccess3 from '../../assets/images/students/vis-success4.jpg';
import visaSuccess4 from '../../assets/images/students/vis-success5.jpg';

// Review Student Images
import reviewStd1 from '../../assets/images/students/review1.jpg';
// import reviewStd2 from '../../assets/images/students/review2.jpg';
// import reviewStd3 from '../../assets/images/students/review3.jpg';

// Partner Logos
import BritishCouncilLogo from '../../assets/images/icons/britishcouncil.jpg';
import IDPLogo from '../../assets/images/icons/ielts.jpeg';
import PearsonLogo from '../../assets/images/icons/pearson.png';
import CTEVTLogo from '../../assets/images/icons/CTEVT.jpg';

// College Logos
import CoventryLogo from '../../assets/images/colleges/Coventry-Uni.png';
import TasmaniaLogo from '../../assets/images/colleges/tasmania.avif';
import TorontoLogo from '../../assets/images/colleges/Toronto_Metropolitan_University.webp';
import DurhamLogo from '../../assets/images/colleges/durham.png';
import CanadoreLogo from '../../assets/images/colleges/canadore.avif';
import VictoriaLogo from '../../assets/images/colleges/victoria.webp';

import './css/Home.css';
import PageTitle from '../common/PageTitle';

// ===== SLIDER DATA =====
const slides = [
  {
    id: 1,
    title: 'Your Global Education Journey Starts Here',
    subtitle: 'Explore top study destinations and unlock a world of opportunities.',
    buttonText: 'Explore',
    buttonLink: '/study-abroad',
    image: StudyAbroadImage,
  },
  {
    id: 2,
    title: 'English Language Classes & Test Preparation',
    subtitle: 'IELTS, PTE and UK Life Skills A1 coaching built around your target score.',
    buttonText: 'Explore',
    buttonLink: '/courses/english-courses',
    image: EnglishLanguageImage,
  },
  {
    id: 3,
    title: 'Computer Courses',
    subtitle: 'CTEVT-affiliated computer training, from basic to advanced.',
    buttonText: 'Explore',
    buttonLink: '/courses/computer-courses',
    image: ComputerCoursesImage,
  },
  {
    id: 4,
    title: 'Care Giver Training',
    subtitle: 'Become a certified care giver through our CTEVT-affiliated program.',
    buttonText: 'Explore',
    buttonLink: '/courses/care-giver',
    image: CareGiverImage,
  },
  {
    id: 4,
    title: 'Beautician Courses',
    subtitle: 'Professional makeup artist and beautician training programs.',
    buttonText: 'Explore',
    buttonLink: '/courses/beautician-course',
    image: BeauticianCoure,
  },
];

// ===== STATS DATA =====
const stats = [
  { value: 10000, suffix: '+', label: 'Students placed' },
  { value: 20, suffix: '+', label: 'Courses offered' },
  { value: 10, suffix: '+', label: 'Expert trainers' },
  { value: 7, suffix: '+', label: 'Study destinations' },
];

// ===== COURSES DATA =====
const services = [
  {
    title: 'Abroad Study',
    description: 'End-to-end guidance for the UK, USA, Australia, Canada, Korea, Malta and Europe.',
    link: '/abroad-study',
    image: StudyAbroadImage,
  },
  {
    title: 'Computer Courses',
    description: 'Basic to advanced computer courses, including CTEVT-affiliated programs.',
    link: '/computer-courses',
    image: ComputerCoursesImage,
  },
  {
    title: 'Test Preparation',
    description: 'IELTS, PTE and UK Life Skills A1 preparation with focused, small-batch coaching.',
    link: '/test-prep',
    image: ieltspte,
  },
  {
    title: 'English Language Class',
    description: 'British & American Based English language classes.',
    link: '/english-courses',
    image: EnglishLanguageImage,
  },
  {
    title: 'Care Giver Training',
    description: 'CTEVT-affiliated child care, aged care and home care courses.',
    link: '/care-giver',
    image: CareGiverImage,
  },
  {
    title: 'Beautician Courses',
    description: 'Professional makeup artist training.',
    link: '/beautician-course',
    image: BeauticianCoure,
  },
  
];

// ===== WHY CHOOSE US =====
const whyChooseUs = [
  { title: 'CTEVT Affiliated', description: 'All technical programs are officially recognized by CTEVT.' },
  { title: 'Expert Trainers', description: 'Learn from instructors with years of classroom and industry experience.' },
  { title: 'Flexible Schedule', description: 'Morning, day and evening batches to fit around your routine.' },
  { title: 'Scholarships', description: 'Merit and need-based scholarships of up to 50%.' },
];

// ===== DESTINATIONS =====
const destinations = [
  { name: 'United Kingdom', flag: '🇬🇧', path: '/study-uk', image: UK },
  { name: 'United States', flag: '🇺🇸', path: '/study-usa', image: USA },
  { name: 'Australia', flag: '🇦🇺', path: '/study-australia', image: Australia },
  { name: 'Canada', flag: '🇨🇦', path: '/study-canada', image: Canada },
  { name: 'South Korea', flag: '🇰🇷', path: '/study-korea', image: Korea },
  { name: 'Malta', flag: '🇲🇹', path: '/study-malta', image: Malta },
  { name: 'Europe', flag: '🇪🇺', path: '/study-europe', image: Europe },
];

// ===== PARTNERS =====
const partners = [
  { name: 'British Council', logo: BritishCouncilLogo },
  { name: 'IDP Education', logo: IDPLogo },
  { name: 'Pearson PTE', logo: PearsonLogo },
  { name: 'CTEVT', logo: CTEVTLogo },
];

// ===== AFFILIATED COLLEGES =====
const affiliatedColleges = [
  { name: 'Coventry University', logo: CoventryLogo },
  { name: 'University of Tasmania', logo: TasmaniaLogo },
  { name: 'Toronto Metropolitan University', logo: TorontoLogo },
  { name: 'Durham University', logo: DurhamLogo },
  { name: 'Canadore College', logo: CanadoreLogo },
  { name: 'University of Victoria', logo: VictoriaLogo },
];

// ===== SUCCESS STORIES =====
const successStories = [
  { id: 1, image: visaSuccess1, name: 'Ramesh Khaling', country: 'Australia', course: 'Master of IT', quote: 'British Institution made my Australian dream a reality.' },
  { id: 2, image: visaSuccess2, name: 'Sita Sharma', country: 'UK', course: 'Nursing', quote: 'The IELTS preparation was outstanding. I scored 7.5!' },
  { id: 3, image: visaSuccess3, name: 'Hari Rai', country: 'Canada', course: 'Computer Science', quote: 'They guided me every step of the way.' },
  { id: 4, image: visaSuccess4, name: 'Gita Poudel', country: 'Australia', course: 'Business', quote: 'Highly recommended for visa guidance.' },
];

// ===== REVIEWS (With Student Images) =====
const reviews = [
  {
    id: 1,
    name: 'Prakash Adhikari',
    location: 'Kathmandu, Nepal',
    image: reviewStd1,
    text: 'The best educational consultancy in Nepal. They guided me through the entire process and I am now studying in the UK.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sunita Thapa',
    location: 'Biratnagar, Nepal',
    image: reviewStd1,
    text: 'I got my Australia student visa within two weeks. Professional and supportive team. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Krishna Bhandari',
    location: 'Pokhara, Nepal',
    image: reviewStd1,
    text: 'Their IELTS course is excellent. I improved from 5.5 to 7.0 in just two months. Thank you British Institution!',
    rating: 4,
  },
];

// ===== NOTICES (Static) =====
const notices = [
  { id: 1, title: 'New Batch Starting August 2026', content: 'Enroll now for IT, Care Giver and Language courses. Scholarships available.', date: 'July 23, 2026' },
  { id: 2, title: 'Scholarship Announcement', content: 'Up to 50% scholarship for deserving students. Apply before August 15.', date: 'July 20, 2026' },
  { id: 3, title: 'IELTS Preparation Classes', content: 'New IELTS batch starting August 1. Register for Academic or General Training.', date: 'July 18, 2026' },
  { id: 4, title: 'CTEVT Affiliated Programs Open', content: 'Computer Operator and Care Giver courses now affiliated with CTEVT.', date: 'July 15, 2026' },
];

// ===== HELPERS =====
function Stars({ count }) {
  return (
    <span className="star-rating" aria-label={`${count} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < count ? 'filled' : ''} />
      ))}
    </span>
  );
}

// ===== HOME COMPONENT =====
const Home = () => {
  // ---- Hero slider ----
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };
  const nextSlide = () => goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // ---- Animated stats ----
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStatsVisible(true),
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) return;
    const duration = 1500;
    const start = Date.now();
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      setCounts(stats.map((s) => Math.floor(progress * s.value)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [statsVisible]);

  // ---- Reviews Slider ----
  const [reviewIndex, setReviewIndex] = useState(0);
  const nextReview = () => setReviewIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));
  const prevReview = () => setReviewIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));

  // ---- Certificate verification ----
  const [refNumber, setRefNumber] = useState('');

  // Facebook Page URL
  const facebookPageUrl = 'https://www.facebook.com/britishbirtamode';
  const facebookPageUrl1 = 'https://www.facebook.com/british.btm'

  return (
    <div className="home-page">

       <PageTitle 
        title="Home"
        description="British Institution - Empowering futures with IT, Language & Consultancy" 
      />
      {/* ===== HERO SLIDER ===== */}
      <section className="hero-slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <div className="slide-overlay" />
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <div className="slide-content">
                <div className="container">
                  <div className="slide-text">
                    <span className="slide-badge">British Institution</span>
                    <h1>{slide.title}</h1>
                    <p>{slide.subtitle}</p>
                    <Link to={slide.buttonLink} className="btn-primary">
                      {slide.buttonText} <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button onClick={prevSlide} className="arrow-btn arrow-left" aria-label="Previous slide">
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide} className="arrow-btn arrow-right" aria-label="Next slide">
            <FaChevronRight />
          </button>

          <div className="dots-container">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section" ref={statsRef}>
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-number">{counts[i].toLocaleString()}{s.suffix}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-sections">
        <div className="container why-grids">
          <div className="why-contents">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Why British Institution?</h2>
            <p className="section-subtitles">
              We're committed to quality instruction and getting students to their goal, not just through the door.
            </p>
            <div className="why-features">
              {whyChooseUs.map((item) => (
                <div className="why-feature" key={item.title}>
                  <FaCheckCircle className="why-feature-check" />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-outline">Learn more about us</Link>
          </div>
          <div className="why-image">
            <img src={britishImage} alt="Students at British Institution" />
            <div className="why-image-badge">15+ years of excellence</div>
          </div>
        </div>
      </section>

      
      {/* ===== COURSES / SERVICES ===== */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Courses</span>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">Programs built around real outcomes, not just class time.</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <Link to={s.link} className="service-card" key={s.title}>
                <div className="service-image">
                  <img src={s.image} alt={s.title} />
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-description">{s.description}</p>
                <span className="service-link">Learn more <FaArrowRight /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* ===== STUDY DESTINATIONS ===== */}
      <section className="destinations-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Study Abroad</span>
            <h2 className="section-title">Our Destinations</h2>
            <p className="section-subtitle">Where you can study abroad from Nepal with our guidance.</p>
          </div>
          <div className="destinations-grid">
            {destinations.map((dest) => (
              <Link to={dest.path} key={dest.name} className="destination-card">
                <img src={dest.image} alt={dest.name} className="destination-image" />
                <div className="destination-overlay" />
                <span className="destination-flag">{dest.flag}</span>
                <h3 className="destination-name">{dest.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LATEST NOTICES ===== */}
      <section className="notices-section">
  <div className="container">
    <div className="section-header">
      <span className="section-tag">Updates</span>
      <h2 className="section-title">Latest News &amp; Notices</h2>
      <p className="section-subtitle">Follow us on Facebook for the latest updates, news, and announcements about our courses and events.</p>
    </div>
    
    <div className="notices-grid">
      {/* ===== LEFT: Information Card ===== */}
      <div className="notices-info-card">
        <div className="notices-info-content">
          <div className="notices-info-icon">📢</div>
          <h3>Stay Updated</h3>
          <p>Get the latest news, admission alerts, scholarship announcements, and success stories directly from our Facebook pages.</p>
          </div>
      </div>

      {/* ===== MIDDLE: Facebook Feed 1 ===== */}
      <div className="facebook-embed">
        <div className="facebook-embed-header">
          <FaFacebook className="facebook-embed-icon" />
          <span>British Institution - Main Page</span>
        </div>
        <iframe
          src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookPageUrl)}&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
          width="100%"
          height="500"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Facebook Page Feed"
        />
      </div>

      {/* ===== RIGHT: Facebook Feed 2 ===== */}
      <div className="facebook-embed">
        <div className="facebook-embed-header">
          <FaFacebook className="facebook-embed-icon" />
          <span>British Institution - Vocational</span>
        </div>
        <iframe
          src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookPageUrl1)}&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
          width="100%"
          height="500"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Facebook Page Feed"
        />
      </div>
    </div>
  </div>
</section>

     

     {/* ===== SUCCESS STORIES ===== */}
<section className="success-section">
  <div className="container">
    <div className="section-header">
      <span className="section-tag">Success Stories</span>
      <h2 className="section-title">Student Visa Success</h2>
      <p className="section-subtitle">Real visa grants from students who trusted British Institution</p>
    </div>
    <div className="success-grid">
      {successStories.map((story) => (
        <div className="success-card" key={story.id}>
          <div className="success-image">
            <img src={story.image} alt={`Visa Grant - ${story.name}`} />
            <span className="success-badge">✅ Visa Approved</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ===== REVIEWS SECTION - Full Width & Attractive ===== */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-subtitle">Real feedback from students who trusted British Institution</p>
          </div>

          <div className="reviews-wrapper">
            <button onClick={prevReview} className="review-arrow review-arrow-left">
              <FaChevronLeft />
            </button>

            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`review-card ${index === reviewIndex ? 'active' : ''}`}
                >
                  <div className="review-card-inner">
                    <div className="review-header">
                      <div className="review-user">
                        <div className="review-avatar">
                          <img src={review.image} alt={review.name} />
                        </div>
                        <div>
                          <h4>{review.name}</h4>
                          <p>{review.location}</p>
                        </div>
                      </div>
                      <div className="review-rating">
                        <Stars count={review.rating} />
                      </div>
                    </div>
                    <div className="review-body">
                      <FaQuoteLeft className="review-quote-icon left" />
                      <p className="review-text">{review.text}</p>
                      <FaQuoteRight className="review-quote-icon right" />
                    </div>
                    <div className="review-footer">
                      <span className="review-badge">Verified Student</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={nextReview} className="review-arrow review-arrow-right">
              <FaChevronRight />
            </button>
          </div>

          <div className="review-dots">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setReviewIndex(index)}
                className={`review-dot ${index === reviewIndex ? 'active' : ''}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEST PARTNERS ===== */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Partners</span>
            <p className="section-subtitle">Official English test and assessment partners.</p>
          </div>
          <div className="partners-grid">
            {partners.map((p) => (
              <div className="partner-card" key={p.name}>
                <img src={p.logo} alt={p.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AFFILIATED COLLEGES MARQUEE ===== */}
      <section className="colleges-marquee">
        <div className="container">
          <p className="section-tag colleges-tag">Affiliated Colleges &amp; Universities</p>
        </div>
        <div className="marquee-track">
          <div className="marquee-content">
            {[...affiliatedColleges, ...affiliatedColleges].map((c, i) => (
              <img src={c.logo} alt={c.name} key={`${c.name}-${i}`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;