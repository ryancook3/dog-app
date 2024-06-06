import React from 'react';
import './Home.css';

import memory1 from '../../images/memory1.jpg';
import memory2 from '../../images/memory2.jpg';
import videoSrc from '../../images/video.mp4';

const memories = [
  { id: 1, src: memory1, description: 'First trip to the beach' },
  { id: 2, type: 'video', src: videoSrc, description: 'Playing fetch in the park' },
  { id: 3, src: memory2, description: 'Snuggling on the couch' },
];

const FeaturedMemories = () => (
  <section className="featured-memories">
    <div className="carousel-container">
      <h2>Unforgettable Moments with Your Best Friend</h2>
      <p className="intro-text">Relive the joy, fun, and love shared with your beloved pet. Here are some of the most cherished memories:</p>
      <div className="memories-grid">
        {memories.map((memory) => (
          <div key={memory.id} className="memory-card">
            {memory.type === 'video' ? (
              <video controls>
                <source src={memory.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={memory.src} alt={`Memory ${memory.id}`} />
            )}
            <p>{memory.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedMemories;
