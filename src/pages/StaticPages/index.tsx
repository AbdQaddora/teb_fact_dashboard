import React, { useState } from 'react'
import StaticPageSection from './components/StaticPageSection';
import Style from './style';
import Button from '../../components/tiny/Button';
import { useTranslation } from 'react-i18next';
import CustomLink from '../../components/tiny/CustomLink';

const Settings = () => {
  const { t } = useTranslation("", { keyPrefix: "static_pages" })
  return (
    <Style>
      <CustomLink to='NEW_STATIC_PAGES'>
        <Button size='large'>
          {t("add_new_page")}
        </Button>
      </CustomLink>
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
    </Style >
  )
}

export default Settings