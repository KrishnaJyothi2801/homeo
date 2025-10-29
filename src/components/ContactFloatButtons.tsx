export default function ContactFloatButtons() {
  const whatsappNumber = "919443223601"
  const message = encodeURIComponent("Hi! I would like enquire more on this!")
  const phoneNumber = "+919443223601"

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.52 3.48A11.99 11.99 0 0012 0C5.37 0 0 5.37 0 12a11.92 11.92 0 001.63 6.01L0 24l6.14-1.61A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.19-3.48-8.52zm-8.52 18c-2.06 0-3.99-.55-5.68-1.58l-.41-.25-3.65.95.97-3.55-.27-.42A9.963 9.963 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.5-7.67c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.17.2-.33.22-.63.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.51-1.79-1.69-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.33.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53-.17 0-.37-.02-.57-.02s-.52.07-.79.37c-.27.3-1.03 1.01-1.03 2.45s1.06 2.85 1.2 3.05c.14.2 2.07 3.17 5.02 4.44.7.3 1.24.48 1.66.62.7.22 1.34.19 1.84.11.56-.1 1.78-.73 2.03-1.44.25-.7.25-1.3.18-1.44-.07-.15-.27-.22-.57-.37z"/>
        </svg>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        title="Call Now"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.88 19.88 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.1 12.1 0 0 0 .65 2.81 2 2 0 0 1-.45 2.11L9 10.91a16 16 0 0 0 6.17 6.17l1.27-1.27a2 2 0 0 1 2.11-.45 12.1 12.1 0 0 0 2.81.65 2 2 0 0 1 1.72 2z"/>
        </svg>
      </a>
    </div>
  )
}
