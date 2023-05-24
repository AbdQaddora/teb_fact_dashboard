import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '../store'

// mock
import allDoctorsMock from '../../mock/doctors.json';

// Define a type for the slice state
interface IDoctorsSlice {
    doctors: IDoctor[],
    doctor: IDoctor,
    updated_at: string,
}

const initialDoctor: IDoctor = {
    avatar: "",
    date_of_birth: "",
    email: "",
    gender: "male",
    graduation_gpa: 90,
    graduation_year: 2023,
    id: "",
    isActive: false,
    max_open_consultations: 5,
    name: "",
    phone: "",
    rating: 5,
    certificate: ""
}

// Define the initial state using that type
const initialState: IDoctorsSlice = {
    doctors: [],
    doctor: initialDoctor,
    updated_at: `${Date.now()}`,
}

export const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        _addDoctor: (state, action: PayloadAction<{ doctor: IDoctor }>) => {
            state.doctors = [action.payload.doctor, ...state.doctors];
            state.updated_at = `${Date.now()}`
        },
        _setAllDoctors: (state, action: PayloadAction<{ doctors: IDoctor[] }>) => {
            state.doctors = [...action.payload.doctors];
            state.updated_at = `${Date.now()}`
        },
        _deleteDoctor: (state, action: PayloadAction<{ id: string }>) => {
            state.doctors = state.doctors.filter(doctor => doctor.id !== action.payload.id);
            state.doctor = state.doctor.id === action.payload.id ? initialDoctor : state.doctor
            state.updated_at = `${Date.now()}`
        },
        _setDoctor: (state, action: PayloadAction<{ doctor: IDoctor }>) => {
            state.doctor = action.payload.doctor;
        },
        _updateDoctor: (state, action: PayloadAction<{ new_doctor: IDoctor }>) => {
            state.doctors = state.doctors.map(doctor => {
                if (doctor.id === action.payload.new_doctor.id) {
                    return action.payload.new_doctor;
                }
                return doctor;
            });
            state.doctor = state.doctor.id === action.payload.new_doctor.id ? action.payload.new_doctor : state.doctor
            state.updated_at = `${Date.now()}`
        },
        _flipDoctorActiveState: (state, action: PayloadAction<{ id: string }>) => {
            state.doctors = state.doctors = state.doctors.map(doctor => {
                if (doctor.id === action.payload.id) {
                    doctor.isActive = !doctor.isActive;
                }
                return doctor;
            });

            state.doctor = state.doctor.id === action.payload.id ? {
                ...state.doctor,
                isActive: !state.doctor
            } : state.doctor;

            state.updated_at = `${Date.now()}`
        },
    },
})

export const {
    _addDoctor,
    _deleteDoctor,
    _flipDoctorActiveState,
    _setAllDoctors,
    _updateDoctor,
    _setDoctor
} = doctorsSlice.actions

// selectors can use the imported `RootState` type
export const selectDoctors = (state: RootState) => state.doctors

// custom reducers
export const getAllDoctors = () => (dispatch: AppDispatch) => {
    // TODO: API CALL TO GET ALL DOCTORS
    dispatch(_setAllDoctors({ doctors: allDoctorsMock as IDoctor[] }))
}

export const addDoctor = (doctor: IDoctor) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO ADD THE DOCTOR
    dispatch(_addDoctor({ doctor }))
}

export const getDoctorBtId = (id: string) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO GET THE DOCTOR
    dispatch(_setDoctor({
        doctor: {
            "id": "646c853ffc13sdsdasdae1eee753b1e",
            "isActive": true,
            "name": "Hasan",
            "avatar": "https://i.ibb.co/XYkxcph/Whats-App-Image-2023-05-24-at-19-30-54.jpg",
            "email": "hshamia18@gmail.com",
            "gender": "male",
            "phone": "00970599869275",
            "date_of_birth": "9/6/1991",
            "graduation_year": 2015,
            "graduation_gpa": 93.2,
            "max_open_consultations": 10,
            "certificate": "",
            "rating": 5
        }
    }))
}

export const updateDoctor = (new_doctor: IDoctor) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO UPDATE THE DOCTOR
    dispatch(_updateDoctor({ new_doctor }))
}

export const deleteDoctor = (id: string) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO DELETE THE DOCTOR
    dispatch(_deleteDoctor({ id }))
}

export const flipDoctorActiveState = (id: string) => (dispatch: AppDispatch) => {
    // TODO: API CALL TO FLIP THE DOCTOR ACTIVE STATE
    dispatch(_flipDoctorActiveState({ id }))
}


export default doctorsSlice.reducer