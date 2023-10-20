import Show from '@/components/Show/index'
import React from 'react'
import WideCards from '../WideCards/index'

const dataAn = [
    {
        title: 'Announcements',
        contentComponent: Show,
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