import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-overlay">
      <div className="spinner-container">
        <div className="spinner-border text-custom" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
