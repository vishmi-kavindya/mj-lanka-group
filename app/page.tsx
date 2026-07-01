"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Car, Landmark, ArrowRight } from "lucide-react";

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
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 bg-black">
      
      {/* Background Images - Cinematic Zoom + Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {backgroundImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={src}
              alt={`Background ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-linear transform ${
                index === currentImage ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}
        {/* අඳුරු ආවරණය */}
        <div className="absolute inset-0 bg-black/75 z-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center w-full mt-8">
        
        {/* --- අලුතින් වෙනස් කරපු මාතෘකා කොටස (Text Animation & Elegant Font) --- */}
        <div 
          className={`text-center mb-16 transition-all duration-[1500ms] ease-out transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* අකුරු වල තද ගතිය අඩු කරලා font-medium සහ tracking-wide පාවිච්චි කරලා තියෙනවා */}
          <h1 className="text-3xl md:text-5xl font-medium text-white/95 mb-5 tracking-wide drop-shadow-xl uppercase">
            MJ Lanka Group of Company (Pvt) Ltd <span className="block text-xl md:text-2xl mt-2 font-normal text-gray-300 capitalize tracking-normal"></span>
          </h1>
          
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6 rounded-full opacity-80"></div>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto drop-shadow-md font-light leading-relaxed">
            Excellence in Automotive Valuations and Financial Solutions. <br className="hidden md:block" /> Please select a division to continue.
          </p>
        </div>

        {/* සමාගම් දෙක පෙන්වන කොටුව */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          
          {/* MJ Motors Card */}
          <Link href="/motors" className="group">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 hover:border-red-500/50 hover:bg-black/60 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <Car size={180} className="text-red-500" />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-8 border border-red-500/30 text-red-500 group-hover:scale-110 transition-transform duration-300">
                  <Car size={32} />
                </div>
                <h2 className="text-3xl font-semibold text-white mb-4">MJ Motors</h2>
                <p className="text-gray-300 leading-relaxed text-lg font-light">
                  Professional vehicle valuations, plant commissioning, and comprehensive automotive assessments.
                </p>
              </div>
              
              <div className="mt-10 flex items-center text-red-400 font-medium relative z-10 group-hover:text-red-500">
                <span>Explore Division</span>
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </div>
            </div>
          </Link>

          {/* Ceylon Credit Card */}
          <Link href="/credit" className="group">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 hover:border-blue-500/50 hover:bg-black/60 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <Landmark size={180} className="text-blue-500" />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/30 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                  <Landmark size={32} />
                </div>
                <h2 className="text-3xl font-semibold text-white mb-4">Ceylon Credit Business LTD</h2>
                <p className="text-gray-300 leading-relaxed text-lg font-light">
                  Trusted financial services, credit facilities, and business lending solutions tailored for you.
                </p>
              </div>
              
              <div className="mt-10 flex items-center text-blue-400 font-medium relative z-10 group-hover:text-blue-500">
                <span>Explore Division</span>
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}