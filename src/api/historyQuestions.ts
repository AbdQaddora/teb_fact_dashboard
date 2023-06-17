import { IQuestion } from "../types/HistoryQuestion";
import api from "./config/axiosConfig"

const _parseQuestionWithOptions = (question: any) => {
    return {
        ...question,
        en: {
            question: question.en.question,
            options: question.en.options === '[]' ? null : JSON.parse(question.en.options)
        },
        ar: {
            question: question.ar.question,
            options: question.ar.options === '[]' ? null : JSON.parse(question.ar.options)
        }
    }

}

const getQuestions = async (page: number, per_page: number) => {
    try {
        const { data } = await api.get(`/admin/history-questions?per_page=${per_page}&page=${page}`);
        if (data.data) {
            return {
                status: true,
                data: data.data.map(_parseQuestionWithOptions),
                totalQuestionsCount: data.meta.total
            }
        } else {
            return {
                status: false,
                data: [],
                totalQuestionsCount: 0
            }
        }
    } catch (error: any) {
        if (error.name === "AxiosError") {
            return {
                status: false,
                message: error.response.data.message
            }
        }
    }
}

const createQuestion = async (question: IQuestion) => {
    try {
        const { data } = await api.post("/admin/history-questions", { ...question, id: null });
        if (data.status) {
            return {
                status: true,
                data: _parseQuestionWithOptions(data.data.question)
            }
        } else {
            return {
                status: false,
                message: "something went wrong"
            }
        }
    } catch (error: any) {
        if (error.name === "AxiosError") {
            return {
                status: false,
                message: error.response.data.message
            }
        }
    }
}

const updateQuestion = async (question: IQuestion) => {
    try {
        const { data } = await api.post(`/admin/history-questions/${question.id}`, { ...question, id: null });
        if (data.status) {
            return {
                status: true,
                data: _parseQuestionWithOptions(data.data.question)
            }
        } else {
            return {
                status: false,
                message: "something went wrong"
            }
        }
    } catch (error: any) {
        if (error.name === "AxiosError") {
            return {
                status: false,
                message: error.response.data.message
            }
        }
    }
}

const deleteQuestion = async (id: string) => {
    try {
        const { data } = await api.delete(`/admin/history-questions/${id}`);
        if (data.status) {
            return {
                status: true,
            }
        } else {
            return {
                status: false,
                message: "something went wrong"
            }
        }
    } catch (error: any) {
        if (error.name === "AxiosError") {
            return {
                status: false,
                message: error.response.data.message
            }
        }
    }
}

const HistoryQuestionsAPI = {
    getQuestions,
    createQuestion,
    deleteQuestion,
    updateQuestion
}

export default HistoryQuestionsAPI;