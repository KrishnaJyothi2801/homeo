import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-700">
          HomeoCare
        </Link>

        {/* Menu */}
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-green-600">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-green-600">Services</Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
