import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, RootState, store } from '../store'
import { IQuestion } from '../../types/HistoryQuestion';
import HistoryQuestionsAPI from '../../api/historyQuestions';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../hooks/redux';

// Define a type for the slice state
interface IHistoryQuestionsSlice {
    is_initial_data_fetched: boolean,
    questions: IQuestion[],
    updated_at: string,
    pageSize: number,
    activePage: number,
    isLoading: boolean,
    totalQuestionsCount: number,
}

// Define the initial state using that type
const initialState: IHistoryQuestionsSlice = {
    is_initial_data_fetched: false,
    questions: [],
    updated_at: `${Date.now()}`,
    pageSize: 10,
    activePage: 1,
    isLoading: false,
    totalQuestionsCount: 0,
}

export const historyQuestionsSlice = createSlice({
    name: 'historyQuestions',
    initialState,
    reducers: {
        _getQuestions: (state, action: PayloadAction<{ questions: IQuestion[], totalQuestionsCount: number }>) => {
            state.totalQuestionsCount = action.payload.totalQuestionsCount;
            state.questions = [...action.payload.questions];
            state.is_initial_data_fetched = true;
            state.updated_at = `${Date.now()}`;
        },
        _addQuestion: (state, action: PayloadAction<{ question: IQuestion }>) => {
            state.questions = [action.payload.question, ...state.questions];
            state.totalQuestionsCount = state.totalQuestionsCount + 1;
            state.updated_at = `${Date.now()}`
        },
        _deleteQuestion: (state, action: PayloadAction<{ id: string }>) => {
            state.totalQuestionsCount = state.totalQuestionsCount - 1;
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
        _startLoading: (state) => {
            state.isLoading = true;
        },
        _endLoading: (state) => {
            state.isLoading = false;
        },
        _setActivePage: (state, action: PayloadAction<number>) => {
            state.activePage = action.payload;
        },
        _setPageSize: (state, action: PayloadAction<number>) => {
            state.pageSize = action.payload;
        },
    },
})

const {
    _addQuestion,
    _deleteQuestion,
    _updateQuestion,
    _getQuestions,
    _setActivePage,
    _setPageSize,
    _startLoading,
    _endLoading,
} = historyQuestionsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectHistoryQuestions = (state: RootState) => state.historyQuestions

// custom reducers
export const getQuestions = () => (dispatch: AppDispatch) => {
    const { activePage, pageSize } = store.getState().historyQuestions;
    dispatch(_startLoading());
    HistoryQuestionsAPI.getQuestions(activePage, pageSize)
        .then((res) => {
            if (res?.status) {
                dispatch(_getQuestions({ questions: res?.data, totalQuestionsCount: res?.totalQuestionsCount }))
            }
        }).finally(() => dispatch(_endLoading()))
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
    const { activePage, pageSize, totalQuestionsCount } = store.getState().historyQuestions;

    HistoryQuestionsAPI.deleteQuestion(id)
        .then((res) => {
            if (res?.status) {
                if (totalQuestionsCount % pageSize === 1 && activePage === Math.ceil(totalQuestionsCount / pageSize)) {
                    dispatch(previousPage())
                }
                dispatch(_deleteQuestion({ id }));
                toast.success(res?.message);
            } else {
                toast.error(res?.message)
            }
        })
}

export const nextPage = () => (dispatch: AppDispatch) => {
    const { activePage, pageSize, totalQuestionsCount } = store.getState().historyQuestions;
    if (activePage + 1 <= Math.ceil(totalQuestionsCount / pageSize)) {
        dispatch(_setActivePage(activePage + 1));
        dispatch(getQuestions());
    }
}

export const previousPage = () => (dispatch: AppDispatch) => {
    const { activePage } = store.getState().historyQuestions;
    const new_active_page = activePage - 1 > 0 ? activePage - 1 : activePage;
    if (new_active_page !== activePage) {
        dispatch(_setActivePage(new_active_page));
        dispatch(getQuestions());
    }
}

export const setPageSize = (newPageSize: number) => (dispatch: AppDispatch) => {
    const { totalQuestionsCount, activePage } = store.getState().historyQuestions;
    const new_active_page = Math.floor(totalQuestionsCount / newPageSize) > 0 ? Math.floor(totalQuestionsCount / newPageSize) : 1;
    if (new_active_page !== activePage) {
        dispatch(_setActivePage(new_active_page));
    }
    dispatch(_setPageSize(newPageSize));
    dispatch(getQuestions());
}

export const HISTORY_QUESTIONS_ACTIONS = {
    getQuestions,
    addQuestion,
    updateQuestion,
    deleteQuestion,
    nextPage,
    previousPage,
    setPageSize,
}

export default historyQuestionsSlice.reducer