import FeesCardA from '@/components/FeesCardA/index'
import React from 'react'
import style from './style.module.css'

const FeesCardsA = ({ data2 }) => {
    return (
        <div className={style.container}>
            {data2?.map((item, index) => (
                <FeesCardA key={index} item={item} />
            ))}
        </div>
    )
}

export default FeesCardsA