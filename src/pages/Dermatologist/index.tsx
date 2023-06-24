import React, { useEffect } from 'react'
import Style from './style'
import DermatologistCard from './components/DermatologistCard'
import DermatologistForm from './components/DermatologistForm'

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getDermatologistBtId, selectDermatologists } from '../../redux/slices/dermatologistsSlice';
import { Body1 } from '../../components/tiny/Typography/style';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const Dermatologist = () => {
  const { dermatologist } = useAppSelector(selectDermatologists);
  const dispatch = useAppDispatch();

  const { t } = useTranslation("", { keyPrefix: "dermatologist" });
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDermatologistBtId(id as string))
  }, [])

  return <Style>
    <div className="dermatologist_info_section">
      <DermatologistCard />
      <DermatologistForm />
    </div>

    {dermatologist.university_certificate_image ? <img src={dermatologist.university_certificate_image}
      alt="certificate"
      className="certificate" /> : <div className='no_certificate'>
      <Body1>{t("dermatologist")} {dermatologist.full_name} {t("no_certificate_yet")} ☹</Body1>
    </div>}

  </Style>
}

export default Dermatologist