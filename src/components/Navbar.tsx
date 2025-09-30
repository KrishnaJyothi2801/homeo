import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-[#0077b6] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          HomeoCare
        </Link>

        {/* Menu */}
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="text-white hover:text-[#CAF0F8]">Home</Link>
          <Link href="/about" className="text-white hover:text-[#CAF0F8]">About</Link>
          <Link href="/services" className="text-white hover:text-[#CAF0F8]">Services</Link>
          <Link href="/contact" className="text-white hover:text-[#CAF0F8]">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
