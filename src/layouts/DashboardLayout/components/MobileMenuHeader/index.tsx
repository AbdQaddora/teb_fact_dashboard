import React from 'react'
import Style from './style'
import Logo from '../../../../components/tiny/Logo'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

interface IProps {
    toggleMenu: () => void,
    isMobileMenuOpen: boolean
}
const MobileMenuHeader = ({ toggleMenu, isMobileMenuOpen }: IProps) => {
    return (
        <Style>
            <button className='open_menu_btn' onClick={toggleMenu}>
                {isMobileMenuOpen ? <AiOutlineClose /> : <BiDotsVerticalRounded />}

            </button>
            <Logo className='mobile_logo' />
        </Style>
    )
}

export default MobileMenuHeader