import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext()

export default function ThemeContent({children}) {

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark");


useEffect(() => {
    if (darkMode) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light")
     }
}, [darkMode])
    
    
    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )

};
