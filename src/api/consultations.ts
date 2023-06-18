import api from "./config/axiosConfig"

const mapConsultations = (res: any) => {
    const results: IConsultation[] = res.map((el: any) => {
        const consultation: IConsultation = {
            id: String(el.id),
            consultation: el.notes,
            date: new Date(el.created_at).toLocaleDateString(),
            patient_avatar: el.patient.profile_image,
            patient_email: el.patient.email,
            patient_name: el.patient.full_name,
            state: el.status === 0 ? "new" : el.status === 1 ? "open" : "closed"
        };
        return consultation;
    })

    return results;
}

const getConsultations = async (page: number, per_page: number) => {
    try {
        const { data } = await api.get(`/admin/consultations?per_page=${per_page}&page=${page}`);
        if (data.data) {
            return {
                status: true,
                data: mapConsultations(data.data),
                totalConsultationsCount: data.meta.total
            }
        } else {
            return {
                status: false,
                message: "requested data not exist",
                totalConsultationsCount: 0
            }
        }
    } catch (error: any) {
        if (error.name === "AxiosError") {
            return {
                status: false,
                message: error.response.data.message,
                totalConsultationsCount: 0
            }
        }
    }
}

const getLatestConsultations = async (page: number, per_page: number) => {
    try {
        const { data } = await api.get(`/admin/last-consultations?per_page=${per_page}&page=${page}`);
        if (data.data) {
            return {
                status: true,
                data: mapConsultations(data.data),
                totalConsultationsCount: data.meta.total
            }
        } else {
            return {
                status: false,
                message: "requested data not exist",
                totalConsultationsCount: 0
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

const ConsultationsAPI = {
    getConsultations,
    getLatestConsultations,
}

export default ConsultationsAPI;