import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import AuthAPI from '../../api/login';
import { toast } from 'react-toastify';
import { getAuthTokenFromLocalStorage, setAuthTokenInTheLocalStorage } from '../../util';
import api, { setTokenInAxios } from '../../api/axiosConfig';
interface IAuthContext {
    token: string,
    login: (email: string, password: string, rememberMe?: boolean) => Promise<boolean>
}

const initialContextState: IAuthContext = {
    token: "",
    login: () => new Promise(() => { })
}

const AuthContext = createContext<IAuthContext>(initialContextState);

export const useAuth = () => useContext(AuthContext);

interface IProps {
    children: ReactNode
}

const AuthContextProvider = ({ children }: IProps) => {
    const [token, setToken] = useState(getAuthTokenFromLocalStorage());

    const login = async (email: string, password: string, rememberMe?: boolean) => {
        const res = await AuthAPI.login(email, password);

        if (res?.status) {
            if (rememberMe) {
                setAuthTokenInTheLocalStorage(res?.data as string)
            }
            setToken(res?.data);
            setTokenInAxios(res?.data);
            return true
        } else {
            if (res?.message) {
                toast.error(res?.message);
            }
            return false
        }
    }

    const logout = () => {
        setToken("");
        setAuthTokenInTheLocalStorage("");
        setTokenInAxios("");
        AuthAPI.logout();
    }

    // check if token is valid or not
    useEffect(() => {
        api.get("/admin/home")
            .then(() => { })
            .catch((error) => {
                if (error.response.status === 401) {
                    logout();
                }
            })
    }, [])

    return (
        <AuthContext.Provider value={{ token, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider