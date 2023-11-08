'use client'
import React, { useState } from 'react';

const InternApplication = () => {
  const [internshipApplications, setInternshipApplications] = useState([]);
  const [applicationStatus, setApplicationStatus] = useState('pending');

  const applyForInternship = () => {
    // Simulate applying for an internship
    setInternshipApplications([
      ...internshipApplications,
      { id: Date.now(), status: applicationStatus },
    ]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Internship Applications</h1>
      <div className="mb-4">
        <label htmlFor="applicationStatus" className="block text-sm font-medium text-gray-700">
          Application Status:
        </label>
        <select
          id="applicationStatus"
          value={applicationStatus}
          onChange={(e) => setApplicationStatus(e.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <button
        onClick={applyForInternship}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Apply for Internship
      </button>

      <h2 className="text-2xl font-semibold mt-6">My Applications:</h2>
      <ul className="list-disc ml-8 mt-4">
        {internshipApplications.map((application) => (
          <li
            key={application.id}
            className="text-lg font-medium text-gray-700"
          >
            Application Status: {application.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternApplication;