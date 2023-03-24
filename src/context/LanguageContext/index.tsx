import React, { createContext, ReactNode, useContext } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import i18n from '../../locales/i18n';
import Style from './style';

type TLangs = 'ar' | "en";
type TDirection = "ltr" | 'rtl';

interface ILang {
    langName: TLangs;
    direction: TDirection;
}

interface ILanguageContext {
    lang: ILang;
    changeLang: (lang: TLangs) => void
}

const langsArray: ILang[] = [
    { direction: 'ltr', langName: "en" },
    { direction: 'rtl', langName: "ar" }
]



const LanguageContext = createContext<ILanguageContext>({
    lang: localStorage.getItem(import.meta.env.REACT_APP_TEB_FACT_DASHBOARD_LOCAL_STORAGE_LANGUAGE_KEY as string) ?
        JSON.parse(localStorage.getItem(import.meta.env.REACT_APP_TEB_FACT_DASHBOARD_LOCAL_STORAGE_LANGUAGE_KEY as string) || "") : langsArray[0],
    changeLang: () => { }
})

export const useLang = () => useContext(LanguageContext)

const LanguageContextProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useLocalStorage<ILang>(import.meta.env.REACT_APP_TEB_FACT_DASHBOARD_LOCAL_STORAGE_LANGUAGE_KEY as string, langsArray[0]);

    const changeLang = (lang: TLangs) => {
        i18n.changeLanguage(lang);
        setLang(langsArray.find(el => el.langName === lang) || langsArray[0])
    }

    return (
        <LanguageContext.Provider value={{
            changeLang,
            lang
        }}>
            <Style className={lang.direction}>
                {children}
            </Style>
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider