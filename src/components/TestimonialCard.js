import React from 'react';

const TestimonialCard = ({ name, text, image }) => (
  <div className="testimonial-card">
    <img src={image} alt={name} className="testimonial-image" />
    <h4>{name}</h4>
    <p>"{text}"</p>
  </div>
);

export default TestimonialCard;