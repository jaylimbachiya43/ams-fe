import React from 'react';

const AnnouncementList = ({ announcements }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Announcements</h2>
      <ul className="list-disc pl-6">
        {announcements.map((announcement, index) => (
          <li key={index} className="mb-2">
            <strong>{new Date(announcement.date).toLocaleDateString()}:</strong> {announcement.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementList;
