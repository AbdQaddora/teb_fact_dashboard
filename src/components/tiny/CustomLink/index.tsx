import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom';
import { PATHS } from '../../../router'
import Style from './style'

interface IProps {
    children: ReactNode;
    to: keyof typeof PATHS;
    className?: string
}

const CustomLink = ({ children, to, className = '' }: IProps) => {
    return (
        <Style className={className}>
            <Link to={PATHS[to]}>
                {children}
            </Link>
        </Style>
    )
}

export default CustomLink