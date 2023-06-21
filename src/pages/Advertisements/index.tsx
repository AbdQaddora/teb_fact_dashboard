import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ADVERTISEMENTS_ACTIONS, selectAdvertisements } from '../../redux/slices/advertisementsSlice';
import Modal from '../../components/Modal';
import Style from './style';
import { H4 } from '../../components/tiny/Typography/style';
import TableSection from '../../components/TableSection';
import ADVERTISEMENT_COLUMNS from '../../constants/advertisement';
import AdvertisementModal from '../../components/modals/AdvertisementModal';

const Advertisements = () => {
    const [isNewAdvertisementsModalOpen, setIsNewAdvertisementsModalOpen] = useState(false);
    const { t } = useTranslation("", { keyPrefix: "advertisements" });

    const { advertisements,
        updated_at,
        totalAdvertisementsCount,
        activePage,
        isLoading,
        pageSize,
        is_initial_data_fetched } = useAppSelector(selectAdvertisements);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!is_initial_data_fetched) {
            dispatch(ADVERTISEMENTS_ACTIONS.getAdvertisements());
        }
    }, [])

    return (
        <>
            {isNewAdvertisementsModalOpen && <Modal close={() => setIsNewAdvertisementsModalOpen(false)}>
                <AdvertisementModal
                    close={() => setIsNewAdvertisementsModalOpen(false)}
                />
            </Modal>}
            <Style>
                <div>
                    <H4 margin='1rem 0 2rem'>{t("title")}</H4>
                    <TableSection
                        updated_at={updated_at}
                        addNew={() => { setIsNewAdvertisementsModalOpen(true) }}
                        title={t("subTitle")}
                        columns={ADVERTISEMENT_COLUMNS}
                        data={advertisements}
                        isLoading={isLoading}
                        pagination={{
                            activePage,
                            pageSize,
                            next: () => dispatch(ADVERTISEMENTS_ACTIONS.nextPage()),
                            previous: () => dispatch(ADVERTISEMENTS_ACTIONS.previousPage()),
                            setPageSize: (page_size) => dispatch(ADVERTISEMENTS_ACTIONS.setPageSize(page_size)),
                            totalCount: totalAdvertisementsCount
                        }}
                    />
                </div>
            </Style >
        </>
    )
}

export default Advertisements