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
  ArrowRight,
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
      <section className="relative h-[420px] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black">
        <img src="/credit.jpg" alt="About Ceylon Credit Business" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black"></div>
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-72 bg-[#D4AF37]/10 blur-[110px] rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-block text-[#D4AF37] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6 border border-[#D4AF37]/40 bg-[#D4AF37]/10 rounded-full px-5 py-2">
            About Ceylon Credit Business
          </span>
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
            className="flex items-center justify-center space-x-3 text-sm md:text-base text-gray-300"
          >
            <Link href="/credit" className="hover:text-[#D4AF37] transition">Home</Link>
            <span className="text-[#D4AF37] font-bold">&gt;</span>
            <span className="text-white font-medium tracking-wide">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Who We Are --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gray-50 rounded-[2.5rem] shadow-xl p-8 md:p-14 border border-gray-100 flex flex-col lg:flex-row gap-14">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="absolute -inset-3 rounded-[2.5rem] border border-[#D4AF37]/30 -z-10"></div>
            <div className="relative min-h-[380px] rounded-3xl overflow-hidden shadow-2xl">
              <img src="/finance.jpg" alt="Ceylon Credit Business Office" className="w-full h-full object-cover absolute inset-0" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black border border-[#D4AF37]/40 text-white px-7 py-5 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-black text-[#D4AF37] leading-none mb-1">10+</h3>
              <p className="text-xs uppercase tracking-widest text-gray-300">Years of Trust</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12 lg:pl-4"
          >
            <span className="text-[#c19d2e] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Who We Are</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-snug">
              Ceylon Credit Business (Pvt) Ltd
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ceylon Credit Business (Pvt) Ltd is the financial services division of{" "}
              <strong className="text-black">MJ Lanka Group of Company</strong>, established to
              provide accessible microfinance, business loans and leasing facilities to individuals
              and small businesses across Sri Lanka.
            </p>
            <p className="text-gray-600 leading-relaxed mb-9">
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
                <div key={i} className="flex items-center gap-2.5 text-gray-700">
                  <CheckCircle2 size={18} className="text-[#D4AF37] flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. Mission & Vision --- */}
      <section className="relative bg-black py-24 px-6 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-[#D4AF37]/20 p-10 rounded-3xl hover:border-[#D4AF37]/50 transition-colors duration-300"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#f0d67a] via-[#D4AF37] to-[#b8892a] text-black rounded-2xl flex items-center justify-center mb-6">
              <Target size={26} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To provide fast, transparent, and responsible financial solutions that empower
              individuals and businesses to achieve their goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-white/5 border border-[#D4AF37]/20 p-10 rounded-3xl hover:border-[#D4AF37]/50 transition-colors duration-300"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#f0d67a] via-[#D4AF37] to-[#b8892a] text-black rounded-2xl flex items-center justify-center mb-6">
              <Eye size={26} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be Sri Lanka's most trusted financial partner, recognised for our integrity,
              accessibility, and commitment to community growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 4. Our Values --- */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#c19d2e] text-xs tracking-[0.25em] uppercase font-bold block mb-3">
            What Drives Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">Our Core Values</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group text-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-[#D4AF37]/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-black text-[#D4AF37] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 5. CTA --- */}
      <section className="py-20 px-6 bg-gray-50 text-center border-t border-gray-100">
        <h2 className="text-3xl font-extrabold text-black mb-4">Want to know more?</h2>
        <p className="text-gray-500 mb-9 max-w-xl mx-auto">
          Get in touch with our team or apply for a loan online in just a few minutes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/credit/booking"
            className="group bg-gradient-to-r from-[#f0d67a] via-[#D4AF37] to-[#b8892a] hover:brightness-110 text-black font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2 hover:-translate-y-0.5"
          >
            Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/credit/contact"
            className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-3.5 rounded-full transition inline-flex items-center gap-2"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}