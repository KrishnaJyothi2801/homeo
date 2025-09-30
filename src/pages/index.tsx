import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import heroAnimation from "@/assets/doctor.json";

export default function Home() {
  return (
    <Layout>
      <>
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

        {/* Call to action */}
        <section className="py-12 bg-[#0077b6] text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Need a Consultation?
          </h3>
          <a
            href="/contact"
            className="bg-[#90e0ef] text-[#03045e] px-6 py-3 rounded-lg font-medium hover:bg-[#00b4d8]"
          >
            Contact Us
          </a>
        </section>
      </>
    </Layout>
  );
}
