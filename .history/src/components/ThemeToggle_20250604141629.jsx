import { Moon, Sun } from "lucide-react"
import { useState } from "react"

export const ThemeToggle = () => {
    const [isDarkMode] = useState(false);
    const toggleTheme = 

    return (
    <button>
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" /> 
        ):(
            <Moon className="h-6 w-6 text-blue-900"/>
        )} 
        </button>
    );
};