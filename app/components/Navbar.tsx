// app/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/90 backdrop-blur-md border-b border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-black text-white tracking-widest uppercase">
              Amer.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#d4ff39] transition-colors text-sm font-bold uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-[#d4ff39] hover:bg-[#c2ed2c] text-black px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-colors"
            >
              Contact Me
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#030712] border-b border-gray-900 pb-4">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-bold uppercase tracking-wider text-gray-300 hover:text-[#d4ff39] hover:bg-gray-900 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#d4ff39] text-black px-4 py-3 rounded-full text-base font-bold uppercase tracking-wider"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}