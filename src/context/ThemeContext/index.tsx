import React, { useState, useContext, createContext, ReactNode } from 'react'
import themes from '../../style/theme'
import { DefaultTheme } from 'styled-components';

const ThemeContext = createContext<{ theme: DefaultTheme }>({
    theme: themes.default
});

export const useTheme = () => useContext(ThemeContext)

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(themes.default);

    return (
        <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
    )
}

export default ThemeContextProvider