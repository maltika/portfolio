import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    // เริ่มต้น dark mode ทุกครั้งที่โหลดเว็บ
    const [isDarkMode, setIsDarkMode] = useState(true);

    // ตั้งค่า dark mode ทันทีตอน render
    document.documentElement.classList.add("dark");

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}
        >
            {/* {isDarkMode ? (
                <Sun className="h-6 w-6 text-white-300" />
            ) : (
                <Moon className="h-6 w-6 text-black-900" />
            )} */}
        </button>
    );
};
