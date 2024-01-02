'use client'
import React, { useState } from 'react';
import SmartTable from '../../../../ams-fe/src/components/SmartTable/index';
import AddAnnouncementForm from '../../../../ams-fe/src/components/AddAnnouncementForm/index';
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


