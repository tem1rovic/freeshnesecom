import {FC} from 'react';
import Head from "./Head";
import cl from './Header.module.scss'

const Header: FC = () => {
    return (
        <header>
            <div className="container">
                <Head/>
                <div className={cl.Root}>
                    <h1>Header</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;