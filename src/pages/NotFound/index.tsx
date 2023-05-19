import React from 'react'
import Style from './style'
import { Body1, H2 } from '../../components/tiny/Typography/style'
import Button from '../../components/tiny/Button'
import { useTranslation } from 'react-i18next'

// images
import NotFoundImage from '../../assets/images/404.svg'
import CustomLink from '../../components/tiny/CustomLink'
const NotFound = () => {
  const { t } = useTranslation("", { keyPrefix: "not_found" });
  return (
    <Style>
      <H2>{t("title")}</H2>
      <Body1>{t("sub_title")}</Body1>
      <img className="not_found" src={NotFoundImage} alt="not found" />
      <CustomLink to='HOME'>
        <Button>{t("back_btn")}</Button>
      </CustomLink>
    </Style>
  )
}

export default NotFound