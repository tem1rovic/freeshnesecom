import React, {FC} from 'react';
import A from "components/A/A";
import cl from './Head.module.scss'

const Head: FC = () => {
    return (
        <div className={cl.Root}>
            <div className={cl.Left}>
                <A href={'/chats'}>Chat with us</A>
                <div>+420 336 775 664</div>
                <div>info@freshnesecom.com</div>
            </div>
            <nav className={cl.Right}>
                <A href={'/blogs'}>Blog</A>
                <A href={'/about'}>About Us</A>
                <A href={'/careers'}>Careers</A>
            </nav>
        </div>
    );
};

export default Head;