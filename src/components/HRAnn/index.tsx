'use client'
import React, { useState } from 'react';
import SmartTable from '@/components/SmartTable';
import AddAnnouncementForm from '@/components/AddAnnouncementForm';
import AnnouncementList from '../DashAnn';

export default function HRAnn()  {
  const [announcements, setAnnouncements] = useState([]);

  const addAnnouncement = (announcement) => {
    // logic
    setAnnouncements([...announcements, { ...announcement, date: new Date() }]);
  };

  return (
    <div className="p-4">
      <AddAnnouncementForm onSubmit={addAnnouncement} />
      <SmartTable announcements={announcements} />
    </div>
  );
};


