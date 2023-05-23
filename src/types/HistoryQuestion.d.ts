enum QuestionsTypes {
    Textarea = 0,
    Radio = 1,
    TrueFalse = 2,
    Checkbox = 3,
}

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