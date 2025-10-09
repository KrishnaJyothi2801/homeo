import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import heroAnimation from "@/assets/doctor.json";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <Layout>
      <main className="pt-12">
        {/* Doctor Hero Section with Background Image */}
        <div
          className="flex flex-col lg:flex-row items-center justify-center p-12 md:p-20 shadow-xl
     bg-cover bg-center bg-no-repeat bg-[#caf0f8]"
          style={{ backgroundImage: "url('/images/generated-image.png')" }}
        >
          <img
            src="/images/dp_placeholder.png"
            alt="Dr. Mani"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover mb-8 lg:mb-0 md:mr-20"
          />
          <div className="text-center md:text-left max-w-xl p-6 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#03045e] mb-4">
              Dr. Mani (Homeopathy)
            </h1>
            <p className="text-xl md:text-2xl text-[#0077b6] mb-4 font-semibold">
              Over 15 years of experience in holistic and natural healing
            </p>
            <p className="text-lg md:text-xl text-[#0077b6] mb-6">
              Dr. Mani is dedicated to providing personalized care and restoring
              balance naturally. Her philosophy focuses on treating the root
              cause, not just the symptoms, ensuring the best outcomes for every
              patient.
            </p>
            {/* Book Appointment Button */}
            <a
              href="/contact#pricing"
              className="bg-[#0077b6] hover:bg-[#03045E] text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Book Appointment
            </a>
          </div>
        </div>


        {/* Main Hero Section */}
        {/* <Hero
          title="Healing Through Homeopathy"
          subtitle="Experience holistic and natural healing with trusted care"
          ctaText="Book Appointment"
          ctaLink="/contact"
          heroAnimation={heroAnimation}
        />

        {/* About / Our Story Section */}
        <section className="py-16 bg-[#caf0f8] px-10">
          <div className="container mx-auto px-4 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">
              Our Story
            </h2>
            <p className="text-[#0077b6] mb-4">
              Dr. Mani’s journey into homeopathy began over 15 years ago with a simple belief: true healing comes from addressing the root cause, not just the symptoms. Over the years, she has guided countless patients on a path to holistic wellness, combining her deep knowledge with a compassionate touch. Every consultation is a personal journey, where she listens, understands, and crafts natural solutions tailored to each individual. Her mission is simple—restore balance, nurture health, and empower her patients to live their best lives naturally.
            </p>
            {/* <p className="text-[#0077b6] mb-8">
              Our approach combines years of expertise with modern holistic
              methods to provide effective, safe solutions for the entire
              family.
            </p> */}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
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
