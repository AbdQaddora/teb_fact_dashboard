import api from "./axiosConfig"

const getInfo = async (start_date: string, end_date: string) => {
    try {
        const { data } = await api.post('/admin/home', {
            start_date,
            end_date
        });
        if (data.data) {
            return {
                status: true,
                data: data.data.data,
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
    getInfo,
}

export default ConsultationsAPI;