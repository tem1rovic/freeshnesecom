import React, {createRef, FC, ReactNode, useRef} from 'react';
import useHover from "hooks/useHover";
import cl from './Dropdown.module.scss'

interface DropdownProps {
    children?: ReactNode,
    type?: string
}

const items = [
    { value: 1, title: 'Item 1' },
    { value: 2, title: 'Item 2' },
    { value: 3, title: 'Item 3' },
    { value: 4, title: 'Item 4' },
]

const Dropdown: FC<DropdownProps> = ({ children, type }) => {

    const refTitle = createRef<HTMLDivElement>()
    const refDropdown = createRef<HTMLDivElement>()

    const isTitle = useHover(refTitle)
    const isDropdown = useHover(refDropdown)
    return (
        <div className={cl.Root}>
            <div ref={refTitle} className={cl.Title}>{children}
                {
                    (type === 'large') ?
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.81348 6.53336L7.55348 9.27336C7.67838 9.39752 7.84735 9.46722 8.02348 9.46722C8.1996 9.46722 8.36857 9.39752 8.49348 9.27336L11.1601 6.60669" stroke="#6A983C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel"/>
                    </svg>
                 :
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.61035 5.40001L5.66535 7.45501C5.75903 7.54814 5.88576 7.60041 6.01785 7.60041C6.14994 7.60041 6.27667 7.54814 6.37035 7.45501L8.37035 5.45501" stroke="#6A983C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel"/>
                    </svg>
                }
            </div>
            <div ref={refDropdown}  className={cl.Dropdown} style={{display: isTitle || isDropdown ? 'block' : 'none'}}>
                { items.map(item =>
                        <div key={item.value} className={cl.DropdownItem}>{item.title}</div>
                    ) }
            </div>
        </div>
    );
};

export default Dropdown;