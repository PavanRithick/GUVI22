import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <a href="#about">About</a> · 
      <a href="#contact">Contact</a> · 
      <a href="#terms">Terms of Use</a> · 
      <a href="#privacy">Privacy Policy</a>
    </div>
    <div className="footer-copyright">
      © Your Website 2023. All Rights Reserved.
    </div>
    <div className="footer-social">
      <a href="#facebook" aria-label="Facebook" className="social-icon">🌐</a>
      <a href="#twitter" aria-label="Twitter" className="social-icon">🌐</a>
      <a href="#instagram" aria-label="Instagram" className="social-icon">🌐</a>
    </div>
  </footer>
);

export default Footer;
