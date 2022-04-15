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
                    <Work title={'ToDoList'} image={''} description={'This application allows you to create lists with tasks, add new lists and task, change them and delete them. Also it has error control to protect incorrect data enter.'}/>
                    <Work title={'Counter'} image={''} description={'This application allows you to...'}/>
                </div>
            </div>
        </div>
    );
}

export default Works;
