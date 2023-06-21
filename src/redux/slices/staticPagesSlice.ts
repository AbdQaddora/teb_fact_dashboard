import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { store, type AppDispatch, type RootState } from '../store'

// mock
import PagesAPI from '../../api/staticPages';
import { toast } from 'react-toastify';

// Define a type for the slice state
interface IStaticPagesSlice {
    page: IStaticPage,
    is_initial_data_fetched: boolean,
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
    totalPagesCount: number,
    activePage: number,
    pageSize: number,
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
    is_initial_data_fetched: false,
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
    totalPagesCount: 0,
    activePage: 1,
    pageSize: 10,
}

export const staticPagesSlice = createSlice({
    name: 'staticPages',
    initialState,
    reducers: {
        selectPageById: (state, action: PayloadAction<{ id: string }>) => {
            state.page = state.pages.find(page => page.id === action.payload.id) || state.page
        },
        _setPage: (state, action: PayloadAction<{ page: IStaticPage }>) => {
            state.page = action.payload.page || state.page;
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
            state.is_initial_data_fetched = true;
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
        },
        _setActivePage: (state, action: PayloadAction<number>) => {
            state.activePage = action.payload;
        },
        _setPageSize: (state, action: PayloadAction<number>) => {
            state.pageSize = action.payload;
        },
    },
})

export const {
    selectPageById,
} = staticPagesSlice.actions

const { _addPage,
    _deletePage,
    _setPage,
    _setAllPages,
    _updatePage,
    _updatePageActiveState,
    _endPageRequest,
    _endPagesRequest,
    _setPageRequestError,
    _setPagesRequestError,
    _startPageRequest,
    _startPagesRequest,
    _updateSelectedPage,
    _setActivePage,
    _setPageSize,
} = staticPagesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectStaticPages = (state: RootState) => state.staticPages

// custom reducers
export const getAllPages = () => (dispatch: AppDispatch) => {
    const { activePage, pageSize } = store.getState().patients;

    // TODO: API CALL TO GET ALL PAGES
    dispatch(_startPagesRequest())
    PagesAPI.getPages(activePage, pageSize)
        .then((res) => {
            if (res?.status) {
                dispatch(_setAllPages({ pages: res.data, totalPagesCount: res.totalPagesCount }));
            } else {
                dispatch(_setPagesRequestError({ error: res?.message }))
            }
        }).catch((error) => {
            dispatch(_setPagesRequestError({ error: error?.message }))
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
                dispatch(_setPageRequestError({ error: res?.message }))
            }
        }).catch((error) => {
            dispatch(_setPageRequestError({ error: error?.message }))
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
                dispatch(_setPageRequestError({ error: res?.message }))
            }
        }).catch((error) => {
            dispatch(_setPageRequestError({ error: error?.message }))
        })
        .finally(() => {
            dispatch(_endPageRequest())
        })

}

export const deleteStaticPage = (id: string) => (dispatch: AppDispatch) => {
    const { activePage, pageSize, totalPagesCount } = store.getState().staticPages;

    dispatch(_startPagesRequest())
    PagesAPI.deletePage(id)
        .then((res) => {
            if (res?.status) {
                dispatch(_deletePage({ id }))
                if (totalPagesCount % pageSize === 1 && activePage === Math.ceil(totalPagesCount / pageSize)) {
                    dispatch(previousPage())
                }
            } else {
                dispatch(_setPagesRequestError({ error: res?.message }))
            }
        }).catch((error) => {
            dispatch(_setPagesRequestError({ error: error?.message }))
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
                dispatch(_setPagesRequestError({ error: res?.message }))
            }
        }).catch((error) => {
            dispatch(_setPagesRequestError({ error: error?.message }))
        })
}

export const getPageByID = (id: string) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO FLIP THE PAGE ACTIVE STATE
    dispatch(_startPageRequest())
    PagesAPI.getPageByID(id)
        .then((res) => {
            if (res?.status) {
                dispatch(_setPage({ page: res.data }))
            } else {
                dispatch(_setPageRequestError({ error: res?.message }))
            }
        }).catch((error) => {
            dispatch(_setPageRequestError({ error: error?.message }))
        })
        .finally(() => {
            dispatch(_endPageRequest())
        })
}

export const nextPage = () => (dispatch: AppDispatch) => {
    const { activePage, pageSize, totalPagesCount } = store.getState().staticPages;
    if (activePage + 1 <= Math.ceil(totalPagesCount / pageSize)) {
        dispatch(_setActivePage(activePage + 1));
        dispatch(getAllPages());
    }
}

export const previousPage = () => (dispatch: AppDispatch) => {
    const { activePage } = store.getState().staticPages;
    const new_active_page = activePage - 1 > 0 ? activePage - 1 : activePage;
    if (new_active_page !== activePage) {
        dispatch(_setActivePage(new_active_page));
        dispatch(getAllPages());
    }
}

export const setPageSize = (newPageSize: number) => (dispatch: AppDispatch) => {
    const { totalPagesCount, activePage } = store.getState().staticPages;
    const new_active_page = Math.floor(totalPagesCount / newPageSize) > 0 ? Math.floor(totalPagesCount / newPageSize) : 1;
    if (new_active_page !== activePage) {
        dispatch(_setActivePage(new_active_page));
    }
    dispatch(_setPageSize(newPageSize));
    dispatch(getAllPages());
}

export const STATIC_PAGES_ACTIONS = {
    addStaticPage,
    updateStaticPage,
    getAllPages,
    deleteStaticPage,
    updatePageActiveState,
    nextPage,
    previousPage,
    setPageSize
}


export default staticPagesSlice.reducer