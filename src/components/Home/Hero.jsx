import React from 'react';
import './Hero.css';

const Hero = ({ openModal }) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Pet Memories</h1>
        <p className="hero-subtitle">Capture and cherish the precious moments with your pets.</p>
        <button onClick={openModal} className="cta-button">Get Started</button>
      </div>
      <div className="decorative-elements">
        <div className="circle"></div>
        <div className="triangle"></div>
      </div>
    </div>
  );
};

export default Hero;
