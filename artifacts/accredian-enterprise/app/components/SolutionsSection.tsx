"use client";

import { useSolutions } from "@/lib/api";
import { motion } from "framer-motion";
import { CheckCircle2, LayoutGrid, Zap, Shield, Globe } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function SolutionsSection() {
  const { data: solutions, isLoading, error } = useSolutions();

  const getIcon = (index: number) => {
    const icons = [LayoutGrid, Zap, Shield, Globe];
    const Icon = icons[index % icons.length];
    return <Icon className="h-6 w-6" />;
  };

  return (
    <section id="howItWorks" className="py-20 bg-gray-50/50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive upskilling architectures designed to meet the specific needs of modern enterprises.
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-64 rounded-2xl" />
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-10 border border-red-100 rounded-xl bg-red-50">
            Failed to load solutions. Please try again later.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {solutions?.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-16 -mt-16 opacity-10 transition-transform group-hover:scale-150 duration-500"
                  style={{ backgroundColor: solution.accent }}
                />
                
                <div 
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-6 shadow-sm"
                  style={{ backgroundColor: `${solution.accent}15`, color: solution.accent }}
                >
                  {getIcon(index)}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">{solution.tagline}</p>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <ul className="space-y-3">
                  {solution.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
