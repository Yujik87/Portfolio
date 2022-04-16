import React from 'react';
import style from './Footer.module.css';
import styleContainer from './../common/styles/Container.module.css';


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={styleContainer.container}>
                <div className={style.footerContainer}>
                    <h3>Yury Khakevich</h3>
                    <div className={style.social}>
                        <div>LinkedIn</div>
                        <div>GitHub</div>
                        <div>Instagram</div>
                        <div>Telegram</div>

                    </div>
                    <h4>2022 All rights reserved.</h4></div>
            </div>
        </div>
    );
}

export default Footer;