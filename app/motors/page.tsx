"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, ThumbsUp, Users, Award, Star } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MotorsHomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <main className="min-h-screen bg-gray-950 text-white pb-24">
      <Navbar />
      {/* --- 1. Hero Banner --- */}
      <div className="relative w-full h-162.5 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/company.avif" alt="MJ Motors Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>
        </div>

        <div className={`relative z-10 max-w-5xl mx-auto transition-all duration-[1500ms] ease-out transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-[0.15em] uppercase text-white drop-shadow-2xl">
            MJ Motors
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8 rounded-full opacity-80"></div>
          <p className="text-gray-200 text-xl md:text-3xl max-w-4xl mx-auto mb-10 font-light drop-shadow-lg leading-relaxed">
            <span className="font-medium text-white">MJ Lanka Group</span> – Your Trusted Partner for Motor Vehicle & Property Valuation Services.
          </p>
          <Link 
            href="/motors/booking" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl shadow-red-600/30 inline-block transform hover:-translate-y-1 hover:scale-105 text-lg"
          >
            Book Valuation Now
          </Link>
        </div>
      </div>

      {/* --- 2. Stats Section (Floating Cards) --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Briefcase, val: "65,250+", label: "Hours of Works", color: "text-red-400" },
            { icon: ThumbsUp, val: "23,160+", label: "Happy Customers", color: "text-amber-400" },
            { icon: Users, val: "1,500+", label: "Experienced Workers", color: "text-purple-400" },
            { icon: Award, val: "10+", label: "Years of Experience", color: "text-orange-400" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/90 border border-gray-800 backdrop-blur-md p-8 rounded-3xl text-center shadow-2xl"
            >
              <div className={`flex justify-center mb-4 ${item.color}`}>
                <item.icon size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-red-500 mb-2">{item.val}</h3>
              <p className="text-gray-400 text-xs tracking-wider uppercase font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- 3. Testimonials Section (Floating Cards) --- */}
      <div className="max-w-7xl mx-auto px-6 mt-28">
        <div className="mb-12">
          <span className="text-red-500 text-xs tracking-widest uppercase font-bold block mb-2">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">What They Says</h2>
          <div className="w-20 h-1 bg-red-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Chaminda Perera", quote: "Had my vehicle valuation done from MJ Motors. Superb service. Keep up the good work!" },
            { name: "Kasun Fernando", quote: "Quick service and their professionalism is highly recommend to everyone those who wish to get exact valuation." }
          ].map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-[2rem] shadow-xl"
            >
              <div className="flex items-center space-x-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 italic font-light leading-relaxed mb-4">"{t.quote}"</p>
              <h4 className="text-white font-bold text-base border-t border-red-500 pt-4 inline-block">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
      
    </main>
    <Footer />
    </>
  );
}