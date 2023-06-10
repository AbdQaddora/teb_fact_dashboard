import { dateToString } from "../util";
import api from "./axiosConfig"

const getInfo = async (start_date: Date, end_date: Date) => {
    try {
        const { data } = await api.get(`/admin/home?start_date=${dateToString(start_date)}&end_date=${dateToString(end_date)}`);
        if (data.data) {
            return {
                status: true,
                chart: data.data.data.chart,
                data: {
                    dermatologists: data.data.data.dermatologists,
                    consultations: data.data.data.consultations,
                    patients: data.data.data.patients,
                }
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

const StatisticsAPI = {
    getInfo,
}

export default StatisticsAPI;