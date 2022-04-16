import React from 'react';
import style from './Work.module.css';

function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.image} style={{backgroundImage: props.image}}>
                <button className={style.buttonView}>View</button>
            </div>
            <div className={style.info}>
                <h4>{props.title}</h4>
                <div className={style.text}>
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
    );
}

export default Work;
