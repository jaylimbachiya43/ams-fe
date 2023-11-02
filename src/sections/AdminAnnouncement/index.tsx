import Show from '@/components/Show/index'
import React from 'react'
import WideCards from '../WideCards/index'
import HRAnn from '@/components/HRAnn'

const dataAn = [
    {
        title: 'Announcements',
        contentComponent: HRAnn,
    },
]

const AdminAnnouncement = () => {
  return (
    <div>
        <WideCards data={dataAn}/>
    </div>
  )
}

export default AdminAnnouncement