import React, {FC} from 'react';
import cl from './Navbar.module.scss'
import Dropdown from "components/UI/Dropdown/Dropdown";

const Navbar: FC = () => {
    return (
        <div className={cl.Root}>
            <div className="container">
                <Dropdown>Bakery</Dropdown>
                <Dropdown>Fruit and vegetables</Dropdown>
                <Dropdown>Meat and fish</Dropdown>
                <Dropdown>Drinks</Dropdown>
                <Dropdown>Kitchen</Dropdown>
                <Dropdown>Special nutrition</Dropdown>
                <Dropdown>Baby</Dropdown>
                <Dropdown>Pharmacy</Dropdown>
            </div>
        </div>
    );
};

export default Navbar;