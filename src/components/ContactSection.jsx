import { useRef } from "react";
import {
  Facebook,
  Figma,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export const ContactSection = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const templateParams = {
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      message: formData.get("message") || "",
    };

    emailjs
      .send(
        "service_07lb7zo",
        "template_40bbbch",
        templateParams,
        "qoabgHzYDjfT9hBkE"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.reset();
        },
        (error) => {
          const errorMessage = error?.text || JSON.stringify(error);
          toast.error(`Failed to send message. ${errorMessage}`);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <Toaster position="top-right" />
      <div className="container mx-auto max-w-5xl text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="text-muted-foreground mb-12 max-w-2xl leading-relaxed space-y-1">
          <p>Have a project in mind or want to collaborate? <br />
            Feel free to reach out. I&apos;m always open to discussing new
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden shadow-md">
            <div className="bg-primary text-primary-foreground px-4 py-2 font-display text-2xl tracking-wide flex items-center justify-between">
              Contact Information
              <button className="text-white hover:opacity-70 transition-opacity text-base leading-none">✕</button>
              {/* <div style={{ display: 'flex', gap: '4px' }}>
                <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', width: '24px', height: '24px', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>─</button>
                <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', width: '24px', height: '24px', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>□</button>
                <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', width: '24px', height: '24px', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
              </div> */}
            </div>
            <div className="bg-white text-gray-900 p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-gray-100 shrink-0">
                  <Mail className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-display text-base mb-1">Email</h4>
                  <a
                    href="mailto:maltikabn@gmail.com"
                    className="font-sans text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    maltikabn@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-gray-100 shrink-0">
                  <Phone className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-display text-base mb-1">Phone</h4>
                  <a
                    href="tel:0625465700"
                    className="font-sans text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    062-546-5700
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-gray-100 shrink-0">
                  <MapPin className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-display text-base mb-1">Location</h4>
                  <span className="font-sans text-sm text-gray-600">
                    Nonthaburi, Thailand
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 flex flex-col items-center">
                <h4 className="font-display text-base mb-4 text-center">
                  Contact With Me
                </h4>
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.facebook.com/maltika.bn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-100 hover:bg-primary hover:text-white text-gray-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/maltika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-100 hover:bg-primary hover:text-white text-gray-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.figma.com/team_invite/redeem/gNC6e3Mi1irtkwKUqwBw1G"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-100 hover:bg-primary hover:text-white text-gray-600 transition-colors"
                    aria-label="Figma"
                  >
                    <Figma className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-900 border-2 border-primary p-6 md:p-8">
            <h3 className="font-display text-2xl mb-6 text-center tracking-wide">
              Send a Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block font-display text-sm mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2.5 border-2 border-primary/40 bg-gray-50 font-sans text-sm text-gray-900 focus:outline-none focus:border-primary"
                  placeholder="maltikabn@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block font-display text-sm mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2.5 border-2 border-primary/40 bg-gray-50 font-sans text-sm text-gray-900 focus:outline-none focus:border-primary"
                  placeholder="Maltika Boonmalert"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-display text-sm mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2.5 border-2 border-primary/40 bg-gray-50 font-sans text-sm text-gray-900 focus:outline-none focus:border-primary resize-none"
                  placeholder="Hello, I'd like to talk about ..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                <Send size={20} />
                <span className="text-xl">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
