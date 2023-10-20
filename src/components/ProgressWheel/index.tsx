'use client'
import React, { useEffect, useState } from 'react';
import style from './style.module.css';

const ProgressWheel = () => {
  const [progressStartValue, setProgressStartValue] = useState(0);
  const progressEndValue = 88;
  const speed = 7;

  useEffect(() => {
    if (progressStartValue < progressEndValue) {
      const progressInterval = setInterval(() => {
        setProgressStartValue((prevValue) => prevValue + 1);
      }, speed);

      return () => {
        clearInterval(progressInterval);
      };
    }
  }, [progressStartValue, progressEndValue]);

  const conicGradient = `conic-gradient(green ${progressStartValue * 3.6}deg, transparent 0deg)`;

  return (
    <div className={style.container}>
      {/* <div className="m-9">
        <div className={style.progress} style={{ background: conicGradient }}>
          <span className={style.value}>
            {`${progressStartValue}`}
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default ProgressWheel;

