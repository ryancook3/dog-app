import React, { useState } from 'react';
import axios from 'axios';
import './CreatePetProfile.css';

const CreatePetProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    breed: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ownerId = localStorage.getItem('userId');
    try {
      const response = await axios.post('http://localhost:5000/api/pets', { ...formData, ownerId });
      console.log('Pet profile created successfully:', response.data);
    } catch (error) {
      console.error('There was an error creating the pet profile:', error);
    }
  };

  return (
    <div className="create-pet-profile">
      <h2>Create Pet Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Pet Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your pet's name"
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your pet's age"
            required
          />
        </div>
        <div>
          <label htmlFor="breed">Breed</label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            placeholder="Enter your pet's breed"
            required
          />
        </div>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreatePetProfile;
