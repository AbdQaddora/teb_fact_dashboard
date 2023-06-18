import React, { useState, useCallback } from 'react'
import Style from './style'
import ImageInput from '../../tiny/ImageInput'
import Input from '../../tiny/Input'
import Button from '../../tiny/Button'
import { useAppDispatch } from '../../../hooks/redux'
import { AdvertisementsActions } from '../../../redux/slices/advertisementsSlice'
import { useTranslation } from 'react-i18next'
import AdvertisementSchema from '../../../validation/advertisement'
import { toast } from 'react-toastify'
interface IProps {
    close: () => void,
    data?: IAdvertisement
}
const AdvertisementModal = ({ close, data }: IProps) => {
    const { t } = useTranslation("", { keyPrefix: "modals.advertisement_modal" });
    const [advertisementData, setAdvertisementData] = useState<IAdvertisement>(data || {
        id: "",
        image: "",
        link: "",
        status: true
    });

    const dispatch = useAppDispatch();

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        AdvertisementSchema.validate(advertisementData)
            .then(() => {
                if (data) {
                    dispatch(AdvertisementsActions.updateAdvertisement(advertisementData))
                } else {
                    dispatch(AdvertisementsActions.addNewAdvertisement(advertisementData))
                }
                close();
            }).catch((error) => {
                toast.error(t("errors." + error.message))
            })
    }

    return (
        <Style>
            <form onSubmit={handelSubmit}>
                <ImageInput
                    onChange={(value) => {
                        setAdvertisementData(prev => ({ ...prev, image: value }))
                    }} value={advertisementData.image} width='100%' />
                <Input
                    margin='1rem 0'
                    placeholder={t("link_placeholder") as string}
                    fullWidth
                    value={advertisementData.link}
                    onChange={(e) => {
                        setAdvertisementData(prev => ({ ...prev, link: e.target.value }))
                    }}
                />
                <Button type="submit" fullWidth>{data ? t("save_btn") : t("add_btn")}</Button>
            </form>
        </Style>
    )
}

export default AdvertisementModal