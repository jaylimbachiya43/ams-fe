'use client'
import React, { useState } from 'react';

const AttendancePage = () => {
    const [attendanceRecords, setAttendanceRecords] = useState([
        { date: '2023-11-01', status: 'A' },
        { date: '2023-11-02', status: 'P' },
        { date: '2023-11-03', status: 'A' },
        { date: '2023-11-04', status: 'A' },
        { date: '2023-11-05', status: 'P' },
    ]);

    const [grades, setGrades] = useState([
        { subject: 'HTML', grade: 'Good' },
        { subject: 'CSS', grade: 'Poor' },
        { subject: 'JS', grade: 'Poor' },
    ]);

    const totalClasses = attendanceRecords.length;
    const totalPresent = attendanceRecords.filter((record) => record.status === 'P').length;
    const progress = (totalPresent / totalClasses) * 100;

    return (
        <div className="p-6 ">
            <h1 className="text-3xl font-bold mb-4">Attendance and Progress</h1>
            <div className='grid grid-cols-3'>
                <div>
                    <h2 className="text-xl font-semibold">Attendance Records:</h2>
                    <ul className="space-y-2">
                        {attendanceRecords.map((record, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-lg">{record.date}:</span>
                                <span className={`ml-2 ${record.status === 'P' ? 'text-green-500' : 'text-red-500'}`}>
                                    {record.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">Tasks:</h2>
                    <ul className="space-y-2">
                        {grades.map((grade, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-lg">{grade.subject}:</span>
                                <span className={`ml-2 ${grade.grade === 'Good' ? 'text-green-500' : 'text-orange-500'}`}>
                                    {grade.grade}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">Progress:</h2>
                    <p>
                        You've attended {totalPresent} out of {totalClasses} classes, which is {progress.toFixed(2)}%.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AttendancePage;
