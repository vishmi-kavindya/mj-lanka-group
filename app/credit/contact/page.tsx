"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<{ type: string; message: string }>({ type: "", message: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully! We will get back to you soon." });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Failed to send. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong!" });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* --- 1. Hero Section --- */}
      <section className="relative h-[350px] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black">
        <img src="/finance.jpg" alt="Contact Ceylon Credit Business" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center space-x-3 text-sm md:text-base text-gray-200"
          >
            <Link href="/credit" className="hover:text-[#D4AF37] transition">Home</Link>
            <span className="text-[#D4AF37] font-bold">&gt;</span>
            <span className="text-white font-medium">Contact Us</span>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Contact Info + Form --- */}
      <section className="max-w-6xl mx-auto -mt-20 relative z-20 px-6">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black text-white p-8 rounded-3xl shadow-xl h-full flex flex-col justify-center gap-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#D4AF37] text-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Head Office</h4>
                  <p className="text-gray-300 text-sm">No. 268/1 Ratnapura Road, Getaheththa, Sri Lanka.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#D4AF37] text-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className="text-gray-300 text-sm">+94 36 223 7489</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#D4AF37] text-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p className="text-gray-300 text-sm">info@ceyloncredit.lk</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#D4AF37] text-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="text-gray-300 text-sm">Mon - Fri: 8.30 AM - 5.00 PM<br />Saturday: 9.00 AM - 1.00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <h2 className="text-2xl font-extrabold text-black mb-1">Send Us a Message</h2>
            <div className="w-14 h-1 bg-[#D4AF37] rounded-full mb-8"></div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                    placeholder="+94 77 XXX XXXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service of Interest</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition appearance-none text-gray-700"
                  >
                    <option value="">Select a service</option>
                    <option value="Microfinance Group Loans">Microfinance Group Loans</option>
                    <option value="Business Loans">Business Loans</option>
                    <option value="Vehicle Leasing">Three/Two Wheeler Leasing</option>
                    <option value="Asset Mortgage Loans">Asset Mortgage Loans</option>
                    <option value="Cheque Loans">Cheque Loans</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full bg-black hover:bg-zinc-900 text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <span>{status.type === "loading" ? "Sending..." : "Send Message"}</span>
                <Send size={18} />
              </button>

              {status.type === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 px-4 py-4 rounded-xl text-center font-bold"
                >
                  {status.message}
                </motion.div>
              )}
              {status.type === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-4 rounded-xl text-center font-bold">
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
