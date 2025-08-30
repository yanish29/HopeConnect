import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  icon: string;
  value: string;
  label: string;
  delay?: number;
}

export function StatCard({ icon, value, label, delay = 0 }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const targetValue = parseInt(value.replace(/[^\d]/g, ''));
    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCurrentValue(Math.min(Math.floor(increment * step), targetValue));
      
      if (step >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className={`text-center p-6 transition-all duration-700 ${
        isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="stat-counter mb-1">
        {value.includes('+') ? `${currentValue.toLocaleString()}+` : 
         value.includes('₹') ? `₹${(currentValue / 10000000).toFixed(1)} Crores+` :
         value.includes('Hours') ? `${currentValue.toLocaleString()} Hours` :
         currentValue.toLocaleString()}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
}