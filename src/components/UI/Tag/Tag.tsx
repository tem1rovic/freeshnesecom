import React, {FC} from 'react';
import cl from './Tag.module.scss'

interface  TagProps {
    children: string
}

const Tag: FC<TagProps> = ({children}) => {
    return (
        <span className={cl.Tag}>{children}</span>
    );
};

export default Tag;