import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext.jsx';

// Admin Components
import AdminLayout from './components/admin/AdminLayout.jsx';

import AdminLogin from './components/admin/AdminLogin.jsx';

import AdminDashboard from './components/admin/AdminDashboard.jsx';

import ProtectedRoute from './components/admin/ProtectedRoute.jsx';
import CertificateManagement from './components/admin/CertificateManagement.jsx';
import ContactManagement from './components/admin/ContactsManagement.jsx';


import VerifyCertificate from './components/Public/VerifyCertificate.jsx';


// Layout Components
import MainLayout from './components/Layout/MainLayout.jsx';
import StudyAbroadLayout from './components/Layout/abraodStudyLayout.jsx';

// Page Components
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';

// Study Abroad Pages
import StudyAbroad from './components/pages/study-abroad/StudyAbroad.jsx';
import StudyUK from './components/pages/study-abroad/StudyUK.jsx';
import StudyUSA from './components/pages/study-abroad/StudyUSA.jsx';
import StudyAustralia from './components/pages/study-abroad/StudyAustralia.jsx';
import StudyCanada from './components/pages/study-abroad/StudyCanada.jsx';
import StudyKorea from './components/pages/study-abroad/StudyKorea.jsx';
import StudyMalta from './components/pages/study-abroad/StudyMalta.jsx';
import StudyEurope from './components/pages/study-abroad/StudyEurope.jsx';

// Courses Pages
import Courses from './components/pages/courses/Courses.jsx';
import ComputerCourses from './components/pages/courses/ComputerCourses.jsx';
import EnglishCourses from './components/pages/courses/EnglishCourses.jsx';
import CareGiverCourses from './components/pages/courses/CareGiverCourses.jsx';
import BeauticianCourses from './components/pages/courses/BeauticianCourses.jsx';
import IELTSPTE from './components/pages/courses/IELTSPTE.jsx';

//Enroll
import EnrollForm from './components/Public/EnrollForm.jsx';

// Other Pages
import Resources from './components/pages/Resources.jsx';
import Gallery from './components/pages/Gallery.jsx';
import Contact from './components/pages/Contact.jsx';
import NotFound from './components/pages/NotFound.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1A237E',
              color: '#fff',
              borderRadius: '8px',
            },
            success: {
              style: { background: '#22c55e' },
            },
            error: {
              style: { background: '#D32F2F' },
            },
          }}
        />

        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Verify Certificate Route */}
          <Route path="/verify-certificate" element={<VerifyCertificate />} />

          {/* Admin Dashboard */}
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          
          {/* Admin Layout with Sidebar */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />

            <Route path="certificates" element={<CertificateManagement />} />
            <Route path="contacts" element={<ContactManagement />} />

          </Route>

          {/* Main Layout Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            {/* Study Abroad Section */}
            <Route path="study-abroad" element={<StudyAbroadLayout />}>
              <Route index element={<StudyAbroad />} />
              <Route path="uk" element={<StudyUK />} />
              <Route path="usa" element={<StudyUSA />} />
              <Route path="australia" element={<StudyAustralia />} />
              <Route path="canada" element={<StudyCanada />} />
              <Route path="korea" element={<StudyKorea />} />
              <Route path="malta" element={<StudyMalta />} />
              <Route path="europe" element={<StudyEurope />} />
            </Route>

            {/* Courses Section */}
            <Route path="courses" element={<Courses />} />
            <Route path="courses/computer-courses" element={<ComputerCourses />} />
            <Route path="courses/english-courses" element={<EnglishCourses />} />
            <Route path="courses/ielts-pte" element={<IELTSPTE />} />
            <Route path="courses/care-giver" element={<CareGiverCourses />} />
            <Route path="courses/beautician-courses" element={<BeauticianCourses />} />

            {/* Enroll form */}
            <Route path="/enroll" element={<EnrollForm />} />


            <Route path="resources" element={<Resources />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;