import React from 'react'
import Style from './style'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { PATHS } from '../../../router'
import { useTranslation } from 'react-i18next'

interface IProps {
    id: string,
    editBtnText: string,
    removeBtnText: string,
}

const DoctorsTableActions = ({ id, editBtnText, removeBtnText }: IProps) => {
    const { t } = useTranslation();
    return (
        <Style>
            <Link to={`${PATHS.DOCTOR}/${id}`}>
                <Button>{t(editBtnText)}</Button>
            </Link>
            <Button>{t(removeBtnText)}</Button>
        </Style>
    )
}

export default DoctorsTableActions