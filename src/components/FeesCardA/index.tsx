import React from 'react';
import Image from '../../../node_modules/next/image';

export default function FeesCardA({ item }) {
    const cardStyle = {
        backgroundColor: item.color, // Apply the specified color to the background
    };

    return (
        <div className="grid grid-cols-2 justify-items-center rounded-2xl shadow-lg p-6" style={cardStyle}>
            <h3 className="text-3xl">{item.title}</h3>
            <div className='border rounded-full p-2 bg-slate-50'>
            <Image src={item.logo} alt='icon' width={50} height={100}/>
            </div>
        </div>
    );
}
