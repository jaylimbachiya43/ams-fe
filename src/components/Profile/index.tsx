import React from 'react'
import Image from '../../../node_modules/next/image'
import admin from '../../../../ams-fe/public/images/admin.png'
import style from '../../../../ams-fe/src/components/Profile/style.module.css'

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
                <div key={index} className={style.m1}>
                    <Image src={item.logo} alt='user dp' width={50} height={100} className={style.m2} />
                    <h2><strong>{item.name}</strong></h2>
                    <p>{item.position}</p>
                    <p>Joining Date: {item.date}</p>
                </div>
            ))}
        </div>
    )
}

export default Profile