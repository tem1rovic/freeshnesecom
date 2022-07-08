import React, {FC, ReactNode} from 'react';

interface ContainerProps {
    children: ReactNode,
    id: string,
    padding?: string,
    bg?: string
}

const Container: FC<ContainerProps> = ({children, id, padding, bg}) => {
    return (
        <section id={id} >
            <div className="container" style={{paddingBlock: padding, background: bg}}>
                {children}
            </div>
        </section>
    );
};

export default Container;