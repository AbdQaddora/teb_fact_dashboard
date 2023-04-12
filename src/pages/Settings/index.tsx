import React, { useState } from 'react'
import Privacy from './sections/Privacy';
import AboutUs from './sections/AboutUs';
import DoctorContract from './sections/DoctorContract';

const Settings = () => {
  return (
    <div>
      <DoctorContract />
      <Privacy />
      <AboutUs />
    </div>
  )
}

export default Settings