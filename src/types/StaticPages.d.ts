type TStaticPageInSingleLang = {
    title: string,
    description: string
}

interface IStaticPage {
    id: string,
    slug: string,
    is_active: boolean,
    icon: string,
    ar: TStaticPageInSingleLang,
    en: TStaticPageInSingleLang,
}