'use client'
import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import MySVG from '../CircleSVG';

export default function ProgressWheel() {
  const totalDays = 30;
  const currentDay = 8;

  const [selectedMonth, setSelectedMonth] = useState('current');

  const daysPerMonth = {
    current: totalDays,
    all: totalDays * 4,
    'M-1': totalDays,
    'M-2': totalDays,
    'M-3': totalDays,
    'M-4': totalDays,
  };

  const percentageCurrentMonth = (currentDay / daysPerMonth['current']) * 100;
  const percentageTotalDays = (currentDay / daysPerMonth[selectedMonth]) * 100;

  return (
    <div className="grid grid-cols-2 border gap-y-7 bg-slate-100 shadow-lg">
      <div>
        <MySVG percentage={percentageCurrentMonth} currentDay={currentDay} totalDays={daysPerMonth['current']} />
      </div>
      <div>
        <MySVG percentage={percentageTotalDays} currentDay={currentDay} totalDays={daysPerMonth[selectedMonth]} />
        <label htmlFor="monthSelector">Select Month:</label>
        <select
          id="monthSelector"
          onChange={(e) => setSelectedMonth(e.target.value)}
          value={selectedMonth}
        >
          <option value="current">Current Month</option>
          <option value="all">All Months</option>
          <option value="M-1">Month 1</option>
          <option value="M-2">Month 2</option>
          <option value="M-3">Month 3</option>
          <option value="M-4">Month 4</option>
        </select>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import style from './style.module.css';
// import MySVG from '../CircleSVG'; 

// export default function ProgressWheel() {
//   const totalDays = {
//     'current': 30,
//     'M-1': 31,
//     'M-2': 28,
//     'M-3': 30,
//     'M-4': 31,
//   };

//   const currentDay = {
//     'current': 10,
//     'M-1': 15,
//     'M-2': 7,
//     'M-3': 22,
//     'M-4': 10,
//   };

//   const [selectedMonth, setSelectedMonth] = useState('current'); 

//   let percentageSelectedMonth;
//   if (selectedMonth === 'all') {
//     const totalDaysAllMonths = Object.values(totalDays).reduce((acc, days) => acc + days, 0);
//     const totalCurrentDaysAllMonths = Object.keys(currentDay)
//       .filter((month) => month !== 'all')
//       .reduce((acc, month) => acc + currentDay[month], 0);
//     percentageSelectedMonth = (totalCurrentDaysAllMonths / totalDaysAllMonths) * 100;
//   } else {
//     percentageSelectedMonth = (currentDay[selectedMonth] / totalDays[selectedMonth]) * 100;
//   }

//   return (
//     <div className="grid grid-cols-2 border gap-y-7 bg-slate-100 shadow-lg">
//       <div>
//         <label htmlFor="monthSelector">Select Month:</label>
//         <select
//           id="monthSelector"
//           onChange={(e) => setSelectedMonth(e.target.value)}
//           value={selectedMonth}
//         >
//           <option value="current">Current Month</option>
//           <option value="all">All Months</option>
//           <option value="M-1">Month 1</option>
//           <option value="M-2">Month 2</option>
//           <option value="M-3">Month 3</option>
//           <option value="M-4">Month 4</option>
//         </select>
//         <MySVG
//           percentage={percentageSelectedMonth}
//           currentDay={currentDay[selectedMonth]}
//           totalDays={totalDays[selectedMonth]}
//         />
//       </div>
//     </div>
//   );
// }
