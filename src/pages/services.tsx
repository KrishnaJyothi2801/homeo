import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import servicesAnimation from "@/assets/services.json";
import services_card from "@/assets/services_cards.json";

export default function Services() {
  const serviceItems = services_card;

  return (
    <Layout>
      <main className="pt-12">
        <Hero
          title="Our Services"
          subtitle="Comprehensive homeopathic care for all ages"
          ctaText="Book Appointment"
          ctaLink="/contact"
          heroAnimation={servicesAnimation}
        />

        {/* Why Choose Us Section */}
        <section className="py-16 bg-[#caf0f8]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">
              Why Choose Us?
            </h2>
            <p className="max-w-3xl mx-auto text-[#0077b6] mb-12">
              We provide natural, holistic remedies with proven results,
              ensuring long-term wellness without side effects. Our approach is
              personalized, safe, and effective for patients of all ages.
            </p>

            {/* Service Cards */}
            <div className="grid gap-8 md:grid-cols-3">
              {serviceItems.map((service, idx) => (
                <Card
                  key={idx}
                  imageUrl={service.imageUrl}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-[#0077b6] text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">Book Your Appointment</h3>
          <a
            href="/contact"
            className="bg-[#90e0ef] text-[#03045e] px-6 py-3 rounded-lg font-medium hover:bg-[#00b4d8]"
          >
            Contact Us
          </a>
        </section>
      </main>
    </Layout>
  );
}
