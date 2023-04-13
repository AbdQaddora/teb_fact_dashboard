import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom';
import { PATHS } from '../../../router'
import Style from './style'

interface IProps {
    children: ReactNode;
    to: keyof typeof PATHS;
    className?: string
    onClick?: () => void
}

const CustomLink = ({ children, to, className = '', onClick }: IProps) => {
    return (
        <Style className={className} onClick={onClick ? onClick : () => { }}>
            <Link to={PATHS[to]}>
                {children}
            </Link>
        </Style>
    )
}

export default CustomLink