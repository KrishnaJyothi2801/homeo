import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4! bg-amber-300!">
        {/* Logo */}
        <h1 className="text-2xl! text-blue-950 font-bold! h-10"> Dr. Mony </h1>

        {/* Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><Link href="/" className="text-xl! font-semibold! hover:text-blue-950! px-2!">Home</Link></li>
          <li><Link href="/about" className="text-xl! font-semibold! hover:text-blue-950! px-2!">About</Link></li>
          <li><Link href="/services" className="text-xl! font-semibold! hover:text-blue-950! px-2!">Services</Link></li>
          <li><Link href="/contact" className="text-xl! font-semibold! hover:text-blue-950! px-2!">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
