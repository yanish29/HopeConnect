import { CheckCircle, BarChart3, Shield, Heart, Target, TrendingUp } from "lucide-react";

const donorFeatures = [
  "Easy sign-up and secure donations",
  "Choose from trusted NGOs and causes",
  "Get real-time dashboards of your impact",
  "See data-driven insights (charts & graphs)"
];

const ngoFeatures = [
  "Register and list your cause",
  "Reach more donors directly",
  "Showcase donation needs (money, food, clothes, volunteering)",
  "Manage donations through a simple dashboard"
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Transparent",
    description: "You see where every rupee goes with detailed tracking and reports."
  },
  {
    icon: TrendingUp,
    title: "Smart",
    description: "ML-powered impact predictions help you make informed giving decisions."
  },
  {
    icon: Heart,
    title: "Community-driven",
    description: "Together we make bigger change through collective action."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* What We Offer */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">What We Offer</h2>
          <p className="text-xl text-muted-foreground">
            Powerful tools for both donors and organizations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* For Donors */}
          <div className="bg-card rounded-lg p-8 shadow-gentle">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">For Donors</h3>
            </div>
            <ul className="space-y-4">
              {donorFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-card-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* For NGOs */}
          <div className="bg-card rounded-lg p-8 shadow-gentle">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">For NGOs / Organizations</h3>
            </div>
            <ul className="space-y-4">
              {ngoFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-card-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Us?</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;