
import { cn } from "@/lib/utils";
import { Key } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home",href: "#hero" },
    { name: "About",href: "#about" },
    { name: "Skills",href: "#skills" },
    { name: "Projects",href: "#Projects" },
    { name: "Contact",href: "#Contact" },
];

export const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }

        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll",handleScroll);
    },[])

    return (
    <nav className= {cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
    >
            <div className="container flex items-center justify-between">
                <a 
                    className="text-xl font-bold text-primary flex items-center" 
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">
                            Maltika
                        </span>
                        Portfolio
                    </span>
                </a>
                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item,Key) => (
                        <a key={Key} href={item.href} className="text-foreground/80 hover:text-primary transition-color-300">
                            {item.name}  
                        </a>
                    ))}
                </div>
                {/* mobile nav */}
                <div 
                    className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",

                )
                }>
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item,Key) => (
                            <a key={Key} href={item.href} className="text-foreground/80 hover:text-primary transition-color-300">
                                {item.name}  
                            </a>
                        ))}
                    </div>
                </div>

            </div>
    </nav>
    );
}