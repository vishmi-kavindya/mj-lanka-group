'use client';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Rajantha Jayasinghe",
    date: "12 January 2025",
    rating: 5,
    text: "Had my vehicle valuation done from CareDrive. Superb service. Keep up the good work."
  },
  {
    name: "Manoj Premachandra",
    date: "15 March 2025",
    rating: 5,
    text: "Quick service and their professionalism is highly recommend to everyone those who wish to obtain vehicle valuation service. Thank you Mr. Isuru and Care Drive team. I wish you all the best in your trade and business."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* වම් පැත්ත: Title */}
        <div className="md:w-1/3">
          <p className="text-red-600 font-bold tracking-widest text-sm uppercase mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">What They Says</h2>
          <div className="w-20 h-1 bg-red-600 mt-6"></div>
        </div>

        {/* දකුණු පැත්ත: Reviews */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#1a1a1a] p-8 rounded-2xl hover:bg-[#222] transition duration-300"
            >
              <div className="text-yellow-500 mb-4 text-xl">★★★★★ <span className="text-white text-sm ml-2">{review.rating}.0</span></div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-lg">{review.name}</h4>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}