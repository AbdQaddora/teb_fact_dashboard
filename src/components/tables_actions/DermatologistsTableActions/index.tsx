import React, { useState } from 'react'
import Style from './style'
import Button from '../../tiny/Button'
import { Link, useParams } from 'react-router-dom'
import { PATHS } from '../../../router'
import { useTranslation } from 'react-i18next'
import Modal from '../../Modal'
import RemoveDermatologistModal from '../../modals/RemoveDermatologistModal'
import { useAppDispatch } from '../../../hooks/redux'

interface IProps {
    id: string,
    name: string,
    avatar: string,
}

const DermatologistsTableActions = ({ id, name, avatar }: IProps) => {
    const { t } = useTranslation();
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
    return (
        <>
            {isRemoveModalOpen && <Modal close={() => setIsRemoveModalOpen(false)}>
                <RemoveDermatologistModal
                    close={() => setIsRemoveModalOpen(false)}
                    {...{ id, name, avatar }}
                />
            </Modal>}
            <Style>
                <Link to={`${PATHS.DOCTOR}/${id}`}>
                    <Button>{t("components.table_actions.edit")}</Button>
                </Link>
                <Button
                    color='danger'
                    onClick={() => setIsRemoveModalOpen(true)}
                >{t("components.table_actions.remove")}</Button>
            </Style>
        </>
    )
}

export default DermatologistsTableActions