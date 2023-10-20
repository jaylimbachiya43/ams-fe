'use client'
import React, { useState } from 'react';
import FeesTable from '../FeesTable/index';

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

const FeesShow = () => {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    const [selectedOption, setSelectedOption] = useState(10);
    const [searchInput, setSearchInput] = useState('');
    const [paymentMethodFilter, setPaymentMethodFilter] = useState('');

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    };

    const handleSearchInput = (event) => {
        const searchText = event.target.value;
        setSearchInput(searchText);
    };

    const handlePaymentMethodFilter = (event) => {
        const selectedMethod = event.target.value;
        setPaymentMethodFilter(selectedMethod);
    };

    return (
        <main className='grid gap-y-5'>
            <nav className='flex justify-between'>
                <div className='flex gap-2'>
                    <p>Show</p>
                    <select
                        className='border-b flex text-center bg-transparent outline-none w-28'
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        {numbers.map((number, index) => (
                            <option key={index} value={number}>
                                {number}
                            </option>
                        ))}
                    </select>
                    <p>entries</p>
                </div>
                <div className='flex gap-2'>
                    <p>Search:</p>
                    <input
                        type="text"
                        className='border-b outline-none bg-transparent'
                        value={searchInput}
                        onChange={handleSearchInput}
                    />
                </div>
                <div className='flex gap-2'>
                    <p>Payment Method:</p>
                    <select
                        className='border-b outline-none bg-transparent'
                        value={paymentMethodFilter}
                        onChange={handlePaymentMethodFilter}
                    >
                        <option value="">All</option>
                        <option value="Cash">Cash</option>
                        <option value="UPI">UPI</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Cheque">Cheque</option>
                    </select>
                </div>
            </nav>
            <FeesTable
                rowsToShow={selectedOption}
                searchInput={searchInput}
                paymentMethodFilter={paymentMethodFilter}
                tableData={tableData}
            />
        </main>
    );
};

export default FeesShow;
