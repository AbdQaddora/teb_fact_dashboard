import api from "./config/axiosConfig"

const getAdvertisements = async (page: number, per_page: number) => {
    try {
        const { data } = await api.get(`/admin/sponsors?per_page=${per_page}&page=${page}`);
        if (data.data) {
            return {
                status: true,
                data: data.data,
                totalAdvertisementsCount: data.meta.total
            }
        } else {
            return {
                status: false,
                message: "requested data not exist",
                totalAdvertisementsCount: 0
            }
        }
    } catch (error: any) {
        if (error.name === "AxiosError") {
            return {
                status: false,
                message: error.response.data.message,
                totalAdvertisementsCount: 0
            }
        }
    }
}

const getAdvertisementByID = async (id: string) => {
    try {
        const { data } = await api.get(`/admin/sponsors/${id}`);
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
                message: error.response.data.message,
            }
        }
    }
}

const createNewAdvertisement = async (advertisement: IAdvertisement) => {
    try {
        const { data } = await api.post(`/admin/sponsors`, advertisement);
        if (data.status) {
            return {
                status: true,
                message: data.message,
            }
        } else {
            return {
                status: false,
                message: data.message,
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

const updateAdvertisement = async (new_advertisement: IAdvertisement) => {
    console.log(new_advertisement.image)
    try {
        const { data } = await api.post(`/admin/sponsors/${new_advertisement.id}`, {
            ...new_advertisement,
            image: new_advertisement.image.startsWith("data:image") ? new_advertisement.image : null 
        });
        if (data.status) {
            return {
                status: true,
                data: data.data,
                message: data.message,
            }
        } else {
            return {
                status: false,
                message: data.message,
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

const deleteAdvertisement = async (id: string) => {
    try {
        const { data } = await api.delete(`/admin/sponsors/${id}`);
        if (data.status) {
            return {
                status: true,
                message: data.message,
            }
        } else {
            return {
                status: false,
                message: data.message,
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

const AdvertisementsAPI = {
    getAdvertisements,
    getAdvertisementByID,
    createNewAdvertisement,
    updateAdvertisement,
    deleteAdvertisement
}

export default AdvertisementsAPI;


