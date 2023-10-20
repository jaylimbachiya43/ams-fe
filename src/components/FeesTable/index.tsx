'use client'
import React, { useState } from 'react';

const tableData = [
  { name: 'A', date: '2023-10-10', received: 5000, pending: 15000, method: 'Cash', total: '20000' },
  { name: 'B', date: '2023-10-12', received: 5000, pending: 15000, method: 'UPI', total: '20000' },
  { name: 'C', date: '2023-10-09', received: 5000, pending: 15000, method: 'UPI', total: '20000' },
  { name: 'D', date: '2023-10-11', received: 5000, pending: 15000, method: 'Credit Card', total: '20000' },
  { name: 'E', date: '2023-10-11', received: 5000, pending: 15000, method: 'Cash', total: '20000' },
  { name: 'F', date: '2023-10-13', received: 5000, pending: 15000, method: 'UPI', total: '20000' },
  { name: 'G', date: '2023-10-18', received: 5000, pending: 15000, method: 'Cash', total: '20000' },
  { name: 'H', date: '2023-10-15', received: 5000, pending: 15000, method: 'UPI', total: '20000' },
  { name: 'I', date: '2023-10-20', received: 5000, pending: 15000, method: 'Cheque', total: '20000' },
  { name: 'J', date: '2023-10-21', received: 5000, pending: 15000, method: 'Credit Card', total: '20000' },
];

const FeesTable = ({ rowsToShow, searchInput, paymentMethodFilter }) => {
    const [sortOrder, setSortOrder] = useState({ field: 'date', order: 'asc' });

    const filteredData = tableData
        .filter((row) => row.name.toLowerCase().includes(searchInput.toLowerCase()))
        .filter((row) => paymentMethodFilter === '' || row.method === paymentMethodFilter)
        .sort((a, b) => {
            if (sortOrder.field === 'date') {
                return (sortOrder.order === 'asc' ? 1 : -1) * (new Date(a.date) - new Date(b.date));
            } else if (sortOrder.field === 'name') {
                return (sortOrder.order === 'asc' ? 1 : -1) * a.name.localeCompare(b.name);
            }
        });

    const slicedData = filteredData.slice(0, rowsToShow);

    return (
        <table className="min-w-full">
            <thead className=''>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Fees Received</th>
                    <th>Fees Pending</th>
                    <th>Payment Method</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody className='rounded-md border'>
                {slicedData.map((row, index) => (
                    <tr key={index} className={`text-center ${index % 2 === 0 ? 'bg-gray-50' : 'bg-transparent'}`}>
                        <td>{row.name}</td>
                        <td>{row.date}</td>
                        <td>{row.received}</td>
                        <td>{row.pending}</td>
                        <td>{row.method}</td>
                        <td>{row.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FeesTable;
