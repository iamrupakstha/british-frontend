// src/components/common/Card.jsx
import React from 'react';

const Card = ({ 
  children, 
  accent = 'none', 
  className = '',
  ...props 
}) => {
  const accents = {
    yellow: 'border-t-4 border-institute-yellow',
    red: 'border-t-4 border-institute-red',
    none: '',
  };

  return (
    <div 
      className={`
        bg-white rounded-xl shadow-card p-6 
        hover:shadow-hover transition-all duration-300
        ${accents[accent]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;