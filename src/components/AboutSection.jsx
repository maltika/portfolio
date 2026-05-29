import { GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Left: Passionate window + buttons */}
          <div className="space-y-4">

            {/* Passionate window card */}
            <div className="border-2 border-primary overflow-hidden">
              <div className="bg-primary text-primary-foreground px-4 py-2 font-display text-xl tracking-wide flex items-center justify-between">
                Passionate
                <button className="text-white hover:opacity-70 transition-opacity text-base leading-none">✕</button>
              </div>
              <div className="bg-white p-6 text-left">
                <p className="text-gray-900 leading-relaxed font-sans">
                  I enjoy building modern, responsive, and user-friendly web applications.
                </p>
              </div>
            </div>

            {/* Get In Touch button */}
            <div className="pt-2">
              <a href="#contact" className="hero-cta w-full text-center block text-xl">
                Get In Touch
              </a>
            </div>

            {/* View Resume / View Transcript */}
            <div className="flex gap-4">
              <a
                href="./myPDF/maltika_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta flex-1 text-center text-base bg-white text-gray-900 border-primary shadow-none hover:bg-gray-100"
              >
                View Resume
              </a>
              <a
                href="./myPDF/maltika_transcript-unofficial.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta flex-1 text-center text-base bg-white text-gray-900 border-primary shadow-none hover:bg-gray-100"
              >
                View Transcript
              </a>
            </div>
          </div>

          {/* Right: Education window */}
          <div className="border-2 border-primary overflow-hidden">
            <div className="bg-primary text-primary-foreground px-4 py-2 font-display text-xl tracking-wide flex items-center justify-between">
              Education
              <button className="text-white hover:opacity-70 transition-opacity text-base leading-none">✕</button>
            </div>
            <div className="bg-white p-6 space-y-3 text-left">
              <p className="text-2xl font-semibold text-primary leading-snug font-display font-sans">
                King Mongkut's University of Technology North Bangkok
              </p>
              <p className="text-gray-600 text-base leading-relaxed font-sans">
                Bachelor of Engineering, Electronics Engineering Technology Computer
              </p>
              <div className="flex items-center justify-between pt-4 text-sm border-t border-gray-200">
                <span className="text-gray-900 font-sans text-base">2022–Present</span>
                <span className="font-bold text-primary font-display text-lg font-sans">GPA: 3.20</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};