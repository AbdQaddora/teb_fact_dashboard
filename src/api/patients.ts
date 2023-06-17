import api from "./config/axiosConfig"

const getPatients = async (page: number, per_page: number) => {
    try {
        const { data } = await api.get(`/admin/patients?per_page=${per_page}&page=${page}`);
        if (data.data) {
            return {
                status: true,
                data: data.data,
                totalPatientsCount: data.meta.total
            }
        } else {
            return {
                status: false,
                message: "requested data not exist",
                totalPatientsCount: 0
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

const searchInPatients = async (page: number, per_page: number, query: string) => {
    try {
        const { data } = await api.get(`/admin/patients?per_page=${per_page}&page=${page}&name=${query}`);
        if (data.data) {
            return {
                status: true,
                data: data.data,
                totalPatientsCount: data.meta.total
            }
        } else {
            return {
                status: false,
                message: "requested data not exist",
                totalPatientsCount: 0
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

const getPatientById = async (id: string) => {
    try {
        const { data } = await api.get(`/admin/patients/${id}`);
        if (data.status) {
            return {
                status: true,
                data: data.data.patient,
            }
        } else {
            return {
                status: false,
                message: "requested data not exist",
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

const updatePatient = async (patient: IPatient) => {
    try {
        const { data } = await api.post(`/admin/patients/${patient.id}`, {
            ...patient,
            open_consultations: null,
            consultations_count: null,
            created_at: null,
            email_verified_at: null,
            profile_image: null,
        });
        if (data.status) {
            return {
                status: true,
                data: data.data.patient,
            }
        } else {
            return {
                status: false,
                message: "requested data not exist",
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

const deletePatient = async (id: string) => {
    try {
        const { data } = await api.delete(`/admin/patients/${id}`);
        if (data.status) {
            return {
                status: true,
            }
        } else {
            return {
                status: false,
                message: "requested data not exist",
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

const PatientsAPI = {
    getPatients,
    searchInPatients,
    getPatientById,
    updatePatient,
    deletePatient,
}

export default PatientsAPI;