'use client'
import React, { useState } from 'react';

const StudentProfile = () => {
  const [student, setStudent] = useState({
    id: 1,
    name: '',
    email: '',
    documents: [],
    preferences: '',
  });

  const handleNameChange = (e) => {
    setStudent({ ...student, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setStudent({ ...student, email: e.target.value });
  };

  const handleDocumentUpload = (e) => {
    const files = e.target.files;
    setStudent({ ...student, documents: files });
  };

  const handlePreferencesChange = (e) => {
    setStudent({ ...student, preferences: e.target.value });
  };

  return (
    <div className='m-9'>
      <h1 className="text-3xl font-bold mb-4">Profile Management</h1>
      <form>
        <div className="mb-4">
          <label className="block font-semibold">Name:</label>
          <input
            type="text"
            value={student.name}
            onChange={handleNameChange}
            className="border rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Email:</label>
          <input
            type="email"
            value={student.email}
            onChange={handleEmailChange}
            className="border rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Upload Documents:</label>
          <input
            type="file"
            multiple
            onChange={handleDocumentUpload}
            className="border rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Preferences:</label>
          <textarea
            value={student.preferences}
            onChange={handlePreferencesChange}
            className="border rounded w-full p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default StudentProfile;
