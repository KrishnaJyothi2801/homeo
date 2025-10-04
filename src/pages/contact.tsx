import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import contactAnimation from "@/assets/contact.json";

export default function Contact() {
  return (
    <Layout>
      <main className="pt-12">
        <Hero
          title="Contact Us"
          subtitle="Get in touch to book an appointment or learn more"
          ctaText="Call Now"
          ctaLink="tel:+911234567890"
          heroAnimation={contactAnimation}
        />

        {/* Contact Section */}
        <section className="py-16 bg-[#caf0f8]">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
            {/* Clinic Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#03045e] mb-6">
                Clinic Information
              </h2>
              <p className="text-[#0077b6] mb-4">
                Visit us at our clinic or contact us via phone or email. We look
                forward to helping you.
              </p>
              <ul className="space-y-3 text-[#0077b6]">
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
              <h2 className="text-2xl font-bold text-[#03045e] mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-4 text-black">
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
                  className="bg-[#0077b6] hover:bg-[#00b4d8] text-white px-6 py-3 rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-[#E8F6F6]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6 text-center">
              Find Us Here
            </h2>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Trivandrum Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.0000000000005!2d76.9426376!3d8.5241397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05c25c7a1f38ff%3A0x123456abcdef7890!2sThiruvananthapuram%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-[#CAF0F8] text-center text-[#03045e]">
          <h3 className="text-2xl font-semibold mb-4">Need Immediate Help?</h3>
          <a
            href="tel:+911234567890"
            className="bg-[#0077b6] hover:bg-[#00b4d8] text-white px-6 py-3 rounded-lg font-medium"
          >
            Call Now
          </a>
        </section>
      </main>
    </Layout>
  );
}
