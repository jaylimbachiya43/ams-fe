import React from 'react'
import DashboardOne from '@/sections/DashboardOne/index'
import DashboardTwo from '@/sections/DashboardTwo/index'
import DashboardThree from '@/sections/DashboardThree/index'
import CalendarView from '@/components/AdminCalendar'

export default function Home() {
  return (
    <main className='grid gap-y-10 m-6'>
      <DashboardOne/>
      {/* <DashboardTwo/> */}
      <DashboardThree/>
      {/* <CalendarView/> */}
    </main>
  )
}