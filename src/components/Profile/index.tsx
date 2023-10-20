import React from 'react'
import Image from '../../../node_modules/next/image'
import admin from '../../../public/images/admin.png'

const data = [
    {
        logo: admin,
        name: 'Jay Parmar',
        position: 'CEO',
        date: 'October 20, 2023',
    }
]

const Profile = () => {
    return (
        <div className=''>
            {data.map((item, index) => (
                <div key={index} className='grid justify-items-center border gap-y-7 p-3 bg-slate-100 shadow-lg'>
                    <Image src={item.logo} alt='user dp' width={50} height={100} className='rounded-full border bg-slate-400 p-1' />
                    <h2><strong>{item.name}</strong></h2>
                    <p>{item.position}</p>
                    <p>Joining Date: {item.date}</p>
                </div>
            ))}
        </div>
    )
}

export default Profile