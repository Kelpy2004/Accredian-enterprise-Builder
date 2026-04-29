import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { SolutionsSection } from "@/components/SolutionsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProgramsSection } from "@/components/ProgramsSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <LogoStrip />
        <WhyChooseUs />
        <ProgramsSection />
        <SolutionsSection />
        <FAQSection />
        <TestimonialsSection />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
