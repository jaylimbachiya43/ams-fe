import Birthdays from '../../../../ams-fe/src/components/Birthdays/index'
import Holidays from '../../../../ams-fe/src/components/Holidays/index'
import Joining from '../../../../ams-fe/src/components/Joining/index'
import React from 'react'
import DataCards from '../../../../ams-fe/src/sections/DataCards/index'

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