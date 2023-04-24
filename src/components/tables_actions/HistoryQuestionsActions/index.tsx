import React, { useState } from 'react'
import Style from './style'
import Button from '../../tiny/Button'
import { Link } from 'react-router-dom'
import { PATHS } from '../../../router'
import { useTranslation } from 'react-i18next'
import Modal from '../../Modal'
import RemoveHistoryQuestionsModal from '../../modals/RemoveHistoryQuestionsModal'

interface IProps {
    id: string,
    editBtnText: string,
    removeBtnText: string,
}

const HistoryQuestionsActions = ({ id, editBtnText, removeBtnText }: IProps) => {
    const { t } = useTranslation();
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

    return (
        <>
            {isRemoveModalOpen && <Modal close={() => setIsRemoveModalOpen(false)}>
                <RemoveHistoryQuestionsModal
                    close={() => setIsRemoveModalOpen(false)}
                    id={id}
                />
            </Modal>}
            <Style>
                <Link to={`${PATHS.DOCTOR}/${id}`}>
                    <Button>{t(editBtnText)}</Button>
                </Link>
                <Button
                    color='danger'
                    onClick={() => setIsRemoveModalOpen(true)}
                >{t(removeBtnText)}</Button>
            </Style>
        </>
    )
}

export default HistoryQuestionsActions