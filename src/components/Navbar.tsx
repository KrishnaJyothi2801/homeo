"use client"

import { useState } from "react"
import Link from "next/link"
import HamburgerMenuIcon from "./icons/HamburgerMenuIcon"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#0077b6] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          HomeoCare
        </Link>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="text-white hover:text-[#CAF0F8]">Home</Link>
          <Link href="/about" className="text-white hover:text-[#CAF0F8]">About</Link>
          <Link href="/services" className="text-white hover:text-[#CAF0F8]">Services</Link>
          <Link href="/contact" className="text-white hover:text-[#CAF0F8]">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HamburgerMenuIcon fill="white"/>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0077b6] px-6 pb-4 space-y-3">
          <Link
            href="/"
            className="block text-white hover:text-[#CAF0F8]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-[#CAF0F8]"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="block text-white hover:text-[#CAF0F8]"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-[#CAF0F8]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
