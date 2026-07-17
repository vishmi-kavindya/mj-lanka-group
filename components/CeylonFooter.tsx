import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function CeylonFooter() {
  return (
    <footer className="relative bg-black text-gray-300 pt-20 pb-8 px-6 overflow-hidden">
      {/* Decorative gold glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/10 blur-[100px] rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 1. Company Info */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img src="/ceylon-logo.png" alt="Ceylon Credit Business" className="h-14 w-auto" />
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">CEYLON CREDIT</h3>
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em]">Business (Pvt) Ltd</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Ceylon Credit Business (Pvt) Ltd is your trusted partner for microfinance, leasing, and
            business lending solutions, committed to fast and reliable service islandwide.
          </p>
          <a
            href="#"
            aria-label="Facebook"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-white/5 hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] transition-all duration-300 hover:-translate-y-1"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z"/></svg>
          </a>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 relative inline-block pb-2">
            Quick Links
            <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-[#D4AF37]"></span>
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/credit" className="hover:text-[#D4AF37] hover:pl-1 transition-all duration-300">Home</Link></li>
            <li><Link href="/credit/about" className="hover:text-[#D4AF37] hover:pl-1 transition-all duration-300">About Us</Link></li>
            <li><Link href="/credit/services" className="hover:text-[#D4AF37] hover:pl-1 transition-all duration-300">Services</Link></li>
            <li><Link href="/credit/contact" className="hover:text-[#D4AF37] hover:pl-1 transition-all duration-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* 3. Our Services */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 relative inline-block pb-2">
            Our Services
            <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-[#D4AF37]"></span>
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/credit/services" className="hover:text-[#D4AF37] hover:pl-1 transition-all duration-300">Microfinance Group Loans</Link></li>
            <li><Link href="/credit/services" className="hover:text-[#D4AF37] hover:pl-1 transition-all duration-300">Business Loans</Link></li>
            <li><Link href="/credit/services" className="hover:text-[#D4AF37] hover:pl-1 transition-all duration-300">Vehicle Leasing</Link></li>
            <li><Link href="/credit/services" className="hover:text-[#D4AF37] hover:pl-1 transition-all duration-300">Asset Mortgage Loans</Link></li>
            <li><Link href="/credit/services" className="hover:text-[#D4AF37] hover:pl-1 transition-all duration-300">Cheque Loans</Link></li>
          </ul>
        </div>

        {/* 4. Contact Us */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 relative inline-block pb-2">
            Contact Us
            <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-[#D4AF37]"></span>
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-[#D4AF37] mt-1 flex-shrink-0" />
              <span>No. 268/1 Ratnapura Road, Getaheththa, Sri Lanka.</span>
            </li>
            <li className="flex items-start space-x-3">
              <Phone size={16} className="text-[#D4AF37] mt-1 flex-shrink-0" />
            
               <p className="text-gray-400 text-sm">+94 77 717 2970</p>
                   <p className="text-gray-400 text-sm">+94 71 069 0888</p>
            </li>
            <li className="flex items-start space-x-3">
              <Mail size={16} className="text-[#D4AF37] mt-1 flex-shrink-0" />
              <span>info@ceyloncredit.lk</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto mt-14 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Ceylon Credit Business (Pvt) Ltd - A Division of MJ Lanka Group of Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}