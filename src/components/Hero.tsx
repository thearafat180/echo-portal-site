
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-light to-white pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm font-medium mb-6 animate-fade-in">
            ✨ Professional Portfolio Solutions
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-portfolio-dark mb-6 leading-tight animate-fade-in-up">
            Create Your
            <span className="text-portfolio-accent block">Digital Story</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-portfolio-text-light mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Transform your professional presence with stunning portfolios that showcase your work, 
            tell your story, and captivate your audience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white px-8 py-4 text-lg">
              Start Your Portfolio
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-portfolio-text-light hover:bg-portfolio-accent/5">
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div>
              <div className="text-3xl font-bold text-portfolio-dark">500+</div>
              <div className="text-portfolio-text-light">Happy Clients</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-portfolio-dark">50+</div>
              <div className="text-portfolio-text-light">Design Awards</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-portfolio-dark">99%</div>
              <div className="text-portfolio-text-light">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
