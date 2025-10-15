"use client";

import Layout from "@/components/Layout";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function BookAppointment() {
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    // Listen for the Calendly event after script loads
    const handleCalendlyEvent = (event: MessageEvent) => {
      // Make sure the event is coming from Calendly
      if (event.data.event && event.data.event === "calendly.event_scheduled") {
        setShowBackButton(true);
      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, []);


  return (
    <Layout>
      <div className="relative w-full min-h-[700px] bg-[#CAF0F8] flex flex-col items-center mt-10 md:mt-0">
        {/* Main Calendly + Loader Container */}
        <div className="relative w-full flex-1 flex items-center justify-center">
          {/* Background Loader */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#CAF0F8] z-0">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-blue-700 font-medium mt-4 mx-6">
              Hang on — we’re checking the doctor’s availability for you...
            </p>
          </div>

          {/* Calendly Widget */}
          <div
            className="calendly-inline-widget w-full h-[700px] relative z-10 mt-12"
            data-url="https://calendly.com/shivani-kj28-1/new-meeting?hide_gdpr_banner=1"
            style={{ minWidth: "320px" }}
          ></div>
        </div>
      </div>

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Back to Contact Us Button (shown only after form submission) */}
      {showBackButton && (
        <div className="w-full flex justify-center py-6 md:pb-6 md:pt-0 bg-[#CAF0F8]">
          <a
            href="/"
            className="px-6 py-3 bg-[#0077B6] text-white rounded-md hover:bg-[#03045E] transition"
          >
            Back to Home
          </a>
        </div>
      )}
    </Layout>
  );
}
