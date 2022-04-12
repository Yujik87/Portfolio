import React from 'react';
import style from './Works.module.css';
import Work from "./work/Work";
import styleContainer from './../common/styles/Container.module.css';

function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.works}>
                    <Work title={'Work1'} image={''} description={'lorem50'}/>
                    <Work title={'Work2'} image={''} description={'lorem50'}/>
                </div>
            </div>
        </div>
    );
}

export default Works;