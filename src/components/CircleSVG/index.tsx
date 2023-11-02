import React from 'react';
import style from './style.module.css';

const getColorBasedOnPercentage = (percentage) => {
  if (percentage >= 0 && percentage < 40) {
    return 'red';
  } else if (percentage >= 40 && percentage < 75) {
    return 'orange';
  } else {
    return 'green';
  }
};

const MySVG = ({ percentage }) => {
  const dashArray = `${percentage}, 100`;
  const color = getColorBasedOnPercentage(percentage);

  return (
    <svg viewBox="0 0 36 36" className={style.circularChart} height={500} width={500}>
      <path className={style.circle} strokeDasharray={dashArray} d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        stroke={color}
      />
      <text x="18" y="20.35" className={style.percentage}>{percentage}%</text>
    </svg>
  );
};

export default MySVG;
