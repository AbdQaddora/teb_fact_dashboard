import CONSULTATIONS_STATUS from "../constants/consultations_status";
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
            status: el.status === CONSULTATIONS_STATUS.NEW ? "new" : el.status === CONSULTATIONS_STATUS.OPEN ? "open" :el.status === CONSULTATIONS_STATUS.CLOSED ?  "closed" : "cancelled"
        };
        return consultation;
    })

    return results;
}

const getTickets = async (page: number, per_page: number) => {
    try {
        const { data } = await api.get(`/admin/contact-messages?per_page=${per_page}&page=${page}`);
        if (data.data) {
            return {
                status: true,
                data: data.data,
                totalTicketsCount: data.meta.total
            }
        } else {
            return {
                status: false,
                message: "requested data not exist",
                totalTicketsCount: 0
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

const getTicketById = async (id: string) => {
    try {
        const { data } = await api.get(`/admin/contact-messages/${id}`);
        if (data.data) {
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

const replyOnTicket = async (id: string, reply: string) => {
    try {
        const { data } = await api.post(`/admin/contact-messages/${id}/reply`, {
            message: reply
        });

        return {
            status: data.status,
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

const TicketsAPI = {
    getTickets,
    getTicketById,
    replyOnTicket
}

export default TicketsAPI;