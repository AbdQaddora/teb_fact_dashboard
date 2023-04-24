import React from 'react'
import Style from './style'
import { H5 } from '../../components/tiny/Typography/style'
import Input from '../../components/tiny/Input'
import TextEditor from '../../components/TextEditor'
import Button from '../../components/tiny/Button'
import ImageInput from '../../components/tiny/ImageInput'
import { useTranslation } from 'react-i18next'

const NewStaticPage = () => {
    const { t } = useTranslation("", { keyPrefix: "new_static_page" })
    return (
        <Style>
            <section>
                <H5>{t("page_icon")}</H5>
                <ImageInput
                    onChange={() => { }}
                    width='150px'
                    height='150px'
                    text={t("page_icon_input") || ""}
                    margin='8px 0'
                />
            </section>
            <section>
                <H5>{t("english_page")}</H5>
                <Input
                    value=''
                    margin='0.5rem 0'
                    fullWidth
                    onChange={() => { }}
                    placeholder={t("english_title_placeholder") || ""}
                />
                <TextEditor
                    onChange={() => { }}
                    value=''
                />
            </section>
            <section>
                <H5>{t("arabic_page")}</H5>
                <Input
                    margin='0.5rem 0'
                    value=''
                    fullWidth
                    onChange={() => { }}
                    placeholder={t("arabic_title_placeholder") || ""}
                />
                <TextEditor
                    onChange={() => { }}
                    value=''
                />
            </section>
            <Button fullWidth size='large' color='primary'>Create page</Button>
        </Style>
    )
}

export default NewStaticPage