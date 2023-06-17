import api from "./config/axiosConfig"

const getContactInfo = async () => {
    try {
        const { data } = await api.get("/settings");
        if (data.status) {
            return {
                status: true,
                data: data.data.site_setting
            }
        } else {
            return {
                status: false,
                message: "something went wrong"
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

const updateContactInfo = async (info: IContactInfo) => {
    try {
        const { data } = await api.post("/admin/update-site-setting", info);
        if (!data.errors && data.status) {
            return {
                status: true,
                message: data.message
            }
        } else {
            return {
                status: false,
                message: data.message
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


const ContactAPI = {
    getContactInfo,
    updateContactInfo,
}

export default ContactAPI;