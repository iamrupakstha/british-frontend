// src/components/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowLeft, FaFrown } from 'react-icons/fa';
import PageTitle from '../common/PageTitle.jsx';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <PageTitle title="Page Not Found" description="The page you are looking for does not exist." />

      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-icon">
            <FaFrown />
          </div>
          <h1 className="not-found-code">404</h1>
          <h2 className="not-found-title">Page Not Found</h2>
          <p className="not-found-text">
            Oops! The page you are looking for does not exist or has been moved.
          </p>
          <div className="not-found-buttons">
            <Link to="/" className="btn-primary">
              <FaHome /> Back to Home
            </Link>
            <button onClick={() => window.history.back()} className="btn-outline">
              <FaArrowLeft /> Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;