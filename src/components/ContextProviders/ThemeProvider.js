import React, { useState, createContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import createTheme, { radical90s, darkMode } from "./theme";

const themeToggle = createContext({});
const { Provider: ThemeToggleProvider } = themeToggle;

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const currentColorScheme = isDarkMode ? darkMode : radical90s;
    const theme = createTheme(currentColorScheme);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <StyledThemeProvider theme={theme}>
            <ThemeToggleProvider value={{ toggleDarkMode }}>
                {children}
            </ThemeToggleProvider>
        </StyledThemeProvider>
    );
};

export { themeToggle };
export default ThemeProvider;
