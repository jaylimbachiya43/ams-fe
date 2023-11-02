import Holidays from '@/components/Holidays/index'
import Joining from '@/components/Joining/index'
import StuDetails from '@/components/StuDetails/index'
import React from 'react'
import DataCards from '../DataCards/index'
import HRAnn from '@/components/HRAnn'

const dataA = [
    {
        title: 'Announcements',
        contentComponent: HRAnn,
  
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