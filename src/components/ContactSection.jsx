import { useRef } from "react"
import { Facebook, Figma, Github, Instagram, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from '@/lib/utils'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

export const ContactSection = () => {
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = formRef.current
    if (!form) return

    const formData = new FormData(form)

    const templateParams = {
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      message: formData.get('message') || ''
    }

    console.log('Sending templateParams:', templateParams)

    emailjs.send(
      "service_07lb7zo",      // Service ID
      "template_40bbbch",     // Template ID
      templateParams,
      "qoabgHzYDjfT9hBkE"    // Public Key
    ).then(
      (response) => {
        console.log('EmailJS Success:', response)
        toast.success("Message sent successfully!")
        form.reset()
      },
      (error) => {
        console.error('EmailJS Failed:', error)
        // แสดงรายละเอียด error จาก EmailJS ใน toast
        const errorMessage = error?.text || JSON.stringify(error)
        toast.error(`Failed to send message. ${errorMessage}`)
      }
    )
  }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <Toaster position="top-right" />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Contact Info */}
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:maltikabn@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    maltikabn@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:0625465700"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    062-546-5700
                  </a>
                </div>
              </div>

              <div className="flex items-start justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors ">
                    40 Nonthaburi 11000
                  </a>
                </div>
              </div>
            </div>
            {/* Contact w/ me */}
            <div className="pt-8 ">
              <h4 className="font-medium mb-4">Contact With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.facebook.com/maltika.bn/" target="_blank">
                  <Facebook />
                </a>
                <a href="https://github.com/maltika" target="_blank">
                  <Github />
                </a>
                <a href="https://www.figma.com/team_invite/redeem/gNC6e3Mi1irtkwKUqwBw1G" target="_blank">
                  <Figma />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Maltika Boonmalert ... "
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="maltikabn@gmail.com... "
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about ..."
                />
              </div>

              <button
                type="submit"
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
