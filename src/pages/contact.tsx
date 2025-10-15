"use client";

import { useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import contactAnimation from "@/assets/contact.json";
import PricingCard from "@/components/PricingCard";
import pricingData from "@/assets/pricing.json";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Contact() {
  const searchParams = useSearchParams();
  const selectedType = searchParams.get("type") || "";

  const [appointmentType, setAppointmentType] = useState("");

  useEffect(() => {
    if (selectedType) setAppointmentType(selectedType);
  }, [selectedType]);

  return (
    <Layout>
      <Head>
        <title>Contact Us | Dr. Siva's Multi-speciality Homoeo Clinic</title>
        <meta
          name="description"
          content="Book your appointment with Dr. Siva's Multi-speciality Homoeo Clinic. Contact us for personalized homeopathic care and holistic wellness."
        />
        <meta
          name="keywords"
          content="contact dr siva, homeopathy consultation, book appointment, homoeo clinic trivandrum, holistic healing"
        />
        <meta name="author" content="Dr. Siva's Multi-speciality Homoeo Clinic" />
        <meta
          property="og:title"
          content="Contact Us | Dr. Siva's Multi-speciality Homoeo Clinic"
        />
        <meta
          property="og:description"
          content="Reach out to Dr. Siva for homeopathic consultations, holistic treatment plans, and expert care in Trivandrum, Kerala."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | Dr. Siva's Multi-speciality Homoeo Clinic"
        />
        <meta
          name="twitter:description"
          content="Book an appointment or get in touch with Dr. Siva's Multi-speciality Homoeo Clinic for holistic homeopathic treatment."
        />
        <meta name="twitter:image" content="/images/og-image.png" />
        <link rel="canonical" href="https://your-domain.com/contact" />
      </Head>

      <main className="pt-12">
        <Hero
          title="Contact Us"
          subtitle="Get in touch to book an appointment or learn more"
          ctaText="Call Now"
          ctaLink="tel:+919497760537"
          heroAnimation={contactAnimation}
        />

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-[#E0F7FA]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#03045e] mb-12">
              Book your appointment with us!
            </h2>

            <div className="inline-block bg-white rounded-3xl shadow-lg p-10 md:p-16 transform transition-transform duration-500 hover:scale-105">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#0077b6] mb-4">
                  Basic Consultation
                </h3>
              </div>

              <div className="space-y-4 text-left md:text-center">
                <div className="flex justify-between md:justify-center gap-4 md:gap-10 text-gray-700 text-lg md:text-xl font-medium">
                  <span>Consulting Fee:</span>
                  <span className="text-[#03045e]">₹300/-</span>
                </div>
                <div className="flex justify-between md:justify-center gap-4 md:gap-10 text-gray-700 text-lg md:text-xl font-medium">
                  <span>Medicine (1 month):</span>
                  <span className="text-[#03045e]">₹700/-</span>
                </div>
                <div className="flex justify-between md:justify-center gap-4 md:gap-10 text-gray-700 text-lg md:text-xl font-medium">
                  <span>Package & Speed Post:</span>
                  <span className="text-[#03045e]">₹200/-</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/book_appointment"
                  className="inline-block px-8 py-4 bg-[#0077b6] text-white font-semibold rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact + Map Section */}
        <section className="py-16 bg-[#caf0f8]">
          <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-stretch">
            {/* Clinic Information */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#03045e] mb-4">
                Clinic Information
              </h2>
              <p className="text-[#0077b6] mb-6 flex-shrink-0 text-sm sm:text-base">
                Visit our clinic or contact us via phone or email. We are here to help you.
              </p>

              <div className="space-y-4 text-[#0077b6] text-sm sm:text-base mt-auto">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <strong>Address:</strong> <br />
                    Dr. Siva, BSc; MD(Homoeo) <br />
                    TC.20/56(16), CIT Road, <br />
                    Melaranoor, Karamana PO, Trivandrum - 695023 <br />
                    Kerala State
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <strong>Phone:</strong> +91 94977 60537
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <strong>Email:</strong> subramoniam.siva@gmail.com
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full rounded-xl shadow-md overflow-hidden">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3946.194513979893!2d76.96025432449406!3d8.480458847335267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTC.20%2F56(16)%2C%20CIT%20Road%2C%20Melaranoor%2C%20Karamana%20PO%2C%20Trivandrum%20-%20695023%2C%20Kerala!5e0!3m2!1sen!2sin!4v1760549140541!5m2!1sen!2sin" className="w-full h-64 sm:h-80 md:h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
