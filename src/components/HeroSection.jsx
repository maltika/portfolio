import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-3xl mx-auto z-10 w-full text-left">
        <h1 className="text-3xl md:text-5xl font-display tracking-wide mb-6">
          <span className="opacity-0 animate-fade-in">Hi, I&apos;m </span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">
            Maltika
          </span>
        </h1>

        <p className="font-sans text-lg md:text-lg text-foreground leading-relaxed max-w-2xl mb-10 opacity-0 animate-fade-in-delay-3">
          Welcome to my portfolio! I'm a Front-end Developer & UI/UX Designer dedicated to crafting beautiful, user-centric web applications. Check out my latest work!
        </p>

        <div className="flex justify-center opacity-0 animate-fade-in-delay-4 text-xl">
          <a href="#projects" className="hero-cta">
            View My work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-foreground/70 mb-2 font-display">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
