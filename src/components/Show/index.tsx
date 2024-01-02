'use client'
import React, { useState } from 'react';
import Table from '../../../../ams-fe/src/components/Table/index';

const Show = () => {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    const [selectedOption, setSelectedOption] = useState(10);
    const [searchInput, setSearchInput] = useState('');

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    };

    const handleSearchInput = (event) => {
        const searchText = event.target.value;
        setSearchInput(searchText);
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
            </nav>
            <Table rowsToShow={selectedOption} searchInput={searchInput} />
        </main>
    );
};

export default Show;
