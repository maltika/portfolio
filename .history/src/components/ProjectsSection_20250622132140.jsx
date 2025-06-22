import { Description } from "@radix-ui/react-toast"

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
]

export const ProjectsSection = () => {
    return (
        <section id="projexts" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured
                    <span className="text-primary">
                        Projects
                    </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2zl auto">

                </p>
            </div>

        </section>
    )
}