import React, { useEffect } from 'react'
import Style from './style'
import DoctorCard from './components/DoctorCard'
import DoctorForm from './components/DoctorForm'

// mock
import mock_certificate from '../../assets/images/mock_certificate.jpg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getDoctorBtId, selectDoctors } from '../../redux/slices/doctorsSlice';
import { Body1 } from '../../components/tiny/Typography/style';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const Doctor = () => {
  const { doctor } = useAppSelector(selectDoctors);
  const dispatch = useAppDispatch();

  const { t } = useTranslation("", { keyPrefix: "doctor" });
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDoctorBtId(id as string))
  }, [])

  return <Style>
    <div className="doctor_info_section">
      <DoctorCard />
      <DoctorForm />
    </div>

    {doctor.certificate ? <img src={mock_certificate}
      alt="certificate"
      className="certificate" /> : <div className='no_certificate'>
      <Body1>{t("doctor")} {doctor.name} {t("no_certificate_yet")} ☹</Body1>
    </div>}

  </Style>
}

export default Doctor