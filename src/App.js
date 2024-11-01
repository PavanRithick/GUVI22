import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FeatureCard from './components/FeatureCard';
import TestimonialCard from './components/TestimonialCard';
import SignupForm from './components/SignupForm';
import LandingPage from './components/LandingPage';
import FeaturesIntroSection from './components/FeaturesIntroSection';
import Footer from './components/Footer';

import codeImage from './images/code_image.jpg';
import customizeImage from './images/customize_image.jpg';
import margaretImage from './images/margaret.jpg';
import fredImage from './images/fred.jpg';
import sarahImage from './images/sarah.jpg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <FeaturesIntroSection />
      <section className="features">
        <FeatureCard
          title="Updated for Bootstrap 5"
          description="Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development!"
          image={codeImage}
          reverse={false}
        />
        <FeatureCard
          title="Easy to Use & Customize"
          description="Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options."
          image={customizeImage}
          reverse={true}
        />
      </section>
      <section className="testimonials">
        <h2>What people are saying...</h2>
        <div className="testimonial-list">
          <TestimonialCard
            name="Margaret E."
            text="This is fantastic! Thanks so much guys!"
            image={margaretImage}
          />
          <TestimonialCard
            name="Fred S."
            text="Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
            image={fredImage}
          />
          <TestimonialCard
            name="Sarah W."
            text="Thanks so much for making these free resources available to us!"
            image={sarahImage}
          />
        </div>
      </section>
      <section className="signup">
        <SignupForm />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
