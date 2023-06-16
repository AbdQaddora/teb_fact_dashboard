import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { store, type AppDispatch, type RootState } from '../store'
import DermatologistsAPI from '../../api/dermatologists';
import { IDermatologist } from '../../types/Dermatologist';
import { DermatologistProfileStatus } from '../../types/enums';
import { toast } from 'react-toastify';

// Define a type for the slice state
interface IDermatologistsSlice {
    dermatologists: IDermatologistColumns[],
    dermatologist: IDermatologist,
    updated_at: string,
    pageSize: number,
    activePage: number,
    isLoading: boolean,
    totalDermatologistsCount: number,
}

const initialDermatologist: IDermatologist = {
    profile_image: "",
    date_of_birth: "",
    email: "",
    gender: "male",
    university_gpa: 90,
    graduation_year: 2023,
    id: "",
    maximum_no_of_open_consultations: 5,
    full_name: "",
    mobile_number: "",
    rating: 5,
    university_certificate_image: "",
    profile_status: DermatologistProfileStatus.Authorized
}

// Define the initial state using that type
const initialState: IDermatologistsSlice = {
    dermatologists: [],
    dermatologist: initialDermatologist,
    updated_at: `${Date.now()}`,
    activePage: 1,
    isLoading: false,
    pageSize: 10,
    totalDermatologistsCount: 0
}

export const dermatologistsSlice = createSlice({
    name: 'dermatologists',
    initialState,
    reducers: {
        _setDermatologist: (state, action: PayloadAction<{ dermatologist: IDermatologist }>) => {
            state.dermatologist = action.payload.dermatologist
        },
        _setDermatologists: (state, action: PayloadAction<{ dermatologists: IDermatologistColumns[], totalDermatologistsCount: number }>) => {
            state.dermatologists = [...action.payload.dermatologists];
            state.totalDermatologistsCount = action.payload.totalDermatologistsCount
            state.updated_at = `${Date.now()}`
        },
        _deleteDermatologist: (state, action: PayloadAction<{ id: string }>) => {
            state.dermatologists = state.dermatologists.filter(dermatologist => dermatologist.id !== action.payload.id);
            state.updated_at = `${Date.now()}`
        },
        _flipDermatologistActiveState: (state, action: PayloadAction<{ id: string }>) => {
            state.dermatologist.profile_status = state.dermatologist.profile_status === DermatologistProfileStatus.Authorized ? DermatologistProfileStatus.NotAuthorized : DermatologistProfileStatus.Authorized;
            state.dermatologists = state.dermatologists = state.dermatologists.map(dermatologist => {
                if (dermatologist.id === action.payload.id) {
                    dermatologist.profile_status = dermatologist.profile_status === DermatologistProfileStatus.Authorized ? DermatologistProfileStatus.NotAuthorized : DermatologistProfileStatus.Authorized;
                }
                return dermatologist;
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
    _setDermatologist,
    _deleteDermatologist,
    _flipDermatologistActiveState,
    _setDermatologists,
    _startLoading,
    _endLoading,
    _setActivePage,
    _setPageSize
} = dermatologistsSlice.actions

// selectors can use the imported `RootState` type
export const selectDermatologists = (state: RootState) => state.dermatologists

// custom reducers
export const getDermatologists = () => (dispatch: AppDispatch) => {
    const { activePage, pageSize } = store.getState().dermatologists;
    dispatch(_startLoading());
    DermatologistsAPI.getDermatologists(activePage, pageSize)
        .then((res) => {
            dispatch(_setDermatologists({
                dermatologists: res?.data as IDermatologistColumns[],
                totalDermatologistsCount: res?.totalDermatologistsCount
            }))
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            dispatch(_endLoading())
        })
}

export const searchInDermatologists = (query: string) => (dispatch: AppDispatch) => {
    const { activePage, pageSize } = store.getState().dermatologists;

    DermatologistsAPI.searchInDermatologists(activePage, pageSize, query)
        .then((res) => {
            dispatch(_setDermatologists({
                dermatologists: res?.data as IDermatologistColumns[],
                totalDermatologistsCount: res?.totalDermatologistsCount
            }))
        }).catch((error) => {
            console.log(error)
        })
}

export const getDermatologistBtId = (id: string) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO GET THE DOCTOR
    DermatologistsAPI.getDermatologistById(id)
        .then((res) => {
            if (res?.status) {
                dispatch(_setDermatologist({
                    dermatologist: res?.data as IDermatologist
                }))
            }
        }).catch((error) => {
            console.log(error)
        })
}

export const updateDermatologist = (new_dermatologist: IDermatologist) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO UPDATE THE DOCTOR
    DermatologistsAPI.updateDermatologist(new_dermatologist)
        .then((res) => {
            if (res?.status) {
                dispatch(_setDermatologist({
                    dermatologist: res?.data as IDermatologist
                }))
                toast.success("Dermatologist have been updated successfully")
            } else {
                toast.error(res?.message)
            }
        }).catch((error) => {
            toast.error(error.message)
        })
}

export const deleteDermatologist = (id: string) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO DELETE THE DOCTOR
    DermatologistsAPI.deleteDermatologist(id)
        .then((res) => {
            if (res?.status) {
                dispatch(_deleteDermatologist({ id }))
                toast.success("Dermatologist have been deleted successfully")
            } else {
                toast.error(res?.message)
            }
        }).catch((error) => {
            toast.error(error.message)
        })
}

export const flipDermatologistActiveState = (id: string) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO FLIP THE DOCTOR ACTIVE STATE
    const { dermatologist } = store.getState().dermatologists;

    DermatologistsAPI.updateDermatologist({
        ...dermatologist,
        profile_status: dermatologist.profile_status === DermatologistProfileStatus.Authorized ? DermatologistProfileStatus.NotAuthorized : DermatologistProfileStatus.Authorized
    }).then((res) => {
        if (res?.status) {
            dispatch(_flipDermatologistActiveState({ id }))
        } else {
            toast.error(res?.message)
        }
    }).catch((error) => {
        toast.error(error.message)
    })
}


export const nextPage = () => (dispatch: AppDispatch) => {
    const { activePage, pageSize, totalDermatologistsCount } = store.getState().dermatologists;

    if (activePage + 1 <= Math.ceil(totalDermatologistsCount / pageSize)) {
        dispatch(_setActivePage(activePage + 1));
    }
}

export const previousPage = () => (dispatch: AppDispatch) => {
    const { activePage } = store.getState().dermatologists;
    dispatch(_setActivePage(activePage - 1 > 0 ? activePage - 1 : activePage));
}

export const setPageSize = (newPageSize: number) => (dispatch: AppDispatch) => {
    const { totalDermatologistsCount } = store.getState().dermatologists;
    if (Math.floor(totalDermatologistsCount / newPageSize) > 0) {
        dispatch(_setActivePage(Math.floor(totalDermatologistsCount / newPageSize)));
    } else {
        dispatch(_setActivePage(1));
    }

    dispatch(_setPageSize(newPageSize));
}


export default dermatologistsSlice.reducer