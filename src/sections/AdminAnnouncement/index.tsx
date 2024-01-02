import Show from '@/components/Show/index'
import React from 'react'
import WideCards from '../../../../ams-fe/src/sections/WideCards/index'
import HRAnn from '../../../../ams-fe/src/components/HRAnn'

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