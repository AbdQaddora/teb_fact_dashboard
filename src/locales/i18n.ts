import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/en.json';
import ar from './ar/ar.json';
const resources = {
    en: {
        translation: en,
    },
    ar: {
        translation: ar,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem(import.meta.env.REACT_APP_TEB_FACT_DASHBOARD_LOCAL_STORAGE_LANGUAGE_KEY as string) ?
            JSON.parse(localStorage.getItem(import.meta.env.REACT_APP_TEB_FACT_DASHBOARD_LOCAL_STORAGE_LANGUAGE_KEY as string) || "").langName : 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
