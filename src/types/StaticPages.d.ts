type TStaticPageInSingleLang = {
    title: string,
    description: string
}

interface IStaticPage {
    id: string,
    slug: string,
    status: boolean,
    icon: string,
    ar: TStaticPageInSingleLang,
    en: TStaticPageInSingleLang,
}