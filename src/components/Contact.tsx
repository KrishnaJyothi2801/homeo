'use client'

import { useState } from 'react'
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const form = e.target
    const data = new FormData(form)

    const res = await fetch('https://formspree.io/f/xrbyvbre', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    })

    if (res.ok) {
      setSubmitted(true)
      form.reset()
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg">
            Start your project with us today
          </p>
        </div>

        {/* CONTACT INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <MailIcon size={32} className="mx-auto mb-4" />
            <h3 className="text-lg font-light mb-2">Email</h3>
            <p className="text-gray-400">info@architect.com</p>
          </div>
          <div className="text-center">
            <PhoneIcon size={32} className="mx-auto mb-4" />
            <h3 className="text-lg font-light mb-2">Phone</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
          <div className="text-center">
            <MapPinIcon size={32} className="mx-auto mb-4" />
            <h3 className="text-lg font-light mb-2">Office</h3>
            <p className="text-gray-400">123 Design Street, NY</p>
          </div>
        </div>

{submitted && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div className="bg-white text-black p-10 rounded shadow-xl text-center max-w-md">
      <h3 className="text-2xl font-light mb-3">✅ Message Sent!</h3>
      <p className="text-gray-700 mb-6">
        Thanks for reaching out. We will get back to you shortly.
      </p>
      <button
        onClick={() => setSubmitted(false)}
        className="px-6 py-2 bg-black text-white hover:bg-gray-800 cursor-pointer"
      >
        Close
      </button>
    </div>
  </div>
)}

<form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div>
              <label className="block text-sm font-light mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-light mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-light mb-2">Message</label>
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
              ></textarea>
            </div>
  <button className="w-full px-8 py-4 bg-white text-black hover:bg-gray-100">
    Send Message
  </button>
</form>

      </div>
    </section>
  )
}
