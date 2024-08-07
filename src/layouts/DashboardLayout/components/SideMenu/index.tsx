import React from 'react'
// components
import SideMenuLink from '../SideMenuLink'
import Style from './style'
// icons
import { BsFillPeopleFill, BsQuestionCircleFill } from 'react-icons/bs';
import { MdDashboard, MdSick, MdLogout } from 'react-icons/md';
import { AiFillFileText } from 'react-icons/ai';
import { BiMessageAltEdit } from 'react-icons/bi';
import { FaUserNurse } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { RiAdvertisementFill } from 'react-icons/ri';

// Translation
import { useTranslation } from 'react-i18next';
import LanguageController from '../LanguageController';
import { useLang } from '../../../../context/LanguageContext';
import { useAuth } from '../../../../context/AuthContext';

// logo
import logo from "../../../../assets/images/logo.svg"
interface IProps {
    isMobileMenuOpen: boolean;
    closeMobileMenu: () => void;
}

const SideMenu = ({ isMobileMenuOpen, closeMobileMenu }: IProps) => {
    const { t } = useTranslation('', { keyPrefix: "sideMenu" });
    const { lang } = useLang();
    const { logout } = useAuth();
    return (
        <Style isMobileMenuOpen={isMobileMenuOpen} dir={lang.direction}>
            <div>
                <img src={logo} alt="logo" className='large_screen_logo' />
                <SideMenuLink
                    onClick={closeMobileMenu}
                    icon={<MdDashboard />}
                    text={t("dashboard")}
                    to='HOME'
                />
                <SideMenuLink
                    onClick={closeMobileMenu}
                    icon={<BsFillPeopleFill />}
                    text={t("consultations")}
                    to='CONSULTATIONS'
                />
                <SideMenuLink
                    onClick={closeMobileMenu}
                    icon={<FaUserNurse />}
                    text={t("dermatologists")}
                    to='DOCTORS'
                />
                <SideMenuLink
                    onClick={closeMobileMenu}
                    icon={<MdSick />}
                    text={t("patients")}
                    to='PATIENTS'
                />
                <SideMenuLink
                    onClick={closeMobileMenu}
                    icon={<BiMessageAltEdit />}
                    text={t("tickets")}
                    to='TICKETS'
                />
                <SideMenuLink
                    onClick={closeMobileMenu}
                    icon={<RiAdvertisementFill />}
                    text={t("advertisements")}
                    to='ADVERTISEMENTS'
                />
                <SideMenuLink
                    onClick={closeMobileMenu}
                    icon={<AiFillFileText />}
                    text={t("static_pages")}
                    to='STATIC_PAGES'
                />
                <SideMenuLink
                    onClick={closeMobileMenu}
                    icon={<BsQuestionCircleFill />}
                    text={t("history_questions")}
                    to='HISTORY_QUESTIONS'
                />
                <SideMenuLink
                    onClick={closeMobileMenu}
                    icon={<IoMdSettings />}
                    text={t("settings")}
                    to='SETTINGS'
                />
                <LanguageController closeMobileMenu={closeMobileMenu} />
            </div>
            <SideMenuLink
                onClick={() => {
                    closeMobileMenu();
                    logout();
                }}
                icon={<MdLogout />}
                text={t("logout")}
                to='LOGIN'
            />
        </Style>
    )
}

export default SideMenu