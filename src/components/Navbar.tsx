"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import HamburgerMenuIcon from "./icons/HamburgerMenuIcon"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-[#0077b6] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          homoeoCare
        </Link>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "text-[#90e0ef] border-b-2 border-[#90e0ef]"
                  : "text-white hover:text-[#CAF0F8]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HamburgerMenuIcon className="w-7 h-7" fill="white" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0077b6] px-6 pb-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block ${
                pathname === item.href
                  ? "text-[#90e0ef] font-semibold"
                  : "text-white hover:text-[#CAF0F8]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
