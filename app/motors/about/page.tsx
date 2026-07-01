'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Award, Clock, Users, GraduationCap, Building2, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ඔයාලා වැඩ කරන ආයතන ලැයිස්තුව
const clients = [
  "Senkadagala Finance PLC", "AMW Capital Leasing & Finance PLC", "People's Leasing & Finance PLC", 
  "Ideal Finance LTD", "Lakderana Investment Ltd", "HNB Bank", "Pan Asia Bank", "SDB Bank", 
  "Commercial Credit & Finance PLC", "Mercantile Investments & Finance PLC", "LB Finance PLC", 
  "HNB Finance PLC", "Softlogic Finance PLC", "RDB Bank", "Amana Bank Limited", 
  "Fairfirst Insurance Ltd", "Sri Lanka Insurance Corp. Ltd", "Omek Investment LTD", 
  "UB Finance", "Sanasa Society"
];

// සුදුසුකම් ලැයිස්තුව
const qualifications = [
  "Diploma in Automobile Repairing (German Tec College)",
  "Diploma in Automobile (Electrician) (German Tec College)",
  "Special Course in Automobile Service (Ashok Leyland Service Training Center)",
  "Special Course in Repairing, Service, Maintenance (DIMO Automobile School)",
  "Special Course in Vehicles Emission Testing (ICTAD) CETRAC Sri Lanka",
  "Special Course in Maintenance and Administration (SLCTB) Sri Lanka"
];

export default function AboutPage() {
  return (
    <>
    <main className="bg-gray-50 min-h-screen pb-20">
      <Navbar /> 
      {/* --- 1. Hero Section --- */}
      <section className="relative h-[450px] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black">
        <Image 
          src="/company_picture.jpg" 
          alt="About MJ Motors" 
          fill 
          className="object-cover opacity-70" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-gray-50"></div>
        
        <div className="relative z-10 mt-16 max-w-5xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-5xl font-medium text-white drop-shadow-xl leading-snug tracking-wide mb-6"
          >
            Precision in Valuation. <br className="hidden md:block" /> Integrity in Every Detail.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center space-x-3 text-sm md:text-base text-gray-200 drop-shadow-md"
          >
            <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
            <span className="text-red-500 font-bold">&gt;</span>
            <span className="text-white font-medium tracking-wide">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Who We Are & Certifications Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 -mt-10 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-14 border border-gray-100 flex flex-col lg:flex-row gap-12">
          
          {/* වම් පැත්තේ පින්තූරය */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative min-h-[400px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/home2.webp" 
              alt="MJ Lanka Group Office" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-red-600/95 backdrop-blur-sm text-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-4xl font-black mb-1">10+</h3>
              <p className="text-sm font-medium uppercase tracking-wider opacity-90">Years of Trust</p>
            </div>
          </motion.div>

          {/* දකුණු පැත්තේ විස්තරය (Updated with company details) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12"
          >
            <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-3">Who We Are</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
              Sri Lanka's Authorized & Most Trusted Valuation Partner.
            </h3>
            <p className="text-gray-600 text-[1.05rem] leading-relaxed mb-6">
              <strong className="text-gray-900">MJ Lanka Group of Companies (Pvt) Ltd.</strong> (Reg No: PV00247120) has grown into one of the most respected and reliable motor vehicle and property valuation firms in the country. Our dedicated division, <strong>M.J. Motors</strong> (BRC No. W/F/C/9161), specializes in providing highly accurate, certified valuations, fitness certificates, and repairing services across all provinces.
            </p>
            
            {/* අනුමැතීන් පෙන්වන කොටුව */}
            <div className="bg-gray-50 border-l-4 border-red-600 p-5 rounded-r-xl mb-8 shadow-sm">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ShieldCheck className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">Approved Garage for Vehicle Fitness Certificates by the Commissioner of Provincial Registrar of Motor Vehicles.</span>
                </li>
                <li className="flex items-start">
                  <Award className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">Leasing Association Approval obtained on 23.09.2020.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. Professional Qualifications Section (New) --- */}
      <section className="bg-gray-900 py-20 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Professional Qualifications</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">Backed by extensive industry training and certifications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifications.map((qual, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 p-6 rounded-2xl flex items-start space-x-4 hover:bg-gray-800 transition-colors"
              >
                <div className="bg-red-600/20 p-3 rounded-lg text-red-500 flex-shrink-0">
                  <GraduationCap size={28} />
                </div>
                <p className="text-gray-200 font-medium leading-relaxed mt-1">
                  {qual}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. Our Trusted Partners Section (New) --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Trusted by Leading Institutions</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-lg max-w-3xl mx-auto">
              We currently provide our accurate valuation reports to a wide network of highly reputed Banks, Finance Companies, and Insurance Companies in Sri Lanka.
            </p>
          </div>

          {/* බැංකු සහ ලීසිං සමාගම් Grid එක */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gray-50 border border-gray-100 p-4 rounded-xl flex items-center space-x-3 hover:shadow-md hover:border-red-200 transition-all group"
              >
                <Building2 className="text-gray-400 group-hover:text-red-500 flex-shrink-0 transition-colors" size={20} />
                <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. Vision & Mission Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-[2rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
              <Target size={150} />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-600/30">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                To provide highly accurate, professional, and independent valuation services. We aim to empower our clients with the precise information they need to make informed decisions while maintaining the highest standards of integrity.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-red-700 rounded-[2rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
              <Eye size={150} />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Eye size={32} className="text-red-700" />
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Our Vision</h3>
              <p className="text-red-100 text-lg leading-relaxed font-light">
                To be recognized as Sri Lanka's leading and most innovative valuation and assessment firm, setting industry benchmarks for excellence, trust, and customer satisfaction across all regions of the country.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 6. Call to Action (CTA) Section --- */}
      <section className="py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Experience the MJ Motors Difference</h2>
          <p className="text-xl text-gray-600 mb-10">
            Get in touch with us today for reliable valuations backed by years of expertise.
          </p>
          <Link 
            href="/motors/contact" 
            className="bg-red-600 text-white font-bold py-4 px-10 rounded-full hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-red-600/40 inline-block text-lg transform hover:-translate-y-1"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </section>

    </main>
    <Footer />
    </>
  );
}