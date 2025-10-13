"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import HamburgerMenuIcon from "./icons/HamburgerMenuIcon"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-[#0077b6] fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo_new.png"
            alt="Dr. Siva's Multi-speciality Homoeo Clinic Logo"
            width={300}
            height={80}
            className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
            priority
          />
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-lg font-medium transition-all duration-300 ${pathname === item.href
                ? "text-[#90e0ef] after:w-full after:bg-[#90e0ef]"
                : "text-white hover:text-[#CAF0F8] after:w-0 after:bg-[#CAF0F8] hover:after:w-full"
                } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all after:duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            // X Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-6 h-6 transition-transform duration-300 rotate-180"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <HamburgerMenuIcon className="w-6 h-6" fill="white" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          } bg-[#0077b6]`}
      >
        <div className="px-6 py-3 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium transition-colors duration-300 ${pathname === item.href
                ? "text-[#90e0ef]"
                : "text-white hover:text-[#CAF0F8]"
                }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
