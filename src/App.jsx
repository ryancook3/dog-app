import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import MemoryUpload from './components/MemoryUpload';
import Browse from './components/Browse';
import Community from './components/Community';
import Navbar from './components/NavBar';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/upload" element={<MemoryUpload />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/community/:breed" element={<Community />} />
    </Routes>
    </div>
  );
}

export default App;
