import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ElectricFenceSection } from "@/components/site/ElectricFenceSection";
import { GateAutomationSection } from "@/components/site/GateAutomationSection";
import { HomeAutomationSection } from "@/components/site/HomeAutomationSection";
import { AboutSection } from "@/components/site/AboutSection";
import { ProjectsSection } from "@/components/site/ProjectsSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { QuoteDialog } from "@/components/site/QuoteDialog";

const Index = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = () => setQuoteOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero onQuote={openQuote} />
        <ElectricFenceSection onQuote={openQuote} />
        <GateAutomationSection onQuote={openQuote} />
        <HomeAutomationSection onQuote={openQuote} />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </div>
  );
};

export default Index;
