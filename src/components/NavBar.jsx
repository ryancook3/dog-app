import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this file next

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/upload">Memory Upload</Link></li>
        <li><Link to="/browse">Browse</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
