import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Community() {
  const { breed } = useParams();
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/communities/${breed}`);
        setDogs(response.data);
      } catch (error) {
        console.error('Error fetching dogs', error);
      }
    };

    fetchDogs();
  }, [breed]);

  return (
    <div>
      <h1>
        {breed}
        {' '}
        Community
      </h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <img src={dog.profilePictureUrl} alt={dog.name} />
            <p>
              Name:
              {dog.name}
            </p>
            <p>
              Breed:
              {dog.breed}
            </p>
            <p>
              Owner:
              {dog.ownerName}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Community;
