import Holidays from '@/components/Holidays/index'
import Joining from '@/components/Joining/index'
import StuDetails from '@/components/StuDetails/index'
import React from 'react'
import DataCards from '../DataCards/index'
// import WideCards from '../WideCards/index'

const dataA = [
    {
        title: 'Announcements',
        contentComponent: Joining,
  
    },
    {
        title: 'My Awards',
        contentComponent: Holidays,
  
    },
]

const DashboardThree = () => {
  return (
    <div className=''>
        <DataCards data1={dataA} />
    </div>
  )
}

export default DashboardThree