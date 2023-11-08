'use client'
import React, { useState } from 'react';
import FeesCardsA from '../FeesCardsA/index';
import admin from '../../../public/images/student.png';
import FlipCard from '@/components/FlipCard';
import style from './style.module.css'

const AdminFeesCards = () => {
  const [selectedBatch, setSelectedBatch] = useState(1);

  const dataFC = [
    {
      title: `Batch FS-${selectedBatch}`,
      logo: admin,
      color: 'rgba(255, 165, 0, 0.1)'
    },
    {
      title: 'Total Student',
      logo: admin,
      color: 'rgba(255, 192, 203, 0.2)'
    },
    {
      title: 'Pending Revenue',
      logo: admin,
      color: 'rgba(50, 205, 50, 0.1)'
    },
  ];

  const handleBatchChange = (event) => {
    const selectedValue = parseInt(event.target.value);
    setSelectedBatch(selectedValue);
  };

  return (
    <div className='p-9'>
      <div className='mb-4'>
        <label htmlFor="batches">Batch:</label>
        <select
          id="batch"
          name="batch"
          className="ml-5 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          onChange={handleBatchChange}
        >
          {Array.from({ length: 15 }, (_, i) => i + 1).map((batch) => (
            <option key={batch} value={batch}>
              FS-{batch}
            </option>
          ))}
        </select>
      </div>
      <div className={style.cards}>
        <FeesCardsA data2={dataFC} />
        <FlipCard />
      </div>
    </div>
  );
}

export default AdminFeesCards;