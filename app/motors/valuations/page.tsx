'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// මිල ගණන් ලැයිස්තුව (Data Array)
const feeStructure = [
  { value: "Below Rs. 2,000,000", fee: "Rs. 3,500.00" },
  { value: "Rs. 2,000,000 - Rs. 5,000,000", fee: "Rs. 4,500.00" },
  { value: "Rs. 5,000,000 - Rs. 10,000,000", fee: "Rs. 5,000.00" },
  { value: "Rs. 10,000,000 - Rs. 15,000,000", fee: "Rs. 6,000.00" },
  { value: "Rs. 15,000,000 - Rs. 20,000,000", fee: "Rs. 7,000.00" },
  { value: "Rs. 20,000,000 - Rs. 30,000,000", fee: "Rs. 9,000.00" },
  { value: "Rs. 30,000,000 - Rs. 40,000,000", fee: "Rs. 12,000.00" },
  { value: "Rs. 40,000,000 - Rs. 50,000,000", fee: "Rs. 14,000.00" },
  { value: "Rs. 50,000,000 - Rs. 60,000,000", fee: "Rs. 16,000.00" },
  { value: "Rs. 60,000,000 - Rs. 70,000,000", fee: "Rs. 18,000.00" },
  { value: "Rs. 70,000,000 - Rs. 80,000,000", fee: "Rs. 20,000.00" },
  { value: "Rs. 80,000,000 - Rs. 100,000,000", fee: "Rs. 25,000.00" },
  { value: "Above Rs. 100,000,000", fee: "Rs. 30,000.00" },
  { value: "Three Wheeler / Motor Bike", fee: "Rs. 2,000.00" },
  { value: "Name Change", fee: "Rs. 500.00" },
];

export default function Valuation() {
  return (
    <>
    <main className="bg-[#111] min-h-screen">
      <Navbar />
      {/* --- 1. Hero Section (Valuations - Premium Style) --- */}
      <section className="relative h-[450px] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black">
        <Image 
          src="/hmoe3.jpg" // ඔයාගේ Valuation පින්තූරයේ නම මෙතනට දෙන්න
          alt="Valuation Services" 
          fill 
          className="object-cover opacity-60" 
        />
        
        {/* සුදු පාටට Fade වෙන්න Gradient එක */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-gray-50"></div>
        
        <div className="relative z-10 mt-16 max-w-5xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-5xl font-medium text-white drop-shadow-xl leading-snug tracking-tight mb-6"
          >
            MJ Lanka Group of Company (Pvt) Ltd.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-200 drop-shadow-lg font-light tracking-wide mb-8 max-w-3xl mx-auto"
          >
            Real Estate, Plant & Machinery, Vehicles, Equipment, Business Assets, Personal Properties, Vessels, Art & Antiques.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-3 text-sm md:text-base text-gray-200 drop-shadow-md"
          >
            <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
            <span className="text-red-500 font-bold">&gt;</span>
            <span className="text-white font-medium tracking-wide">Valuation</span>
          </motion.div>
        </div>
      </section>

      {/* Fee Structure Table Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-10">
            Standard Valuation Fee Structure (VEHICLES)
          </h2>
          
          <div className="border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-2 bg-[#E53935] text-white font-bold text-center py-4 text-sm md:text-base">
              <div>Estimated Market Value</div>
              <div>Valuation Fee</div>
            </div>
            
            {/* Table Rows */}
            <div className="bg-[#1a1a1a]">
              {feeStructure.map((item, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-2 text-center text-gray-300 py-3 border-b border-gray-800 hover:bg-gray-800 transition text-sm md:text-base"
                >
                  <div className="px-4 border-r border-gray-800">{item.value}</div>
                  <div className="px-4">{item.fee}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
    <Footer />
    </>
  );
}