import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Layout>
    <>
      <Hero
        title="Healing Through Homeopathy"
        subtitle="Experience holistic and natural healing with trusted care"
        imageUrl="/images/hero-home.jpg"
        ctaText="Book Appointment"
        ctaLink="/contact"
      />

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to Our Clinic</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            We provide holistic and safe homeopathic treatments tailored to each
            patient’s unique needs. Our mission is to promote wellness through
            natural healing methods.
          </p>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 bg-amber-600 text-center text-white">
        <h3 className="text-2xl font-semibold mb-4">Need a Consultation?</h3>
        <a
          href="/contact"
          className="bg-white text-amber-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
        >
          Contact Us
        </a>
      </section>

    </>
    </Layout>
  );
}
