import React from 'react';
import './FeatureCard.css'; // Import your CSS file for styling

const FeatureCard = ({ title, description, image, reverse }) => (
  <div className={`feature-card ${reverse ? 'reverse' : ''}`}>
    <div className="text-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className="image-content">
      <img src={image} alt={title} className="feature-image" />
    </div>
  </div>
);

export default FeatureCard;
