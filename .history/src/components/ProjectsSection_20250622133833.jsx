
const projects = [
    {
        id: 1,
        title: "Maltiks's portfolio",
        description: "Personal Portfolio with ReactJS and TailwindCSS",
        image: "/projects/project1.png",
        tags: ["ReactJS","TailwindCSS"],
        demoUrl:"#",
        githubUrl: "#",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured
                    <span className="text-primary">
                        Projects
                    </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4"> 
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}