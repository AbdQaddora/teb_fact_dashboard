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
        console.log(error)
        console.log(typeof error)
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

/*
{
    "message": "Request failed with status code 422",
    "name": "AxiosError",
    "stack": "AxiosError: Request failed with status code 422\n    at settle (http://localhost:5173/node_modules/.vite/deps/axios.js?v=55f78e0e:1186:12)\n    at XMLHttpRequest.onloadend (http://localhost:5173/node_modules/.vite/deps/axios.js?v=55f78e0e:1410:7)",
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "adapter": [
            "xhr",
            "http"
        ],
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {},
        "headers": {
            "Accept": "application/json, text/plain, /*",
            "Content-Type": "application/json",
            "Accept-Language": "REACT_APP_TEB_FACT_DASHBOARD_LOCAL_STORAGE_LANGUAGE_KEY"
        },
        "baseURL": "https://phplaravel-1005587-3545973.cloudwaysapps.com/api/",
        "method": "post",
        "url": "/admin/login",
        "data": "{\"email\":\"\",\"password\":\"\"}"
    },
    "code": "ERR_BAD_REQUEST",
    "status": 422
}
*/