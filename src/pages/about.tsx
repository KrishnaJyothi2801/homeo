import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <Hero
        title="About Our Clinic"
        subtitle="Trusted care in homeopathy with years of experience"
        imageUrl="/images/hero-about.jpg"
        ctaText="Our Services"
        ctaLink="/services"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Our clinic has been serving patients with compassionate,
              personalized homeopathic treatments. We believe in treating the
              root cause of illness and restoring balance naturally.
            </p>
            <p className="text-gray-700">
              Our approach combines years of expertise with modern holistic
              methods to provide effective, safe solutions for the entire
              family.
            </p>
          </div>
          <img
            src="/images/clinic.jpg"
            alt="Clinic"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

    </Layout>
  );
}
