"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Are we on the main landing page?
  const isMainHome = pathname === '/';

  // Are we in Motors or Credit section?
  const isMotors = pathname.startsWith('/motors');

  return (
    <header className="w-full fixed top-0 z-50">

      {/* --- Top Contact Bar — Premium Dark Style --- */}
      <div
        className="relative overflow-hidden text-xs py-[9px] px-6 md:px-12 flex justify-between items-center"
        style={{
          background: "linear-gradient(90deg, #0a0a0a 0%, #1a0505 40%, #1a0000 60%, #0a0a0a 100%)",
          borderBottom: "1px solid rgba(220,38,38,0.25)",
          boxShadow: "0 1px 18px 0 rgba(220,38,38,0.10)",
        }}
      >
        {/* Glow line at bottom */}
        <span
          className="absolute bottom-0 left-0 h-[1.5px] w-full pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(220,38,38,0.55) 40%, rgba(220,38,38,0.55) 60%, transparent 100%)",
          }}
        />

        {/* Left — Phone */}
        <a
          href="tel:+94362237489"
          className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 font-medium tracking-wide"
        >
          <span
            className="flex items-center justify-center w-5 h-5 rounded-full border border-red-600/50 group-hover:border-red-500 group-hover:bg-red-600/15 transition-all duration-300"
            style={{ boxShadow: "0 0 6px rgba(220,38,38,0.20)" }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-red-500">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.05 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
          </span>
          <span className="text-[11px] font-light text-gray-500 mr-0.5">Call us:</span>
          <span className="text-[11.5px] font-semibold tracking-wider text-gray-200 group-hover:text-white transition-colors duration-300">+94 36 223 7489</span>
        </a>

        {/* Center — MJ Lanka Group Home Link */}
        <Link
          href="/"
          className="hidden md:flex items-center gap-2 group transition-all duration-300"
        >
          <span
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 group-hover:border-red-600/50 bg-white/[0.03] group-hover:bg-red-600/10 transition-all duration-300"
            style={{ boxShadow: "0 0 0 0 transparent" }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-500 group-hover:text-red-400 transition-colors duration-300">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-[10.5px] font-semibold tracking-wide text-gray-500 group-hover:text-red-400 transition-colors duration-300 whitespace-nowrap">
              MJ Lanka Group
            </span>
          </span>
        </Link>

        {/* Right — Email */}
        <a
          href="mailto:mjmotorsah@gmail.com"
          className="group hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 font-medium tracking-wide"
        >
          <span
            className="flex items-center justify-center w-5 h-5 rounded-full border border-red-600/50 group-hover:border-red-500 group-hover:bg-red-600/15 transition-all duration-300"
            style={{ boxShadow: "0 0 6px rgba(220,38,38,0.20)" }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-red-500">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </span>
          <span className="text-[11px] font-light text-gray-500 mr-0.5">Message us:</span>
          <span className="text-[11.5px] font-semibold tracking-wide text-gray-200 group-hover:text-white transition-colors duration-300">mjmotorsah@gmail.com</span>
        </a>
      </div>

      {/* --- Main Navbar --- */}
      <nav className="bg-black/80 backdrop-blur-md text-white py-4 px-6 md:px-12 flex justify-between items-center border-b border-white/10">

        {/* Logo + Company Name */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full object-cover bg-white" />
          <div className="hidden md:block">
            <h2 className="text-white font-bold text-lg leading-tight">MJ Lanka</h2>
            <p className="text-gray-400 text-[10px] uppercase tracking-wider">Group of Company (Pvt) Ltd</p>
          </div>
        </div>

        {/* Nav Links — hidden on main home */}
        {!isMainHome && (
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href={isMotors ? "/motors" : "/credit"} className="hover:text-red-500 transition">Home</Link>
            <Link href={isMotors ? "/motors/about" : "/credit/about"} className="hover:text-red-500 transition">About Us</Link>
            <Link href={isMotors ? "/motors/services" : "/credit/services"} className="hover:text-red-500 transition">Services</Link>
            <Link href={isMotors ? "/motors/valuations" : "/credit/valuations"} className="hover:text-red-500 transition">Valuations</Link>
            <Link href={isMotors ? "/motors/contact" : "/credit/contact"} className="hover:text-red-500 transition">Contact</Link>
          </div>
        )}

        {/* Right side: Brand Switcher + Book Online */}
        <div className="hidden md:flex items-center gap-3">

          {/* ✨ Animated Brand Switcher Pill — color adapts to active brand */}
          {!isMainHome && (
            <div
              className="relative flex items-center rounded-full p-[3px] text-[11px] font-bold tracking-wide overflow-hidden transition-all duration-500"
              style={{
                background: isMotors
                  ? "linear-gradient(135deg, #1a1a1a, #2a0a0a)"
                  : "linear-gradient(135deg, #1a1505, #12100a)",
                border: isMotors
                  ? "1px solid rgba(220,38,38,0.40)"
                  : "1px solid rgba(212,175,55,0.45)",
                boxShadow: isMotors
                  ? "0 0 16px rgba(220,38,38,0.18)"
                  : "0 0 16px rgba(212,175,55,0.18)",
              }}
            >
              {/* Glowing sliding indicator */}
              <span
                className="absolute top-[3px] h-[calc(100%-6px)] rounded-full transition-all duration-500 ease-in-out"
                style={{
                  width: "calc(50% - 3px)",
                  left: isMotors ? "3px" : "calc(50%)",
                  background: isMotors
                    ? "linear-gradient(135deg, #dc2626, #991b1b)"
                    : "linear-gradient(135deg, #f0d67a, #D4AF37, #b8892a)",
                  boxShadow: isMotors
                    ? "0 0 12px rgba(220,38,38,0.65)"
                    : "0 0 12px rgba(212,175,55,0.65)",
                }}
              />
              {/* Motors Tab */}
              <Link
                href="/motors"
                className={`relative z-10 flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${isMotors ? "text-white" : "text-gray-400 hover:text-gray-200"
                  }`}
              >
                <span>🚗</span>
                <span>Motors</span>
              </Link>
              {/* Credit Tab */}
              <Link
                href="/credit"
                className={`relative z-10 flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${!isMotors ? "text-black" : "text-gray-400 hover:text-gray-200"
                  }`}
              >
                <span>💳</span>
                <span>Credit</span>
              </Link>
            </div>
          )}

          {/* Book Online Button — color matches active brand */}
          {!isMainHome && (
            <Link
              href={isMotors ? "/motors/booking" : "/credit/booking"}
              style={isMotors ? {} : {
                background: "linear-gradient(135deg, #f0d67a, #D4AF37, #b8892a)",
                boxShadow: "0 4px 20px rgba(212,175,55,0.35)",
                color: "#000",
              }}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 text-sm whitespace-nowrap ${isMotors
                ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30"
                : "hover:brightness-110 hover:-translate-y-0.5"
                }`}
            >
              {isMotors ? "Book Online" : "Apply Now"}
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        {!isMainHome && (
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </nav>

      {/* --- Mobile Dropdown Menu --- */}
      {isOpen && !isMainHome && (
        <div className="md:hidden bg-black/95 text-white flex flex-col space-y-4 px-6 py-6 border-b border-white/10">
          <Link href={isMotors ? "/motors" : "/credit"} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href={isMotors ? "/motors/about" : "/credit/about"} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href={isMotors ? "/motors/services" : "/credit/services"} onClick={() => setIsOpen(false)}>Services</Link>
          <Link href={isMotors ? "/motors/valuations" : "/credit/valuations"} onClick={() => setIsOpen(false)}>Valuations</Link>
          <Link href={isMotors ? "/motors/contact" : "/credit/contact"} onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href={isMotors ? "/motors/booking" : "/credit/booking"} className="text-red-500 font-bold" onClick={() => setIsOpen(false)}>Book Online</Link>

          {/* Mobile Brand Switcher — color adapts to active brand */}
          <div className="pt-3 border-t border-white/10">
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-3">Switch Section</p>
            <div className="flex gap-3">
              <Link
                href="/motors"
                onClick={() => setIsOpen(false)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${isMotors
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
              >
                🚗 MJ Motors
              </Link>
              <Link
                href="/credit"
                onClick={() => setIsOpen(false)}
                style={!isMotors ? {
                  background: "linear-gradient(135deg, #f0d67a, #D4AF37, #b8892a)",
                  boxShadow: "0 4px 16px rgba(212,175,55,0.35)",
                  color: "#000",
                } : {}}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${!isMotors
                  ? ""
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
              >
                💳 Ceylon Credit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}