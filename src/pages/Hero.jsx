import React from 'react';
import '../style/Hero .css';

const Hero = () => {
  return (
    <section id='hero' className="hero-container">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <span className="hero-tagline">LARKANA'S PREMIER FITNESS COMMUNITY</span>
        
        <h1 className="hero-title">
          TRANSFORM YOUR BODY. <br />
          <span className="text-highlight">OWN YOUR STRENGTH.</span>
        </h1>
        
        <p className="hero-description">
          Stop wasting time on random workouts. Get access to elite coaching, 
          state-of-the-art equipment, and a community built to push your limits.
        </p>
        
        <div className="hero-actions">
          <button className="btn-primary">Claim Your Free Pass</button>
          <button className="btn-secondary">View Schedule</button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Gym Access</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Certified Coaches</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">Success Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;