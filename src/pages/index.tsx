import Layout from "@/components/Layout";
import FAQSection from "@/components/FAQSection";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dr. Siva's Multi-speciality Homoeo Clinic | Holistic Healing & Homeopathy Care</title>
        <meta name="google-site-verification" content="i6EDw3mmCkQ4Gr43yUN_LHyuqdbac2_WGDq8Z05H--E" />
        <meta
          name="description"
          content="Experience personalized homeopathic care with Dr. Siva's Multi-speciality Homoeo Clinic. Over 31 years of trusted expertise in holistic healing and natural treatments."
        />
        <meta
          name="keywords"
          content="homeopathy, dr siva, homoeo clinic, natural healing, holistic health, alternative medicine, multi-speciality homoeo clinic, homeopathic treatment"
        />
        <meta name="author" content="Dr. Siva's Multi-speciality Homoeo Clinic" />
        <meta property="og:title" content="Dr. Siva's Multi-speciality Homoeo Clinic" />
        <meta
          property="og:description"
          content="Over 31 years of experience in homeopathy — restoring health through natural and holistic care."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drsivashomeo.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Siva's Multi-speciality Homoeo Clinic" />
        <meta
          name="twitter:description"
          content="Holistic homeopathic healing from Dr. Siva — trusted care for over 31 years."
        />
        <meta name="twitter:image" content="/images/og-image.png" />
        <link rel="canonical" href="https://drsivashomeo.vercel.app" />
      </Head>

      <main className="pt-16">
        {/* Doctor Hero Section with Background Image */}
        <div
          className="flex flex-col lg:flex-row items-center justify-center 
  p-6 pt-16 sm:p-10 sm:pt-16 md:p-16 md:pt-24 lg:p-20 shadow-xl bg-cover bg-center bg-no-repeat bg-[#caf0f8]"
          style={{ backgroundImage: "url('/images/generated-image.png')" }}
        >
          {/* Doctor Image */}
          <img
            src="/images/doctor.jpeg"
            alt="Dr.Siva Multi-speciality Homoeo Care"
            className="w-40 h-52 sm:w-52 sm:h-64 md:w-80 md:h-[26rem] lg:w-96 lg:h-[30rem]
  rounded-full object-cover object-[center_top] mb-6 lg:mb-0 lg:mx-auto transition-transform duration-500 
  hover:scale-105 animate-[float_6s_ease-in-out_infinite]"
          />
          {/* Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left 
  p-4 sm:p-6 md:p-8 max-w-3xl mx-auto mt-4 lg:mt-0 hover:shadow-[#0077b6]/50 transition-all duration-300">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#03045e] mb-2 tracking-tight drop-shadow-sm">
              Dr. Sivasubramoniam
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#03045e] mb-4 font-semibold italic">
              B.Sc; M.D (Homoeo)
            </p>

            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#03045e] mb-4">
              Multi-speciality Homoeo Care
            </p>

            <p className="text-xl md:text-2xl text-[#0077b6] mb-4 font-semibold">
              Over 31 years of experience in the field of Homoeopathy.
            </p>

            <p className="text-lg md:text-xl text-[#0077b6] mb-8 leading-relaxed max-w-xl">
              Dr. Siva is dedicated to providing personalized care and restoring balance naturally.
              His philosophy focuses on treating the root cause, not just the symptoms, ensuring
              the best outcomes for every patient.
            </p>

            {/* Book Appointment Button */}
            <a
              href="/contact#pricing"
              className="bg-[#0077b6] hover:bg-[#03045E] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-transform duration-500 
  hover:scale-105 animate-[float_6s_ease-in-out_infinite]"
            >
              Book Appointment
            </a>
          </div>
        </div>



        {/* Main Hero Section */}
        {/* <Hero
          title="Healing Through homoeopathy"
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
              Dr.Siva's journey into homoeopathy began over 30 years ago with a simple belief: true healing comes from addressing the root cause, not just the symptoms. Over the years, he has guided countless patients on a path to holistic wellness, combining his deep knowledge with a compassionate touch. Every consultation is a personal journey, where he listens, understands, and crafts natural solutions tailored to each individual. His mission is simple—restore balance, nurture health, and empower his patients to live their best lives naturally.
            </p>
            {/* <p className="text-[#0077b6] mb-8">
              Our approach combines years of expertise with modern holistic
              methods to provide effective, safe solutions for the entire
              family.
            </p> */}
          </div>
        </section>

        <section className="pt-16 pb-10 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">
              Welcome to Our Homoeopathic Clinic
            </h2>
            <p className="max-w-3xl mx-auto text-[#0077b6]">
              We provide holistic and safe homoeopathic treatments tailored to
              each patient’s unique needs. Our mission is to promote wellness
              through natural healing methods.
            </p>
          </div>
        </section>
        {/* Consultation Workflow Section */}
        <section className="pb-16 bg-white text-center">
          <div className="container mx-auto px-4">
            <img
              src="/images/workflow.jpeg"
              alt="Consultation Workflow"
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Call to action */}
        <section className="py-12 bg-[#E8F6F6] text-center text-[#03045e]">
          <h3 className="text-2xl font-semibold mb-4">Need a Consultation?</h3>
          <button className="transition-transform duration-500 hover:scale-105 animate-[float_6s_ease-in-out_infinite]">
            <a
              href="/contact"
              className="bg-[#0077b6] hover:bg-[#00b4d8] text-white px-6 py-3 rounded-lg font-medium "
            >
              Contact Us
            </a>
          </button>
        </section>
      </main>
    </Layout>
  );
}
