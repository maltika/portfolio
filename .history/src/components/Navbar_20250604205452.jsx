
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    {name: "Home",href: "#hero"},
    {name: "About",href: "#about"},
    {name: "Skills",href: "skills"},
    {name: "Projects",href: "#Projects"},
    {name: "Contact",href: "#Contact"},
]

export const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            set
        }
    })

    return (
    <nav className= {
        cn("fixed w-full z-40 transition-all duration-300"

        )}>

    </nav>
    );
}