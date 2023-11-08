'use client'
import React, { useState } from 'react';
import style from './style.module.css'

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`${style.card} ${isFlipped ? style.flipped : ''}`} onClick={toggleCard}>
      <div className={style.front}>
        <h2>Total Revenue</h2>
      </div>
      <div className={style.back}>
        <p>Revenue Generated: $500</p>
        <p>Upcoming Revenue: $500</p>
        <p>Total: $1,000</p>
      </div>
    </div>
  );
};

export default FlipCard;
