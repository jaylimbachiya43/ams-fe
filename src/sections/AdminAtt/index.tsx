import Show from '../../../../ams-fe/src/components/Show/index'
import React from 'react'
import WideCards from '../../../../ams-fe/src/sections/WideCards/index'

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

