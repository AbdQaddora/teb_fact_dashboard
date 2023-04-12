import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SettingsTextEditorSection from '../../components/SettingsTextEditorSection'

const DoctorContract = () => {
    const [arabicDoctorContract, setArabicDoctorContract] = useState("");
    const [englishDoctorContract, setEnglishDoctorContract] = useState("");
    const { t } = useTranslation("", { keyPrefix: "settings.doctorContract" })

    return (
        <SettingsTextEditorSection
            arabicContent={arabicDoctorContract}
            englishContent={englishDoctorContract}
            btnText={t("btn")}
            title={t("title")}
            onUpdate={() => { }}
            setArabicContent={(val) => { setArabicDoctorContract(val) }}
            setEnglishContent={(val) => { setEnglishDoctorContract(val) }}
        />
    )
}

export default DoctorContract