import React from 'react'
import Style from './style'
import ConsultationType from '../../../types/ConsultationType'
import { useTranslation } from 'react-i18next'

interface IProps {
    type: ConsultationType
}
const ConsultationTypeBadge = ({ type }: IProps) => {
    const { t } = useTranslation("", { keyPrefix: "components.consultation_type_badge" })

    return (
        <Style className={type}>
            {t(type)}
        </Style>
    )
}

export default ConsultationTypeBadge