import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export const ThemeToggle = () => {
    const [isDarkMode,setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if ()
    }, [])

    const toggleTheme = () =>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(true);
        }
    }

    return (
    <button onClick={toggleTheme}>
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" /> 
        ):(
            <Moon className="h-6 w-6 text-black-900"/>
        )} 
        </button>
    );
};