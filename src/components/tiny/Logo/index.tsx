import React from 'react'
import Style from './style'

import logoImage from '../../../assets/images/logo.png';
interface IProps {
    width?: string,
    height?: string,
    margin?: string,
    className?: string
}

const Logo = ({ className = "", ...rest }: IProps) => {
    return (
        <Style src={logoImage} alt={"logo"} {...rest} className={className} />
    )
}

export default Logo