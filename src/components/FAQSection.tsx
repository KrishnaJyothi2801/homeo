"use client"
import { useState } from "react"
import faqs from "@/assets/faqs.json"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-16 bg-[#caf0f8]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/bg_leaf.jpeg')" }}
      ></div>

      {/* Optional White Overlay for readability */}
      <div className="absolute inset-0 bg-[#E8F6F6]/30"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-[#0A0B62] text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-5 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#03045e]">
                  {faq.question}
                </h3>
                <span
                  className={`text-[#0077b6] text-2xl transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Smooth expandable answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-60 mt-3" : "max-h-0"
                }`}
              >
                <p
                  className="text-[#0077b6]"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
