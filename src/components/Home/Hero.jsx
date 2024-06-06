import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="hero">
    <h1>Welcome to Pet Memories</h1>
    <p>Capture and cherish the precious moments with your pets.</p>
    <Link to="/register" className="cta-button">Get Started</Link>
  </section>
);

export default Hero;
