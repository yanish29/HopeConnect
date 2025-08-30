import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const quotes = [
  "No act of kindness, no matter how small, is ever wasted.",
  "The meaning of life is to find your gift. The purpose of life is to give it away.",
  "We make a living by what we get, but we make a life by what we give.",
  "The best way to find yourself is to lose yourself in the service of others."
];

const QuoteSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <Quote className="w-12 h-12 text-primary" />
        </div>
        
        <div className="relative h-24 flex items-center justify-center">
          <p 
            key={currentQuote}
            className="text-2xl font-medium text-foreground italic animate-in fade-in duration-1000"
          >
            "{quotes[currentQuote]}"
          </p>
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentQuote ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;