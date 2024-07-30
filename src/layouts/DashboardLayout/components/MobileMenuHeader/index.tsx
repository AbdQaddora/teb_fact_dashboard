import React from 'react'
import Style from './style'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
// logo
import logo from "../../../../assets/images/logo.svg"
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
            <img src={logo} alt="logo" className='mobile_logo' />
        </Style>
    )
}

export default MobileMenuHeader