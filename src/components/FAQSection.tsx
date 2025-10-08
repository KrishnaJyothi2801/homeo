"use client"
import { useState } from "react"
import faqs from "@/assets/faqs.json"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-[#caf0f8]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-[#03045e] text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 cursor-pointer"
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
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-[#0077b6]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
