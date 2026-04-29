"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, BookOpen, TrendingUp, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white pt-24 pb-20 lg:pt-32 lg:pb-28 scroll-mt-20">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 transform">
        <div className="h-[40rem] w-[60rem] opacity-30 blur-3xl rounded-full bg-gradient-to-tr from-blue-100 to-indigo-50" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              Enterprise Upskilling Partner
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Empower Your Workforce with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Future-Ready Skills</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Partner with India's leading executive education brand to transform your talent. Scalable, outcomes-driven programs in AI, Data Science, and Product Leadership designed for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-base">
                <a href="#form">Book a Demo</a>
              </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-blue-200 text-blue-700 hover:bg-blue-50">
              <a href="#cat">Explore Programs</a>
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Custom Learning Paths
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Industry Expert Mentors
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            {/* Dashboard Mockup UI */}
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl shadow-blue-900/5 overflow-hidden">
              <div className="border-b border-gray-100 bg-gray-50/50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-medium text-gray-500">Talent Insights Dashboard</div>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-gray-100 p-4 bg-blue-50/30">
                    <div className="flex items-center justify-between mb-2">
                      <Users className="h-5 w-5 text-blue-500" />
                      <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">+12%</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">1,248</div>
                    <div className="text-xs text-gray-500 font-medium">Employees Enrolled</div>
                  </div>
                  <div className="rounded-xl border border-gray-100 p-4 bg-indigo-50/30">
                    <div className="flex items-center justify-between mb-2">
                      <BookOpen className="h-5 w-5 text-indigo-500" />
                      <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">+8%</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">85%</div>
                    <div className="text-xs text-gray-500 font-medium">Completion Rate</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900">Cohort Progress</h3>
                    <Button variant="ghost" size="sm" className="h-6 text-xs text-blue-600 p-0">View All</Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="font-medium text-gray-700">Data Science Leadership</span>
                        <span className="text-gray-500">72%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="font-medium text-gray-700">AI for Business</span>
                        <span className="text-gray-500">45%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="font-medium text-gray-700">Product Management</span>
                        <span className="text-gray-500">89%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '89%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg bg-gray-900 p-4 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/10 p-2 rounded-md">
                      <TrendingUp className="h-4 w-4 text-blue-300" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">ROI Projected</div>
                      <div className="text-xs text-gray-400">Next 12 months</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-green-400">3.2x</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-blue-100 blur-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-indigo-100 blur-2xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
