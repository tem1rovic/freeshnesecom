import React, {FC} from 'react';
import cl from './Navbar.module.scss'

const Navbar: FC = () => {
    return (
        <nav id="nav" className={cl.Root}>
           <h1>Navbar</h1>
        </nav>
    );
};

export default Navbar;