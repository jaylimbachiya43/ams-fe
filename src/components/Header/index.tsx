
import React from 'react'
import Image from 'next/image'
import CompLogo from '../../../public/images/complogo.png'
import BellLogo from '../../../public/images/Bell.png'
import ProfImg from '../../../public/images/admin.png'

const Header = () => {
  return (
    <header className='flex justify-between mx-10 my-3'>
        
        <div>
            <Image src={CompLogo} alt='ComLogo' className="w-3/5 h-auto"/>
        </div>
        <div className="icon flex gap-x-5 items-center">
            <Image src={BellLogo} alt='BellLogo' className='h-auto w-8'/>
            <Image src={ProfImg} alt='ProfImg'  className='h-auto w-8 cursor-pointer' />
        </div>

    </header>
  )
}

export default Header 