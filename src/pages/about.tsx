import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import aboutAnimation from "@/assets/about.json";
import testimonials from "@/assets/testimonials.json";

export default function About() {
  return (
    <Layout>
      <main className="pt-12">
        <Hero
          title="About Our Clinic"
          subtitle="Trusted care in homeopathy with years of experience"
          ctaText="Our Services"
          ctaLink="/services"
          heroAnimation={aboutAnimation}
        />

        {/* Our Story Section */}
        <section className="py-16 bg-[#caf0f8]">
          <div className="container mx-auto px-4 text-center md:text-left">
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
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#03045e] mb-12">
              What Our Patients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-[#caf0f8] p-6 rounded-xl shadow-md">
                  <p className="text-[#0077b6] italic mb-4">“{t.feedback}”</p>
                  <h4 className="font-semibold text-[#03045e]">
                    – {t.name} {t.age ? `(Age: ${t.age})` : ""}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-[#E8F6F6] text-center text-[#03045e]">
          <h3 className="text-2xl font-semibold mb-4">Explore Our Services</h3>
          <a
            href="/services"
            className="bg-[#0077b6] hover:bg-[#00b4d8] text-white px-6 py-3 rounded-lg font-medium"
          >
            View Services
          </a>
        </section>
      </main>
    </Layout>
  );
}
