"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Home, Users, Settings, ClipboardList, PhoneCall, Calendar, Banknote, Phone, Building2, Car, CreditCard } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isMainHome = pathname === '/';
  const isMotors = pathname.startsWith('/motors');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header className="w-full fixed top-0 z-50">

      {/* ── Top Contact Bar — DESKTOP ONLY ── */}
      <div
        className="hidden md:flex relative overflow-hidden text-xs py-[9px] px-12 justify-between items-center"
        style={{
          background: "linear-gradient(90deg, #0a0a0a 0%, #1a0505 40%, #1a0000 60%, #0a0a0a 100%)",
          borderBottom: "1px solid rgba(220,38,38,0.25)",
        }}
      >
        <span className="absolute bottom-0 left-0 h-[1.5px] w-full pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(220,38,38,0.55) 40%, rgba(220,38,38,0.55) 60%, transparent 100%)" }}
        />
        {/* Phone */}
        <a href="tel:+94362237489" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 font-medium">
          <span className="flex items-center justify-center w-5 h-5 rounded-full border border-red-600/50 group-hover:bg-red-600/15 transition-all duration-300">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-red-500">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.05 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
          </span>
          <span className="text-[11px] font-light text-gray-500">Call us:</span>
          <span className="text-[11.5px] font-semibold tracking-wider text-gray-200 group-hover:text-white">+94 36 223 7489</span>
        </a>
        {/* Center Home */}
        <Link href="/" className="hidden md:flex items-center gap-2 group transition-all duration-300">
          <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 group-hover:border-red-600/50 bg-white/[0.03] group-hover:bg-red-600/10 transition-all duration-300">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-500 group-hover:text-red-400 transition-colors duration-300">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-[10.5px] font-semibold tracking-wide text-gray-500 group-hover:text-red-400 transition-colors duration-300 whitespace-nowrap">MJ Lanka Group</span>
          </span>
        </Link>
        {/* Email */}
        <a href="mailto:mjmotorsah@gmail.com" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300">
          <span className="flex items-center justify-center w-5 h-5 rounded-full border border-red-600/50 group-hover:bg-red-600/15 transition-all duration-300">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-red-500">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
          </span>
          <span className="text-[11px] font-light text-gray-500">Email:</span>
          <span className="text-[11.5px] font-semibold text-gray-200 group-hover:text-white">mjmotorsah@gmail.com</span>
        </a>
      </div>

      {/* ── Main Navbar ── */}
      <nav
        className={`transition-all duration-300 px-4 md:px-12 flex justify-between items-center border-b border-white/10 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-xl py-2 shadow-2xl shadow-black/50'
            : 'bg-black/80 backdrop-blur-md py-3 md:py-4'
        }`}
      >
        {/* ── LOGO + Brand Name (always visible on mobile) ── */}
        <Link href={isMainHome ? '/' : isMotors ? '/motors' : '/credit'} className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/logo.png"
              alt="MJ Motors Logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover bg-white ring-2 ring-red-600/40 group-hover:ring-red-500/70 transition-all duration-300"
            />
            {/* Active brand dot */}
            {!isMainHome && (
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-black"
                style={{ background: isMotors ? '#dc2626' : 'linear-gradient(135deg, #f0d67a, #D4AF37)' }}
              />
            )}
          </div>
          {/* Brand name — shown on mobile */}
          {!isMainHome && (
            <div className="block">
              <p className="text-white font-bold text-sm md:text-base leading-tight tracking-wide">
                {isMotors ? 'MJ Motors' : 'MJ Lanka'}
              </p>
              <p className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-wider leading-tight">
                {isMotors ? '(Pvt) Ltd' : 'Group of Company'}
              </p>
            </div>
          )}
          {isMainHome && (
            <div className="hidden md:block">
              <p className="text-white font-bold text-base leading-tight">MJ Lanka</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-wider">Group of Company (Pvt) Ltd</p>
            </div>
          )}
        </Link>

        {/* ── Desktop Nav Links ── */}
        {!isMainHome && (
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <Link href={isMotors ? "/motors" : "/credit"} className="hover:text-red-500 transition">Home</Link>
            <Link href={isMotors ? "/motors/about" : "/credit/about"} className="hover:text-red-500 transition">About Us</Link>
            <Link href={isMotors ? "/motors/services" : "/credit/services"} className="hover:text-red-500 transition">Services</Link>
            <Link href={isMotors ? "/motors/valuations" : "/credit/valuations"} className="hover:text-red-500 transition">Valuations</Link>
            <Link href={isMotors ? "/motors/contact" : "/credit/contact"} className="hover:text-red-500 transition">Contact</Link>
          </div>
        )}

        {/* ── Desktop Right: Brand Switcher + CTA ── */}
        {!isMainHome && (
          <div className="hidden md:flex items-center gap-3">
            {/* Brand Switcher */}
            <div className="relative flex items-center rounded-full p-[3px] text-[11px] font-bold tracking-wide overflow-hidden transition-all duration-500"
              style={{
                background: isMotors ? "linear-gradient(135deg, #1a1a1a, #2a0a0a)" : "linear-gradient(135deg, #1a1505, #12100a)",
                border: isMotors ? "1px solid rgba(220,38,38,0.40)" : "1px solid rgba(212,175,55,0.45)",
                boxShadow: isMotors ? "0 0 16px rgba(220,38,38,0.18)" : "0 0 16px rgba(212,175,55,0.18)",
              }}
            >
              <span className="absolute top-[3px] h-[calc(100%-6px)] rounded-full transition-all duration-500 ease-in-out"
                style={{
                  width: "calc(50% - 3px)",
                  left: isMotors ? "3px" : "calc(50%)",
                  background: isMotors ? "linear-gradient(135deg, #dc2626, #991b1b)" : "linear-gradient(135deg, #f0d67a, #D4AF37, #b8892a)",
                  boxShadow: isMotors ? "0 0 12px rgba(220,38,38,0.65)" : "0 0 12px rgba(212,175,55,0.65)",
                }}
              />
              <Link href="/motors" className={`relative z-10 flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${isMotors ? "text-white" : "text-gray-400 hover:text-gray-200"}`}>
                <span>🚗</span><span>Motors</span>
              </Link>
              <Link href="/credit" className={`relative z-10 flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${!isMotors ? "text-black" : "text-gray-400 hover:text-gray-200"}`}>
                <span>💳</span><span>Credit</span>
              </Link>
            </div>
            {/* Book / Apply CTA */}
            <Link
              href={isMotors ? "/motors/booking" : "/credit/booking"}
              style={!isMotors ? { background: "linear-gradient(135deg, #f0d67a, #D4AF37, #b8892a)", boxShadow: "0 4px 20px rgba(212,175,55,0.35)", color: "#000" } : {}}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 text-sm whitespace-nowrap ${isMotors ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30" : "hover:brightness-110 hover:-translate-y-0.5"}`}
            >
              {isMotors ? "Book Online" : "Apply Now"}
            </Link>
          </div>
        )}

        {/* ── Mobile Right Side: Quick Call + Hamburger ── */}
        <div className="flex md:hidden items-center gap-2">
          {/* Quick call pill */}
          {!isMainHome && (
            <a
              href="tel:+94362237489"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300"
              style={isMotors
                ? { background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.35)', color: '#f87171' }
                : { background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.35)', color: '#D4AF37' }
              }
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.05 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              <span>Call</span>
            </a>
          )}

          {/* Hamburger */}
          {!isMainHome && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-300"
              style={isOpen
                ? { background: 'rgba(220,38,38,0.2)', border: '1px solid rgba(220,38,38,0.4)' }
                : { background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }
              }
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </nav>

      {/* ── Mobile Full-Screen Menu ── */}
      {isOpen && !isMainHome && (
        <div className="md:hidden fixed inset-0 z-[999] flex flex-col"
          style={{ background: 'linear-gradient(160deg, #0a0a0a 0%, #100505 50%, #0a0a0a 100%)' }}
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-40 rounded-full pointer-events-none opacity-30"
            style={{ background: isMotors ? 'radial-gradient(ellipse, rgba(220,38,38,0.4) 0%, transparent 70%)' : 'radial-gradient(ellipse, rgba(212,175,55,0.35) 0%, transparent 70%)' }}
          />

          {/* Header Row */}
          <div className="relative flex items-center justify-between px-5 py-4 border-b border-white/8">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full object-cover ring-2 ring-red-600/40" />
              <div>
                <p className="text-white font-bold text-sm">{isMotors ? 'MJ Motors' : 'MJ Lanka'}</p>
                <p className="text-xs font-medium" style={{ color: isMotors ? '#f87171' : '#D4AF37' }}>
                  {isMotors ? 'Lanka Group (Pvt) Ltd' : 'Group of Company'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto px-5 pt-6 pb-4 space-y-1">
            {[
              { label: 'Home', href: isMotors ? '/motors' : '/credit', icon: <Home size={18} /> },
              { label: 'About Us', href: isMotors ? '/motors/about' : '/credit/about', icon: <Users size={18} /> },
              { label: 'Services', href: isMotors ? '/motors/services' : '/credit/services', icon: <Settings size={18} /> },
              { label: 'Valuations', href: isMotors ? '/motors/valuations' : '/credit/valuations', icon: <ClipboardList size={18} /> },
              { label: 'Contact', href: isMotors ? '/motors/contact' : '/credit/contact', icon: <PhoneCall size={18} /> },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between w-full px-4 py-4 rounded-2xl text-white font-medium transition-all duration-200 active:scale-[0.98]"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-3">
                  <span className={`flex items-center justify-center w-8 h-8 rounded-lg ${isMotors ? 'bg-red-500/10 text-red-400' : 'bg-[#D4AF37]/10 text-[#D4AF37]'}`}>
                    {item.icon}
                  </span>
                  <span className="text-[15px]">{item.label}</span>
                </div>
                <span className="text-gray-600 text-lg">›</span>
              </Link>
            ))}

            {/* Primary CTA */}
            <div className="pt-3">
              <Link
                href={isMotors ? '/motors/booking' : '/credit/booking'}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-base font-bold transition-all duration-300 active:scale-[0.97]"
                style={isMotors
                  ? { background: 'linear-gradient(135deg, #dc2626, #b91c1c)', color: '#fff', boxShadow: '0 8px 30px rgba(220,38,38,0.4)' }
                  : { background: 'linear-gradient(135deg, #f0d67a, #D4AF37, #b8892a)', color: '#000', boxShadow: '0 8px 30px rgba(212,175,55,0.4)' }
                }
              >
                <span>{isMotors ? <Calendar size={18} /> : <Banknote size={18} />}</span>
                <span>{isMotors ? 'Book Valuation' : 'Apply for Loan'}</span>
              </Link>
            </div>

            {/* Quick call row */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="tel:+94362237489"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold transition-all hover:bg-white/5"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', color: '#d1d5db' }}
              >
                <Phone size={16} /> Call Us
              </a>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold transition-all hover:bg-white/5"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', color: '#d1d5db' }}
              >
                <Building2 size={16} /> MJ Lanka
              </Link>
            </div>

            {/* Switch Division */}
            <div className="pt-5 border-t border-white/8 mt-2">
              <p className="text-gray-600 text-[10px] uppercase tracking-[0.18em] mb-3 px-1">Switch Division</p>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/motors"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 hover:brightness-110"
                  style={isMotors
                    ? { background: 'linear-gradient(135deg, #dc2626, #991b1b)', color: '#fff', boxShadow: '0 4px 16px rgba(220,38,38,0.35)' }
                    : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', color: '#9ca3af' }
                  }
                >
                  <Car size={16} /> MJ Motors
                </Link>
                <Link
                  href="/credit"
                  onClick={() => setIsOpen(false)}
                  style={!isMotors
                    ? { background: 'linear-gradient(135deg, #f0d67a, #D4AF37, #b8892a)', color: '#000', boxShadow: '0 4px 16px rgba(212,175,55,0.35)' }
                    : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', color: '#9ca3af' }
                  }
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 hover:brightness-110"
                >
                  <CreditCard size={16} /> Ceylon Credit
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="px-5 py-4 border-t border-white/8">
            <p className="text-center text-gray-700 text-[10px] uppercase tracking-wider">
              MJ Lanka Group of Company (Pvt) Ltd
            </p>
          </div>
        </div>
      )}
    </header>
  );
}