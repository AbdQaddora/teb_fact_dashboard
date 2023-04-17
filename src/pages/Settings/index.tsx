import React, { useState } from 'react'
import Privacy from './sections/Privacy';
import AboutUs from './sections/AboutUs';
import DoctorContract from './sections/DoctorContract';
import StaticPageSection from './components/StaticPageSection';

const Settings = () => {
  return (
    <div>
      {/* <DoctorContract />
      <Privacy />
      <AboutUs /> */}
      <StaticPageSection
        ar={{
          content: "",
          title: "من نحن"
        }}
        en={{
          content: "",
          title: "About us"
        }}
        isActive={true}
        saveChanges={() => { }}
        toggleActive={() => { }}
      />
      <StaticPageSection
        ar={{
          content: "",
          title: "سياسة الخصوصية"
        }}
        en={{
          content: "",
          title: "About us"
        }}
        isActive={true}
        saveChanges={() => { }}
        toggleActive={() => { }}
      />
      <StaticPageSection
        ar={{
          content: "",
          title: "عقد الاطباء"
        }}
        en={{
          content: "",
          title: "About us"
        }}
        isActive={true}
        saveChanges={() => { }}
        toggleActive={() => { }}
      />
      <StaticPageSection
        ar={{
          content: "",
          title: "الشروط والاحكام"
        }}
        en={{
          content: "",
          title: "About us"
        }}
        isActive={true}
        saveChanges={() => { }}
        toggleActive={() => { }}
      />
    </div>
  )
}

export default Settings