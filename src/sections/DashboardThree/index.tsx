import React from 'react'
import DataCards from '../DataCards/index'
import HRAnn from '@/components/HRAnn'
import AnnouncementList from '@/components/DashAnn'

const dataA = [
    {
        title: 'Announcements',
        contentComponent: HRAnn,
  
    },
]

const DashboardThree = () => {
  return (
    <div className='grid grid-cols-3'>
        <DataCards data1={dataA} />
    </div>
  )
}

export default DashboardThree