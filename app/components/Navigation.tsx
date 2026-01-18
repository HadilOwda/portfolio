"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1625]/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-lg sm:text-xl font-semibold text-[#e5e5e5] hover:text-[#14b8a6] transition-colors duration-200"
          >
            Hadil Owda
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link
              href="/"
              className="text-[#e5e5e5]/80 hover:text-[#14b8a6] transition-all duration-200 font-medium text-base hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] min-h-[44px] flex items-center"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-[#e5e5e5]/80 hover:text-[#14b8a6] transition-all duration-200 font-medium text-base hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] min-h-[44px] flex items-center"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-[#e5e5e5]/80 hover:text-[#14b8a6] transition-all duration-200 font-medium text-base hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] min-h-[44px] flex items-center"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[#e5e5e5]/80 hover:text-[#14b8a6] transition-all duration-200 font-medium text-base hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] min-h-[44px] flex items-center"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 text-[#e5e5e5] hover:text-[#14b8a6] transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
              }`}
            />
            <span
              className={`bg-current block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col py-4 space-y-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-[#e5e5e5]/80 hover:text-[#14b8a6] transition-all duration-200 font-medium text-base hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] min-h-[44px] flex items-center"
            >
              Home
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="text-[#e5e5e5]/80 hover:text-[#14b8a6] transition-all duration-200 font-medium text-base hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] min-h-[44px] flex items-center"
            >
              Projects
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-[#e5e5e5]/80 hover:text-[#14b8a6] transition-all duration-200 font-medium text-base hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] min-h-[44px] flex items-center"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-[#e5e5e5]/80 hover:text-[#14b8a6] transition-all duration-200 font-medium text-base hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] min-h-[44px] flex items-center"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
