"use client";

import { useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import contactAnimation from "@/assets/contact.json";
import PricingCard from "@/components/PricingCard";
import pricingData from "@/assets/pricing.json";
import { useState, useEffect } from "react";

export default function Contact() {
  const searchParams = useSearchParams();
  const selectedType = searchParams.get("type") || "";

  const [appointmentType, setAppointmentType] = useState("");

  useEffect(() => {
    if (selectedType) setAppointmentType(selectedType);
  }, [selectedType]);

  return (
    <Layout>
      <main className="pt-12">
        <Hero
          title="Contact Us"
          subtitle="Get in touch to book an appointment or learn more"
          ctaText="Call Now"
          ctaLink="tel:+919443223601"
          heroAnimation={contactAnimation}
        />

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-[#E0F7FA]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#03045e] mb-12">
              Our Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingData.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  features={plan.features}
                  popular={plan.popular || false}
                  ctaText={plan.ctaText}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact + Map Section */}
        <section className="py-16 bg-[#caf0f8]">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
            {/* Clinic Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#03045e] mb-6">
                Clinic Information
              </h2>
              <p className="text-[#0077b6] mb-4">
                Visit us at our clinic or contact us via phone or email. We look
                forward to helping you.
              </p>
              <ul className="space-y-3 text-[#0077b6]">
                <li>
                  📍 <strong>Address:</strong> 123 Main Street, Thiruvananthapuram, India
                </li>
                <li>
                  📞 <strong>Phone:</strong> +91 94432 23601
                </li>
                <li>
                  ✉️ <strong>Email:</strong> info@homoeoclinic.com
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.0000000000005!2d76.9426376!3d8.5241397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05c25c7a1f38ff%3A0x123456abcdef7890!2sThiruvananthapuram%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
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
