import { Button } from "@/components/ui/button";
import { Heart, Users, Building2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoIcon from "@/assets/logo-icon.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-primary-foreground">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <img src={logoIcon} alt="ImpactBridge" className="w-16 h-16 mr-4" />
          <h1 className="text-5xl font-bold">ImpactBridge</h1>
        </div>
        
        {/* Tagline */}
        <p className="text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          "Connecting kindness with those who need it most."
        </p>
        
        {/* Description */}
        <p className="text-xl mb-12 opacity-80 max-w-4xl mx-auto leading-relaxed">
          A digital platform that connects donors with NGOs, orphanages, and community organizations. 
          We make giving simple, transparent, and impactful by showing you exactly how your contributions make a difference.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button variant="donor" size="lg" className="min-w-48">
            <Users className="mr-2" />
            I'm a Donor
          </Button>
          <Button variant="ngo" size="lg" className="min-w-48">
            <Building2 className="mr-2" />
            I'm an NGO
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-8 text-sm opacity-70">
          <div className="flex items-center">
            <Heart className="w-4 h-4 mr-2" />
            Transparent
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            Community-driven
          </div>
          <div className="flex items-center">
            <Building2 className="w-4 h-4 mr-2" />
            Verified NGOs
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;