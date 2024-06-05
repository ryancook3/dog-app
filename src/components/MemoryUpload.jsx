import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MemoryUpload({ petId }) {
  const [type, setType] = useState('');
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('type', type);
    formData.append('file', file);
    formData.append('description', description);
    formData.append('date', date);
    formData.append('petId', petId);

    try {
      await axios.post('http://localhost:5000/memories', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      // Optionally, handle success
    } catch (error) {
      console.error('Error uploading memory', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="Photo">Photo</option>
        <option value="Video">Video</option>
        <option value="Note">Note</option>
      </select>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Upload Memory</button>
    </form>
  );
}

MemoryUpload.propTypes = {
  petId: PropTypes.string.isRequired,
};

export default MemoryUpload;
