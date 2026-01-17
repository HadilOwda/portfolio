import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1625]/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-semibold text-[#e5e5e5] hover:text-[#14b8a6] transition-colors duration-200"
          >
            Hadil Owda
          </Link>
          <div className="flex space-x-8">
            <Link
              href="/"
              className="text-[#e5e5e5]/80 hover:text-[#14b8a6] transition-all duration-200 font-medium text-base hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-[#e5e5e5]/80 hover:text-[#14b8a6] transition-all duration-200 font-medium text-base hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-[#e5e5e5]/80 hover:text-[#14b8a6] transition-all duration-200 font-medium text-base hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[#e5e5e5]/80 hover:text-[#14b8a6] transition-all duration-200 font-medium text-base hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
