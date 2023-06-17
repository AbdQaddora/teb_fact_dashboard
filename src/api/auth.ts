import api from "./axiosConfig"

const login = async (email: string, password: string) => {
    try {
        const { data } = await api.post("/admin/login", { email, password });
        if (data.token) {
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

const logout = async () => {
    try {
        const { data } = await api.post("/admin/logout");
        if (data.token) {
            return {
                status: true,
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
const changePassword = async (old_password: string, new_password: string) => {
    try {
        const { data } = await api.post("/admin/change-password", {
            old_password: old_password,
            password: new_password
        });

        if (!data.errors) {
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

const AuthAPI = {
    login,
    logout,
    changePassword
}

export default AuthAPI;