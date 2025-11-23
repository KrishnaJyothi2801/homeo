import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import servicesAnimation from "@/assets/services.json";
import services_card from "@/assets/services_cards.json";
import Head from "next/head";

export default function Services() {
  const serviceItems = services_card;

  return (
    <Layout>
      <Head>
        <title>Our Services | Dr. Siva's Multi-speciality Homoeo Clinic</title>
        <meta
          name="description"
          content="Explore a range of holistic homeopathic treatments at Dr. Siva's Multi-speciality Homoeo Clinic. Safe, natural, and personalized care for all ages."
        />
        <meta
          name="keywords"
          content="homeopathy services, dr siva, holistic healing, natural remedies, homoeo clinic, alternative medicine, wellness care, homeopathic treatments"
        />
        <meta name="author" content="Dr. Siva's Multi-speciality Homoeo Clinic" />
        <meta property="og:title" content="Our Services | Dr. Siva's Multi-speciality Homoeo Clinic" />
        <meta
          property="og:description"
          content="Comprehensive homeopathic treatments providing safe, natural, and effective care for long-term wellness."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drsivashomeo.vercel.app/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Dr. Siva's Multi-speciality Homoeo Clinic" />
        <meta
          name="twitter:description"
          content="Discover holistic homeopathic treatments designed for lasting wellness and natural healing."
        />
        <meta name="twitter:image" content="/images/og-image.png" />
        <link rel="canonical" href="https://drsivashomeo.vercel.app/services" />
      </Head>

      <main className="pt-12">
        {/* <Hero
          title="Our Services"
          subtitle="Comprehensive homoeopathic care for all ages"
          ctaText="Book Appointment"
          ctaLink="/contact"
          heroAnimation={servicesAnimation}
        /> */}

        {/* Why Choose Us Section */}
        <section className="py-16 bg-[#caf0f8]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-[#03045e] my-6">
              Our Services
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
        <section className="py-12 bg-[#E8F6F6] text-center text-[#03045e]">
          <h3 className="text-2xl font-semibold mb-4">Book Your Appointment</h3>
          <button className="transition-transform duration-500 hover:scale-105 animate-[float_6s_ease-in-out_infinite]">
            <a
              href="/contact"
              className="bg-[#0077b6] hover:bg-[#00b4d8] text-white px-6 py-3 rounded-lg font-medium"
            >
              Contact Us
            </a>
          </button>
        </section>
      </main>
    </Layout>
  );
}
