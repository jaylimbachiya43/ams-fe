import React from 'react'

const data = [
    {
        name: 'My Profile',
    },
    {
        name: 'Change Password',
    },
    {
        name: 'Sign Out'
    },
]

const ProfileBar = () => {
  return (
    <div className='main-sidebar float-right border mr-12 text-center hidden'>
        {data.map ((item, index) => (
            <p key={index} className='mx-8 my-5'>
                {item.name}
            </p>
        ))}
    </div>
  )
}

export default ProfileBar