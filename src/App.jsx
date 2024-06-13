import React, { useState } from 'react';
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
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar openModal={openModal} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home openModal={openModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-pet-profile" element={<CreatePetProfile />} />
          <Route path="/upload" element={<MemoryUpload />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/community/:breed" element={<Community />} />
        </Routes>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Register onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default App;
