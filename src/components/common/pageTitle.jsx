// src/components/common/PageTitle.jsx
import React, { useEffect } from 'react';

const PageTitle = ({ title, description = '' }) => {
  const siteName = 'British Institution of Education Pvt. Ltd.';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  useEffect(() => {
    // Set page title
    document.title = fullTitle;

    // Set meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        // Create meta description if it doesn't exist
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }
  }, [title, description, fullTitle]);

  return null;
};

export default PageTitle;