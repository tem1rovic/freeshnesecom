import React, {FC, ReactNode} from 'react';
import Head from "next/head";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

interface MainLayoutProps {
    children?: JSX.Element | ReactNode,
    title: string
}

const MainLayout: FC<MainLayoutProps> = ({children, title}) => {
    return (
       <>
        <Head>
            <title>{title}</title>
            <meta/>
        </Head>
            <Header/>
                <main>{children}</main>
           <Footer/>
       </>
    );
};

export default MainLayout;