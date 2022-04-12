import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'HTML'} description={'This is hyper-text markup language'}/>
                    <Skill title={'JS'} description={'JavaScript is a single-threaded language'}/>
                    <Skill title={'React'} description={'React is a JS library for creating UI'} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
