import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import aboutAnimation from "@/assets/about.json";

export default function About() {
  return (
    <Layout>
      <>
        <Hero
          title="About Our Clinic"
          subtitle="Trusted care in homeopathy with years of experience"
          ctaText="Our Services"
          ctaLink="/services"
          heroAnimation={aboutAnimation}
        />

        {/* Our Story Section */}
        <section className="py-16 bg-[#caf0f8]">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#03045e] mb-6">
                Our Story
              </h2>
              <p className="text-[#0077b6] mb-4">
                Our clinic has been serving patients with compassionate,
                personalized homeopathic treatments. We believe in treating the
                root cause of illness and restoring balance naturally.
              </p>
              <p className="text-[#0077b6]">
                Our approach combines years of expertise with modern holistic
                methods to provide effective, safe solutions for the entire
                family.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-[#0077b6] text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">Explore Our Services</h3>
          <a
            href="/services"
            className="bg-[#90e0ef] text-[#03045e] px-6 py-3 rounded-lg font-medium hover:bg-[#00b4d8]"
          >
            View Services
          </a>
        </section>
      </>
    </Layout>
  );
}
