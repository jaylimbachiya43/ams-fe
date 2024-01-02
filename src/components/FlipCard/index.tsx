'use client'
import React, { useState } from 'react';
import style from '../../../../ams-fe/src/components/FlipCard/style.module.css'

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  const items = [
    { label: "Revenue Generated", value: "500" },
    { label: "Upcoming Revenue", value: "500" },
    { label: "Total Revenue", value: "1,000" },
  ];

  return (
    <div className={`${style.card} ${isFlipped ? style.flipped : ''}`} onClick={toggleCard}>
      <div className={style.front}>
        <h2 className='text-4xl'>Total <br/> Revenue</h2>
      </div>
      <div className={style.back}>
        {items.map((item, index) => (
          <p key={index}>
            {item.label}: ₹{item.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FlipCard;