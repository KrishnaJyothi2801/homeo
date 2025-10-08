import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import heroAnimation from "@/assets/doctor.json";
import aboutAnimation from "@/assets/about.json";
import testimonials from "@/assets/testimonials.json";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <Layout>
      <main className="pt-12">
        {/* Doctor Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-12 md:p-20 shadow-xl">
          <img
            src="/images/doctor-photo.png"
            alt="Dr. Mani"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover mb-8 lg:mb-0 md:mr-12"
          />
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#03045e] mb-4">
              Dr. Mani (Homeopathy)
            </h1>
            <p className="text-xl md:text-2xl text-[#0077b6] mb-4 font-semibold">
              Over 15 years of experience in holistic and natural healing
            </p>
            <p className="text-lg md:text-xl text-[#0077b6]">
              Dr. Mani is dedicated to providing personalized care and restoring
              balance naturally. Her philosophy focuses on treating the root
              cause, not just the symptoms, ensuring the best outcomes for every
              patient.
            </p>
          </div>
        </div>

        {/* Main Hero Section */}
        {/* <Hero
          title="Healing Through Homeopathy"
          subtitle="Experience holistic and natural healing with trusted care"
          ctaText="Book Appointment"
          ctaLink="/contact"
          heroAnimation={heroAnimation}
        /> */}

        {/* About / Our Story Section */}
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
            <p className="text-[#0077b6] mb-8">
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

        {/* FAQ Section */}
        <FAQSection />

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
