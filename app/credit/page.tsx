"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Landmark,
  CreditCard,
  LineChart,
  ShieldCheck,
  ArrowRight,
  Clock,
  Home as HomeIcon,
  Award,
  MessageSquareText,
  Users,
  Briefcase,
  Wallet,
  Star,
  Quote,
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
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* --- 1. Hero Section --- */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/finance.jpg" alt="Ceylon Credit Business" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Decorative gold glow orbs */}
        <div className="pointer-events-none absolute top-10 right-[15%] w-72 h-72 bg-[#D4AF37]/10 blur-[100px] rounded-full"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
          <div
            className={`max-w-2xl transition-all duration-[1200ms] ease-out transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6 border border-[#D4AF37]/50 bg-[#D4AF37]/10 rounded-full px-5 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Ceylon Credit Business (Pvt) Ltd
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Trusted Financial <br />
              <span className="bg-gradient-to-r from-[#f0d67a] via-[#D4AF37] to-[#b8892a] bg-clip-text text-transparent">
                Solutions &amp; Lending
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-9 max-w-xl font-light leading-relaxed">
              Same-day credit solutions with minimum documentation, backed by the experience,
              skill and commitment of the MJ Lanka Group.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/credit/booking"
                className="group bg-gradient-to-r from-[#f0d67a] via-[#D4AF37] to-[#b8892a] hover:brightness-110 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_10px_40px_rgba(212,175,55,0.35)] hover:shadow-[0_10px_50px_rgba(212,175,55,0.55)] inline-flex items-center gap-2 hover:-translate-y-0.5"
              >
                Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/credit/services"
                className="border border-white/25 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. Stats Section (Floating Cards) --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-black border border-[#D4AF37]/20 p-6 md:p-8 rounded-3xl text-center shadow-2xl shadow-black/30 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-shadow duration-300"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center mb-4 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent text-[#D4AF37] border border-[#D4AF37]/30">
                <item.icon size={26} />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1">{item.val}</h3>
              <p className="text-gray-400 text-xs tracking-wide uppercase font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- 3. Services Section --- */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#c19d2e] text-xs tracking-[0.25em] uppercase font-bold block mb-3">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">Products &amp; Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="group relative p-9 bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f0d67a] via-[#D4AF37] to-[#b8892a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="w-16 h-16 bg-black text-[#D4AF37] rounded-2xl flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-5">{item.desc}</p>
              <Link href="/credit/services" className="text-black font-semibold text-sm inline-flex items-center gap-1.5 group-hover:text-[#c19d2e] transition-colors">
                Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 4. Why Choose Us --- */}
      <section className="relative bg-black py-24 px-6 overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase font-bold block mb-3">
              Our Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-white/5 border border-[#D4AF37]/30 rounded-2xl flex items-center justify-center mb-5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 group-hover:scale-110">
                  <item.icon size={28} />
                </div>
                <p className="text-white font-semibold text-sm md:text-base">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. About Preview --- */}
      <section className="py-28 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[2.5rem] border border-[#D4AF37]/30 -z-10"></div>
          <img src="/credit.jpg" alt="Ceylon Credit Business" className="rounded-[2rem] shadow-2xl object-cover w-full h-[420px]" />
          <div className="absolute -bottom-6 -right-6 bg-black border border-[#D4AF37]/40 text-white px-7 py-5 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-black text-[#D4AF37] leading-none mb-1">10+</h3>
            <p className="text-xs uppercase tracking-widest text-gray-300">Years of Trust</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="text-[#c19d2e] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-snug">
            A Financial Partner That Prioritises Its Customers
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Ceylon Credit Business (Pvt) Ltd, a division of MJ Lanka Group of Company, provides
            microfinance, business loans and leasing facilities islandwide. We're known for
            same-day service, minimal documentation and genuine care for every customer we serve.
          </p>
          <Link
            href="/credit/about"
            className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-full transition inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            Read More <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* --- 6. Testimonials --- */}
      <section className="relative bg-gray-50 py-28 px-6 overflow-hidden">
        <Quote className="absolute top-10 left-10 text-[#D4AF37]/10" size={140} />
        <div className="max-w-7xl mx-auto relative">
          <div className="mb-16 text-center">
            <span className="text-[#c19d2e] text-xs tracking-[0.25em] uppercase font-bold mb-3 flex items-center justify-center gap-2">
              <MessageSquareText size={16} /> Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white p-9 rounded-[2rem] shadow-lg hover:shadow-2xl border border-gray-100 transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-5 text-[#D4AF37]">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-6 text-lg">"{t.quote}"</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="w-11 h-11 rounded-full bg-black text-[#D4AF37] flex items-center justify-center font-bold text-sm">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h4 className="text-black font-bold">{t.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. CTA --- */}
      <section className="relative py-24 px-6 bg-black text-center overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D4AF37]/10 blur-[110px] rounded-full"></div>
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Ready to get started?</h2>
          <p className="text-gray-400 mb-9 max-w-xl mx-auto">
            Apply online in minutes or visit our office — our team is ready to help you find the right facility.
          </p>
          <Link
            href="/credit/booking"
            className="group bg-gradient-to-r from-[#f0d67a] via-[#D4AF37] to-[#b8892a] hover:brightness-110 text-black font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-[0_10px_40px_rgba(212,175,55,0.35)] hover:shadow-[0_10px_50px_rgba(212,175,55,0.55)] inline-flex items-center gap-2 hover:-translate-y-0.5"
          >
            Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}