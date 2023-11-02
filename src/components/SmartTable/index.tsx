import React from 'react';

export default function SmartTable ({ announcements }) {
  return (
    <table className="min-w-full border rounded-lg overflow-hidden">
      <thead className="bg-gray-300">
        <tr>
          <th className="py-2 px-4">Date</th>
          <th className="py-2 px-4">Announcement</th>
        </tr>
      </thead>
      <tbody>
        {announcements.map((announcement, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
          >
            <td className="py-2 px-4">
              {new Date(announcement.date).toLocaleDateString()}
            </td>
            <td className="py-2 px-4">{announcement.content}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
