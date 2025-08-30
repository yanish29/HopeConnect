import { Button } from "@/components/ui/button";
import { Users, Building2, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-cta text-accent-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Join Today and Make Your Impact
        </h2>
        <p className="text-xl mb-12 opacity-90">
          Start your journey of meaningful giving and transparent impact tracking
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="lg" className="min-w-56 bg-background text-foreground hover:bg-background/90">
            <Users className="mr-2" />
            Sign Up as Donor
            <ArrowRight className="ml-2" />
          </Button>
          <Button variant="hero" size="lg" className="min-w-56 bg-background text-foreground hover:bg-background/90">
            <Building2 className="mr-2" />
            Sign Up as NGO
            <ArrowRight className="ml-2" />
          </Button>
        </div>
        
        <p className="text-sm mt-8 opacity-70">
          Join thousands who are already making a difference
        </p>
      </div>
    </section>
  );
};

export default CTASection;