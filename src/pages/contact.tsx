// app/contact/page.tsx
export default function Contact() {
  return (
    <section className="container mx-auto py-20 px-4 pt-20! bg-[#7DDEFD] w-screen h-screen">
      <h1 className="text-5xl! font-bold! text-center text-blue-950 mb-12! pt-12!">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Form */}
        <form className="bg-amber-200 ml-4! text-blue-950 shadow-lg rounded-xl p-6! space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border! rounded-lg! p-3! my-2! focus:ring-2 focus:ring-black" />
          <input type="email" placeholder="Your Email" className="w-full border! rounded-lg! p-3! my-2! focus:ring-2 focus:ring-black" />
          <textarea placeholder="Your Message" rows={5} className="w-full border! rounded-lg! p-3! my-2! focus:ring-2 focus:ring-black"></textarea>
          <button className="bg-green-700! text-white! p-3! rounded-lg shadow hover:bg-green-800">
            Get in touch ➡️
          </button>
        </form>

        {/* Contact Info + Map */}
        <div className="space-y-4">
          <h2 className="text-xl! font-semibold! text-blue-950">Clinic Information</h2>
          <p className="text-xl! text-blue-950">📍 [Clinic Address]</p>
          <p className="text-xl! text-blue-950">📞 +91-XXXXXXXXXX</p>
          <a href="https://wa.me/91XXXXXXXXXX" className="inline-block bg-green-700! text-white! p-3! my-6! rounded-lg shadow hover:bg-green-800">
            Chat on WhatsApp
          </a>

          {/* Map (Fix the embed link with proper Google Maps embed URL) */}
          <div className="mt-4">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.927095921512!2d76.93663731533444!3d8.52413999387296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bfbf7e2e2e2b%3A0x7e2e2e2e2e2e2e2e!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1717670000000!5m2!1sen!2sin"
                width="80%"
                height="250"
                className="rounded-lg border"
                loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
