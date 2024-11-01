import React from 'react';
import Feature from './Feature';
import './FeaturesIntroSection.css';

const FeaturesIntroSection = () => (
  <section className="features-intro-section">
    <Feature
      title="Fully Responsive"
      description="This theme will look great on any device, no matter the size!"
    />
    <Feature
      title="Bootstrap 5 Ready"
      description="Featuring the latest build of the new Bootstrap 5 framework!"
    />
    <Feature
      title="Easy to Use"
      description="Ready to use with your own content, or customize the source files!"
    />
  </section>
);

export default FeaturesIntroSection;
