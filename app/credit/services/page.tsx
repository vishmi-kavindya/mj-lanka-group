"use client";
import { useState } from "react"; // useState අලුතින් එකතු කළා
import CeylonNavbar from "@/components/CeylonNavbar";
import CeylonFooter from "@/components/CeylonFooter";
import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence එකතු කළා
import { CreditCard, Landmark, LineChart, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Landmark, title: "Maicro Finance Group Loans", 
    desc: "Flexible microfinance solutions designed to support individuals and small businesses with affordable financing and convenient repayment options." },
  { icon: CreditCard, title: "Business Loans", 
    desc: "Business financing solutions that help entrepreneurs expand operations, manage cash flow, purchase equipment, and achieve sustainable growth." },
  { icon: LineChart, title: "Three wheel and Two wheeler Leasing", 
    desc: "Affordable leasing plans for three-wheelers and two-wheelers with competitive interest rates, flexible terms, and a simple approval process." },
  { icon: ShieldCheck, title: "Asset Mortgage Loans", 
    desc: "Secure loans against your valuable assets with competitive interest rates, fast approval, and flexible repayment options to meet your financial needs." },
  { icon: Zap, title: "Cheque Loans", 
    desc: "Access quick and convenient financing using your cheque as security, with fast approval, flexible repayment terms, and competitive interest rates to meet your personal or business financial needs." }
];

export default function EnhancedServicesPage() {
  // දැනට ක්ලික් කරලා තියෙන කාඩ් එකේ අංකය මතක තියාගන්න state එක
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <CeylonNavbar />
      
      {/* --- Hero Section --- */}
      <section className="relative w-full h-[400px] md:h-[450px] bg-slate-200">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/finance.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div 
          className="absolute bottom-0 left-0 h-28 bg-[#9c5996] text-white pl-10 pr-20 flex flex-col justify-center min-w-[300px] md:min-w-[450px]"
          style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)' }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
            SERVICES
          </h1>
          <div className="flex items-center gap-2 mt-2 text-xs md:text-sm font-semibold tracking-widest uppercase">
            <Link href="/" className="hover:text-gray-200 transition">HOME</Link>
            <span>&gt;</span>
            <span className="text-white">SERVICES</span>
          </div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <main className="py-24 px-6 flex-grow bg-purple-100">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-gray-900 mb-6"
          >
            Our Financial Services
          </motion.h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              // කාඩ් එක ක්ලික් කළාම expandedId එක මාරු වෙනවා
              onClick={() => setExpandedId(expandedId === i ? null : i)}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white p-10 rounded-3xl border border-purple-100 shadow-md hover:shadow-xl hover:border-purple-300 transition-all duration-500 cursor-pointer" // cursor-pointer දැම්මා
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#9c5996] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                
                {/* ක්ලික් කළාම විතරක් description එක ලස්සනට පල්ලෙහාට දිග ඇරෙන්න හදපු කොටස */}
                <AnimatePresence>
                  {expandedId === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-500 leading-relaxed text-lg pt-2 pb-2">
                        {service.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Read more / Show less Button Text */}
                <div className="mt-4 text-sm font-bold text-[#9c5996] group-hover:text-purple-800 transition-colors">
                  {expandedId === i ? "Show less" : "Read more"}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <CeylonFooter />
    </div>
  );
}