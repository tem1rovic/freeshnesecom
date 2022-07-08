import React, {FC, ReactNode} from 'react';
import cl from './List.module.scss'

interface ListProps {
    children?: ReactNode,
    title: string
}

const List: FC<ListProps> = ({ children, title }) => {
    return (
        <div className={cl.Root}>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default List;