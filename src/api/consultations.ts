import api from "./axiosConfig"

const mapConsultations = (res: any) => {
    const results: IConsultation[] = res.map((el: any) => {
        const consultation: IConsultation = {
            consultation: el.notes,
            date: new Date(el.created_at).toLocaleDateString(),
            id: el.id,
            patient_avatar: el.patient.image,
            patient_email: el.patient.email,
            patient_name: el.patient.name,
            state: el.status === 0 ? "new" : el.status === 1 ? "open" : "closed"
        };
        return consultation;
    })

    return results;
}

const getConsultations = async (page: number, per_page: number) => {
    try {
        const { data } = await api.get(`/admin/consultations?per_page=${per_page}&page=${page}`);
        if (data.data.consultations) {
            return {
                status: true,
                data: mapConsultations(data.data.consultations),
                // totalConsultationsCount: data.meta.total
                totalConsultationsCount: data.data.consultations.length
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

const ConsultationsAPI = {
    getConsultations,
}

export default ConsultationsAPI;