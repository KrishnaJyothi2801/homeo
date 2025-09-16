// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="container mx-auto py-10 px-4 grid md:grid-cols-3 gap-6">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold text-white">Dr. [Name]</h2>
          <p className="mt-2 text-sm">
            Healing through homeopathy for over 30 years. Trusted by families for holistic care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-500">Home</a></li>
            <li><a href="/about" className="hover:text-green-500">About</a></li>
            <li><a href="/services" className="hover:text-green-500">Services</a></li>
            <li><a href="/contact" className="hover:text-green-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="mt-2 text-sm">📍 [Clinic Address]</p>
          <p className="text-sm">📞 +91-XXXXXXXXXX</p>
          <a href="https://wa.me/91XXXXXXXXXX" className="text-green-400 hover:underline">
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center border-t border-gray-700 py-4 text-sm">
        © {new Date().getFullYear()} Dr. [Name]. All Rights Reserved.
      </div>
    </footer>
  );
}
