    import DataCard from '../../../../ams-fe/src/components/DataCard/index'
    import React from 'react'
    import style from './style.module.css'

    const WideCards = ({data}) => {
        return (
            <div className={style.container}>
                {data.map((item, index) => (
                    <DataCard key={index} item={item} />
                ))}
            </div>
        )
    }

    export default WideCards