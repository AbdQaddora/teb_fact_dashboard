import React from 'react'
import Style from './style'
import { H5 } from '../../../../components/tiny/Typography/style'
import Input from '../../../../components/tiny/Input'
import Button from '../../../../components/tiny/Button'
import { useTranslation } from 'react-i18next'

const DoctorForm = () => {
    const { t } = useTranslation("", { keyPrefix: "doctor" });

    return (
        <Style>
            <div className="head">
                <H5>{t("doctor")} / Adrian Stefan</H5>
            </div>
            <form className="form">
                <div className="grid">
                    <Input value='' placeholder={t("name") || ""} fullWidth />

                    <Input value='' placeholder={t("email") || ""} type='email' fullWidth />

                    <Input value='' placeholder={t("gender") || ""} type='email' fullWidth />

                    <Input value='' placeholder={t("phone") || ""} type='phone' fullWidth />

                    <Input value='' placeholder={t("date_of_birth") || ""} type='date' fullWidth className='date_input' />

                    <Input value='' placeholder={t("graduation_year") || ""} type='text' fullWidth />

                    <Input value='' placeholder={t("graduation_GPA") || ""} type='text' fullWidth />

                    <Input value='' placeholder={t("max_open_consultations") || ""} type='text' fullWidth />
                </div>
                <div className="submit_section">
                    <Button>{t('save')}</Button>
                </div>
            </form>
        </Style>
    )
}

export default DoctorForm