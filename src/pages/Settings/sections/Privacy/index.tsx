import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SettingsTextEditorSection from '../../components/SettingsTextEditorSection'

const Privacy = () => {
    const [arabicPrivacy, setArabicPrivacy] = useState("");
    const [englishPrivacy, setEnglishPrivacy] = useState("");
    const { t } = useTranslation("", { keyPrefix: "settings.privacy" })

    return (
        <SettingsTextEditorSection
            arabicContent={arabicPrivacy}
            englishContent={englishPrivacy}
            btnText={t("btn")}
            title={t("title")}
            onUpdate={() => { }}
            setArabicContent={(val) => { setArabicPrivacy(val) }}
            setEnglishContent={(val) => { setEnglishPrivacy(val) }}
        />
    )
}

export default Privacy