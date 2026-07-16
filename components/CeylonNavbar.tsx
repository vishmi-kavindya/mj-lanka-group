"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/credit", label: "HOME" },
  { href: "/credit/about", label: "ABOUT US" },
  { href: "/credit/services", label: "SERVICES" },
  { href: "/credit/contact", label: "CONTACT US" },
];

export default function CeylonNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-lg">
      {/* --- Top Contact Bar --- */}
      <div className="bg-black text-gray-200 text-xs md:text-sm py-2 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
        <span className="flex items-center gap-2">
          <Phone size={13} className="text-[#D4AF37]" />
          Open Hours - Mon - Fri: 8.30 AM - 5.00 PM | Saturday: 9.00 AM - 1.00 PM
        </span>
        <div className="flex items-center gap-5">
          <a href="mailto:info@ceyloncredit.lk" className="flex items-center gap-2 hover:text-[#D4AF37] transition">
            <Mail size={13} />
            info@ceyloncredit.lk
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-[#D4AF37] transition">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z"/></svg>
          </a>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <nav className="bg-[#0d0d0d] text-white py-3 px-6 md:px-12 flex items-center justify-between border-b border-[#D4AF37]/40">
        {/* Logo */}
        <Link href="/credit" className="flex items-center gap-3">
          <img src="/ceylon-logo.png" alt="Ceylon Credit Business" className="h-10 md:h-12 w-auto" />
          <div className="hidden md:block">
            <h2 className="text-white font-bold text-lg leading-tight tracking-wide">CEYLON CREDIT</h2>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest">Business (Pvt) Ltd</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Call Now Button */}
        <a
          href="tel:+94362237489"
          className="hidden md:flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c19d2e] text-black px-5 py-2.5 rounded-full font-bold text-sm transition shadow-lg shadow-black/20"
        >
          <Phone size={16} />
          Call Now
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* --- Mobile Dropdown Menu --- */}
      {isOpen && (
        <div className="md:hidden bg-[#0d0d0d] text-white flex flex-col space-y-4 px-6 py-6 border-b border-[#D4AF37]/40">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium hover:text-[#D4AF37] transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+94362237489"
            className="bg-[#D4AF37] text-black text-center font-bold py-3 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}
