import { IDermatologist } from "../types/Dermatologist";
import api from "./axiosConfig"

const getDermatologists = async (page: number, per_page: number) => {
    try {
        const { data } = await api.get(`/admin/dermatologists?per_page=${per_page}&page=${page}`);
        if (data.data) {
            return {
                status: true,
                data: data.data,
                totalDermatologistsCount: data.meta.total
            }
        } else {
            return {
                status: false,
                message: "requested data not exist",
                totalPagesCount: 0
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

const searchInDermatologists = async (page: number, per_page: number, query: string) => {
    try {
        const { data } = await api.get(`/admin/dermatologists?per_page=${per_page}&page=${page}&name=${query}`);
        if (data.data) {
            return {
                status: true,
                data: data.data,
                totalDermatologistsCount: data.meta.total
            }
        } else {
            return {
                status: false,
                message: "requested data not exist",
                totalPagesCount: 0
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

const getDermatologistById = async (id: string) => {
    try {
        const { data } = await api.get(`/admin/dermatologists/${id}`);
        if (data.status) {
            return {
                status: true,
                data: data.data,
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

const updateDermatologist = async (dermatologist: IDermatologist) => {
    try {
        const { data } = await api.post(`/admin/dermatologists/${dermatologist.id}`, {
            ...dermatologist,
            profile_image: null,
            university_certificate_image: null
        });
        if (data.status) {
            return {
                status: true,
                data: data.data.dermatologist,
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

const DermatologistsAPI = {
    getDermatologists,
    searchInDermatologists,
    getDermatologistById,
    updateDermatologist,
}

export default DermatologistsAPI;