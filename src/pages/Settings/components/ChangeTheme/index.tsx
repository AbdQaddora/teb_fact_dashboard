import React from 'react'
import Style from './style'
import { useTheme } from '../../../../context/ThemeContext';
import { H5 } from '../../../../components/tiny/Typography/style';
import { useTranslation } from 'react-i18next';

const ChangeTheme = () => {
  const { activeTheme, changeTheme } = useTheme();
  const { t } = useTranslation("", { keyPrefix: "settings.change_theme" })
  return (
    <Style className='settings_section'>
      <H5 margin='0 0 1rem'>{t("title")}:</H5>
      <div className="themes_buttons">
        <div
          onClick={() => { changeTheme('default') }}
          className={`theme_btn default ${activeTheme === "default" ? "active" : ""}`}
        ></div>
        <div
          onClick={() => { changeTheme('green') }}
          className={`theme_btn green ${activeTheme === "green" ? "active" : ""}`}
        ></div>
      </div>
    </Style>
  )
}

export default ChangeTheme