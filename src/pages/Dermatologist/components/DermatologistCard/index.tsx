import React, { useState } from 'react'
import Style from './style'
import { Body2, H5 } from '../../../../components/tiny/Typography/style'
import Button from '../../../../components/tiny/Button'
import Rating from '../../../../components/tiny/Rating'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { flipDermatologistActiveState, selectDermatologists } from '../../../../redux/slices/dermatologistsSlice'
import { DermatologistProfileStatus } from '../../../../types/enums'


const DermatologistCard = () => {
    const { t } = useTranslation("", { keyPrefix: "dermatologist" });
    const { dermatologist } = useAppSelector(selectDermatologists);
    const dispatch = useAppDispatch();

    const handelActivateFlip = () => {
        dispatch(flipDermatologistActiveState(dermatologist.id));
    }


    return (
        <Style>
            <img src={dermatologist.profile_image} alt="avatar" className="avatar" />
            <H5>{dermatologist.full_name}</H5>
            <div className='dermatologist_secondary_info'>
                <Rating rating={dermatologist.rating} />
            </div>
            <Button
                onClick={handelActivateFlip}
                fullWidth
                color={dermatologist.profile_status === DermatologistProfileStatus.Authorized ? 'danger' : "secondary"}
            >{dermatologist.profile_status === DermatologistProfileStatus.Authorized ? t("deactivate") : t("activate")}</Button>
        </Style>
    )
}

export default DermatologistCard