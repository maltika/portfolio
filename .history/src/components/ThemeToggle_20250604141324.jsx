import { Moon, Sun } from "lucide-react"
import { useState } from "react"

export const ThemeToggle = () => {
    const [isDarkMode] = useState(false);

    return <button>{isDarkMode ?<Sun console.log()/> : <Moon />} </button>
}