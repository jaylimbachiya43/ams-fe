'use client'
import React, { useState } from 'react';
import SmartTable from '@/components/SmartTable';
import AddAnnouncementForm from '@/components/AddAnnouncementForm';

export default function HRAnn()  {
  const [announcements, setAnnouncements] = useState([]);

  const addAnnouncement = (announcement) => {
    // You can add logic here to save the announcement to your data source.
    // For this example, we're just adding it to the local state.
    setAnnouncements([...announcements, { ...announcement, date: new Date() }]);
  };

  return (
    <div className="p-4">
      <AddAnnouncementForm onSubmit={addAnnouncement} />
      <SmartTable announcements={announcements} />
    </div>
  );
};


