import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    // อ่านจาก localStorage ทันทีเพื่อให้ state เริ่มตรงกับ theme จริง
    const storedTheme = localStorage.getItem("theme");
    const defaultDark = storedTheme !== "light";

    const [isDarkMode, setIsDarkMode] = useState(defaultDark);

    // ตั้งค่า dark mode ทันที (ไม่ต้องใช้ useEffect)
    if (defaultDark) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
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
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-white-300" />
            ) : (
                <Moon className="h-6 w-6 text-black-900" />
            )}
        </button>
    );
};
