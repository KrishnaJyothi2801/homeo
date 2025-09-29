import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Services() {
  return (
    <Layout>
      <Hero
        title="Our Services"
        subtitle="Comprehensive homeopathic care for all ages"
        imageUrl="/images/hero-services.jpg"
        ctaText="Book Appointment"
        ctaLink="/contact"
      />

      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            We provide natural, holistic remedies with proven results, ensuring
            long-term wellness without side effects.
          </p>
        </div>
      </section>
    </Layout>
  );
}
