import React from 'react';
import Image from '../../../node_modules/next/image';
import style from '../../../../ams-fe/src/components/FeesCardA/style.module.css'

export default function FeesCardA({ item }) {
    const cardStyle = {
        backgroundColor: item.color,
    };

    return (
        <div className={style.card} style={cardStyle}>
            <h3 className="text-3xl">{item.title}</h3>
            <div className='border rounded-full p-2 bg-slate-50'>
            <Image src={item.logo} alt='icon' width={50} height={100}/>
            </div>
        </div>
    );
}
