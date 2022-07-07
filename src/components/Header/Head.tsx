import React, {FC} from 'react';
import cl from './Head.module.scss'

const Head: FC = () => {
    return (
        <div className={cl.Root}>
            <div className={cl.Left}>
                <a href="/">Chat with us</a>
                <p>+420 336 775 664</p>
                <p>info@freshnesecom.com</p>
            </div>
                <nav id="nav" className={cl.Nav}>
                    <ul>
                        <li><a href="/blogs">Blog</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/careers">Careers</a></li>
                    </ul>
                </nav>
        </div>
    );
};

export default Head;