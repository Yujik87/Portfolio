import React from 'react';
import style from './Distant.module.css';
import styleContainer from "../common/styles/Container.module.css";


function Distant() {
    return (
        <div className={style.distant}>
            <div className={styleContainer.container}>
                <div className={style.distantContainer}>
                    <h2 className={style.head}>I'm looking into remote work options.</h2>
                    <button className={style.button}>Hire me</button>
                </div>
            </div>
        </div>
    );
}

export default Distant;