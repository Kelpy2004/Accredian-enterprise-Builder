"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateLead, usePrograms } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { useState, useMemo } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid work email is required"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().optional(),
  teamSize: z.string().optional(),
  trainingArea: z.string().min(1, "Please select a training area"),
  message: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadSchema>;

export function LeadForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const createLead = useCreateLead();
  const { data: programs } = usePrograms();

  const trainingCategories = useMemo(() => {
    if (!programs) return ["Data Science", "Product Management", "AI/ML", "Leadership", "Other"];
    const cats = new Set(programs.map(p => p.category));
    return Array.from(cats);
  }, [programs]);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      teamSize: "",
      trainingArea: "",
      message: "",
    },
  });

  function onSubmit(data: LeadFormValues) {
    createLead.mutate(data, {
      onSuccess: () => {
        setIsSuccess(true);
        toast.success("Request submitted successfully.");
      },
      onError: (error: unknown) => {
        const message =
          error instanceof Error
            ? error.message
            : "Failed to submit request. Please try again.";
        toast.error(message);
      }
    });
  }

  return (
    <section id="form" className="py-20 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/pattern.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="p-8 sm:p-10 md:p-12 md:w-5/12 bg-slate-900 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Transform your workforce today</h2>
              <p className="text-slate-300 mb-8 text-sm leading-relaxed">
                Schedule a consultation with our enterprise experts to design a customized capability building program for your team.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Custom curriculum</div>
                    <div className="text-xs text-slate-400">Aligned to your goals</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Flexible delivery</div>
                    <div className="text-xs text-slate-400">Live, hybrid, or self-paced</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Measurable ROI</div>
                    <div className="text-xs text-slate-400">Detailed progress tracking</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-slate-400 border-t border-slate-800 pt-6 mt-6">
              <ShieldCheck className="h-4 w-4" />
              <span>Your information is secure and confidential.</span>
            </div>
          </div>

          <div className="p-8 sm:p-10 md:p-12 md:w-7/12">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Request Received</h3>
                <p className="text-gray-600 max-w-sm">
                  Thank you for your interest. One of our enterprise advisors will contact you shortly to discuss your requirements.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsSuccess(false);
                    form.reset();
                  }}
                  className="mt-8"
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Email <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Inc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="teamSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Size</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="50-200">50 - 200</SelectItem>
                              <SelectItem value="200-500">200 - 500</SelectItem>
                              <SelectItem value="500-1000">500 - 1,000</SelectItem>
                              <SelectItem value="1000-5000">1,000 - 5,000</SelectItem>
                              <SelectItem value="5000+">5,000+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="trainingArea"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Training Area <span className="text-red-500">*</span></FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select area" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {trainingCategories.map(cat => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Requirements</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your specific goals or challenges..." 
                            className="resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base font-medium" 
                    disabled={createLead.isPending}
                  >
                    {createLead.isPending ? "Submitting..." : "Book a Consultation"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}