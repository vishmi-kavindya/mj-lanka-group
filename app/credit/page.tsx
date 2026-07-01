'use client';
import { motion } from 'framer-motion';
import Link from "next/link";
import CeylonNavbar from "@/components/CeylonNavbar";
import CeylonFooter from "@/components/CeylonFooter";

export default function CreditPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. අපි කලින් හදාගත්ත CeylonNavbar component එක පාවිච්චි කරනවා */}
      <CeylonNavbar />
      
      {/* 2. Main Content */}
      <main className="flex-grow text-gray-900">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center bg-gray-900 text-white">
          <div className="text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-4"
            >
              CEYLON CREDIT
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg uppercase tracking-widest"
            >
              Trusted Financial Solutions & Lending
            </motion.p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Fast Loans", desc: "Quick processing for your urgent needs." },
              { title: "Low Interest", desc: "Competitive rates tailored for you." },
              { title: "Business Credit", desc: "Support for your business growth." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 border-b-2 border-red-600 bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* 3. අපි කලින් හදාගත්ත CeylonFooter component එක පාවිච්චි කරනවා */}
      <CeylonFooter />
    </div>
  );
}