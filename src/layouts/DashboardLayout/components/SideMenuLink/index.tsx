import React, { ReactNode } from 'react'
import Style from './style'
import { PATHS } from '../../../../router';
import CustomLink from '../../../../components/tiny/CustomLink';
import { useLocation } from 'react-router-dom';

interface IProps {
    text: string,
    icon: ReactNode,
    to: keyof typeof PATHS;
}

const SideMenuLink = ({ text, icon, to }: IProps) => {
    const { pathname } = useLocation();
    // active condition
    const isActive = (PATHS[to].includes(pathname.split("/")[1]) && pathname !== "/")
        || (pathname === "/" && to === "HOME");
        
    return (
        <CustomLink to={to}>
            <Style className={isActive ? "active" : ""}>
                <p className='link_icon'>{icon}</p>
                <p>{text}</p>
            </Style>
        </CustomLink>
    )
}

export default SideMenuLink