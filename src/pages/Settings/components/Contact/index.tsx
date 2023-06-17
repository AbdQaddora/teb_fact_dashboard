import React, { useCallback, useState, useEffect } from 'react'
import Style from './style'
import Input from '../../../../components/tiny/Input'
import { H5 } from '../../../../components/tiny/Typography/style'
import Button from '../../../../components/tiny/Button'
import ContactInfoSchema from '../../../../validation/contact'
import { toast } from 'react-toastify'
import ContactAPI from '../../../../api/contact'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation("", { keyPrefix: "settings.contact" });

  const [contactInfo, setContactInfo] = useState<IContactInfo>({
    email: "",
    facebook: "",
    instagram: "",
    mobile_number: "",
    website: "",
    whatsapp: "",
    twitter: ""
  })

  const handelChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ContactInfoSchema.validate(contactInfo)
      .then(() => {
        ContactAPI.updateContactInfo(contactInfo)
          .then((res) => {
            if (res?.status) {
              toast.success(res.message)
            } else {
              toast.error(res?.message)
            }
          })
      }).catch((error) => {
        toast.error(t("errors." + error.message));
      })
  }

  useEffect(() => {
    ContactAPI.getContactInfo()
      .then((res) => {
        if (res?.status) {
          setContactInfo(res.data)
        }
      })
  }, [])


  return (
    <Style className='settings_section'>
      <H5 margin='0 0 1rem'>{t("title")}:</H5>
      <form onSubmit={handelSubmit}>
        <div className="grid">
          <Input
            value={contactInfo.mobile_number}
            name="mobile_number"
            onChange={handelChange}
            fullWidth
            placeholder={t("mobile_number_placeholder") as string}
          />
          <Input
            value={contactInfo.whatsapp}
            name="whatsapp"
            onChange={handelChange}
            fullWidth
            placeholder={t("whatsapp_placeholder") as string}
          />
          <Input
            value={contactInfo.email}
            name="email"
            onChange={handelChange}
            fullWidth
            placeholder={t("email_placeholder") as string}
          />
          <Input
            value={contactInfo.facebook}
            name="facebook"
            onChange={handelChange}
            fullWidth
            placeholder={t("facebook_placeholder") as string}
          />
          <Input
            value={contactInfo.twitter}
            name="twitter"
            onChange={handelChange}
            fullWidth
            placeholder={t("twitter_placeholder") as string}
          />
          <Input
            value={contactInfo.instagram}
            name="instagram"
            onChange={handelChange}
            fullWidth
            placeholder={t("instagram_placeholder") as string}
          />
          <Input
            value={contactInfo.website}
            name="website"
            onChange={handelChange}
            fullWidth
            placeholder={t("website_placeholder") as string}
          />
        </div>
        <Button margin='0.5rem 0 0' fullWidth>Save Changes</Button>
      </form>
    </Style>
  )
}

export default Contact