import React, { useState, useContext, createContext, ReactNode, useCallback, useEffect } from 'react'
import themes from '../../style/theme'
import { DefaultTheme } from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';

interface IThemeContext {
    theme: DefaultTheme,
    activeTheme: keyof typeof themes,
    changeTheme: (theme: keyof typeof themes) => void
}
const ThemeContext = createContext<IThemeContext>({
    theme: themes.default,
    activeTheme: "default",
    changeTheme: () => { }
});

export const useTheme = () => useContext(ThemeContext)

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(themes[localStorage.getItem("teb-fact-dashboard-theme")?.replaceAll('"' , "") as keyof typeof themes] || themes.default);
    const [activeTheme, setActiveTheme] = useLocalStorage<keyof typeof themes>("teb-fact-dashboard-theme", "default");

    const changeTheme = useCallback((theme: keyof typeof themes) => {
        setActiveTheme(theme);
        setTheme(themes[theme])
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, activeTheme, changeTheme }}>{children}</ThemeContext.Provider>
    )
}

export default ThemeContextProvider