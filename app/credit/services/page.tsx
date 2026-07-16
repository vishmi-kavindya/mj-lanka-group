"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Landmark, LineChart, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Landmark,
    title: "Microfinance Group Loans",
    desc: "Flexible microfinance solutions designed to support individuals and small businesses with affordable financing and convenient repayment options.",
  },
  {
    icon: CreditCard,
    title: "Business Loans",
    desc: "Business financing solutions that help entrepreneurs expand operations, manage cash flow, purchase equipment, and achieve sustainable growth.",
  },
  {
    icon: LineChart,
    title: "Three Wheel and Two Wheeler Leasing",
    desc: "Affordable leasing plans for three-wheelers and two-wheelers with competitive interest rates, flexible terms, and a simple approval process.",
  },
  {
    icon: ShieldCheck,
    title: "Asset Mortgage Loans",
    desc: "Secure loans against your valuable assets with competitive interest rates, fast approval, and flexible repayment options to meet your financial needs.",
  },
  {
    icon: Zap,
    title: "Cheque Loans",
    desc: "Access quick and convenient financing using your cheque as security, with fast approval, flexible repayment terms, and competitive interest rates to meet your personal or business financial needs.",
  },
];

export default function ServicesPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* --- Hero Section --- */}
      <section className="relative w-full h-[350px] md:h-[400px] bg-slate-200">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/finance.jpg')" }}></div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div
          className="absolute bottom-0 left-0 h-28 bg-black text-white pl-10 pr-20 flex flex-col justify-center min-w-[300px] md:min-w-[450px] border-t-4 border-[#D4AF37]"
          style={{ clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)" }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">Services</h1>
          <div className="flex items-center gap-2 mt-2 text-xs md:text-sm font-semibold tracking-widest uppercase">
            <Link href="/credit" className="hover:text-[#D4AF37] transition">Home</Link>
            <span>&gt;</span>
            <span className="text-[#D4AF37]">Services</span>
          </div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <main className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="text-[#D4AF37] text-xs tracking-widest uppercase font-bold block mb-2">What We Offer</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-black mb-6"
          >
            Our Financial Services
          </motion.h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              onClick={() => setExpandedId(expandedId === i ? null : i)}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white p-10 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:border-[#D4AF37]/40 transition-all duration-500 cursor-pointer"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-black text-[#D4AF37] rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{service.title}</h3>

                <AnimatePresence>
                  {expandedId === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-500 leading-relaxed text-lg pt-2 pb-2">{service.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 text-sm font-bold text-black group-hover:text-[#D4AF37] transition-colors">
                  {expandedId === i ? "Show less" : "Read more"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center mt-16">
          <Link
            href="/credit/booking"
            className="bg-[#D4AF37] hover:bg-[#c19d2e] text-black font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl inline-block"
          >
            Apply for a Loan
          </Link>
        </div>
      </main>
    </div>
  );
}
