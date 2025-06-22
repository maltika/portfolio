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

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:">

                </div>
            </div>
        </section>
    )
}