import FeesShow from '@/components/FeesShow/index'
import React from 'react'
import WideCards from '../WideCards/index'

const dataA = [
    {
        title: 'Attendance',
        contentComponent: FeesShow,
    },
]

export default function AdminFeesTable () {
  return (
    <WideCards data={dataA}/>
  )
}