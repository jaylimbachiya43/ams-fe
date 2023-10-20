import Holidays from '@/components/Holidays/index'
import Joining from '@/components/Joining/index'
import StuDetails from '@/components/StuDetails/index'
import React from 'react'
import DataCards from '../DataCards/index'
import WideCards from '../WideCards/index'

const dataC = [
    {
        title: 'Details',
        contentComponent: StuDetails,
    },
]

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
    <div className='grid grid-cols-2 gap-x-6'>
        <WideCards data={dataC}/>
        <DataCards data1={dataA} />
    </div>
  )
}

export default DashboardThree