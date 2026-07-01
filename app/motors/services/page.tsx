'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// අලුත් Services ලැයිස්තුව (පින්තූර සහ ID අංක සමග)
const servicesList = [
  {
    id: "01",
    title: "Vehicle & Machinery Valuation",
    description: "Accurate and reliable valuation certificates for motor vehicles,machinery and equipment for various legal and financial purposes.",
    image: "/Vehicle & Machinery Valuation.webp", 
  },
  {
    id: "02",
    title: "Vehicle Scanning Report",
    description: "Comprehensive assessments and valuations of vehicles prior to accidents to determine their true market value.",
    image: "/Scanning Report.jpg",
  },
  {
    id: "03",
    title: "Fitness Certificate Issuing for and Island",
    description: "Professional evaluations for vehicles and assets located in auction yards to ensure you get the best market rates.",
    image: "/Fitness Certificate.jpg",
  },
  {
    id: "04",
    title: "Vehicle Repairing",
    description: "Expert advice on asset management, depreciation and investment strategies in the automotive and machinery sectors.",
    image: "/repairing.jpg",
  },
  {
    id: "05",
    title: "Vehicle Buying & Selling Assistance",
    description: "Safety and functional audits for newly commissined plant machinery and heavy equipment.",
    image: "/Vehicle Buying & Selling Consultation.jpg",
  },
  
];

export default function Services() {
  // Card එක Click කළාම දිගෑරෙන එක පාලනය කරන State එක
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <>
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* --- 1. Hero Section (About Us Style) --- */}
      <section className="relative h-[450px] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black">
        <Image 
          src="/services.png" // Car Logos තියෙන පින්තූරය
          alt="Our Services Background" 
          fill 
          className="object-cover opacity-60" 
        />
        
        {/* මෙතනින් තමයි About Us එකේ වගේ යටට එද්දී සුදු පාටට Fade වෙන්න හැදුවේ (to-gray-50) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-gray-50"></div>
        
        <div className="relative z-10 mt-16 max-w-5xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            // font-bold වෙනුවට font-medium පාවිච්චි කළා
            className="text-4xl md:text-5xl lg:text-5xl font-medium text-white drop-shadow-xl leading-tight tracking-tight mb-6"
          >
            How We Create Value at MJ Lanka Group of Company (Pvt) Ltd.<br className="hidden md:block" /> 
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-200 drop-shadow-lg font-light tracking-wide mb-8"
          >
            Your Dedicated Partner for Accurate and Reliable Valuation Solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-3 text-sm md:text-base text-gray-200 drop-shadow-md"
          >
            <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
            <span className="text-red-500 font-bold">&gt;</span>
            <span className="text-white font-medium tracking-wide">Services</span>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Grid Section (අලුතින් එකතු කළ කොටස) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleCard(service.id)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 flex flex-col group transform hover:-translate-y-1"
            >
              {/* Image කොටස */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/600x400?text=Service+Image";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-5 text-white font-black text-4xl drop-shadow-lg opacity-90">
                  {service.id}
                </span>
              </div>

              {/* Title සහ Click කරාම පෙනෙන Description එක */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="text-gray-400 group-hover:text-red-500 transition-colors ml-4 flex-shrink-0">
                    {expandedId === service.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedId === service.id ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Call to Action (CTA) Section (ඔයාගේ පරණ කෝඩ් එක එහෙමම තියෙනවා) */}
      <section className="bg-red-700 py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Need a professional valuation today?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Contact our team of experts to schedule an appointment or to learn more about how we can assist you with your specific needs.
        </p>
        <Link href="/contact" className="bg-white text-red-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg inline-block">
          Contact Us Now
        </Link>
      </section>

    </main>
    <Footer />
    </>
  );
}