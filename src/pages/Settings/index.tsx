import React, { useState } from 'react'
import Privacy from './sections/Privacy';
import AboutUs from './sections/AboutUs';
import DoctorContract from './sections/DoctorContract';
import StaticPageSection from './components/StaticPageSection';

const Settings = () => {
  return (
    <div>
      <StaticPageSection
        ar={{
          content: "<h1 style='text-align: center;'>من نحن</h1>",
          title: "من نحن"
        }}
        en={{
          content: "<h1 style='text-align: center;'>About us</h1>",
          title: "About us"
        }}
        isActive={true}
        saveChanges={() => { }}
        toggleActive={() => { }}
        deletePage={() => { }}
      />
      <StaticPageSection
        ar={{
          content: "<h1 style='text-align: center;'>سياسة الخصوصية</h1>",
          title: "سياسة الخصوصية"
        }}
        en={{
          content: "<h1 style='text-align: center;'>privacy policy</h1>",
          title: "privacy policy"
        }}
        isActive={true}
        saveChanges={() => { }}
        toggleActive={() => { }}
        deletePage={() => { }}
      />
      <StaticPageSection
        ar={{
          content: "<h1 style='text-align: center;'>الشروط والأحكام</h1>",
          title: "الشروط والأحكام"
        }}
        en={{
          content: "<h1 style='text-align: center;'>Terms and Conditions</h1>",
          title: "Terms and Conditions"
        }}
        isActive={true}
        saveChanges={() => { }}
        toggleActive={() => { }}
        deletePage={() => { }}
      />
    </div>
  )
}

export default Settings