'use client'
import React, { useState } from 'react';

const tableData = [
  { name: 'A', status: 'Present', date: '2023-10-10', clockIn: '08:00 AM', clockOut: '04:00 PM', total: '8 hours' },
  { name: 'B', status: 'Absent', date: '2023-10-12', clockIn: '08:30 AM', clockOut: '05:00 PM', total: '8.5 hours' },
  { name: 'C', status: 'Present', date: '2023-10-09', clockIn: '09:00 AM', clockOut: '03:30 PM', total: '6.5 hours' },
  { name: 'D', status: 'Absent', date: '2023-10-11', clockIn: '08:15 AM', clockOut: '04:15 PM', total: '8 hours' },
  { name: 'E', status: 'Absent', date: '2023-10-11', clockIn: '08:15 AM', clockOut: '04:15 PM', total: '8 hours' },
  { name: 'F', status: 'Present', date: '2023-10-13', clockIn: '08:15 AM', clockOut: '04:15 PM', total: '8 hours' },
  { name: 'G', status: 'Absent', date: '2023-10-18', clockIn: '08:15 AM', clockOut: '04:15 PM', total: '8 hours' },
  { name: 'H', status: 'Present', date: '2023-10-15', clockIn: '08:15 AM', clockOut: '04:15 PM', total: '8 hours' },
  { name: 'I', status: 'Absent', date: '2023-10-20', clockIn: '08:15 AM', clockOut: '04:15 PM', total: '8 hours' },
  { name: 'J', status: 'Absent', date: '2023-10-21', clockIn: '08:15 AM', clockOut: '04:15 PM', total: '8 hours' },
];

const Table = ({ rowsToShow, searchInput }) => {
    const [sortOrder, setSortOrder] = useState({ field: 'date', order: 'asc' });

    const filteredData = tableData
        .filter((row) => row.name.toLowerCase().includes(searchInput.toLowerCase()))
        .sort((a, b) => {
            if (sortOrder.field === 'date') {
                return (sortOrder.order === 'asc' ? 1 : -1) * (new Date(a.date) - new Date(b.date));
            } else if (sortOrder.field === 'action') {
                return (sortOrder.order === 'asc' ? 1 : -1) * a.name.localeCompare(b.name);
            }
        });

    const slicedData = filteredData.slice(0, rowsToShow);

    const handleSort = (field) => {
        if (field === sortOrder.field) {
            setSortOrder({ field, order: sortOrder.order === 'asc' ? 'desc' : 'asc' });
        } else {
            setSortOrder({ field, order: 'asc' });
        }
    };

    return (
        <table className="min-w-full">
            <thead className=''>
                <tr>
                    <th>Name <button onClick={() => handleSort('action')}>&#x2195;</button> </th>
                    <th>Status</th>
                    <th>Date <button onClick={() => handleSort('date')}>&#x2195;</button></th>
                    <th>Clock IN</th>
                    <th>Clock OUT</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody className='rounded-md border'>
                {slicedData.map((row, index) => (
                    <tr key={index} className={`text-center ${index % 2 === 0 ? 'bg-gray-50' : 'bg-transparent'}`}>
                        <td>{row.name}</td>
                        <td>{row.status}</td>
                        <td>{row.date}</td>
                        <td>{row.clockIn}</td>
                        <td>{row.clockOut}</td>
                        <td>{row.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
