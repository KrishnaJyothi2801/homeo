export default function Footer() {
  return (
    <footer className="bg-[#0077B6] text-white py-6">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Clinic Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Clinic</h3>
          <p className="text-sm text-[#caf0f8] leading-relaxed">
            Providing trusted homoeopathic care to help you heal naturally and
            live a balanced, healthy life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-[#caf0f8]">
            <li>
              <a href="/" className="hover:text-[#90e0ef]">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#90e0ef]">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#90e0ef]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm text-[#caf0f8]">📍 Thiruvananthapuram, India</p>
          <p className="text-sm text-[#caf0f8]">📞 +91 94432 23601</p>
          <p className="text-sm text-[#caf0f8]">✉️ contact@clinic.com</p>

          <div className="flex justify-center md:justify-start space-x-3 mt-3">
            <a
              href="https://wa.me/919443223601"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#90e0ef]"
              title="Chat on WhatsApp"
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
              href="tel:+919443223601"
              className="hover:text-[#90e0ef]"
              title="Call Now"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M22 16.92v3a2.07 2.07 0 01-2.28 2A19.86 19.86 0 012 4.28 2.07 2.07 0 014 2h3a2.07 2.07 0 012 1.72c.12.88.37 1.73.73 2.54a2.07 2.07 0 01-.47 2.3l-1.27 1.27a16.1 16.1 0 007.59 7.59l1.27-1.27a2.07 2.07 0 012.3-.47c.81.36 1.66.61 2.54.73a2.07 2.07 0 011.72 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 pt-4 text-xs text-[#90e0ef] border-t border-[#0077b6]">
        © {new Date().getFullYear()} Your Clinic Name. All rights reserved.
      </div>
    </footer>
  )
}
