import React, { createContext, useContext, ReactNode, useState } from 'react'
import AuthAPI from '../../api/login';
import { toast } from 'react-toastify';
import { getAuthTokenFromLocalStorage, setAuthTokenInTheLocalStorage } from '../../util';
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
            return true
        } else {
            if (res?.message) {
                toast.error(res?.message);
            }
            return false
        }
    }

    return (
        <AuthContext.Provider value={{ token, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider