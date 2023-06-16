import React, { useEffect } from 'react'
import Style from './style';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getPatientBtId, selectPatients } from '../../redux/slices/patientsSlice';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import PatientCard from './components/PatientCard';
import PatientForm from './components/PatientForm';

const Patient = () => {
    const dispatch = useAppDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getPatientBtId(id as string))
    }, [])

    return (
        <Style>
            <PatientCard />
            <PatientForm />
        </Style>
    )
}

export default Patient