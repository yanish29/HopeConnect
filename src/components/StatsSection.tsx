import { Users, Building2, IndianRupee, Utensils, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5,200+",
    label: "Users",
    description: "Active community members"
  },
  {
    icon: Building2,
    number: "120+",
    label: "NGOs & Orphanages",
    description: "Registered organizations"
  },
  {
    icon: IndianRupee,
    number: "₹2.5 Crores+",
    label: "Donated",
    description: "In money & goods"
  },
  {
    icon: Utensils,
    number: "45,000+",
    label: "Meals Served",
    description: "Nutritious meals provided"
  },
  {
    icon: GraduationCap,
    number: "8,000+",
    label: "Children Supported",
    description: "In education initiatives"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-impact text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Impact So Far</h2>
          <p className="text-xl opacity-90">
            Together, we're making a real difference in communities across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-smooth transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-accent" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;