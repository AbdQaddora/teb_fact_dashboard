import React, { useState } from 'react'
import Style from './style'
import Button from '../../tiny/Button'
import { useTranslation } from 'react-i18next'
import Modal from '../../Modal'
import RemoveHistoryQuestionsModal from '../../modals/RemoveHistoryQuestionsModal'
import HistoryQuestionModal from '../../modals/HistoryQuestionModal'

interface IProps {
    data: IQuestion
}

const HistoryQuestionsActions = ({ data }: IProps) => {
    const { t } = useTranslation();
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    return (
        <>
            {isRemoveModalOpen && <Modal close={() => setIsRemoveModalOpen(false)}>
                <RemoveHistoryQuestionsModal
                    close={() => setIsRemoveModalOpen(false)}
                    id={data.id}
                />
            </Modal>}
            {isUpdateModalOpen && <Modal close={() => setIsUpdateModalOpen(false)}>
                <HistoryQuestionModal
                    close={() => setIsUpdateModalOpen(false)}
                    data={data}
                />
            </Modal>}
            <Style>
                <Button onClick={() => setIsUpdateModalOpen(true)}>{t("components.table_actions.edit")}</Button>
                <Button
                    color='danger'
                    onClick={() => setIsRemoveModalOpen(true)}
                >{t("components.table_actions.remove")}</Button>
            </Style>
        </>
    )
}

export default HistoryQuestionsActions