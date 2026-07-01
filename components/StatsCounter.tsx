'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { label: "Hours of Works", count: 65250, icon: "💼" },
  { label: "Happy Customers", count: 23160, icon: "👍" },
  { label: "Experienced Workers", count: 1500, icon: "👥" },
  { label: "Years of Experience", count: 20, icon: "🎖️" },
];

export default function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 bg-linear-to-b from-gray-900 to-black text-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:bg-white/10"
          >
            <div className="text-5xl mb-6">{stat.icon}</div>
            <h3 className="text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-400 mb-2">
              {isInView ? <CountUp end={stat.count} /> : "0"}+
            </h3>
            <p className="text-gray-400 font-medium tracking-wide uppercase text-xs md:text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 40);
    return () => clearInterval(timer);
  }, [end]);
  return <>{count.toLocaleString()}</>;
}