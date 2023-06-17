import React from 'react'
import Style from './style'
import ChangeTheme from './components/ChangeTheme'
import Contact from './components/Contact'
import ResetPassword from './components/ResetPassword'
import { H4 } from '../../components/tiny/Typography/style'
import { useTranslation } from 'react-i18next'

const Settings = () => {
    const { t } = useTranslation("", { keyPrefix: "settings" });

    return (
        <Style>
            <H4>{t("title")}</H4>
            <ChangeTheme />
            <Contact />
            <ResetPassword />
        </Style>
    )
}

export default Settings