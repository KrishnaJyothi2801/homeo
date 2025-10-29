'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MenuIcon, XIcon } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-light text-black tracking-wider cursor-pointer"
                    >
                        ARCHITECT
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#projects" className="text-gray-700 hover:text-black transition-colors">
                            Projects
                        </a>
                        <a href="#services" className="text-gray-700 hover:text-black transition-colors">
                            Services
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-black transition-colors">
                            About
                        </a>
                        <a href="#contact" className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors">
                            Contact
                        </a>
                    </div>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <XIcon size={24} color='black' /> : <MenuIcon size={24} color='black' />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-4">
                        <a
                            href="#projects"
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-gray-700 hover:text-black transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#services"
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-gray-700 hover:text-black transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="#about"
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-gray-700 hover:text-black transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-6 py-2 bg-black text-white text-center hover:bg-gray-800 transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                )}

            </nav>
        </header>
    )
}
