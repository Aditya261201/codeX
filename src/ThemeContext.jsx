import React, { createContext, useState, useContext } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    function toggleTheme() {
        if (theme === "dark") {
            setTheme("light");
            console.log("light theme");
        }
        else if (theme === "light") {
            setTheme("dark");
            console.log("dark theme");
        }
    }
    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};


export const useTheme = () => useContext(ThemeContext);
