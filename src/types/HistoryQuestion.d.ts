type TQuestionInSingleLang = {
    question: string,
    options?: string[]
}

interface IQuestion {
    id: string,
    type: QuestionsTypes,
    ar: TQuestionInSingleLang,
    en: TQuestionInSingleLang,
}