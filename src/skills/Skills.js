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
                    <Skill title={'HTML'} description={'Whats is HTML?\n' +
                    'Картинки по запросу html what is\n' +
                    'HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.'}/>
                    <Skill title={'JS'} description={'JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.'}/>
                    <Skill title={'React'} description={'React is a JS library for creating UI. React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It\'s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.'} />
                    <Skill title={'Redux'} description={'Redux can be used as a data store for any UI layer. The most common usage is with React and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more. Redux simply provides a subscription mechanism which can be used by any other code.'} />
                    <Skill title={'GitHub'} description={'It can contain folders and any type of files (HTML, CSS, JavaScript, Documents, Data, Images). A GitHub repository should also include a licence file and a README file about the project. A GitHub repository can also be used to store ideas, or any resources that you want to share.'} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
