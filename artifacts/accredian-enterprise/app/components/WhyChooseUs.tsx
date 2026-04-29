"use client";

import { motion } from "framer-motion";
import { Target, Award, LineChart, Layers } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    {
      title: "Custom Programs",
      description: "Curriculums tailored to your exact business domain, tech stack, and strategic objectives.",
      icon: Target,
    },
    {
      title: "Expert Mentors",
      description: "Learn directly from top 1% industry practitioners at leading global tech companies.",
      icon: Award,
    },
    {
      title: "Real Business Outcomes",
      description: "Capstone projects mapped to your company's actual data and product challenges.",
      icon: LineChart,
    },
    {
      title: "Scalable Training",
      description: "Standardized high-quality delivery whether you're training 50 or 5,000 employees.",
      icon: Layers,
    }
  ];

  return (
    <section id="accredianEdge" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Why Choose Accredian
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We don't just deliver courses. We build capability architectures that drive measurable ROI for your enterprise.
            </p>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-4 text-blue-600 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
