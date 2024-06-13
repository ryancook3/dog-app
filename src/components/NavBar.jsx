import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ openModal }) => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('userId');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Pet Memories</Link>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/community">Community</Link>
        {isLoggedIn && <Link to="/upload">Upload Memory</Link>}
      </div>
      <div className="navbar-auth">
        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <button onClick={openModal}>Register</button>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
