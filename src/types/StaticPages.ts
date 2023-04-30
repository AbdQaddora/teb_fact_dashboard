export type TStaticPageInSingleLang = {
    title: string,
    description: string
}

export interface IStaticPage {
    id: string,
    slug?: string,
    is_active: boolean,
    icon: string,
    ar: TStaticPageInSingleLang,
    en: TStaticPageInSingleLang,
}