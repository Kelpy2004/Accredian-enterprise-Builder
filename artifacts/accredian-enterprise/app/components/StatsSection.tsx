"use client";

import { useStats } from "@/lib/api";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Counter({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export function StatsSection() {
  const { data: stats } = useStats();

  if (!stats) return null;

  const statItems = [
    { label: "Professionals Trained", value: stats.professionalsTrained, suffix: "+" },
    { label: "Batches Launched", value: stats.batchesLaunched, suffix: "+" },
    { label: "Enterprise Partners", value: stats.enterprisePartners, suffix: "+" },
    { label: "Avg. Satisfaction", value: stats.satisfactionScore, suffix: "/5" },
    { label: "Countries Reached", value: stats.countriesReached, suffix: "" },
    { label: "Learning Hours", value: stats.learningHours, suffix: "+" },
  ];

  return (
    <section id="stats" className="py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {statItems.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-4"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-slate-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}