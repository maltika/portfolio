import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";


const projects = [
    {
        id: 1,
        type: "both",
        title: "Internship Tokio Marine Life Insurance (Thailand) PCL.",
        description: "Developed front-end features and fixed bugs. Collaborated on UX/UI design in an Agile process.",
        image: "/projects/Intern.png",
        tags: ["Internship", "React Native", "figma", "AI Tools"],
        demoUrl: "./myPDF/maltika_intern.pdf",
        githubUrl: "#",
    },

    {
        id: 2,
        type: "dev",
        title: "Ai-Quran App",
        description: "A Flutter thesis app for practicing Quran reading with gamified learning and AI-powered recitation feedback.",
        image: "./projects/aiquranapp.png",
        tags: ["flutter", "Firebase"],
        demoUrl: "./projects/app_ai_quran_game_demo.mp4",
        githubUrl: "https://github.com/maltika/app_ai_quran.git",
    },
    {
        id: 3,
        type: "both",
        title: "Kakeru",
        description: "A manga and novel tracking web app to manage reading progress, organize collections, and keep reading history in a minimal interface.",
        image: "./projects/kakeru.jpg",
        tags: ["ReactJS", "Firebase", "AI Tools"],
        demoUrl: "https://kakeru-five.vercel.app/login",
        githubUrl: "https://github.com/maltika/kakeru.git",
    },
    {
        id: 4,
        type: "both",
        title: "lom-la-lai",
        description: "A book fair planning app to manage wishlists, track budgets, plan booth visits, and organize your perfect book fair experience.", image: "./projects/lomlalai.jpg",
        tags: ["HTML", "CSS", "JavaScript", "Google Apps Script", "AI Tools"],
        demoUrl: "https://lomlalai.vercel.app/",
        githubUrl: "https://github.com/maltika/Lom-La-Lai.git",
    },
    {
        id: 5,
        type: "both",
        title: "photobooth online",
        description: "Built an online photo booth (HTML, CSS, JavaScript) with frame selection, webcam capture, image customization, and download.", image: "./projects/photobooth_online.jpg",
        tags: ["HTML", "CSS", "JavaScript","AI Tools"],
        githubUrl: "https://github.com/maltika/photobooth_online.git",
    },
    {
        id: 6,
        type: "both",
        title: "Instakawa App",
        description: "A Flutter mobile app inspired by Instagram, redesigned with a cute kawaii interface and smooth navigation.", image: "./projects/Instakawaapp.png",
        tags: ["flutter"],
        demoUrl: "./projects/instakawa_demo.mp4",
        githubUrl: "https://github.com/maltika/project_subject_mobile",
    },
    {
        id: 7,
        type: "both",
        title: "Yaklaew",
        description: "Built a web forum with post management and role-based access control (Admin/Member) including moderation and ban features.", image: "./projects/webboard.png",
        tags: ["HTML", "CSS", "PHP"],
        githubUrl: "https://github.com/maltika/webboard.git",
    },
    
    {
        id: 8,
        type: "both",
        title: "Maltiks's portfolio",
        description: "Personal portfolio built with ReactJS and TailwindCSS, featuring smooth animations and a clean, responsive layout.",
        image: "/projects/project1.png",
        tags: ["ReactJS", "TailwindCSS"],
        demoUrl: "https://portfolio-maltika.vercel.app/",
        githubUrl: "https://github.com/maltika/portfolio.git",
    },
    {
        id: 9,
        type: "dev",
        title: "Web To-fo list",
        description: "A simple to-do list app built with HTML, CSS, and JavaScript with add, delete, and complete task features.",
        image: "/projects/todolist.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://maltika.github.io/To-do_list/",
        githubUrl: "https://github.com/maltika/To-do_list",
    },
    {
        id: 10,
        type: "design",
        title: "CDG Hackathon 2025, 'Trust in Tech: AI-Power and KYC for Smart Public Services'",
        description: "Showcased skills in problem-solving, UI/UX design, and teamwork.",
        image: "/projects/certification_cdg.jpg",
        tags: ["Hackathon", "UX/UI Designer", "figma"],
        demoUrl: "https://www.figma.com/design/RDNLj5eOMKHn1upUYBcjs2/FiGo?node-id=0-1&t=j6rGdLBwPv2yk5lq-1",
        githubUrl: "#",
    },
    {
        id: 11,
        type: "design",
        title: "IT Career Camp 2025 : Tokio Marine Life Insurance (Thailand) PCL",
        description: "Served as UX/UI Designer, responsible for design and team collaboration.",
        image: "/projects/hackathon_tokiomaria.jpg",
        tags: ["Hackathon", "UX/UI Designer", "figma"],
        demoUrl: "https://www.figma.com/design/Pc6VSukJ36RJNfVsZqOXAq/hackthon?node-id=0-1&t=Wd0naiK4D6FASsXp-1",
        githubUrl: "#",
    },
];

export const ProjectsSection = () => {
    const [filter, setFilter] = useState("All");

    const filtered = projects.filter((p) => {
        if (filter === "All") return true;
        if (filter === "Develop") return p.type === "dev" || p.type === "both";
        if (filter === "Design") return p.type === "design" || p.type === "both";
    });
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Projects & <span className="text-primary">Experience</span>
                </h2>
                <p className="text-muted-foreground mb-12 max-w-2xl leading-relaxed space-y-1 text-left">
                    Here are some of my projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>
                <div className="flex gap-3 mb-8">
                    {["All", "Develop", "Design"].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`${filter === f ? "hero-cta" : "filter-btn"} !px-4 !py-1.5 !text-sm`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col">
                            <div className="h-42 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full shadow-sm"
                                    style={{ height: "160px" }}
                                />
                            </div>
                            {/* Content */}
                            <div className="py-1 px-2 text-left flex flex-col flex-1">
                                {/* Tags */}
                                <div
                                    className="flex overflow-x-auto gap-1 mb-1 scrollbar-hide flex-shrink-0 "
                                    onWheel={(e) => {
                                        e.preventDefault();
                                        e.currentTarget.scrollLeft += e.deltaY;
                                    }}
                                >
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 text-xs font-medium border border-white rounded-full bg-transparent whitespace-nowrap text-white"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {/* Title */}
                                <h3 className="text-lg font-bold leading-snug font-display px-1 py-1 text-white">
                                    {project.title}
                                </h3>
                                {/* Description */}
                                <p className="text-xs leading-relaxed line-clamp-3 px-1 text-white" >
                                    {project.description}
                                </p>
                                {/* Icons - ล่างสุดเสมอ */}
                                <div className="flex space-x-3 mt-auto px-1 py-2">
                                    {project.demoUrl && project.demoUrl !== "#" && (
                                        <a href={project.demoUrl} target="_blank" className="hover:text-primary transition-colors duration-300 text-white" >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    {project.githubUrl && project.githubUrl !== "#" && (
                                        <a href={project.githubUrl} target="_blank" className="hover:text-primary transition-colors duration-300 text-white">
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        className="hero-cta flex items-center justify-center gap-2 w-fit mx-auto"
                        target="_blank"
                        href="https://github.com/maltika"
                    >
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>

        </section>
    )
}