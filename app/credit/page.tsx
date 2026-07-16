"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Landmark,
  CreditCard,
  LineChart,
  ShieldCheck,
  Zap,
  ArrowRight,
  Clock,
  Home as HomeIcon,
  Award,
  MessageSquareText,
  Users,
  Briefcase,
  Wallet,
  Star,
} from "lucide-react";

const services = [
  { icon: Landmark, title: "Microfinance Group Loans", desc: "Flexible microfinance solutions designed to support individuals and small businesses." },
  { icon: CreditCard, title: "Business Loans", desc: "Business financing that helps entrepreneurs expand, manage cash flow, and grow." },
  { icon: LineChart, title: "Vehicle Leasing", desc: "Affordable leasing for three-wheelers and two-wheelers with flexible terms." },
];

const whyChooseUs = [
  { icon: Clock, label: "Same Day Lending" },
  { icon: HomeIcon, label: "Door Step Service" },
  { icon: Award, label: "10+ Years Of Excellence" },
  { icon: ShieldCheck, label: "Comprehensive Advice" },
];

const stats = [
  { icon: Users, val: "12,500+", label: "Customers Served" },
  { icon: Briefcase, val: "80+", label: "Employees" },
  { icon: Award, val: "10+", label: "Years In Business" },
  { icon: Wallet, val: "5+", label: "Branches" },
];

const testimonials = [
  { name: "Nimal Perera", quote: "Got my business loan approved within a day. Genuinely fast and friendly service." },
  { name: "Kumari Silva", quote: "Very transparent process and the staff explained every step clearly. Highly recommended." },
];

export default function CreditPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* --- 1. Hero Section --- */}
      <section className="relative h-[560px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/finance.jpg" alt="Ceylon Credit Business" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50"></div>
        </div>

        <div
          className={`relative z-10 max-w-3xl px-6 text-left transition-all duration-[1200ms] ease-out transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="inline-block text-[#D4AF37] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 border border-[#D4AF37]/50 rounded-full px-4 py-1.5">
            Ceylon Credit Business (Pvt) Ltd
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Trusted Financial <br /> Solutions & Lending
          </h1>
          <p className="text-gray-200 text-lg mb-8 max-w-xl font-light leading-relaxed">
            Same-day credit solutions with minimum documentation, backed by the experience,
            skill and commitment of the MJ Lanka Group.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/credit/booking"
              className="bg-[#D4AF37] hover:bg-[#c19d2e] text-black font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-black/20 inline-flex items-center gap-2"
            >
              Apply Now <ArrowRight size={18} />
            </Link>
            <Link
              href="/credit/services"
              className="border border-white/40 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. Stats Section (Floating Cards) --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-100 p-6 md:p-8 rounded-3xl text-center shadow-xl"
            >
              <div className="flex justify-center mb-3 text-[#0d0d0d]">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-1">{item.val}</h3>
              <p className="text-gray-500 text-xs tracking-wide uppercase font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- 3. Services Section --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#D4AF37] text-xs tracking-widest uppercase font-bold block mb-2">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">Products & Services</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-50 border-t-4 border-black rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-black text-[#D4AF37] rounded-2xl flex items-center justify-center mb-6">
                <item.icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
              <Link href="/credit/services" className="text-black font-semibold text-sm inline-flex items-center gap-1 hover:text-[#D4AF37] transition">
                Read More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 4. Why Choose Us --- */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#D4AF37] text-xs tracking-widest uppercase font-bold block mb-2">
              Our Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4 text-[#D4AF37]">
                  <item.icon size={28} />
                </div>
                <p className="text-white font-semibold text-sm md:text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. About Preview --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <img src="/credit.jpg" alt="Ceylon Credit Business" className="rounded-[2rem] shadow-2xl object-cover w-full h-[420px]" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3 block">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-snug">
            A Financial Partner That Prioritises Its Customers
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ceylon Credit Business (Pvt) Ltd, a division of MJ Lanka Group of Company, provides
            microfinance, business loans and leasing facilities islandwide. We're known for
            same-day service, minimal documentation and genuine care for every customer we serve.
          </p>
          <Link
            href="/credit/about"
            className="bg-black hover:bg-zinc-900 text-white font-semibold px-7 py-3.5 rounded-full transition inline-flex items-center gap-2"
          >
            Read More <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* --- 6. Testimonials --- */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-[#D4AF37] text-xs tracking-widest uppercase font-bold block mb-2 flex items-center justify-center gap-2">
              <MessageSquareText size={16} /> Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4 text-[#D4AF37]">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-4">"{t.quote}"</p>
                <h4 className="text-black font-bold border-t border-[#D4AF37]/40 pt-4 inline-block">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. CTA --- */}
      <section className="py-20 px-6 bg-black text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Ready to get started?</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Apply online in minutes or visit our office — our team is ready to help you find the right facility.
        </p>
        <Link
          href="/credit/booking"
          className="bg-[#D4AF37] hover:bg-[#c19d2e] text-black font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-2"
        >
          Apply Now <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
