import React, { useState } from 'react'
import Style from './style'
import Button from '../../tiny/Button'

import { useTranslation } from 'react-i18next'
import Modal from '../../Modal'
import { useAppDispatch } from '../../../hooks/redux'
import AdvertisementModal from '../../modals/AdvertisementModal'
import RemoveAdvertisementModal from '../../modals/RemoveAdvertisementModal'
import { ADVERTISEMENTS_ACTIONS } from '../../../redux/slices/advertisementsSlice'

interface IProps {
    data: IAdvertisement
}

const AdvertisementsTableActions = ({ data }: IProps) => {
    const { t } = useTranslation();
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const dispatch = useAppDispatch();

    const onFlipState = () => {
        dispatch(ADVERTISEMENTS_ACTIONS.flipAdvertisementActiveState(data.id))
    }

    return (
        <>
            {isRemoveModalOpen && <Modal close={() => setIsRemoveModalOpen(false)}>
                <RemoveAdvertisementModal
                    advertisement={data}
                    close={() => setIsRemoveModalOpen(false)}
                />
            </Modal>}
            {isEditModalOpen && <Modal close={() => setIsEditModalOpen(false)}>
                <AdvertisementModal
                    data={data}
                    close={() => setIsEditModalOpen(false)}
                />
            </Modal>}
            <Style>
                <Button
                    onClick={() => setIsEditModalOpen(true)}
                >{t("components.table_actions.edit")}</Button>
                <Button
                    color={data.status ? 'danger' : 'secondary'} onClick={onFlipState}
                >{t(data.status ? 'dermatologist.deactivate' : 'dermatologist.activate')}</Button>
                <Button
                    color='danger'
                    onClick={() => setIsRemoveModalOpen(true)}
                >{t("components.table_actions.remove")}</Button>
            </Style>
        </>
    )
}

export default AdvertisementsTableActions