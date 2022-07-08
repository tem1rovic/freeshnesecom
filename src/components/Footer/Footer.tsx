import React from 'react';
import List from "components/UI/List/List";
import A from "components/A/A";
import Tag from "components/UI/Tag/Tag";
import cl from './Footer.module.scss'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className={cl.Root}>
                    <div className={cl.Top}>
                        <List title='Get in touch'>
                            <A href='/about'>About Us</A>
                            <A href='/careers'>Careers</A>
                            <A href='/releases'>Press Releases</A>
                            <A href='/blog'>Blog</A>
                        </List>
                        <List title='Connections'>
                            <A href='/facebook'>Facebook</A>
                            <A href='/twitter'>Twitter</A>
                            <A href='/instagram'>Instagram</A>
                            <A href='/you'>Youtube</A>
                            <A href='/lin'>LinkedIn</A>
                        </List>
                        <List title='Earnings'>
                            <A href='/affiliate'>Become an Affiliate</A>
                            <A href='/product'>Advertise your product</A>
                            <A href='/sell'>Sell on Market</A>
                        </List>
                        <List title='Account'>
                            <A href='/account'>Your account</A>
                            <A href='/centre'>Returns Centre</A>
                            <A href='/purchase'>100 % purchase protection</A>
                            <A href='/chat'>Chat with us</A>
                            <A href='/help'>Help</A>
                        </List>
                    </div>
                    <div className={cl.Center}>
                        <h2>Product tags</h2>
                        <Tag>Beans</Tag>
                        <Tag>Carrots</Tag>
                        <Tag>Apples</Tag>
                        <Tag>Garlic</Tag>
                        <Tag>Mushrooms</Tag>
                        <Tag>Tomatoes</Tag>
                        <Tag>Chilli peppers</Tag>
                        <Tag>Broccoli</Tag>
                        <Tag>Watermelons</Tag>
                        <Tag>Oranges</Tag>
                        <Tag>Bananas</Tag>
                        <Tag>Grapes</Tag>
                        <Tag>Cherries</Tag>
                        <Tag>Meat</Tag>
                        <Tag>Fish</Tag>
                        <Tag>Fresh food</Tag>
                        <Tag>Seo tag</Tag>
                    </div>
                    <div className={cl.Copyright}>
                        <span>Copyright © 2020 petrbilek.com</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;