import React, {FC, ReactNode} from 'react';
import Link from "next/link";
import cl from './A.module.scss'

interface AProps {
    children?: ReactNode,
    href: string
}

const A: FC<AProps> = ({ children, href }) => {
    return (
        <Link href={href}>
            <a className={cl.link}>{children}</a>
        </Link>
    );
};

export default A;