
export const HeroSection = () => {
    return (
    <section 
        id="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6 md:text-6xl ">
                <h1 className="font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> 
                        {" "}
                        Maltika 
                    </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> 
                        {" "}
                        Boonmalert 
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Welcome to the ultimate modern ReactJS and TailwindCSS beginner portfolio tutorial.
                    We will build a stunning space portfolio that you can showcase all your projects. 
                    At the end, we will deploy this project so that your employers can see it live!
                    ( ข้อความ about me แก้ทีหลัง )
                </p>

                <div className="opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button md:text-xl ">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 tranform-translate-x-1/2 flex">

        </div>
    </section>);
}