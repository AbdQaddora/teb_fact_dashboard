import React, { useEffect, useState } from 'react'
import Style from './style'
// hooks
import { useLang } from '../../../../context/LanguageContext';
import { useTranslation } from 'react-i18next';
// icons
import { BiHide, BiShow } from 'react-icons/bi';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { Body1, H5, H6, Subtitle1 } from '../../../../components/tiny/Typography/style';
import TextEditor from '../../../../components/TextEditor';
import Button from '../../../../components/tiny/Button';
import Input from '../../../../components/tiny/Input';
import LangToggle from '../LangToggle';
import ImageInput from '../../../../components/tiny/ImageInput';

interface IProps {
    en: {
        title: string,
        content: string
    },
    ar: {
        title: string,
        content: string
    },
    isActive: boolean,
    toggleActive: () => void,
    saveChanges: () => void,
    deletePage: () => void,
}

const StaticPageSection = ({ en, ar, isActive, saveChanges, toggleActive, deletePage }: IProps) => {
    const [isSectionOpen, setIsSectionOpen] = useState(false);
    const [isActivePage, setIsActivePage] = useState(isActive);
    const [activeLang, setActiveLang] = useState<"en" | "ar">("en");
    // content
    const [arabicContent, setArabicContent] = useState(ar);
    const [englishContent, setEnglishContent] = useState(en);

    const { lang } = useLang();
    useEffect(() => {
        if (activeLang === 'ar') {
            setEnglishContent(prev => ({ ...prev, content: englishContent.content }))
        } else {
            setArabicContent(prev => ({ ...prev, content: arabicContent.content }))
        }
    }, [activeLang])

    const { t } = useTranslation("", { keyPrefix: "components.static_page_section" })
    return (
        <Style>
            <div className="head" onClick={() => { setIsSectionOpen(prev => !prev) }}>
                <div className="title">
                    {isSectionOpen ? <RiArrowUpSLine className="toggle_menu" />
                        : <RiArrowDownSLine className="toggle_menu" />}
                    <H6 className='head_title_text'>{{ ar, en }[lang.langName].title}</H6>
                </div>
                <div className="buttons">
                    <div className="toggle_button">
                        <Body1 className='lang_name'>
                            <span className='large_screens'>
                                {activeLang === 'ar' ?
                                    t("arabic") : t("english")}
                            </span>
                            <span className='small_screens'>
                                {activeLang === 'ar' ?
                                    t("arabic_small") : t("english_small")}
                            </span>
                        </Body1>
                        <LangToggle
                            onToggle={() => { setActiveLang(prev => prev === 'en' ? "ar" : "en") }}
                            value={activeLang}
                        />
                    </div>
                </div>
            </div>
            <div className={`body ${isSectionOpen ? "open" : "close"}`}>
                <div className="page_icon">
                    <Body1>{t("page_icon")}</Body1>
                    <ImageInput
                        onChange={() => { }}
                        width='60px'
                        height='60px'
                        text={`${t('icon')}`}
                    />
                </div>
                {activeLang === 'ar' ? <><Input
                    disabled={!isActivePage}
                    fullWidth
                    value={arabicContent.title}
                    onChange={(e) => {
                        setArabicContent(prev => ({
                            ...prev,
                            title: e.target.value
                        }))
                    }}
                    placeholder={t("title") || ""}
                    margin='1rem 0 0.5rem'
                />
                    <TextEditor
                        disabled={!isActivePage}
                        value={arabicContent.content}
                        onChange={(value) => {
                            setArabicContent(prev => ({
                                ...prev,
                                content: value
                            }))
                        }} />
                </> : <>
                    <Input
                        disabled={!isActivePage}
                        fullWidth
                        value={englishContent.title}
                        onChange={(e) => {
                            setEnglishContent(prev => ({
                                ...prev,
                                title: e.target.value
                            }))
                        }}
                        placeholder={t("title") || ""}
                        margin='1rem 0 0.5rem'
                    />
                    <TextEditor
                        disabled={!isActivePage}
                        value={englishContent.content}
                        onChange={(value) => {
                            setEnglishContent(prev => ({
                                ...prev,
                                content: value
                            }))
                        }} />
                </>}

                <div className="buttons">
                    <Button margin='0.5rem 0' onClick={saveChanges}>{t('save')}</Button>
                    <Button margin='0.5rem 0'>{t('cancel')}</Button>
                    <Button margin='0.5rem 0' color='danger'>{t('delete')}</Button>
                    <Button
                        color={isActivePage ? 'danger' : "secondary"}
                        className="activation_btn" onClick={(e) => {
                            setIsActivePage(prev => !prev);
                            toggleActive();
                            e.stopPropagation();
                        }}>
                        {!isActivePage ? <><BiShow className="icon" /> <span>{t("activate")}</span></> :
                            <><BiHide className="icon" /> <span>{t("deactivate")}</span></>}
                    </Button>
                </div>
            </div>
        </Style >
    )
}

export default StaticPageSection