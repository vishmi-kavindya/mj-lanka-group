'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, Calendar, Clock, Car, Send } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';




export default function BookingPage() {
  const [status, setStatus] = useState<string | null>(null); // මේක උඩින්ම දාගන්න
  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '', location: '',
    assetType: 'vehicle', preferredDate: '', preferredTime: '', notes: ''
  });

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("යවන්න හදන දත්ත:", formData);
    setStatus(null);
    console.log("Phone number value:", formData.phone);
    console.log("Phone length:", formData.phone.length);
    try {
      // 1. Validation: ෆෝන් නම්බර් එක 10ක් තියෙනවද බලමු
      if (formData.phone.length < 10) {
    setStatus("phone_error"); // "phone_error" ලෙසම තියන්න
    return; 
}
      setStatus("Processing..."); // දත්ත යද්දී පෙන්නන්න

      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json(); // මේ පේළිය එකතු කරන්න
console.log("Backend එකෙන් ආපු උත්තරය:", data); // මෙන්න මේකෙන් බලාගන්න පුළුවන්

      if (res.ok) {
        setStatus("success"); // සාර්ථක වුණාම
      } else {
        setStatus("error"); // වැරදුණාම
      }
    } catch (error) {
      setStatus("error");
    }
  };
return (
 <>
<main className="min-h-screen bg-gray-50 pb-24">
 <Navbar />

      {/* --- 1. Hero Banner කොටස --- */}

      <section className="relative w-full h-[450px] flex flex-col items-center justify-center text-center overflow-hidden bg-black">

        <div className="absolute inset-0 z-0">

          <img

            src="/home2.webp"

            alt="Booking Banner"

            className="w-full h-full object-cover opacity-60"

          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-gray-50"></div>

        </div>



        <div className="relative z-10 text-white mt-12 px-4">

          <motion.h1

            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8 }}

            className="text-4xl md:text-5xl font-medium mb-6 tracking-wide"

          >

            Book Your Valuation

          </motion.h1>

         

          <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ duration: 0.8, delay: 0.2 }}

            className="flex items-center justify-center space-x-3 text-sm md:text-base text-gray-200"

          >

            <Link href="/" className="hover:text-white transition duration-300">Home</Link>

            <span className="text-red-500 font-bold">&gt;</span>

            <span className="text-white font-medium">Book Online</span>

          </motion.div>

        </div>

      </section>



      {/* --- 2. Booking Form කොටස --- */}

      <section className="max-w-3xl mx-auto -mt-24 relative z-20 px-6">
        
        <motion.div

          initial={{ opacity: 0, y: 50 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.7 }}

          className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100"

        >

          <div className="text-center mb-10">

            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Schedule Your Appointment</h2>

            <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>

            <p className="text-gray-500 mt-4">Select your preferred date and time to get started.</p>

          </div>



          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

             

              {/* Name */}

              <div className="relative">

                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>

                <div className="absolute left-4 top-11 text-gray-400"><User size={18} /></div>

                <input type="text" placeholder="Full Name " 
              value={formData.fullName} 
              onChange={(e) => setFormData({...formData, fullName: e.target.value})} 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none transition" 
              required 
            />

              </div>


              {/* Phone */}

              <div className="relative">

                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>

                <div className="absolute left-4 top-11 text-gray-400"><Phone size={18} /></div>

                <input type="text" placeholder="+94 77 XXX XXXX" value={formData.phone} 
             onChange={(e) => { setFormData({...formData, phone: e.target.value});  setStatus(null); // මේක දැම්මම තමයි වැරැද්ද හැදුවම error එක මැකිලා යන්නේ
            }}className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none transition" required />

              </div>

            </div>


             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Email */}

              <div className="relative">

                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>

                <div className="absolute left-4 top-11 text-gray-400"><Mail size={18} /></div>

                <input type="email" placeholder="john@example.com" value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none transition" />

              </div>



              {/* Location */}

              <div className="relative">

                <label className="block text-sm font-bold text-gray-700 mb-2">Location / City</label>

                <div className="absolute left-4 top-11 text-gray-400"><MapPin size={18} /></div>

                <input type="text" placeholder="Colombo 07" value={formData.location} 
              onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none transition" />

              </div>

            </div>



            {/* Asset Type */}

            <div className="relative">

              <label className="block text-sm font-bold text-gray-700 mb-2">Vehicle / Asset Type *</label>

              <div className="absolute left-4 top-11 text-gray-400"><Car size={18} /></div>

              <select  value={formData.assetType} 
               onChange={(e) => setFormData({...formData, assetType: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none transition appearance-none text-gray-700">

                <option value="vehicle">Vehicle Valuation</option>

                <option value="property">Property Valuation</option>

                <option value="machinery">Machinery Valuation</option>

              </select>

            </div>



            {/* Date & Time */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date</label>

                <div className="relative">

                    <div className="absolute left-4 top-4 text-gray-400"><Calendar size={18} /></div>

                    <input type="date" value={formData.preferredDate} 
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none transition" />

                </div>

              </div>

              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Time</label>

                <div className="relative">

                    <div className="absolute left-4 top-4 text-gray-400"><Clock size={18} /></div>

                    <input type="time"  value={formData.preferredTime} 
                onChange={(e) => setFormData({...formData, preferredTime: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none transition" />

                </div>

              </div>

            </div>



            {/* Notes */}

            <div>

              <label className="block text-sm font-bold text-gray-700 mb-2">Additional Notes</label>

              <textarea rows={3} placeholder="Vehicle No / Special details..." value={formData.notes} 
              onChange={(e) => setFormData({...formData, notes: e.target.value})} className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none transition resize-none"></textarea>

            </div>


             

              

            {/* Submit */}

            <button type="submit" className="w-full bg-red-600 text-white font-bold text-lg py-5 rounded-2xl hover:bg-red-700 transition-all duration-300 shadow-xl shadow-red-600/30 flex items-center justify-center space-x-2 transform hover:-translate-y-1">

              <span>Confirm Booking</span>

              <Send size={20} />

            </button>

            {status === "phone_error" && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl text-sm font-medium flex items-center gap-2">
             <span>⚠️ Please Enter Your Correct Phone Number.</span>
           </div>
          )}



           {status === "success" && (
  <motion.div 
    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
    className="bg-green-100 border border-green-400 text-green-700 px-4 py-4 rounded-2xl text-center font-bold"
  >
    Booking Successful! We will contact you soon.
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

    </main>

    <Footer />

    </>

  );

}