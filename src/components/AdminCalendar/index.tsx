'use client'
// CalendarView.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); // Pass the selected date to the parent component
  };

  return (
    <div>
      <h2>Calendar View</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <p>Selected date: {selectedDate.toDateString()}</p>
    </div>
  );
};

export default CalendarView;

