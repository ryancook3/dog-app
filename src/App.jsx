import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import CreatePetProfile from './components/CreatePetProfile';
import MemoryUpload from './components/MemoryUpload';
import Browse from './components/Browse';
import Community from './components/Community';
import Navbar from './components/NavBar';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <div className="content">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-pet-profile" element={<CreatePetProfile />} />
        <Route path="/upload" element={<MemoryUpload />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/community/:breed" element={<Community />} />
      </Routes>
    </div>
  </div>
);

export default App;
