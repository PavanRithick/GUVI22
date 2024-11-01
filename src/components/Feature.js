import React from 'react';
import './Feature.css';

const Feature = ({ title, description }) => (
  <div className="feature">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Feature;
