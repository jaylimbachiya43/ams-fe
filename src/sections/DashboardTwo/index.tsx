import Profile from '@/components/Profile/index'
import ProgressWheel from '@/components/ProgressWheel/index'
import React from 'react'

const DashboardTwo = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-9'>
        <Profile/>
        <ProgressWheel/>
    </div>
  )
}

export default DashboardTwo