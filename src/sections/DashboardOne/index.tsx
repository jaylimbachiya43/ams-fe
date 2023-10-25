import Birthdays from '@/components/Birthdays/index'
import Holidays from '@/components/Holidays/index'
import Joining from '@/components/Joining/index'
import React from 'react'
import DataCards from '../DataCards/index'

const dataH = [
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

const DashboardOne = () => {
  return (
    <div className=''>
        <DataCards data1={dataH}/>
    </div>
  )
}

export default DashboardOne