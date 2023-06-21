import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { store, type AppDispatch, type RootState } from '../store'
import { toast } from 'react-toastify';
import PatientsAPI from '../../api/patients';

// Define a type for the slice state
interface IPatientsSlice {
    patients: IPatientColumns[],
    is_initial_data_fetched: boolean,
    patient: IPatient,
    updated_at: string,
    pageSize: number,
    activePage: number,
    isLoading: boolean,
    totalPatientsCount: number,
}

const initialPatient: IPatient = {
    id: "",
    full_name: "",
    email: "",
    date_of_birth: "",
    email_verified_at: "",
    created_at: "",
    gender: "male",
    mobile_number: "",
    profile_image: "",
    open_consultations: 0,
    consultations_count: 0,
}

// Define the initial state using that type
const initialState: IPatientsSlice = {
    is_initial_data_fetched: false,
    patients: [],
    patient: initialPatient,
    updated_at: `${Date.now()}`,
    activePage: 1,
    isLoading: false,
    pageSize: 10,
    totalPatientsCount: 0
}

export const PatientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        _setPatient: (state, action: PayloadAction<{ patient: IPatient }>) => {
            state.patient = action.payload.patient
        },
        _setPatients: (state, action: PayloadAction<{ patients: IPatientColumns[], totalPatientsCount: number }>) => {
            state.patients = [...action.payload.patients];
            state.totalPatientsCount = action.payload.totalPatientsCount
            state.is_initial_data_fetched = true;
            state.updated_at = `${Date.now()}`
        },
        _deletePatient: (state, action: PayloadAction<{ id: string }>) => {
            state.patients = state.patients.filter(patient => patient.id !== action.payload.id);
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
    _setPatient,
    _deletePatient,
    _setPatients,
    _startLoading,
    _endLoading,
    _setActivePage,
    _setPageSize
} = PatientsSlice.actions

// selectors can use the imported `RootState` type
export const selectPatients = (state: RootState) => state.patients

// custom reducers
export const getPatients = () => (dispatch: AppDispatch) => {
    const { activePage, pageSize } = store.getState().patients;
    dispatch(_startLoading());
    PatientsAPI.getPatients(activePage, pageSize)
        .then((res) => {
            dispatch(_setPatients({
                patients: res?.data as IPatientColumns[],
                totalPatientsCount: res?.totalPatientsCount
            }))
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            dispatch(_endLoading())
        })
}

export const searchInPatients = (query: string) => (dispatch: AppDispatch) => {
    const { activePage, pageSize } = store.getState().patients;

    PatientsAPI.searchInPatients(activePage, pageSize, query)
        .then((res) => {
            dispatch(_setPatients({
                patients: res?.data as IPatientColumns[],
                totalPatientsCount: res?.totalPatientsCount
            }))
        }).catch((error) => {
            console.log(error)
        })
}

export const getPatientBtId = (id: string) => (dispatch: AppDispatch) => {
    PatientsAPI.getPatientById(id)
        .then((res) => {
            if (res?.status) {
                dispatch(_setPatient({
                    patient: res?.data as IPatient
                }))
            }
        }).catch((error) => {
            console.log(error)
        })
}

export const updatePatient = (new_patient: IPatient) => (dispatch: AppDispatch) => {
    PatientsAPI.updatePatient(new_patient)
        .then((res) => {
            if (res?.status) {
                dispatch(_setPatient({
                    patient: res?.data as IPatient
                }))
                toast.success("patient have been updated successfully")
            } else {
                toast.error(res?.message)
            }
        }).catch((error) => {
            toast.error(error.message)
        })
}

export const deletePatient = (id: string) => (dispatch: AppDispatch) => {
    const { activePage, pageSize, totalPatientsCount } = store.getState().patients;

    PatientsAPI.deletePatient(id)
        .then((res) => {
            if (res?.status) {
                dispatch(_deletePatient({ id }))
                toast.success("patient have been deleted successfully")
                if (totalPatientsCount % pageSize === 1 && activePage === Math.ceil(totalPatientsCount / pageSize)) {
                    dispatch(previousPage())
                }
            } else {
                toast.error(res?.message)
            }
        }).catch((error: any) => {
            toast.error(error.message)
        })
}


export const nextPage = () => (dispatch: AppDispatch) => {
    const { activePage, pageSize, totalPatientsCount } = store.getState().patients;
    if (activePage + 1 <= Math.ceil(totalPatientsCount / pageSize)) {
        dispatch(_setActivePage(activePage + 1));
        dispatch(getPatients());
    }
}

export const previousPage = () => (dispatch: AppDispatch) => {
    const { activePage } = store.getState().patients;
    const new_active_page = activePage - 1 > 0 ? activePage - 1 : activePage;
    if (new_active_page !== activePage) {
        dispatch(_setActivePage(new_active_page));
        dispatch(getPatients());
    }
}

export const setPageSize = (newPageSize: number) => (dispatch: AppDispatch) => {
    const { totalPatientsCount, activePage } = store.getState().patients;
    const new_active_page = Math.floor(totalPatientsCount / newPageSize) > 0 ? Math.floor(totalPatientsCount / newPageSize) : 1;
    if (new_active_page !== activePage) {
        dispatch(_setActivePage(new_active_page));
    }
    dispatch(_setPageSize(newPageSize));
    dispatch(getPatients());
}

export const PATIENTS_ACTIONS = {
    getPatients,
    getPatientBtId,
    deletePatient,
    updatePatient,
    searchInPatients,
    nextPage,
    previousPage,
    setPageSize
}


export default PatientsSlice.reducer