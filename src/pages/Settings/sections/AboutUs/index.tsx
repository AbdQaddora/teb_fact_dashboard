import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SettingsTextEditorSection from '../../components/SettingsTextEditorSection'

const AboutUs = () => {
    const [arabicAboutUs, setArabicAboutUs] = useState("");
    const [englishAboutUs, setEnglishAboutUs] = useState("");
    const { t } = useTranslation("", { keyPrefix: "settings.aboutUs" })

    return (
        <SettingsTextEditorSection
            arabicContent={arabicAboutUs}
            englishContent={englishAboutUs}
            btnText={t("btn")}
            title={t("title")}
            onUpdate={() => { }}
            setArabicContent={(val) => { setArabicAboutUs(val) }}
            setEnglishContent={(val) => { setEnglishAboutUs(val) }}
        />
    )
}

export default AboutUs