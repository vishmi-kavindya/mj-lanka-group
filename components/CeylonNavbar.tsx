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
    <header className="w-full sticky top-0 z-50">
      {/* --- Top Contact Bar --- */}
      <div className="bg-black text-gray-300 text-xs md:text-[13px] py-2 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-0">
        <span className="flex items-center gap-2">
          <Phone size={13} className="text-[#D4AF37]" />
          Open Hours - Mon - Fri: 8.30 AM - 5.00 PM | Saturday: 9.00 AM - 1.00 PM
        </span>
        <div className="flex items-center gap-5">
          <a href="mailto:info@ceyloncredit.lk" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
            <Mail size={13} />
            info@ceyloncredit.lk
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-[#D4AF37] transition-colors duration-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z"/></svg>
          </a>
        </div>
      </div>

      {/* --- Gold gradient hairline --- */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70"></div>

      {/* --- Main Navbar --- */}
      <nav className="bg-black/95 backdrop-blur-md text-white py-3 px-6 md:px-12 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        {/* Logo */}
        <Link href="/credit" className="flex items-center gap-3 group">
          <img
            src="/ceylon-logo.png"
            alt="Ceylon Credit Business"
            className="h-11 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_10px_rgba(212,175,55,0.35)]"
          />
          <div className="hidden md:block">
            <h2 className="text-white font-bold text-lg leading-tight tracking-wide">CEYLON CREDIT</h2>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em]">Business (Pvt) Ltd</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-9 text-sm font-semibold tracking-wide">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative group py-1">
                <span className={active ? "text-[#D4AF37]" : "text-white group-hover:text-[#D4AF37] transition-colors duration-300"}>
                  {link.label}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Call Now Button */}
        <a
          href="tel:+94362237489"
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#f0d67a] via-[#D4AF37] to-[#b8892a] hover:brightness-110 text-black px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_6px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_8px_28px_rgba(212,175,55,0.55)] hover:-translate-y-0.5"
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
        <div className="md:hidden bg-black text-white flex flex-col space-y-4 px-6 py-6 border-t border-[#D4AF37]/30">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors duration-300 ${
                pathname === link.href ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+94362237489"
            className="bg-gradient-to-r from-[#f0d67a] via-[#D4AF37] to-[#b8892a] text-black text-center font-bold py-3 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}