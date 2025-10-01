import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // frontend
    { name: "HTML", category: "languages", logo: "/icons/html_logo.png" },
    { name: "CSS", category: "languages", logo: "/icons/css_logo.png" },
    { name: "React", category: "languages", logo: "/icons/react_logo.png" },

    // backend
    { name: "PHP", category: "languages", logo: "/icons/php_logo.png" },

    // languages
    { name: "Java", category: "languages", logo: "/icons/java_logo.png" },
    { name: "JavaScript", category: "languages", logo: "/icons/JavaScript_logo.png" },
    { name: "Python", category: "languages", logo: "/icons/python_logo.png" },
    { name: "Flutter", category: "languages", logo: "/icons/flutter_logo.png" },

    // tools
    { name: "Git", category: "tools", logo: "/icons/git_logo.png" },
    { name: "GitHub", category: "tools", logo: "/icons/github_logo.png" },
    { name: "Figma", category: "tools", logo: "/icons/figma_logo.png" },
    { name: "VS Code", category: "tools", logo: "/icons/vscode_logo.png" },
];

const categories = ["all", "languages", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filterSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
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
                    {filterSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center gap-3"
                        >
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-12 h-12 object-contain"
                            />
                            <h3 className="font-semibold text-center">{skill.name}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
