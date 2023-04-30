import React, { useState } from 'react'
import Style from './style'
import Button from '../../tiny/Button'
import { Link } from 'react-router-dom'
import { PATHS } from '../../../router'
import { useTranslation } from 'react-i18next'
import Modal from '../../Modal'
import RemoveDoctorModal from '../../modals/RemoveDoctorModal'
import { IStaticPage } from '../../../types/StaticPages'

interface IProps {
    data: IStaticPage
}

const StaticPagesTableActions = ({ data }: IProps) => {
    const { t } = useTranslation();
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

    return (
        <>
            {isRemoveModalOpen && <Modal close={() => setIsRemoveModalOpen(false)}>
                {/* <RemoveDoctorModal
                    close={() => setIsRemoveModalOpen(false)}
                    {...{ id, name, avatar }}
                /> */}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, fugiat.
            </Modal>}
            <Style>
                <Link to={`${PATHS.STATIC_PAGE}/${data.id}`}>
                    <Button>{t("components.table_actions.edit")}</Button>
                </Link>
                <Button
                    color='danger'
                    onClick={() => setIsRemoveModalOpen(true)}
                >{t(t("components.table_actions.remove"))}</Button>
            </Style>
        </>
    )
}

export default StaticPagesTableActions