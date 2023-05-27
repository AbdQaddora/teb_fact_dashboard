import api, { setTokenInAxios } from "./axiosConfig"

const login = async (email: string, password: string) => {
    try {
        const { data } = await api.post("/admin/login", { email, password });
        if (data.token) {
            setTokenInAxios(data.token);
            return {
                status: true,
                data: data.token
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

const AuthAPI = {
    login
}

export default AuthAPI;