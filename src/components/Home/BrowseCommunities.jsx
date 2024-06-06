import React from 'react';
import { Link } from 'react-router-dom';

const BrowseCommunities = () => (
  <section className="browse-communities">
    <h2>Explore Communities</h2>
    <p>Discover and connect with pet communities.</p>
    <Link to="/browse" className="browse-button">Browse Communities</Link>
  </section>
);

export default BrowseCommunities;
