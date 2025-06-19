import { Heart, Award, Shield, Palette } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const taaraValues = [
    {
      letter: "T",
      word: "Tirelessness",
      description: "Unwavering dedication to perfection",
      icon: <Heart className="w-6 h-6" />
    },
    {
      letter: "A",
      word: "Artistry",
      description: "Masterful craftsmanship in every piece",
      icon: <Palette className="w-6 h-6" />
    },
    {
      letter: "A",
      word: "Authenticity", 
      description: "Genuine handmade wooden creations",
      icon: <Award className="w-6 h-6" />
    },
    {
      letter: "R",
      word: "Reliability",
      description: "Consistent quality you can trust",
      icon: <Shield className="w-6 h-6" />
    },
    {
      letter: "A",
      word: "Aesthetic",
      description: "Beautiful designs that inspire",
      icon: <Palette className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-taara-warm-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-taara-warm-white to-taara-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-taara-charcoal mb-8 animate-fade-in-up">
              {"About TAARA Craft".split("").map((char, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.08}s` }}>{char === " " ? '\u00A0' : char}</span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-taara-dark-brown/80 mb-12 leading-relaxed">
              Where passion meets craftsmanship in the heart of Bangladesh
            </p>
          </div>
        </div>
      </section>

      {/* TAARA Values Section */}
      <section className="py-20 bg-taara-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-taara-charcoal mb-6">
                What TAARA Stands For
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-6 mb-16">
              {taaraValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-taara-warm-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-taara-yellow/20 rounded-full flex items-center justify-center text-taara-brown mx-auto mb-4">
                    {value.icon}
                  </div>
                  
                  <div className="text-3xl font-display font-bold text-taara-brown mb-2">
                    {value.letter}
                  </div>
                  
                  <h3 className="font-bold text-taara-charcoal mb-2">
                    {value.word}
                  </h3>
                  
                  <p className="text-sm text-taara-dark-brown/70">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-taara-warm-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <h3 className="text-3xl font-display font-bold text-taara-charcoal mb-6">
                  Our Story
                </h3>
                
                <p className="text-lg text-taara-dark-brown/80 mb-6 leading-relaxed">
                  Every piece we create carries the soul of Bangladesh's rich woodworking heritage. 
                  Our skilled artisans pour their heart into crafting timepieces that are not just 
                  functional, but works of art that tell stories.
                </p>
                
                <p className="text-lg text-taara-dark-brown/80 mb-8 leading-relaxed">
                  From selecting the finest woods to applying the final finish, each step is 
                  guided by passion, precision, and an unwavering commitment to excellence. 
                  We believe that true craftsmanship cannot be rushed—it must be nurtured with time and care.
                </p>

                <div className="flex items-center gap-4">
                  <img 
                    src="/Logo_Items/logo.png" 
                    alt="TAARA Craft Logo" 
                    className="w-8 h-8"
                  />
                  <div>
                    <div className="font-semibold text-taara-charcoal">TAARA Craft Team</div>
                    <div className="text-sm text-taara-dark-brown/70">Artisans from Bangladesh</div>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in">
                <div className="bg-taara-yellow/10 rounded-3xl p-8">
                  <img
                    src="https://i.postimg.cc/6pSQGxJ4/Copy-of-Business-Plan-Presentation.gif"
                    alt="Handcrafted wooden clock"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                  
                  <div className="mt-6 text-center">
                    <div className="text-2xl font-display font-bold text-taara-charcoal mb-2">
                      "Every tick tells a story"
                    </div>
                    <p className="text-taara-dark-brown/70 italic">
                      - Our Philosophy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Add animation CSS */}
      <style>{`
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both;
}
`}</style>
    </div>
  );
};

export default AboutPage;
