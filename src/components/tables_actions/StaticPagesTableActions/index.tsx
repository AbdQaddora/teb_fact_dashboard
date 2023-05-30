import React, { useState } from 'react'
import Style from './style'
import Button from '../../tiny/Button'
import { Link } from 'react-router-dom'
import { PATHS } from '../../../router'
import { useTranslation } from 'react-i18next'
import Modal from '../../Modal'
import RemoveStaticPageModal from '../../modals/RemoveStaticPageModal'
import { useAppDispatch } from '../../../hooks/redux'
import { selectPageById } from '../../../redux/slices/staticPagesSlice'

interface IProps {
    data: IStaticPage
}

const StaticPagesTableActions = ({ data }: IProps) => {
    const { t } = useTranslation();
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

    const dispatch = useAppDispatch();

    const onEdit = () => {
        dispatch(selectPageById({ id: data.id }))
    }
    return (
        <>
            {isRemoveModalOpen && <Modal close={() => setIsRemoveModalOpen(false)}>
                <RemoveStaticPageModal
                    id={data.id}
                    close={() => setIsRemoveModalOpen(false)}
                />
            </Modal>}
            <Style>
                <Link to={`${PATHS.STATIC_PAGE}/${data.id}`}>
                    <Button onClick={onEdit}>{t("components.table_actions.edit")}</Button>
                </Link>
                <Button
                    color='danger'
                    onClick={() => setIsRemoveModalOpen(true)}
                >{t("components.table_actions.remove")}</Button>
            </Style>
        </>
    )
}

export default StaticPagesTableActions