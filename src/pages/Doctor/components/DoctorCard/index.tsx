import React, { useState } from 'react'
import Style from './style'
import { Body2, H5 } from '../../../../components/tiny/Typography/style'
import Button from '../../../../components/tiny/Button'
import Rating from '../../../../components/tiny/Rating'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { flipDoctorActiveState, selectDoctors } from '../../../../redux/slices/doctorsSlice'


const DoctorCard = () => {
    const { t } = useTranslation("", { keyPrefix: "doctor" });
    const { doctor } = useAppSelector(selectDoctors);
    const dispatch = useAppDispatch();

    const handelActivateFlip = () => {
        dispatch(flipDoctorActiveState(doctor.id));
    }

    return (
        <Style>
            <img src={doctor.avatar} alt="avatar" className="avatar" />
            <H5>{doctor.name}</H5>
            <div className='doctor_secondary_info'>
                <Rating rating={doctor.rating} />
            </div>
            <Button
                onClick={handelActivateFlip}
                fullWidth
                color={doctor.isActive ? 'danger' : "secondary"}
            >{doctor.isActive ? t("deactivate") : t("activate")}</Button>
        </Style>
    )
}

export default DoctorCard