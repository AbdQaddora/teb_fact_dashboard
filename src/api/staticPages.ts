import api from "./axiosConfig"

const getPages = async (page: number, per_page: number) => {
    try {
        const { data } = await api.get(`/admin/pages?per_page=${per_page}&page=${page}`);
        if (data.data) {
            return {
                status: true,
                data: data.data,
                totalPagesCount: data.meta.total
            }
        } else {
            return {
                status: false,
                data: [],
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

const getPageByID = async (id: string) => {
    try {
        const { data } = await api.get(`/admin/pages/${id}`);
        if (data.data) {
            return {
                status: true,
                data: data.data,
            }
        } else {
            return {
                status: false,
                message: "page not found",
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

const createPage = async (page: IStaticPage) => {
    try {
        const { data } = await api.post("/admin/pages", {
            ...page,
            id: null,
        });

        if (data.status) {
            return {
                status: true,
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

const updatePage = async (page: IStaticPage) => {
    try {
        const { data } = await api.post(`/admin/pages/${page.id}`, {
            ...page,
            icon: page.icon.startsWith("data") ? page.icon : null,
            id: null
        });
        if (data.status) {
            return {
                status: true,
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

const updatePageActiveState = async (id: string, status: boolean) => {
    try {
        const { data } = await api.post(`/admin/pages/${id}/update-status`, { status });
        if (data.status) {
            return {
                status: true,
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

const deletePage = async (id: string) => {
    try {
        const { data } = await api.delete(`/admin/pages/${id}`);
        if (data.status) {
            return {
                status: true,
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

const PagesAPI = {
    getPages,
    getPageByID,
    createPage,
    deletePage,
    updatePage,
    updatePageActiveState
}

export default PagesAPI;