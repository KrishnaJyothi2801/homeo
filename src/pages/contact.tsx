import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <Hero
        title="Contact Us"
        subtitle="Get in touch to book an appointment or learn more"
        imageUrl="/images/hero-contact.jpg"
        ctaText="Call Now"
        ctaLink="tel:+911234567890"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Clinic Information</h2>
            <p className="text-gray-700 mb-4">
              Visit us at our clinic or contact us via phone or email. We look
              forward to helping you.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>
                📍 <strong>Address:</strong> 123 Main Street, Chennai, India
              </li>
              <li>
                📞 <strong>Phone:</strong> +91 12345 67890
              </li>
              <li>
                ✉️ <strong>Email:</strong> info@homeoclinic.com
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                className="w-full border p-3 rounded-lg"
                rows={5}
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
