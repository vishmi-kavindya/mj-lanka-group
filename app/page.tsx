"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Car, CarFront, Landmark, ArrowRight } from "lucide-react";

const backgroundImages = [
  "/vehicle-images-api.png", // ඔයාගේ පින්තූර වල නම් වලට මේවා වෙනස් කරන්න
  "/home2.webp",
  "/hmoe3.jpg",
];

export default function GroupLandingPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); // Text Animation එකට අලුතින් ගත්ත state එක

  useEffect(() => {
    // පිටුව ලෝඩ් වුණාම Text ඇනිමේෂන් එක පටන් ගන්න
    setIsLoaded(true);

    // පින්තූර මාරු වෙන වෙලාව තත්පර 3.5කට (3500ms) අඩු කරලා තියෙන්නේ
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-[100dvh] flex flex-col items-center justify-between relative overflow-x-hidden bg-black">

      {/* Background Images - Cinematic Zoom + Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {backgroundImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <img
              src={src}
              alt={`Background ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-linear transform ${index === currentImage ? "scale-110" : "scale-100"
                }`}
            />
          </div>
        ))}
        {/* අඳුරු ආවරණය */}
        <div className="absolute inset-0 bg-black/75 z-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex-1 flex flex-col items-center justify-center w-full py-16 sm:py-12 px-4 sm:px-6">

        {/* --- අලුතින් වෙනස් කරපු මාතෘකා කොටස (Staggered Cinematic Animation) --- */}
        <div className="text-center mb-10 sm:mb-16 px-2 flex flex-col items-center w-full">
          {/* Main Title */}
          <h1
            className={`text-[28px] sm:text-4xl md:text-[3.5rem] font-bold text-white mb-2 sm:mb-4 tracking-tight drop-shadow-2xl uppercase transition-all duration-1000 ease-out transform ${isLoaded ? "translate-y-0 opacity-100 blur-none" : "translate-y-8 opacity-0 blur-sm"}`}
          >
            MJ Lanka Group
          </h1>

          {/* Subtitle */}
          <span
            className={`block text-[13px] sm:text-xl md:text-2xl font-light text-gray-300 tracking-[0.15em] sm:tracking-[0.2em] mb-6 sm:mb-8 transition-all duration-1000 delay-300 ease-out transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
          >
            OF COMPANY (PVT) LTD
          </span>

          {/* Premium Gradient Divider */}
          <div
            className={`w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent mb-6 sm:mb-8 transition-all duration-1000 delay-500 ease-out origin-center ${isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
          ></div>

          {/* Description */}
          <p
            className={`text-gray-400 text-[14px] sm:text-lg max-w-[280px] sm:max-w-2xl mx-auto font-light leading-relaxed transition-all duration-1000 delay-700 ease-out transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
          >
            Excellence in Automotive Valuations and Financial Solutions. <br className="hidden md:block" /> Please select a division to continue.
          </p>
        </div>

        {/* සමාගම් දෙක පෙන්වන කොටුව */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 w-full max-w-5xl px-3 sm:px-0">

          {/* MJ Motors Card */}
          <Link href="/motors" className="group">
            <div className="bg-black/50 backdrop-blur-2xl border border-white/10 rounded-3xl sm:rounded-[2rem] p-6 sm:p-10 hover:border-red-500/50 hover:bg-black/60 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                <Car strokeWidth={1} className="w-32 h-32 sm:w-[180px] sm:h-[180px] text-red-500" />
              </div>

              <div className="relative z-10">
                {/* Premium Animated Icon Box */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-900/30 flex items-center justify-center mb-5 sm:mb-8 border border-red-500/20 group-hover:border-red-500/50 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] transition-all duration-500 relative overflow-hidden">
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

                  <Car strokeWidth={1.5} className="w-7 h-7 sm:w-[32px] sm:h-[32px] text-red-500 group-hover:scale-110 group-hover:text-red-400 transition-all duration-500 relative z-10 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                </div>
                <h2 className="text-xl sm:text-3xl font-semibold text-white mb-2 sm:mb-4 tracking-tight">MJ Motors</h2>
                <p className="text-gray-400 leading-relaxed text-[13px] sm:text-lg font-normal">
                  Professional vehicle valuations, plant commissioning, and comprehensive automotive assessments.
                </p>
              </div>

              {/* Premium Button */}
              <div className="mt-6 sm:mt-10 pt-5 sm:pt-6 border-t border-white/[0.06] flex items-center justify-between w-full relative z-10 transition-colors duration-300">
                <span className="text-[11px] sm:text-[14px] text-gray-300 font-bold tracking-wider sm:tracking-widest uppercase group-hover:text-red-400 transition-colors duration-300">
                  Explore Division
                </span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-500">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>

          {/* Ceylon Credit Card */}
          <Link href="/credit" className="group">
            <div className="bg-black/50 backdrop-blur-2xl border border-white/10 rounded-3xl sm:rounded-[2rem] p-6 sm:p-10 hover:border-[#D4AF37]/40 hover:bg-black/60 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                <Landmark strokeWidth={1} className="w-32 h-32 sm:w-[180px] sm:h-[180px] text-[#D4AF37]" />
              </div>

              <div className="relative z-10">
                {/* Premium Animated Icon Box */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 flex items-center justify-center mb-5 sm:mb-8 border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all duration-500 relative overflow-hidden">
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

                  <Landmark strokeWidth={1.5} className="w-7 h-7 sm:w-[32px] sm:h-[32px] text-[#D4AF37] group-hover:scale-110 group-hover:text-[#f0d67a] transition-all duration-500 relative z-10 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                </div>
                <h2 className="text-xl sm:text-3xl font-semibold text-white mb-2 sm:mb-4 tracking-tight">Ceylon Credit Business LTD</h2>
                <p className="text-gray-400 leading-relaxed text-[13px] sm:text-lg font-normal">
                  Trusted financial services, credit facilities, and business lending solutions tailored for you.
                </p>
              </div>

              {/* Premium Button */}
              <div className="mt-6 sm:mt-10 pt-5 sm:pt-6 border-t border-white/[0.06] flex items-center justify-between w-full relative z-10 transition-colors duration-300">
                <span className="text-[11px] sm:text-[14px] text-gray-300 font-bold tracking-wider sm:tracking-widest uppercase group-hover:text-[#D4AF37] transition-colors duration-300">
                  Explore Division
                </span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-30 w-full mt-auto py-5 border-t border-white/[0.08] text-center text-xs text-gray-400 px-4 bg-black/30 backdrop-blur-2xl shadow-[0_-20px_40px_rgba(0,0,0,0.4)]">
        <p className="leading-relaxed text-[11px] sm:text-xs tracking-wide">
          © {new Date().getFullYear()} MJ Lanka Group of Company (Pvt) Ltd. All Rights Reserved. <br className="sm:hidden" />
          <span className="hidden sm:inline"> | </span>
          Created by <span className="text-white/80 font-medium">Vishmi Kavindya</span>
        </p>
      </footer>
    </main>
  );
}