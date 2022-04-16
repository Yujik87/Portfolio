import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css';


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={styleContainer.container}>
                <div className={style.contactsContainer}>
                    <h2>Contacts</h2>
                    <form className={style.inputBlock}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                    <button>Send</button>

                </div>
            </div>
        </div>
    );
}

export default Contacts;