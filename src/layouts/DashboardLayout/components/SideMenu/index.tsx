import React from 'react'
// components
import Logo from '../../../../components/tiny/Logo'
import SideMenuLink from '../SideMenuLink'
import Style from './style'
// icons
import { BsFillPeopleFill, BsQuestionCircleFill } from 'react-icons/bs';
import { MdDashboard , MdSick } from 'react-icons/md';
import { AiFillFileText } from 'react-icons/ai';
import { BiMessageAltEdit } from 'react-icons/bi';
import { FaUserNurse } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

// Translation
import { useTranslation } from 'react-i18next';
import LanguageController from '../LanguageController';
import { useLang } from '../../../../context/LanguageContext';
interface IProps {
    isMobileMenuOpen: boolean;
    closeMobileMenu: () => void;
}

const SideMenu = ({ isMobileMenuOpen, closeMobileMenu }: IProps) => {
    const { t } = useTranslation('', { keyPrefix: "sideMenu" });
    const { lang } = useLang();
    return (
        <Style isMobileMenuOpen={isMobileMenuOpen} dir={lang.direction}>
            <Logo width='80%' margin="1rem 0 1.5rem" className='large_screen_logo' />
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
            <div className="divider"></div>
            <LanguageController closeMobileMenu={closeMobileMenu} />
        </Style>
    )
}

export default SideMenu