import DataCard from '@/components/DataCard/index';
import React from 'react'
import style from './style.module.css'
import Joining from '@/components/Joining/index';
import Birthdays from '@/components/Birthdays/index';
import Holidays from '@/components/Holidays/index';

const data = [
    {
        title: 'New Joining',
        contentComponent: Joining,

    },
    {
        title: 'Upcoming Birthdays',
        contentComponent: Birthdays,
    },
    {
        title: 'Upcoming Holidays',
        contentComponent: Holidays,
    },
    // {
        //     title: '',
        //     contentComponent: ,
        // },
]

const DataCards = () => {
    return (
        <div className={style.container}>
            {data.map((item, index) => (
                <DataCard key={index} item={item} />
            ))}
        </div>
    )
}

export default DataCards;