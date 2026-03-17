import { Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0077B6] via-[#0096c7] to-[#023e8a] text-white">
      
      <div className="container mx-auto px-6 py-14 grid md:grid-cols-3 gap-12">

        {/* Clinic Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 tracking-wide">
            Our Clinic
          </h3>
          <p className="text-sm text-[#e0f7ff] leading-relaxed max-w-sm">
            Dr. Siva, BSc; MD(Homoeo). Providing trusted homoeopathic care to
            help you heal naturally and live a balanced, healthy life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-[#e0f7ff]">
            {[
              { name: "Home", link: "/" },
              { name: "Services", link: "/services" },
              { name: "Articles", link: "/articles" },
              { name: "Contact", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  → {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 tracking-wide">
            Contact
          </h3>

          <div className="space-y-3 text-sm text-[#e0f7ff]">
            <p className="flex items-start gap-2">
              <span>📍</span>
              <span>
                TC.20/56(16), CIT Road, Melaranoor, Karamana PO,
                Trivandrum - 695023, Kerala
              </span>
            </p>

            <p className="flex items-center gap-2">
              <span>📞</span>
              <a
                href="tel:+919497760537"
                className="hover:text-white transition"
              >
                +91 94977 60537
              </a>
            </p>

            <p className="flex items-center gap-2">
              <span>✉️</span>
              <a
                href="mailto:drsivashomeo@gmail.com"
                className="hover:text-white transition"
              >
                drsivashomeo@gmail.com
              </a>
            </p>
          </div>

          {/* Social Buttons */}
          <div className="flex mt-5 gap-3">
            <a
              href="https://wa.me/919497760537"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-[#25D366] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 0C5.373 0 0 5.372 0 12a11.93 11.93 0 001.64 6L0 24l6.14-1.61A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 01-5.3-1.53l-.38-.23-3.64.96.97-3.55-.25-.4A9.9 9.9 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
              </svg>
            </a>

            <a
              href="tel:+919497760537"
              className="bg-white/10 p-2 rounded-full hover:bg-[#00b4d8] transition"
            >
              📞
            </a>
          </div>
                 
        </div>

      </div>
      
         <p className="text-xs text-[#caf0f8] px-4 pb-4 mx-auto justify-self-center">
          © {new Date().getFullYear()} Dr. Siva's Multi-speciality Homoeo Clinic. All rights reserved.
        </p>
      {/* Divider */}
      <div className="border-t border-white/20 mx-6" />

      {/* Bottom Section */}
      <div className="px-6 py-6 text-center space-y-4 bg-black backdrop-blur-md">
      

        <p className="text-sm text-white/80">
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
          className="inline-block text-sm font-medium text-[#00b4d8] hover:text-white underline underline-offset-4 transition"
        >
          Launch your website with us!
        </a>

        {/* Contact shortcuts */}
        <div className="flex justify-center items-center gap-5 text-sm mt-2">
          <a
            href="https://wa.me/919443223601?text=Hi%20WebAglet,%20I%20need%20a%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-[#25D366] transition"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>

          <span className="text-white/30">|</span>

          <a
            href="mailto:webaglet@gmail.com"
            className="flex items-center gap-2 text-white/70 hover:text-[#00b4d8] transition"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}