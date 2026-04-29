"use client";

import { useState, useMemo } from "react";
import { usePrograms } from "@/lib/api";
import { motion } from "framer-motion";
import { Clock, BarChart, CheckCircle2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export function ProgramsSection() {
  const { data: programs, isLoading, error } = usePrograms();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    if (!programs) return ["All"];
    const cats = new Set(programs.map(p => p.category));
    return ["All", ...Array.from(cats)];
  }, [programs]);

  const filteredPrograms = useMemo(() => {
    if (!programs) return [];
    if (activeCategory === "All") return programs;
    return programs.filter(p => p.category === activeCategory);
  }, [programs, activeCategory]);

  return (
    <section id="cat" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Enterprise Programs
          </h2>
          <p className="text-lg text-gray-600">
            Intensive, outcome-driven learning paths designed for working professionals.
          </p>
        </div>

        {isLoading ? (
          <div className="space-y-8">
            <div className="flex gap-2 justify-center"><Skeleton className="h-10 w-24" /><Skeleton className="h-10 w-24" /></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => <Skeleton key={i} className="h-96 rounded-2xl" />)}
            </div>
          </div>
        ) : error ? (
           <div className="text-center text-red-500 py-10">Failed to load programs.</div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? "bg-primary text-white shadow-sm" 
                      : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-all"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <Badge variant="secondary" className="w-fit mb-4 bg-blue-50 text-blue-700 hover:bg-blue-50">
                      {program.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {program.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BarChart className="h-4 w-4" />
                        {program.level}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6 flex-1">
                      {program.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Key Outcomes</div>
                      {program.outcomes.slice(0, 3).map((outcome, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                    <a href="#form" className="text-sm font-semibold text-primary hover:text-blue-700 flex items-center justify-center">
                      Request Syllabus & Pricing
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
