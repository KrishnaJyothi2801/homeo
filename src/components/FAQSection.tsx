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
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#03045e]">
                  {faq.question}
                </h3>
                <span className="text-[#0077b6] text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="mt-3 text-[#0077b6]">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
