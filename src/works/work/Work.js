import React from 'react';
import style from './Work.module.css';

function Work(props) {
    return (
        <div className={style.workBlock}>
            <div className={style.image}>
                <button className={style.buttonView}>View</button>
            </div>

        </div>
    );
}

export default Work;