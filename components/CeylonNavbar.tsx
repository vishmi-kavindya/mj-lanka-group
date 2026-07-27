"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, Mail, Home, Users, Settings, PhoneCall, Banknote, Building2, Car, CreditCard } from "lucide-react";

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
      {/* --- Top Contact Bar — 3-column so center button is truly centered --- */}
      <div className="hidden md:grid bg-black text-gray-300 text-xs md:text-[13px] py-2 px-6 md:px-12 grid-cols-3 items-center">

        {/* Left — Hours */}
        <span className="flex items-center gap-2 justify-start">
          <Phone size={13} className="text-[#D4AF37]" />
          <span className="hidden lg:inline">Open Hours - Mon - Fri: 8.30 AM - 5.00 PM | Saturday: 9.00 AM - 1.00 PM</span>
          <span className="lg:hidden">Mon–Fri: 8.30–5.00 | Sat: 9.00–1.00</span>
        </span>

        {/* Center — MJ Lanka Group Home Button */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="group flex items-center gap-1.5 transition-all duration-300"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D4AF37]/30 group-hover:border-[#D4AF37]/70 bg-[#D4AF37]/8 group-hover:bg-[#D4AF37]/18 transition-all duration-300" style={{ boxShadow: "0 0 10px rgba(212,175,55,0.08)" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors duration-300">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="text-[10.5px] font-semibold tracking-wide text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap">
                MJ Lanka Group
              </span>
            </span>
          </Link>
        </div>

        {/* Right — Email + Social */}
        <div className="flex items-center gap-5 justify-end">
          <a href="mailto:info@ceyloncredit.lk" className="hidden sm:flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
            <Mail size={13} />
            info@ceyloncredit.lk
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-[#D4AF37] transition-colors duration-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" /></svg>
          </a>
        </div>
      </div>

      {/* --- Gold gradient hairline --- */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70"></div>

      {/* --- Main Navbar --- */}
      <nav className="bg-black/95 backdrop-blur-md text-white py-3 px-4 md:px-12 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        {/* Logo */}
        <Link href="/credit" className="flex items-center gap-3 group">
          <img
            src="/ceylon-logo.png"
            alt="Ceylon Credit Business"
            className="h-11 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_10px_rgba(212,175,55,0.35)]"
          />
          <div className="block">
            <h2 className="text-white font-bold text-sm md:text-lg leading-tight tracking-wide">CEYLON CREDIT</h2>
            <p className="text-[#D4AF37] text-[9px] md:text-[10px] uppercase tracking-[0.2em]">Business (Pvt) Ltd</p>
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
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Right side: Brand Switcher + Call Now */}
        <div className="hidden md:flex items-center gap-3">

          {/* ✨ Brand Switcher Pill — gold theme (Credit active) */}
          <div
            className="relative flex items-center rounded-full p-[3px] text-[11px] font-bold tracking-wide overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1a1505, #12100a)",
              border: "1px solid rgba(212,175,55,0.45)",
              boxShadow: "0 0 16px rgba(212,175,55,0.18)",
            }}
          >
            {/* Gold sliding indicator — on Credit side (right) */}
            <span
              className="absolute top-[3px] h-[calc(100%-6px)] rounded-full"
              style={{
                width: "calc(50% - 3px)",
                left: "calc(50%)",
                background: "linear-gradient(135deg, #f0d67a, #D4AF37, #b8892a)",
                boxShadow: "0 0 12px rgba(212,175,55,0.65)",
              }}
            />
            {/* Motors Tab — inactive */}
            <Link
              href="/motors"
              className="relative z-10 flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap text-gray-400 hover:text-gray-200"
            >
              <span>🚗</span>
              <span>Motors</span>
            </Link>
            {/* Credit Tab — active */}
            <Link
              href="/credit"
              className="relative z-10 flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap text-black"
            >
              <span>💳</span>
              <span>Credit</span>
            </Link>
          </div>

          {/* Call Now Button */}
          <a
            href="tel:+94362237489"
            className="flex items-center gap-2 bg-gradient-to-r from-[#f0d67a] via-[#D4AF37] to-[#b8892a] hover:brightness-110 text-black px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_6px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_8px_28px_rgba(212,175,55,0.55)] hover:-translate-y-0.5"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile: Quick call + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+94362237489"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
            style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.35)', color: '#D4AF37' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.05 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
            Call
          </a>
          <button
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-300"
            style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Menu ── */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[999] flex flex-col"
          style={{ background: 'linear-gradient(160deg, #0a0a0a 0%, #0f0d02 50%, #0a0a0a 100%)' }}
        >
          {/* Gold glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-40 rounded-full pointer-events-none opacity-25"
            style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.5) 0%, transparent 70%)' }}
          />

          {/* Header */}
          <div className="relative flex items-center justify-between px-5 py-4 border-b border-[#D4AF37]/15">
            <div className="flex items-center gap-3">
              <img src="/ceylon-logo.png" alt="Ceylon Credit" className="h-10 w-auto drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
              <div>
                <p className="text-white font-bold text-sm">CEYLON CREDIT</p>
                <p className="text-[10px] font-medium" style={{ color: '#D4AF37' }}>Business (Pvt) Ltd</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
              style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto px-5 pt-6 pb-4 space-y-1">
            {[
              { label: 'Home', href: '/credit', icon: <Home size={18} /> },
              { label: 'About Us', href: '/credit/about', icon: <Users size={18} /> },
              { label: 'Services', href: '/credit/services', icon: <Settings size={18} /> },
              { label: 'Contact Us', href: '/credit/contact', icon: <PhoneCall size={18} /> },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between w-full px-4 py-4 rounded-2xl text-white font-medium transition-all active:scale-[0.98]"
                style={{ background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.08)' }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                    {item.icon}
                  </span>
                  <span className="text-[15px]">{item.label}</span>
                </div>
                <span style={{ color: '#D4AF37' }} className="text-lg">›</span>
              </Link>
            ))}

            {/* Primary CTA */}
            <div className="pt-3">
              <Link
                href="/credit/booking"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-base font-bold transition-all active:scale-[0.97] hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #f0d67a, #D4AF37, #b8892a)', color: '#000', boxShadow: '0 8px 30px rgba(212,175,55,0.4)' }}
              >
                <Banknote size={18} /> Apply for Loan
              </Link>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="tel:+94362237489"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold transition-all hover:bg-white/5"
                style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)', color: '#d1d5db' }}
              >
                <Phone size={16} /> Call Us
              </a>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold transition-all hover:bg-white/5"
                style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)', color: '#d1d5db' }}
              >
                <Building2 size={16} /> MJ Lanka
              </Link>
            </div>

            {/* Switch Division */}
            <div className="pt-5 border-t border-[#D4AF37]/10 mt-2">
              <p className="text-gray-600 text-[10px] uppercase tracking-[0.18em] mb-3 px-1">Switch Division</p>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/motors"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold transition-all hover:brightness-110"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', color: '#9ca3af' }}
                >
                  <Car size={16} /> MJ Motors
                </Link>
                <Link
                  href="/credit"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold transition-all hover:brightness-110"
                  style={{ background: 'linear-gradient(135deg, #f0d67a, #D4AF37, #b8892a)', color: '#000', boxShadow: '0 4px 16px rgba(212,175,55,0.35)' }}
                >
                  <CreditCard size={16} /> Ceylon Credit
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="px-5 py-4 border-t border-[#D4AF37]/10">
            <p className="text-center text-gray-700 text-[10px] uppercase tracking-wider">Ceylon Credit Business (Pvt) Ltd</p>
          </div>
        </div>
      )}
    </header>
  );
}