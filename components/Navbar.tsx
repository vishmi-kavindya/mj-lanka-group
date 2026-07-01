"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // අපි දැන් ඉන්නේ ප්‍රධාන පිටුවේ (Main Home - '/') ද කියලා බලනවා
  const isMainHome = pathname === '/';
  
  // අපි ඉන්නේ Motors ද නැත්නම් Credit පැත්තෙද කියලා බලනවා
  const isMotors = pathname.startsWith('/motors');

  return (
    <header className="w-full fixed top-0 z-50">
      
      {/* --- Top Contact Bar (උඩම තියෙන දුරකථන අංකය සහ ඊමේල් එක) --- */}
      <div className="bg-white text-gray-900 text-lg py-2 px-6 md:px-12 flex justify-between border-b border-gray-200">
        <span className="font-medium">📞 Call us: +94 36 223 7489</span>
        <span className="font-medium hidden md:block">✉️ Message us: vishmikavindya722@gmail.com</span>
      </div>

      {/* --- Main Navbar --- */}
      <nav className="bg-black/80 backdrop-blur-md text-white py-4 px-6 md:px-12 flex justify-between items-center border-b border-white/10">
        
        {/* Logo සහ සමාගමේ නම (මේක හැමතැනම පේනවා) */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full object-cover bg-white" />
          <div className="hidden md:block">
            <h2 className="text-white font-bold text-lg leading-tight">MJ Lanka</h2>
            <p className="text-gray-400 text-[10px] uppercase tracking-wider">Group of Company (Pvt) Ltd</p>
          </div>
        </div>

        {/* --- මෙනු ලින්ක්ස් (මේක පේන්නේ ප්‍රධාන පිටුවේ නැත්නම් විතරයි) --- */}
        {!isMainHome && (
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href={isMotors ? "/motors" : "/credit"} className="hover:text-red-500 transition">Home</Link>
            <Link href={isMotors ? "/motors/about" : "/credit/about"} className="hover:text-red-500 transition">About Us</Link>
            <Link href={isMotors ? "/motors/services" : "/credit/services"} className="hover:text-red-500 transition">Services</Link>
            <Link href={isMotors ? "/motors/valuations" : "/credit/valuations"} className="hover:text-red-500 transition">Valuations</Link>
            <Link href={isMotors ? "/motors/contact" : "/credit/contact"} className="hover:text-red-500 transition">Contact</Link>
          </div>
        )}

        {/* --- Book Online බොත්තම (මේකත් පේන්නේ ප්‍රධාන පිටුවේ නැත්නම් විතරයි) --- */}
        {!isMainHome && (
          <div className="hidden md:block">
            <Link
              href={isMotors ? "/motors/booking" : "/credit/booking"}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition shadow-lg shadow-red-600/30"
            >
              Book Online
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
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
        </div>
      )}
    </header>
  );
}