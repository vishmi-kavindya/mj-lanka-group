'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus({ type: 'loading', message: 'Sending...' }); // පණිවිඩය යවන අතරතුර

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } else {
      setStatus({ type: 'error', message: 'Failed to send. Please try again.' });
    }
  } catch (error) {
    setStatus({ type: 'error', message: 'Something went wrong!' });
  }
};

  return (
    <>
    <main className="bg-gray-50 min-h-screen pb-20">
      <Navbar />
      {/* --- 1. Hero Section --- */}
      <section className="relative h-[450px] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black">
        <Image 
          src="/hmoe3.jpg" // ඔයාගේ public ෆෝල්ඩරේ තියෙන පින්තූරයක් දෙන්න (Contact වලට ගැලපෙන)
          alt="Contact MJ Motors" 
          fill 
          className="object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-gray-50"></div>
        
        <div className="relative z-10 mt-16 max-w-5xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white drop-shadow-xl leading-snug tracking-wide mb-6"
          >
            Get In Touch
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center space-x-3 text-sm md:text-base text-gray-200 drop-shadow-md"
          >
            <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
            <span className="text-red-500 font-bold">&gt;</span>
            <span className="text-white font-medium tracking-wide">Contact</span>
          </motion.div>
        </div>
      </section>

     {/* --- 2. Contact Information Cards (Dark Theme) --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="flex flex-wrap justify-center gap-6">
          
          {/* 1. Head Office Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:-translate-y-2 hover:shadow-red-500/10 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
              <MapPin className="text-red-500" size={26} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Head Office</h3>
            <p className="text-gray-300 font-medium">No. 268/1 Ratnapura Road,</p>
            <p className="text-gray-400 text-sm mt-1">Getaheththa, Sri Lanka.</p>
          </motion.div>

          {/* 2. City Office Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:-translate-y-2 hover:shadow-red-500/10 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
              <MapPin className="text-red-500" size={26} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">City Office</h3>
            <p className="text-gray-300 font-medium">No. 789/C, Thalangama South,</p>
            <p className="text-gray-400 text-sm mt-1">Pelawatta, Battaramulla.</p>
          </motion.div>

          {/* 3. Phone Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:-translate-y-2 hover:shadow-red-500/10 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
              <Phone className="text-red-500" size={26} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
            <p className="text-gray-300 font-medium mb-1">+94 36 223 7489</p>
            <p className="text-gray-300 font-medium">+94 78 885 0888</p>
            <p className="text-gray-300 font-medium">+94 77 832 2376</p>
          </motion.div>

          {/* 4. Email Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:-translate-y-2 hover:shadow-red-500/10 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
              <Mail className="text-red-500" size={26} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
            <p className="text-gray-300 text-sm md:text-base break-all mt-2">mjmotorsah<br/>@gmail.com</p>
          </motion.div>

          {/* 5. Working Hours Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-800 hover:-translate-y-2 hover:shadow-red-500/10 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
              <Clock className="text-red-500" size={26} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Working Hours</h3>
            <p className="text-gray-300 font-medium mb-1">Mon - Fri: 8:00 AM - 5:00 PM</p>
            <p className="text-gray-400 text-sm">Saturday: 8:00 AM - 5:00 PM</p>
            <p className="text-red-400 text-xs mt-2 uppercase tracking-wider font-bold">Sunday: Closed</p>
          </motion.div>

        </div>
      </section>

      {/* --- 3. Contact Form & Map Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Left Side: Contact Form */}
          <div className="w-full lg:w-1/2 p-10 md:p-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="+94 7X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                <select 
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-gray-600"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option value="">Select a Service</option>
                  <option value="valuation">Vehicle Valuation</option>
                  <option value="fitness">Fitness Certificate</option>
                  <option value="repair">Vehicle Repair</option>
                  <option value="buying_selling">Buying & Selling Assistance</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/40 flex items-center justify-center space-x-2 transform hover:-translate-y-1"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
              {status.message && (
  <p className={`mt-4 text-center font-medium ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
    {status.message}
  </p>
)}
            </form>
          </div>

          {/* Right Side: Google Map Placeholder (Iframe) */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full bg-gray-200 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253492.84641653515!2d79.95577501869415!3d6.911430655357435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3a9004602eaef%3A0x666a5734d8b22ad5!2sMJ%20Motors!5e0!3m2!1sen!2slk!4v1783019641318!5m2!1sen!2slk" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
        </div>
      </section>

    </main>
    <Footer />
    </>
  );
}