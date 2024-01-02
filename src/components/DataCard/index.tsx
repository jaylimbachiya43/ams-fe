import React from 'react'
import style from '../../../../ams-fe/src/components/DataCard/style.module.css'

export default function DataCardCont({item}) {
    const ContentComponent = item.contentComponent;
    return (
        <main>
            <div className={style.boss}>
                <nav className={style.c1}>
                    <h3>{item.title}</h3>
                </nav>
                <div className={style.c2}>
                    <ContentComponent />
                </div>
            </div>
        </main>
    );
};

