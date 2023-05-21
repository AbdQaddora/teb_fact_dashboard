import React, { useState } from 'react'
import Style from './style'
import DoctorCard from './components/DoctorCard'
import DoctorForm from './components/DoctorForm'

// mock
import mock_certificate from '../../assets/images/mock_certificate.jpg'
const Doctor = () => {
  return <Style>
    <div className="doctor_info_section">
      <DoctorCard />
      <DoctorForm />
    </div>

    <img src={mock_certificate}
      alt="certificate"
      className="certificate" />
  </Style>
}

export default Doctor