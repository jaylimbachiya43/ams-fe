'use client'
import React, { useState } from 'react';

const tableData = [
  { action: 'A', status: 'Present', date: '2023-10-10', clockIn: '08:00 AM', clockOut: '04:00 PM', total: '8 hours' },
  { action: 'B', status: 'Absent', date: '2023-10-12', clockIn: '08:30 AM', clockOut: '05:00 PM', total: '8.5 hours' },
  { action: 'C', status: 'Present', date: '2023-10-09', clockIn: '09:00 AM', clockOut: '03:30 PM', total: '6.5 hours' },
  { action: 'D', status: 'Absent', date: '2023-10-11', clockIn: '08:15 AM', clockOut: '04:15 PM', total: '8 hours' },
  { action: 'E', status: 'Absent', date: '2023-10-11', clockIn: '08:15 AM', clockOut: '04:15 PM', total: '8 hours' },
  { action: 'F', status: 'Present', date: '2023-10-13', clockIn: '08:15 AM', clockOut: '04:15 PM', total: '8 hours' },
  { action: 'G', status: 'Absent', date: '2023-10-18', clockIn: '08:15 AM', clockOut: '04:15 PM', total: '8 hours' },
  { action: 'H', status: 'Present', date: '2023-10-15', clockIn: '08:15 AM', clockOut: '04:15 PM', total: '8 hours' },
  { action: 'I', status: 'Absent', date: '2023-10-20', clockIn: '08:15 AM', clockOut: '04:15 PM', total: '8 hours' },
  { action: 'J', status: 'Absent', date: '2023-10-21', clockIn: '08:15 AM', clockOut: '04:15 PM', total: '8 hours' },
];

const Table = ({ rowsToShow, searchInput }) => {
    const [sortOrder, setSortOrder] = useState({ field: 'date', order: 'asc' });

    const filteredData = tableData
        .filter((row) => row.action.toLowerCase().includes(searchInput.toLowerCase()))
        .sort((a, b) => {
            if (sortOrder.field === 'date') {
                return (sortOrder.order === 'asc' ? 1 : -1) * (new Date(a.date) - new Date(b.date));
            } else if (sortOrder.field === 'action') {
                return (sortOrder.order === 'asc' ? 1 : -1) * a.action.localeCompare(b.action);
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
                    <th>Action <button onClick={() => handleSort('action')}>&#x2195;</button> </th>
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
                        <td>{row.action}</td>
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
