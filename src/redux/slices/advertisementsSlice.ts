import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { store, type AppDispatch, type RootState } from '../store'
import { toast } from 'react-toastify';
import AdvertisementsAPI from '../../api/advertisements';
import { bool } from 'yup';

// Define a type for the slice state
interface IAdvertisementsSlice {
    advertisements: IAdvertisement[],
    is_initial_data_fetched: boolean,
    updated_at: string,
    pageSize: number,
    activePage: number,
    isLoading: boolean,
    totalAdvertisementsCount: number,
}

// Define the initial state using that type
const initialState: IAdvertisementsSlice = {
    advertisements: [],
    is_initial_data_fetched: false,
    updated_at: `${Date.now()}`,
    activePage: 1,
    isLoading: false,
    pageSize: 10,
    totalAdvertisementsCount: 0
}

export const advertisementsSlice = createSlice({
    name: 'advertisements',
    initialState,
    reducers: {
        _setAdvertisements: (state, action: PayloadAction<{ advertisements: IAdvertisement[], totalAdvertisementsCount: number }>) => {
            state.advertisements = [...action.payload.advertisements];
            state.totalAdvertisementsCount = action.payload.totalAdvertisementsCount
            state.is_initial_data_fetched = true;
            state.updated_at = `${Date.now()}`
        },
        _addNewAdvertisement: (state, action: PayloadAction<{ advertisement: IAdvertisement }>) => {
            state.advertisements = [...state.advertisements, action.payload.advertisement];
            state.totalAdvertisementsCount = state.totalAdvertisementsCount + 1
            state.updated_at = `${Date.now()}`
        },
        _updateAdvertisement: (state, action: PayloadAction<{ advertisement: IAdvertisement }>) => {
            state.advertisements = state.advertisements.map(el => {
                if (el.id === action.payload.advertisement.id) {
                    return action.payload.advertisement;
                }
                return el;
            })
            state.updated_at = `${Date.now()}`
        },
        _deleteAdvertisement: (state, action: PayloadAction<{ id: string }>) => {
            state.advertisements = state.advertisements.filter(advertisement => advertisement.id !== action.payload.id);
            state.updated_at = `${Date.now()}`
        },
        _flipAdvertisementActiveState: (state, action: PayloadAction<{ id: string }>) => {
            state.advertisements = state.advertisements = state.advertisements.map(advertisement => {
                if (advertisement.id === action.payload.id) {
                    advertisement.status = !advertisement.status;
                }
                return advertisement;
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

export const {
    _setAdvertisements,
    _addNewAdvertisement,
    _deleteAdvertisement,
    _updateAdvertisement,
    _flipAdvertisementActiveState,
    _startLoading,
    _endLoading,
    _setActivePage,
    _setPageSize
} = advertisementsSlice.actions

// selectors can use the imported `RootState` type
export const selectAdvertisements = (state: RootState) => state.advertisements

// custom reducers
export const getAdvertisements = () => (dispatch: AppDispatch) => {
    const { activePage, pageSize } = store.getState().advertisements;
    dispatch(_startLoading());
    AdvertisementsAPI.getAdvertisements(activePage, pageSize)
        .then((res) => {
            dispatch(_setAdvertisements({
                advertisements: res?.data as IAdvertisement[],
                totalAdvertisementsCount: res?.totalAdvertisementsCount
            }))
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            dispatch(_endLoading())
        })
}

export const addNewAdvertisement = (advertisement: IAdvertisement) => (dispatch: AppDispatch) => {
    AdvertisementsAPI.createNewAdvertisement(advertisement)
        .then((res) => {
            if (res?.status) {
                dispatch(_addNewAdvertisement({ advertisement }))
                toast.success(res?.message)
            } else {
                toast.error(res?.message)
            }
        }).catch((error) => {
            toast.error(error.message)
        })
}

export const updateAdvertisement = (new_advertisement: IAdvertisement) => (dispatch: AppDispatch) => {
    AdvertisementsAPI.updateAdvertisement(new_advertisement)
        .then((res) => {
            if (res?.status) {
                dispatch(_updateAdvertisement({
                    advertisement: new_advertisement
                }))
                toast.success(res?.message)
            } else {
                toast.error(res?.message)
            }
        }).catch((error) => {
            toast.error(error.message)
        })
}

export const deleteAdvertisement = (id: string) => (dispatch: AppDispatch) => {
    const { activePage, pageSize, totalAdvertisementsCount } = store.getState().advertisements;

    AdvertisementsAPI.deleteAdvertisement(id)
        .then((res) => {
            if (res?.status) {
                toast.success(res?.message);
                dispatch(_deleteAdvertisement({ id }));
                if (totalAdvertisementsCount % pageSize === 1 && activePage === Math.ceil(totalAdvertisementsCount / pageSize)) {
                    dispatch(previousPage())
                }
            } else {
                toast.error(res?.message)
            }
        }).catch((error) => {
            toast.error(error.message)
        })
}

export const flipAdvertisementActiveState = (id: string) => (dispatch: AppDispatch) => {
    const { advertisements } = store.getState().advertisements;
    const advertisement = advertisements.find((el) => el.id === id) as IAdvertisement;

    AdvertisementsAPI.updateAdvertisement({
        ...advertisement,
        status: !advertisement?.status
    }).then((res) => {
        if (res?.status) {
            dispatch(_flipAdvertisementActiveState({ id }))
        } else {
            toast.error(res?.message)
        }
    }).catch((error) => {
        toast.error(error.message)
    })
}
export const nextPage = () => (dispatch: AppDispatch) => {
    const { activePage, pageSize, totalAdvertisementsCount } = store.getState().advertisements;
    if (activePage + 1 <= Math.ceil(totalAdvertisementsCount / pageSize)) {
        dispatch(_setActivePage(activePage + 1));
        dispatch(getAdvertisements());
    }
}

export const previousPage = () => (dispatch: AppDispatch) => {
    const { activePage } = store.getState().advertisements;
    const new_active_page = activePage - 1 > 0 ? activePage - 1 : activePage;
    if (new_active_page !== activePage) {
        dispatch(_setActivePage(new_active_page));
        dispatch(getAdvertisements());
    }
}

export const setPageSize = (newPageSize: number) => (dispatch: AppDispatch) => {
    const { totalAdvertisementsCount, activePage } = store.getState().advertisements;
    const new_active_page = Math.floor(totalAdvertisementsCount / newPageSize) > 0 ? Math.floor(totalAdvertisementsCount / newPageSize) : 1;
    if (new_active_page !== activePage) {
        dispatch(_setActivePage(new_active_page));
    }
    dispatch(_setPageSize(newPageSize));
    dispatch(getAdvertisements());
}

export const ADVERTISEMENTS_ACTIONS = {
    getAdvertisements,
    updateAdvertisement,
    addNewAdvertisement,
    deleteAdvertisement,
    flipAdvertisementActiveState,
    nextPage,
    previousPage,
    setPageSize
}

export default advertisementsSlice.reducer