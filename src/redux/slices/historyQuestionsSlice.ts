import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '../store'
import { IQuestion } from '../../types/HistoryQuestion';
import HistoryQuestionsAPI from '../../api/historyQuestions';
import { toast } from 'react-toastify';

// Define a type for the slice state
interface IHistoryQuestionsSlice {
    questions: IQuestion[],
    updated_at: string,
    totalQuestionsCount: number,
}

// Define the initial state using that type
const initialState: IHistoryQuestionsSlice = {
    questions: [],
    updated_at: `${Date.now()}`,
    totalQuestionsCount: 0,
}

export const historyQuestionsSlice = createSlice({
    name: 'historyQuestions',
    initialState,
    reducers: {
        _addQuestion: (state, action: PayloadAction<{ question: IQuestion }>) => {
            state.questions = [action.payload.question, ...state.questions];
            state.updated_at = `${Date.now()}`
        },
        _setQuestion: (state, action: PayloadAction<{ questions: IQuestion[] }>) => {
            state.questions = [...action.payload.questions];
            state.updated_at = `${Date.now()}`;
        },
        _setTotalQuestionsCount: (state, action: PayloadAction<{ totalQuestionsCount: number }>) => {
            state.totalQuestionsCount = action.payload.totalQuestionsCount;
            state.updated_at = `${Date.now()}`;
        },
        _deleteQuestion: (state, action: PayloadAction<{ id: string }>) => {
            state.questions = state.questions.filter(question => question.id !== action.payload.id);
            state.updated_at = `${Date.now()}`
        },
        _updateQuestion: (state, action: PayloadAction<{ new_question: IQuestion }>) => {
            state.questions = state.questions.map(question => {
                if (question.id === action.payload.new_question.id) {
                    return action.payload.new_question;
                }
                return question;
            });
            state.updated_at = `${Date.now()}`
        },
    },
})

const {
    _addQuestion,
    _deleteQuestion,
    _updateQuestion,
    _setQuestion,
    _setTotalQuestionsCount
} = historyQuestionsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectHistoryQuestions = (state: RootState) => state.historyQuestions

// custom reducers
export const getQuestions = (page: number, per_page: number) => (dispatch: AppDispatch) => {
    HistoryQuestionsAPI.getQuestions(page, per_page)
        .then((res) => {
            if (res?.status) {
                dispatch(_setQuestion({ questions: res?.data }))
                dispatch(_setTotalQuestionsCount({ totalQuestionsCount: res?.totalQuestionsCount }))
            }
        })
}

export const addQuestion = (question: IQuestion) => (dispatch: AppDispatch) => {
    HistoryQuestionsAPI.createQuestion(question)
        .then((res) => {
            if (res?.status) {
                dispatch(_addQuestion({ question: res?.data }))
            }
        })
}

export const updateQuestion = (new_question: IQuestion) => (dispatch: AppDispatch) => {
    HistoryQuestionsAPI.updateQuestion(new_question)
        .then((res) => {
            if (res?.status) {
                dispatch(_updateQuestion({ new_question: res?.data }))
            } else {
                toast.error(res?.message)
            }
        })
    dispatch(_updateQuestion({ new_question }))
}

export const deleteQuestion = (id: string) => (dispatch: AppDispatch) => {
    HistoryQuestionsAPI.deleteQuestion(id)
        .then((res) => {
            if (res?.status) {
                dispatch(_deleteQuestion({ id }))
            } else {
                toast.error(res?.message)
            }
        })
}

export default historyQuestionsSlice.reducer