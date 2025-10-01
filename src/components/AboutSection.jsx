import { Briefcase, Code, User, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Profile Summary + Buttons */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground leading-relaxed">
              I enjoy building modern, responsive, and user-friendly web applications. 
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="./myPDF/maltika_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </a>

              <a
                href="./myPDF/maltika_transcript.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Transcript
              </a>
            </div>
          </div>

          {/* Right: Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-7 w-7 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="p-6 rounded-xl bg-card shadow-lg border border-border/40 hover:shadow-xl transition-all">
              <p className="text-lg font-semibold text-foreground">
                King Mongkut's University of Technology North Bangkok
              </p>
              <p className="text-muted-foreground">
                Bachelor of Engineering, Electronics Engineering Technology Computer
              </p>
              <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"> 2022 – Present</span>
                <span className="font-bold text-primary">GPA: 3.16</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
