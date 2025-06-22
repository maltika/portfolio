import { Moon, Sun } from "lucide-react"
import { useState } from "react"

export const ThemeToggle = () => {
    const [isDarkMode,setIsDarkMode] = useState(false);
    const toggleTheme = () =>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme")
            setIsDarkMode(true);
        }
    }

    return (
    <button onClick={toggleTheme}>
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-white-300" /> 
        ):(
            <Moon className="h-6 w-6 text-black-900"/>
        )} 
        </button>
    );
};