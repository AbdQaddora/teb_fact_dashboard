import React, { useState } from 'react'
import Style from './style'
import { H5 } from '../../../../components/tiny/Typography/style'
import LangToggle from '../LangToggle'
import TextEditor from '../../../../components/TextEditor'
import Button from '../../../../components/tiny/Button'
interface IProps {
    title: string,
    btnText: string,
    arabicContent: string,
    englishContent: string,
    onUpdate: () => void,
    setArabicContent: (val: string) => void,
    setEnglishContent: (val: string) => void,
}
const SettingsTextEditorSection = ({
    title,
    btnText,
    arabicContent,
    englishContent,
    onUpdate,
    setArabicContent,
    setEnglishContent
}: IProps) => {
    const [activeLang, setActiveLang] = useState<"ar" | "en">("en");

    return (
        <Style>
            <div className="head">
                <H5>{title}</H5>
                <LangToggle
                    value={activeLang}
                    onToggle={() => setActiveLang(prev => prev === 'ar' ? "en" : "ar")} />
            </div>
            {activeLang === 'ar' && <TextEditor
                lang='ar'
                value={arabicContent}
                onChange={(val) => setArabicContent(val)}
            />}
            {activeLang === 'en' && <TextEditor
                lang='en'
                value={englishContent}
                onChange={(val) => setEnglishContent(val)}
            />}
            <Button
                onClick={onUpdate}
                fullWidth
                className='update_btn'
                margin='0.5rem 0'
            >{btnText}</Button>
        </Style>)
}

export default SettingsTextEditorSection