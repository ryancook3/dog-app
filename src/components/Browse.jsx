import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Browse() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get('http://localhost:5000/breeds');
        setBreeds(response.data);
      } catch (error) {
        console.error('Error fetching breeds', error);
      }
    };

    fetchBreeds();
  }, []);

  return (
    <div>
      <h1>Browse Communities</h1>
      <ul>
        {breeds.map((breed) => (
          <li key={breed}>
            <Link to={`/community/${breed}`}>{breed}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Browse;
