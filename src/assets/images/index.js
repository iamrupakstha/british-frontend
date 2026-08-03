// src/assets/index.js

// Logo
import logo from './logo/logo.jpg';
import logoWhite from './logo/white-logo.jpeg';

// If you don't have a white logo yet, create a white version or use the same logo
// For now, we'll use the same logo for both
const logoWhiteVersion = logo; // Replace with actual white logo when available

// Certificates
import certificateSample from './certificates/certificate-sample.jpeg';

// Courses
import computerCourse from './courses/computer-course.jpg';
import caregiverCourse from './courses/care-giver.jpeg';
import englishCourse from './courses/english-course.jpg';

// // Hero
// import heroBg from './hero/hero-bg.jpg';

// // Team
// import trainer1 from './team/trainer-1.jpg';
// import trainer2 from './team/trainer-2.jpg';

// // Icons
import ctevtLogo from './icons/CTEVT.jpg';
import pteLogo from './icons/pearson.png';
import britishCouncilLogo from './icons/britishcouncil.jpg';
import IELTS from './icons/ielts.jpeg'

export const images = {
  logo,
  logoWhite: logoWhiteVersion, // Use white version if available
  certificateSample,
  courses: {
    computer: computerCourse,
    caregiver: caregiverCourse,
    english: englishCourse,
  },
  team: {
    // trainer1,
    // trainer2,
  },
  icons: {
    ctevt: ctevtLogo,
    pte: pteLogo,
    britishCouncil: britishCouncilLogo,
    IELTS: IELTS,
  }
};

// Placeholder images for development
export const placeholders = {
  course: 'https://via.placeholder.com/400x300/F5F5F5/1A237E?text=Course',
  team: 'https://via.placeholder.com/200x200/F5F5F5/1A237E?text=Team',
  hero: 'https://via.placeholder.com/1920x1080/F5F5F5/1A237E?text=British+Institution',
};