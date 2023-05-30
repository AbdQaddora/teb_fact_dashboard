import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '../store'

// mock
import PagesAPI from '../../api/staticPages';
import { toast } from 'react-toastify';

// Define a type for the slice state
interface IStaticPagesSlice {
    page: IStaticPage,
    page_requests_state: {
        loading: boolean,
        error: string
    }
    pages: IStaticPage[],
    pages_requests_state: {
        loading: boolean,
        error: string
    }
    updated_at: string,
    totalPagesCount: number
}

const defaultPageValues: IStaticPage = {
    ar: {
        title: "",
        description: ""
    },
    en: {
        title: "",
        description: ""
    },
    icon: "",
    id: "",
    status: true,
    slug: ""
}
// Define the initial state using that type
const initialState: IStaticPagesSlice = {
    page: defaultPageValues,
    page_requests_state: {
        error: "",
        loading: false,
    },
    pages: [],
    pages_requests_state: {
        error: "",
        loading: false,
    },
    updated_at: `${Date.now()}`,
    totalPagesCount: 0
}

export const staticPagesSlice = createSlice({
    name: 'staticPages',
    initialState,
    reducers: {
        selectPageById: (state, action: PayloadAction<{ id: string }>) => {
            state.page = state.pages.find(page => page.id === action.payload.id) || state.page
        },
        _updateSelectedPage: (state, action: PayloadAction<{ new_page: IStaticPage }>) => {
            state.page = action.payload.new_page
            state.updated_at = `${Date.now()}`
        },
        _startPageRequest: (state) => {
            state.page_requests_state.loading = true;
            state.page_requests_state.error = "";
        },
        _endPageRequest: (state) => {
            state.page_requests_state.loading = false;
        },
        _setPageRequestError: (state, action: PayloadAction<{ error: string }>) => {
            state.page_requests_state.error = action.payload.error;
        },

        _setAllPages: (state, action: PayloadAction<{ pages: IStaticPage[], totalPagesCount: number }>) => {
            state.pages = [...action.payload.pages];
            state.totalPagesCount = action.payload.totalPagesCount;
            state.updated_at = `${Date.now()}`
        },
        _addPage: (state, action: PayloadAction<{ page: IStaticPage }>) => {
            state.pages = [action.payload.page, ...state.pages];
            state.totalPagesCount = state.totalPagesCount + 1;
            state.updated_at = `${Date.now()}`
        },
        _deletePage: (state, action: PayloadAction<{ id: string }>) => {
            state.pages = state.pages.filter(page => page.id !== action.payload.id);
            state.totalPagesCount = state.totalPagesCount - 1;
            state.updated_at = `${Date.now()}`
        },
        _updatePage: (state, action: PayloadAction<{ new_page: IStaticPage }>) => {
            state.pages = state.pages.map(page => {
                if (page.id === action.payload.new_page.id) {
                    return action.payload.new_page;
                }
                return page;
            });
            state.updated_at = `${Date.now()}`
        },
        _updatePageActiveState: (state, action: PayloadAction<{ id: string, status: boolean }>) => {
            state.pages = state.pages = state.pages.map(page => {
                if (page.id === action.payload.id) {
                    page.status = action.payload.status;
                }
                return page;
            });
            state.updated_at = `${Date.now()}`
        },
        _startPagesRequest: (state) => {
            state.pages_requests_state.loading = true;
            state.pages_requests_state.error = "";
        },
        _endPagesRequest: (state) => {
            state.pages_requests_state.loading = false;
        },
        _setPagesRequestError: (state, action: PayloadAction<{ error: string }>) => {
            state.pages_requests_state.error = action.payload.error;
        }
    },
})

export const {
    selectPageById,
} = staticPagesSlice.actions

const { _addPage,
    _deletePage,
    _setAllPages,
    _updatePage,
    _updatePageActiveState,
    _endPageRequest,
    _endPagesRequest,
    _setPageRequestError,
    _setPagesRequestError,
    _startPageRequest,
    _startPagesRequest,
    _updateSelectedPage
} = staticPagesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectStaticPages = (state: RootState) => state.staticPages

// custom reducers
export const getAllPages = (page: number, per_page: number) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO GET ALL PAGES
    dispatch(_startPagesRequest())
    PagesAPI.getPages(page, per_page)
        .then((res) => {
            if (res?.status) {
                dispatch(_setAllPages({ pages: res.data, totalPagesCount: res.totalPagesCount }));
            } else {
                dispatch(_setPagesRequestError(res?.message))
            }
        }).catch((error) => {
            dispatch(_setPagesRequestError(error?.message))
        })
        .finally(() => {
            dispatch(_endPagesRequest())
        })
}

export const addStaticPage = (page: IStaticPage, onResolve: () => void) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO ADD THE PAGE
    dispatch(_startPageRequest())
    PagesAPI.createPage(page)
        .then((res) => {
            if (res?.status) {
                dispatch(_addPage({ page }));
                onResolve();
            } else {
                dispatch(_setPageRequestError(res?.message))
            }
        }).catch((error) => {
            dispatch(_setPageRequestError(error?.message))
        })
        .finally(() => {
            dispatch(_endPageRequest())
        })
}

export const updateStaticPage = (new_page: IStaticPage, onResolve: () => void) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO UPDATE THE PAGE
    dispatch(_startPageRequest())
    PagesAPI.updatePage(new_page)
        .then((res) => {
            if (res?.status) {
                onResolve();
                dispatch(_updatePage({ new_page }))
                dispatch(_updateSelectedPage({ new_page }))
            } else {
                dispatch(_setPageRequestError(res?.message))
            }
        }).catch((error) => {
            dispatch(_setPageRequestError(error?.message))
        })
        .finally(() => {
            dispatch(_endPageRequest())
        })

}

export const deleteStaticPage = (id: string) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO DELETE THE PAGE
    dispatch(_startPagesRequest())
    PagesAPI.deletePage(id)
        .then((res) => {
            if (res?.status) {
                dispatch(_deletePage({ id }))
            } else {
                toast.error(res?.message)
                dispatch(_setPagesRequestError(res?.message))
            }
        }).catch((error) => {
            dispatch(_setPagesRequestError(error?.message))
        })
        .finally(() => {
            dispatch(_endPagesRequest())
        })
}

export const updatePageActiveState = (id: string, status: boolean) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO FLIP THE PAGE ACTIVE STATE
    PagesAPI.updatePageActiveState(id, status)
        .then((res) => {
            if (res?.status) {
                dispatch(_updatePageActiveState({ id, status }))
            } else {
                dispatch(_setPagesRequestError(res?.message))
            }
        }).catch((error) => {
            dispatch(_setPagesRequestError(error?.message))
        })
        .finally(() => {
            dispatch(_endPagesRequest())
        })

}


export default staticPagesSlice.reducer