import React from 'react';
import style from './Work.module.css';

function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.image}>
                <button className={style.buttonView}>View</button>
            </div>
            <h4>{props.title}</h4>
            <span>{props.description}</span>
        </div>
    );
}

export default Work;
