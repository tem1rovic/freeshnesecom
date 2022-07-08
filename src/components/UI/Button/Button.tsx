import React, {FC, ReactNode} from 'react';

interface ButtonProps {
    children: ReactNode,
    type: string,
    arrow?: boolean
}

const Button: FC<ButtonProps> = ({ children,type , arrow}) => {
    return (
        <button className={type}>{children}
            {
                arrow ?
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.0332 11.1867L9.7732 8.44669C9.89737 8.32178 9.96706 8.15281 9.96706 7.97669C9.96706 7.80056 9.89737 7.63159 9.7732 7.50669L7.10654 4.84002" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel"/>
                    </svg>
                    :
                    null
            }
        </button>
    );
};

export default Button;