import Show from '@/components/Show/index'
import React from 'react'
import WideCards from '../WideCards/index'

const dataA = [
    {
        title: 'Attendance',
        contentComponent: Show,
    },
]

export default function AdminAtt () {
  return (
    <WideCards data={dataA}/>
  )
}

