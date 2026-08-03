// src/components/layout/MainLayout.jsx
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import PopupNotice from '../common/PopupNotice.jsx';
import Spinner from '../common/Spinner.jsx';
import FloatingButtons from '../common/FloatingButtons.jsx';
import CTA from '../common/CTA.jsx';

const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  // Handle loading on route changes
  useEffect(() => {
    // Show spinner on route change
    setLoading(true);

    // Hide spinner after a short delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Handle popup on first load/reload only
  useEffect(() => {
    const navEntries = performance.getEntriesByType('navigation');
    const navType = navEntries.length > 0 ? navEntries[0].type : 'navigate';

    const isFirstLoad = navType === 'navigate';
    const isReload = navType === 'reload';
    const isHomePage = location.pathname === '/';

    // Only check popup on first load or reload
    if ((isFirstLoad || isReload) && isHomePage) {
      const popupShown = sessionStorage.getItem('popupShown');
      if (!popupShown) {
        // Delay popup after loading
        setTimeout(() => {
          setShowPopup(true);
          sessionStorage.setItem('popupShown', 'true');
        }, 1000);
      }
    }
  }, []); // Run only once on mount

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-institute-lightgray">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* Popup Modal - Only on Homepage */}
          {showPopup && <PopupNotice onClose={handleClosePopup} />}

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow">
            <Outlet />
          </main>

          {/* cta */}
          <CTA />

          {/* Footer */}
          <Footer />

          {/* Floating Action Buttons */}
          <FloatingButtons />
        </>
      )}
    </div>
  );
};

export default MainLayout;