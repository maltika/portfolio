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
                <h2>
                    Featured
                    <span>
                        Projects
                    </span>
                </h2>
            </div>

        </section>
    )
}