import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import heroAnimation from "@/assets/doctor.json";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <Layout>
      <main className="pt-12">
        <Hero
          title="Healing Through Homeopathy"
          subtitle="Experience holistic and natural healing with trusted care"
          ctaText="Book Appointment"
          ctaLink="/contact"
          heroAnimation={heroAnimation}
        />

        {/* About Preview */}
        <section className="py-16 bg-[#caf0f8]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">
              Welcome to Our Clinic
            </h2>
            <p className="max-w-3xl mx-auto text-[#0077b6]">
              We provide holistic and safe homeopathic treatments tailored to
              each patient’s unique needs. Our mission is to promote wellness
              through natural healing methods.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Call to action */}
        <section className="py-12 bg-[#E8F6F6] text-center text-[#03045e]">
          <h3 className="text-2xl font-semibold mb-4">Need a Consultation?</h3>
          <a
            href="/contact"
            className="bg-[#0077b6] hover:bg-[#00b4d8] text-white px-6 py-3 rounded-lg font-medium"
          >
            Contact Us
          </a>
        </section>
      </main>
    </Layout>
  );
}
