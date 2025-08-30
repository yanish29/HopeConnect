import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import QuoteSection from "@/components/QuoteSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <QuoteSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;