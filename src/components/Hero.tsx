
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-taara-warm-white to-taara-cream pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-taara-wood/10 text-taara-dark-wood rounded-full text-sm font-medium mb-8 animate-fade-in">
            ✨ Handcrafted in Bangladesh
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-taara-charcoal mb-8 leading-tight animate-fade-in-up">
            Timeless
            <span className="text-taara-wood block">Handmade</span>
            <span className="text-taara-dark-wood">Wooden Clocks</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-taara-dark-wood/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Each piece tells a story of dedication, artistry, and timeless beauty. 
            Discover handcrafted wooden clocks that bring warmth and elegance to your space.
          </p>

          {/* CTA Button */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-taara-wood hover:bg-taara-dark-wood text-white px-10 py-5 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Craft
              <ArrowRight className="ml-3" size={20} />
            </Button>
          </div>

          {/* Floating Decorative Elements */}
          <div className="relative">
            <div className="absolute -top-20 left-1/4 w-16 h-16 bg-taara-accent/20 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute -top-10 right-1/3 w-8 h-8 bg-taara-wood/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-5 left-1/6 w-12 h-12 bg-taara-beige/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
