"use client";
import { motion } from "framer-motion";
import { CreditCard, Landmark, LineChart, ShieldCheck, Zap, ArrowRight, Headset, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Landmark,
    title: "Microfinance Group Loans",
    desc: "Flexible microfinance solutions designed to support individuals and small businesses with affordable financing and convenient repayment options.",
    points: ["Low starting capital", "Weekly / monthly repayment", "Group guarantor scheme"],
  },
  {
    icon: CreditCard,
    title: "Business Loans",
    desc: "Business financing solutions that help entrepreneurs expand operations, manage cash flow, purchase equipment, and achieve sustainable growth.",
    points: ["Working capital support", "Equipment financing", "Flexible tenure"],
  },
  {
    icon: LineChart,
    title: "Vehicle Leasing",
    desc: "Affordable leasing plans for three-wheelers and two-wheelers with competitive interest rates, flexible terms, and a simple approval process.",
    points: ["Low down payment", "Islandwide coverage", "Fast approval"],
  },
  {
    icon: ShieldCheck,
    title: "Asset Mortgage Loans",
    desc: "Secure loans against your valuable assets with competitive interest rates, fast approval, and flexible repayment options to meet your financial needs.",
    points: ["High loan-to-value", "Property & land accepted", "Competitive rates"],
  },
  {
    icon: Zap,
    title: "Cheque Loans",
    desc: "Access quick and convenient financing using your cheque as security, with fast approval, flexible repayment terms tailored to your needs.",
    points: ["Same day cash release", "Minimal paperwork", "Confidential process"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* --- Hero Section --- */}
      <section className="relative w-full h-[380px] md:h-[430px] bg-black overflow-hidden">
        <img src="/finance.jpg" alt="Ceylon Credit Services" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40"></div>
        <div className="pointer-events-none absolute top-10 right-10 w-72 h-72 bg-[#D4AF37]/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-end px-6 pb-14">
          <div>
            <span className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase font-bold block mb-3">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-white mb-4">
              Services
            </h1>
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-gray-300">
              <Link href="/credit" className="hover:text-[#D4AF37] transition">Home</Link>
              <span className="text-[#D4AF37]">&gt;</span>
              <span className="text-[#D4AF37]">Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <main className="relative py-28 px-6 bg-gray-50 overflow-hidden">
        <div className="pointer-events-none absolute top-40 left-10 w-72 h-72 bg-[#D4AF37]/5 blur-[100px] rounded-full"></div>
        <div className="pointer-events-none absolute bottom-20 right-10 w-72 h-72 bg-[#D4AF37]/5 blur-[100px] rounded-full"></div>

        <div className="max-w-6xl mx-auto text-center mb-16 relative">
          <span className="text-[#c19d2e] text-xs tracking-[0.25em] uppercase font-bold block mb-3">What We Offer</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-black mb-6"
          >
            Our Financial Services
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl hover:border-[#D4AF37]/40 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Top gradient banner */}
              <div className="relative h-24 bg-black overflow-hidden">
                <div className="absolute -top-6 -right-6 w-28 h-28 bg-[#D4AF37]/10 blur-2xl rounded-full"></div>
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 20px 20px, #D4AF37 1px, transparent 0)", backgroundSize: "16px 16px" }}></div>
                <div className="absolute -bottom-7 left-8 w-16 h-16 bg-gradient-to-br from-[#f0d67a] via-[#D4AF37] to-[#b8892a] text-black rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <service.icon size={28} />
                </div>
              </div>

              <div className="p-8 pt-11 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>

                <ul className="space-y-2 mb-7">
                  {service.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={15} className="text-[#D4AF37] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/credit/booking"
                  className="mt-auto inline-flex items-center justify-center gap-1.5 w-full text-sm font-bold text-black border border-black/10 group-hover:border-[#D4AF37] group-hover:bg-black group-hover:text-[#D4AF37] rounded-full py-3 transition-all duration-300"
                >
                  Apply Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* CTA card filling the 6th grid slot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: services.length * 0.08 }}
            className="relative bg-black rounded-3xl overflow-hidden flex flex-col justify-center items-center text-center p-8 shadow-xl"
          >
            <div className="pointer-events-none absolute -top-10 -left-10 w-48 h-48 bg-[#D4AF37]/10 blur-[80px] rounded-full"></div>
            <div className="w-14 h-14 bg-white/10 border border-[#D4AF37]/40 rounded-2xl flex items-center justify-center mb-5 text-[#D4AF37]">
              <Headset size={26} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Not sure which loan fits you?</h3>
            <p className="text-gray-400 text-sm mb-6">Talk to our advisors - we'll help you choose the right facility.</p>
            <Link
              href="/credit/contact"
              className="bg-gradient-to-r from-[#f0d67a] via-[#D4AF37] to-[#b8892a] hover:brightness-110 text-black font-bold px-6 py-3 rounded-full text-sm transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Free Advice <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto text-center mt-20 relative">
          <Link
            href="/credit/booking"
            className="group bg-gradient-to-r from-[#f0d67a] via-[#D4AF37] to-[#b8892a] hover:brightness-110 text-black font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-[0_10px_40px_rgba(212,175,55,0.3)] hover:shadow-[0_10px_50px_rgba(212,175,55,0.5)] inline-flex items-center gap-2 hover:-translate-y-0.5"
          >
            Apply for a Loan <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>
    </div>
  );
}