import { Heart, Mail, MapPin, Phone } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logoIcon} alt="ImpactBridge" className="w-8 h-8 mr-3" />
              <h3 className="text-xl font-bold">ImpactBridge</h3>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Connecting kindness with those who need it most. Making giving simple, 
              transparent, and impactful for everyone.
            </p>
            <div className="flex items-center text-sm text-background/60">
              <Heart className="w-4 h-4 mr-2 text-accent" />
              Made with love for a better world
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-accent transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">How It Works</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">NGO Directory</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Success Stories</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">hello@impactbridge.org</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 ImpactBridge. All rights reserved. Building bridges to a better tomorrow.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;