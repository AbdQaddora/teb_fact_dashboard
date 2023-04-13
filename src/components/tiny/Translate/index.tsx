import React from 'react'
import { useTranslation } from 'react-i18next'
interface IProps {
    TranslateKey: string
}
const Translate = ({ TranslateKey }: IProps) => {
    const { t } = useTranslation()
    return (
        <>{t(TranslateKey)}</>
    )
}

export default Translate