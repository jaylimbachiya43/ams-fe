import FeesShow from '../../../../ams-fe/src/components/FeesShow/index'
import React from 'react'
import WideCards from '../../../../ams-fe/src/sections/WideCards/index'

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