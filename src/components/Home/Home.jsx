import React from 'react';
import Hero from './Hero';
import FeaturedMemories from './FeaturedMemories';
import BrowseCommunities from './BrowseCommunities';
import Testimonials from './Testimonials';
import './Home.css';

const Home = ({ openModal }) => (
  <div className="home">
    <div className="container">
      <Hero openModal={openModal} />
    </div>
    <div className="wide-container">
      <FeaturedMemories />
    </div>
    <div className="container">
      <BrowseCommunities />
    </div>
    <div className="container">
      <Testimonials />
    </div>
  </div>
);

export default Home;
