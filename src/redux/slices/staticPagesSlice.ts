import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '../store'
import { IStaticPage } from '../../types/StaticPages';

// mock
import allPagesMock from '../../mock/static_pages.json';

// Define a type for the slice state
interface IStaticPagesSlice {
    pages: IStaticPage[],
    updated_at: string,
    is_initial_data_fetched: boolean
}

// Define the initial state using that type
const initialState: IStaticPagesSlice = {
    pages: [],
    updated_at: `${Date.now()}`,
    is_initial_data_fetched: false
}

export const staticPagesSlice = createSlice({
    name: 'staticPages',
    initialState,
    reducers: {
        addPage_local: (state, action: PayloadAction<{ page: IStaticPage }>) => {
            state.pages = [action.payload.page, ...state.pages];
            state.updated_at = `${Date.now()}`
        },
        setAllPages_local: (state, action: PayloadAction<{ pages: IStaticPage[] }>) => {
            state.pages = [...action.payload.pages];
            state.updated_at = `${Date.now()}`
            state.is_initial_data_fetched = true
        },
        deletePage_local: (state, action: PayloadAction<{ id: string }>) => {
            state.pages = state.pages.filter(page => page.id !== action.payload.id);
            state.updated_at = `${Date.now()}`
        },
        updatePage_local: (state, action: PayloadAction<{ new_page: IStaticPage }>) => {
            state.pages = state.pages.map(page => {
                if (page.id === action.payload.new_page.id) {
                    return action.payload.new_page;
                }
                return page;
            });
            state.updated_at = `${Date.now()}`
        },
        flipPageActiveState_local: (state, action: PayloadAction<{ id: string }>) => {
            state.pages = state.pages = state.pages.map(page => {
                if (page.id === action.payload.id) {
                    page.is_active = !page.is_active;
                }
                return page;
            });
            state.updated_at = `${Date.now()}`
        },
    },
})

export const {
    addPage_local,
    deletePage_local,
    setAllPages_local,
    updatePage_local,
    flipPageActiveState_local,
} = staticPagesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectStaticPages = (state: RootState) => state.staticPages

// custom reducers
export const getAllPages = (is_initial_data_fetched: boolean) => (dispatch: AppDispatch) => {
    if (!is_initial_data_fetched) {
        // TODO: API CALL TO GET ALL PAGES
        dispatch(setAllPages_local({ pages: allPagesMock }))
    }
}

export const addStaticPage = (page: IStaticPage) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO ADD THE PAGE
    dispatch(addPage_local({ page }))
}

export const updateStaticPage = (new_page: IStaticPage) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO UPDATE THE PAGE
    console.log({ new_page })
    dispatch(updatePage_local({ new_page }))
}

export const deleteStaticPage = (id: string) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO DELETE THE PAGE
    dispatch(deletePage_local({ id }))
}

export const flipPageActiveState = (id: string) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO FLIP THE PAGE ACTIVE STATE
    dispatch(flipPageActiveState_local({ id }))
}


export default staticPagesSlice.reducer