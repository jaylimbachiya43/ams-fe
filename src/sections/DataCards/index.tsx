import DataCard from '../../../../ams-fe/src/components/DataCard/index';
import React from 'react'
import style from '../../../../ams-fe/src/sections/DataCards/style.module.css'

const DataCards = ({ data1 }) => {
    return (
        <div className={style.container}>
            {data1?.map((item, index) => (
                <DataCard key={index} item={item} />
            ))}
        </div>
    )
}

export default DataCards;