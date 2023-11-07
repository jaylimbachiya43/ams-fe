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

const MySVG = ({ percentage, currentDay, totalDays }) => {
  const formattedDays = `${currentDay}/${totalDays}`;
  const color = getColorBasedOnPercentage(percentage);

  return (
    <div className={style.circularChartContainer}>
      <svg viewBox="0 0 36 36" className={style.circularChart} height={200} width={200}>
        <path
          className={style.circle}
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          stroke={color}
        />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className={style.percentage}>
          {Math.round(percentage)}%
        </text>
      </svg>
      <div className={style.days}>{formattedDays}</div>
    </div>
  );
};

export default MySVG;