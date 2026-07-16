"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Eye,
  Users,
  Clock,
  Award,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Same Day Lending",
    desc: "Speedy service with minimum documentation, all within the same day.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Lending",
    desc: "We lend responsibly to individuals in a conscionable and sustainable manner.",
  },
  {
    icon: Users,
    title: "Customer First",
    desc: "Every decision we make starts with what's best for the people we serve.",
  },
  {
    icon: Award,
    title: "10+ Years Of Excellence",
    desc: "A decade of trusted service under the MJ Lanka Group of Company.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* --- 1. Hero Section --- */}
      <section className="relative h-[400px] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black">
        <img src="/credit.jpg" alt="About Ceylon Credit Business" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl leading-snug mb-6"
          >
            A Financial Partner You Can Trust
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center space-x-3 text-sm md:text-base text-gray-200"
          >
            <Link href="/credit" className="hover:text-[#D4AF37] transition">Home</Link>
            <span className="text-[#D4AF37] font-bold">&gt;</span>
            <span className="text-white font-medium tracking-wide">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Who We Are --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gray-50 rounded-[2rem] shadow-xl p-8 md:p-14 border border-gray-100 flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative min-h-[380px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img src="/finance.jpg" alt="Ceylon Credit Business Office" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute bottom-6 left-6 bg-[#D4AF37] text-black p-6 rounded-2xl shadow-xl">
              <h3 className="text-4xl font-black mb-1">10+</h3>
              <p className="text-sm font-bold uppercase tracking-wider">Years of Trust</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12"
          >
            <h2 className="text-[#c19d2e] font-bold tracking-widest uppercase text-sm mb-3">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-snug">
              Ceylon Credit Business (Pvt) Ltd
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ceylon Credit Business (Pvt) Ltd is the financial services division of{" "}
              <strong className="text-black">MJ Lanka Group of Company</strong>, established to
              provide accessible microfinance, business loans and leasing facilities to individuals
              and small businesses across Sri Lanka.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our key strength is the same-day service credit solutions we offer, coupled with the
              experience, skill and commitment of our staff. We combine speed with responsible
              lending practices so every customer gets a fair, transparent deal.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Same-day loan processing",
                "Minimum documentation",
                "Islandwide branch network",
                "Transparent interest rates",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 size={18} className="text-[#D4AF37] flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. Mission & Vision --- */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl"
          >
            <div className="w-14 h-14 bg-[#D4AF37] text-black rounded-2xl flex items-center justify-center mb-6">
              <Target size={26} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To provide fast, transparent, and responsible financial solutions that empower
              individuals and businesses to achieve their goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl"
          >
            <div className="w-14 h-14 bg-[#D4AF37] text-black rounded-2xl flex items-center justify-center mb-6">
              <Eye size={26} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be Sri Lanka's most trusted financial partner, recognised for our integrity,
              accessibility, and commitment to community growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 4. Our Values --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#c19d2e] text-xs tracking-widest uppercase font-bold block mb-2">
            What Drives Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">Our Core Values</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="text-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-black text-[#D4AF37] rounded-2xl flex items-center justify-center mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 5. CTA --- */}
      <section className="py-16 px-6 bg-gray-50 text-center border-t border-gray-100">
        <h2 className="text-3xl font-extrabold text-black mb-4">Want to know more?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Get in touch with our team or apply for a loan online in just a few minutes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/credit/booking"
            className="bg-[#D4AF37] hover:bg-[#c19d2e] text-black font-bold px-8 py-3.5 rounded-full transition"
          >
            Apply Now
          </Link>
          <Link
            href="/credit/contact"
            className="bg-black hover:bg-zinc-900 text-white font-bold px-8 py-3.5 rounded-full transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
