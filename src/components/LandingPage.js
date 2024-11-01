import React from 'react';
import './LandingPage.css';

const LandingPage = () => (
  <section className="landing-page">
    <h1 >Generate more leads with a professional landing page!</h1>
    <div className="form-container">
      <input type="email" placeholder="Email Address" className="email-input" />
      <button className="submit-button">Submit</button>
    </div>
  </section>
);

export default LandingPage;
