// src/utils/constants.js
export const instituteInfo = {
  name: "British Institution of Education Pvt. Ltd.",
  shortName: "BRITISH INSTITUTION",
  established: "2008",
  location: "Bhadrapur Road, Birtamode, Jhapa",
  phone: ["023-535918 | 9824934350 | 9820513922"],
  email: "britishitbtm@gmail.com",
  facebook: "https://www.facebook.com/britishbirtamode",
  tiktok: "https://www.tiktok.com/@britishbirtamod",
  instagram: 'https://www.instagram.com/britishbirtamode' ,
  registration: {
    regdNo: "191807/74/075",
    panNo: "606680921",
    ctevtRegd: "3189/5-1-081/082"
  }
};

export const mockNotices = [
  {
    id: "1",
    title: "New Batch Starting August 2026",
    description: "Enroll now for our IT and Care Giver programs. Limited seats available! Scholarships up to 50% for deserving students.",
    date: "2026-07-23",
    category: "Admissions"
  },
  {
    id: "2",
    title: "Scholarship Announcement",
    description: "Up to 50% scholarship for deserving students. Apply before August 15. Contact us for more details.",
    date: "2026-07-20",
    category: "Scholarship"
  },
  {
    id: "3",
    title: "IELTS Preparation Classes",
    description: "New IELTS batch starting August 1. Register now! Both Academic and General Training available.",
    date: "2026-07-18",
    category: "Events"
  }
];

export const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { 
    name: 'Abroad Study', 
    path: '/abroad-study',
    dropdown: [
      { name: 'Study in UK', path: '/study-uk' },
      { name: 'Study in USA', path: '/study-usa' },
      { name: 'Study in Australia', path: '/study-australia' },
      { name: 'Study in Canada', path: '/study-canada' },
      { name: 'Study in Korea', path: '/study-korea' },
      { name: 'Study in Malta', path: '/study-malta' },
      { name: 'Study in Europe', path: '/study-europe' },
    ]
  },
  { 
    name: 'English Courses', 
    path: '/english-courses',
    dropdown: [
      { name: 'IELTS Preparation', path: '/ielts' },
      { name: 'PTE Preparation', path: '/pte' },
      { name: 'TOEFL Preparation', path: '/toefl' },
      { name: 'UKVI Preparation', path: '/ukvi' },
      { name: 'IELTS - AT & GT', path: '/ielts-at-gt' },
      { name: 'UKVI IELTS - AT & GT', path: '/ukvi-ielts-at-gt' },
      { name: 'O Level 1 / A Level 1', path: '/o-level-a-level' },
      { name: 'UK Lifeskill A1 English', path: '/uk-lifeskill-a1' },
      { name: 'Israel A2 English', path: '/israel-a2-english' },
      { name: 'Interview Preparation', path: '/interview-preparation' },
      { name: 'VISA Preparation', path: '/visa-preparation' },
    ]
  },
  { 
    name: 'Computer Courses', 
    path: '/computer-courses',
    dropdown: [
      { name: 'Basic Course', path: '/basic-course' },
      { name: 'Office Package', path: '/office-package' },
      { name: 'Computer Operator (CTEVT Affiliated)', path: '/computer-operator' },
      { name: 'Dip. in Hardware Networking (CTEVT Affiliated)', path: '/hardware-networking' },
      { name: 'Graphic Designing', path: '/graphic-designing' },
      { name: 'Accounting Package', path: '/accounting-package' },
    ]
  },
  { 
    name: 'Care Giver', 
    path: '/care-giver',
    dropdown: [
      { name: 'Child Care', path: '/child-care' },
      { name: 'Age Care', path: '/age-care' },
      { name: 'Home Care', path: '/home-care' },
      { name: 'CTEVT Affiliated Course', path: '/ctevt-care-giver' },
    ]
  },
  { name: 'Contact', path: '/contact' },
];