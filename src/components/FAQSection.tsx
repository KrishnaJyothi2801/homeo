"use client"
import { useState } from "react"
import { motion, easeOut } from "framer-motion" // ✅ use named easing function
import faqs from "@/assets/faqs.json"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Type-safe animation variant using framer-motion easing
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut }, // ✅ correct easing type
    },
  }

  return (
    <section className="relative py-16 bg-[#caf0f8]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/bg_leaf.jpeg')" }}
      ></div>

      {/* Optional White Overlay */}
      <div className="absolute inset-0 bg-[#E8F6F6]/30"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 max-w-3xl">
        <motion.h2
          className="text-3xl font-bold text-[#0A0B62] text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-5 cursor-pointer"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
