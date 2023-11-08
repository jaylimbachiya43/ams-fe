'use client'
import React, { useState } from 'react';

const InternShipPage = () => {
  const [availableInternships, setAvailableInternships] = useState([
    { id: 1, company: 'Company A', position: 'Flutter & BootStrap' },
    { id: 2, company: 'Company B', position: 'React Developer' },
  ]);

  const [matchedInternships, setMatchedInternships] = useState([]);
  
  const matchStudentToInternship = (internship) => {
    const updatedAvailableInternships = availableInternships.filter(
      (i) => i.id !== internship.id
    );
    setAvailableInternships(updatedAvailableInternships);
    
    setMatchedInternships([...matchedInternships, internship]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Internship Placement</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Available Internships:</h2>
          <ul className="space-y-2">
            {availableInternships.map((internship) => (
              <li
                key={internship.id}
                className="bg-white p-4 rounded shadow-md flex items-center justify-between"
              >
                <div>
                  <span className="text-lg font-semibold">
                    {internship.company}
                  </span>
                  <span className="text-gray-600">{internship.position}</span>
                </div>
                <button
                  onClick={() => matchStudentToInternship(internship)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Match Student
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Matched Internships:</h2>
          <ul className="space-y-2">
            {matchedInternships.map((internship) => (
              <li
                key={internship.id}
                className="bg-white p-4 rounded shadow-md"
              >
                <span className="text-lg font-semibold">
                  {internship.company}
                </span>
                <span className="text-gray-600">{internship.position}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InternShipPage;
