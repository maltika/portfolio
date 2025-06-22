import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    //frontend
    { name:"HTML/CSS", category:"frontend" },
    { name:"JavaScript", category:"frontend" },
    { name:"React", category:"frontend" },
    { name:"Tailwind CSS", category:"frontend" },
    //backend
    { name:"php", category:"backend" },
    { name:"Node.js", category:"backend" },
    //tools
    { name:"Git/GitHub", category:"tools" },
    { name:"Figma", category:"tools" },
    { name:"VS Code", category:"tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const fil
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key) => (
                        <button key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill,key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                                <div>
                                    <h3 className="font-semibold">
                                        {skill.name}
                                    </h3>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}