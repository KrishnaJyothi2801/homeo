export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-4">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
        <p>© 2025 Architect. All rights reserved.</p>
      </div>

      <div className="mt-4 bg-black border-t border-[#005f91]">
        <div className="max-w-7xl mx-auto px-6 text-center py-4">
          <p className="text-sm text-white font-semibold">
            🌐 Developed and Maintained by
            <a
              href="https://webaglet.vercel.app/"
              className="bg-gradient-to-r from-[#0077b6] via-[#00b4d8] to-[#90e0ef] 
              bg-clip-text text-transparent hover:text-green-200 transition-colors 
              cursor-pointer ml-1 underline underline-offset-4 decoration-[#00b4d8]"
            >
              WebAglet
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
