import { Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0077B6] text-white">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Clinic Info */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Our Clinic</h3>
          <p className="text-sm text-[#caf0f8] leading-relaxed">
            Dr. Siva, BSc; MD(Homoeo). Providing trusted homoeopathic care to help you heal naturally and live a balanced, healthy life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#caf0f8]">
            <li>
              <a href="/" className="hover:text-[#90e0ef] transition-colors">Home</a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#90e0ef] transition-colors">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#90e0ef] transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <div className="space-y-2 text-sm text-[#caf0f8]">
            <p className="flex items-center gap-2"><span>📍</span> TC.20/56(16), CIT Road, Melaranoor, Karamana PO, Trivandrum - 695023, Kerala</p>
            <p className="flex items-center gap-2"><span>📞</span> +91 94977 60537</p>
            <p className="flex items-center gap-2"><span>✉️</span> subramoniam.siva@gmail.com</p>
          </div>

          <div className="flex mt-4 gap-4">
            <a
              href="https://wa.me/919497760537"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#90e0ef] transition-colors"
              title="Chat on WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0C5.373 0 0 5.372 0 12a11.93 11.93 0 001.64 6L0 24l6.14-1.61A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 01-5.3-1.53l-.38-.23-3.64.96.97-3.55-.25-.4A9.9 9.9 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
              </svg>
            </a>
            <a href="tel:+919497760537" className="hover:text-[#90e0ef] transition-colors" title="Call Now">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22 16.92v3a2.07 2.07 0 01-2.28 2A19.86 19.86 0 012 4.28 2.07 2.07 0 014 2h3a2.07 2.07 0 012 1.72c.12.88.37 1.73.73 2.54a2.07 2.07 0 01-.47 2.3l-1.27 1.27a16.1 16.1 0 007.59 7.59l1.27-1.27a2.07 2.07 0 012.3-.47c.81.36 1.66.61 2.54.73a2.07 2.07 0 011.72 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 py-4 text-xs text-[#90e0ef] border-t border-[#005f91]">
        © {new Date().getFullYear()} Dr. Siva's Multi-speciality Homoeo Clinic. All rights reserved.
      </div>
      <div className="relative z-10 bg-black py-5">
        <div className="flex flex-col items-center gap-3 text-sm text-white">
          
          <p>
            Website designed & developed by{" "}
            <a
              href="https://webaglet.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#00b4d8] hover:text-white transition"
            >
              WebAglet
            </a>
          </p>

          <a
            href="https://webaglet.in/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#00b4d8] hover:text-white underline underline-offset-4 transition"
          >
            Launch your website with us!
          </a>

          {/* Contact shortcuts */}
          <div className="flex items-center gap-4 mt-1">
            <a
              href="https://wa.me/919443223601?text=Hi%20WebAglet,%20I%20need%20a%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-[#25D366] transition"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            <span className="text-white/30">|</span>

            <a
              href="mailto:webaglet@gmail.com"
              className="flex items-center gap-2 text-white/80 hover:text-[#00b4d8] transition"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}
