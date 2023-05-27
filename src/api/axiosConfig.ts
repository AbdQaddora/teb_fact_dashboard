import axios from "axios";
import { getAuthTokenFromLocalStorage } from "../util";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Accept-Language': localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_LANGUAGE_KEY as string) ?
            JSON.parse(localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_LANGUAGE_KEY as string) || "").langName : 'en',
    }
});

export const setTokenInAxios = (token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

setTokenInAxios(getAuthTokenFromLocalStorage())

export const changeLocal = (local: string) => {
    api.defaults.headers.common['Accept-Language'] = local;
}

export default api;