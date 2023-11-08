'use client'
import React, { useState } from 'react';

const StudentTracking = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'A', attendance: 'Present', performance: 'Good' },
        { id: 2, name: 'B', attendance: 'Absent', performance: 'Average' },
        { id: 3, name: 'C', attendance: 'Absent', performance: 'Poor' },
        { id: 4, name: 'D', attendance: 'Absent', performance: 'Poor' },
        { id: 5, name: 'E', attendance: 'Absent', performance: 'Average' },
      ]);

  const updateAttendanceAndPerformance = (student, attendance, performance) => {
    const updatedStudents = students.map((s) =>
      s.id === student.id ? { ...s, attendance, performance } : s
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Attendance Tracking</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Attendance</th>
            <th className="px-4 py-2">Performance</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-center">
          {students.map((student) => (
            <tr key={student.id}>
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">
                <select
                  value={student.attendance}
                  onChange={(e) =>
                    updateAttendanceAndPerformance(
                      student,
                      e.target.value,
                      student.performance
                    )
                  }
                  className="rounded-lg p-1"
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
              <td className="px-4 py-2">
                <select
                  value={student.performance}
                  onChange={(e) =>
                    updateAttendanceAndPerformance(
                      student,
                      student.attendance,
                      e.target.value
                    )
                  }
                  className="rounded-lg p-1"
                >
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Poor">Poor</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTracking;
