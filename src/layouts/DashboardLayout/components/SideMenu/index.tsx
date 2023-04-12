import React from 'react'
// components
import Logo from '../../../../components/tiny/Logo'
import SideMenuLink from '../SideMenuLink'
import Style from './style'
// icons
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdSettings, MdDashboard } from 'react-icons/md';
import { HiDocumentReport } from 'react-icons/hi';
import { FaUserNurse } from 'react-icons/fa';
// Translation
import { useTranslation } from 'react-i18next';
import LanguageController from '../LanguageController';
import { useLang } from '../../../../context/LanguageContext';
interface IProps {
    isMobileMenuOpen: boolean
}

const SideMenu = ({ isMobileMenuOpen }: IProps) => {
    const { t } = useTranslation('', { keyPrefix: "sideMenu" });
    const { lang } = useLang();
    return (
        <Style isMobileMenuOpen={isMobileMenuOpen} dir={lang.direction}>
            <Logo width='80%' margin="1rem 0 1.5rem" className='large_screen_logo' />
            <SideMenuLink
                icon={<MdDashboard />}
                text={t("dashboard")}
                to='HOME'
            />
            <SideMenuLink
                icon={<BsFillPeopleFill />}
                text={t("consultations")}
                to='CONSULTATIONS'
            />
            <SideMenuLink
                icon={<FaUserNurse />}
                text={t("doctors")}
                to='DOCTORS'
            />
            <SideMenuLink
                icon={<HiDocumentReport />}
                text={t("tickets")}
                to='REPORTS'
            />
            <SideMenuLink
                icon={<MdSettings />}
                text={t("settings")}
                to='SETTINGS'
            />

            <LanguageController />
        </Style>
    )
}

export default SideMenu