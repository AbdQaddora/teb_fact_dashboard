import React, { useEffect, useState } from 'react'
import Style from './style'
// hooks
import { useLang } from '../../../../context/LanguageContext';
import { useTranslation } from 'react-i18next';
// icons
import { BiHide, BiShow } from 'react-icons/bi';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { Body1, H5 } from '../../../../components/tiny/Typography/style';
import TextEditor from '../../../../components/TextEditor';
import Button from '../../../../components/tiny/Button';
import Input from '../../../../components/tiny/Input';
import LangToggle from '../LangToggle';

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
                    <H5>{{ ar, en }[lang.langName].title}</H5>
                </div>
                <div className="buttons">
                    <div className="toggle_button">
                        <Body1 className='lang_name'>{activeLang === 'ar' ? t("arabic") : t("english")}</Body1>
                        <LangToggle
                            onToggle={() => { setActiveLang(prev => prev === 'en' ? "ar" : "en") }}
                            value={activeLang}
                        />
                    </div>
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
            <div className={`body ${isSectionOpen ? "open" : "close"}`}>
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
                    placeholder='title'
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
                        placeholder='title'
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
                    <Button margin='0.5rem 0' color='danger'>{t('cancel')}</Button>
                    <Button margin='0.5rem 0' color='danger'>{t('delete')}</Button>
                </div>
            </div>
        </Style>
    )
}

export default StaticPageSection