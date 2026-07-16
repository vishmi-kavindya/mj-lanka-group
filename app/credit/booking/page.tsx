"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, Calendar, Clock, Landmark, Send } from "lucide-react";

export default function LoanApplicationPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    assetType: "microfinance",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (formData.phone.length < 10) {
      setStatus("phone_error");
      return;
    }
    setStatus("Processing...");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          location: "",
          assetType: "microfinance",
          preferredDate: "",
          preferredTime: "",
          notes: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* --- 1. Hero Banner --- */}
      <section className="relative w-full h-[400px] flex flex-col items-center justify-center text-center overflow-hidden bg-black">
        <img src="/credit.jpg" alt="Apply for a Loan" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black"></div>

        <div className="relative z-10 text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Apply For a Loan
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center space-x-3 text-sm md:text-base text-gray-200"
          >
            <Link href="/credit" className="hover:text-[#D4AF37] transition">Home</Link>
            <span className="text-[#D4AF37] font-bold">&gt;</span>
            <span className="text-white font-medium">Apply Now</span>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Application Form --- */}
      <section className="max-w-3xl mx-auto -mt-20 relative z-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-black mb-3">Loan Application Form</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-4">Fill in your details and we'll get back to you the same day.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                <div className="absolute left-4 top-11 text-gray-400"><User size={18} /></div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                  required
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                <div className="absolute left-4 top-11 text-gray-400"><Phone size={18} /></div>
                <input
                  type="text"
                  placeholder="+94 77 XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    setStatus(null);
                  }}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <div className="absolute left-4 top-11 text-gray-400"><Mail size={18} /></div>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                />
              </div>

              {/* Location */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2">Location / City</label>
                <div className="absolute left-4 top-11 text-gray-400"><MapPin size={18} /></div>
                <input
                  type="text"
                  placeholder="Colombo 07"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                />
              </div>
            </div>

            {/* Loan Type */}
            <div className="relative">
              <label className="block text-sm font-bold text-gray-700 mb-2">Loan / Facility Type *</label>
              <div className="absolute left-4 top-11 text-gray-400"><Landmark size={18} /></div>
              <select
                value={formData.assetType}
                onChange={(e) => setFormData({ ...formData, assetType: e.target.value })}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition appearance-none text-gray-700"
              >
                <option value="microfinance">Microfinance Group Loan</option>
                <option value="business">Business Loan</option>
                <option value="leasing">Three/Two Wheeler Leasing</option>
                <option value="mortgage">Asset Mortgage Loan</option>
                <option value="cheque">Cheque Loan</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date</label>
                <div className="relative">
                  <div className="absolute left-4 top-4 text-gray-400"><Calendar size={18} /></div>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Time</label>
                <div className="relative">
                  <div className="absolute left-4 top-4 text-gray-400"><Clock size={18} /></div>
                  <input
                    type="time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Additional Notes</label>
              <textarea
                rows={3}
                placeholder="Loan amount required / special details..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-black text-white font-bold text-lg py-5 rounded-2xl hover:bg-zinc-900 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 transform hover:-translate-y-1"
            >
              <span>Submit Application</span>
              <Send size={20} />
            </button>

            {status === "phone_error" && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl text-sm font-medium flex items-center gap-2">
                <span>⚠️ Please enter a valid phone number.</span>
              </div>
            )}

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-4 rounded-2xl text-center font-bold"
              >
                Application Submitted! Our team will contact you shortly.
              </motion.div>
            )}

            {status === "error" && (
              <div className="bg-red-100 text-red-700 p-4 rounded-2xl text-center font-bold">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </motion.div>
      </section>
    </div>
  );
}
