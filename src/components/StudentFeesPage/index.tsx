import React from 'react'

const data = [
    {
        title: 'M1',
        cont: 'Completed',
    },
    {
        title: 'M2',
        cont: 'Pending',
    },
    {
        title: 'M3',
        cont: 'Upcoming',
    },
    {
        title: 'M4',
        cont: 'Upcoming',
    },

]

const StudentFeesPage = () => {
    return (
        <div className='grid grid-cols-4 items-center justify-center'>
            {data.map((item, index) => (
                <div key={index} className='border text-center'>
                    <div className='border-b'>{item.title}</div>
                    <div className='p-10'>{item.cont}</div>
                </div>
            ))}
        </div>
    )
}

export default StudentFeesPage