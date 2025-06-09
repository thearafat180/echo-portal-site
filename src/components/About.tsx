
import { Heart, Award, Shield, Palette } from "lucide-react";

const About = () => {
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
    <section id="about" className="py-20 bg-taara-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-taara-wood/10 text-taara-dark-wood rounded-full text-sm font-medium mb-6">
              About TAARA Craft
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-taara-charcoal mb-6">
              Where Passion Meets Craftsmanship
            </h2>
            
            <p className="text-xl text-taara-dark-wood/80 max-w-3xl mx-auto leading-relaxed">
              Born in the heart of Bangladesh, TAARA Craft represents the perfect harmony 
              between traditional woodworking techniques and contemporary design.
            </p>
          </div>

          {/* TAARA Acronym */}
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {taaraValues.map((value, index) => (
              <div
                key={index}
                className="bg-taara-warm-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-taara-wood/10 rounded-full flex items-center justify-center text-taara-wood mx-auto mb-4">
                  {value.icon}
                </div>
                
                <div className="text-3xl font-display font-bold text-taara-wood mb-2">
                  {value.letter}
                </div>
                
                <h3 className="font-bold text-taara-charcoal mb-2">
                  {value.word}
                </h3>
                
                <p className="text-sm text-taara-dark-wood/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-display font-bold text-taara-charcoal mb-6">
                Our Story
              </h3>
              
              <p className="text-lg text-taara-dark-wood/80 mb-6 leading-relaxed">
                Every piece we create carries the soul of Bangladesh's rich woodworking heritage. 
                Our skilled artisans pour their heart into crafting timepieces that are not just 
                functional, but works of art that tell stories.
              </p>
              
              <p className="text-lg text-taara-dark-wood/80 mb-8 leading-relaxed">
                From selecting the finest woods to applying the final finish, each step is 
                guided by passion, precision, and an unwavering commitment to excellence. 
                We believe that true craftsmanship cannot be rushed—it must be nurtured with time and care.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-taara-wood rounded-full flex items-center justify-center text-white font-bold">
                  T
                </div>
                <div>
                  <div className="font-semibold text-taara-charcoal">TAARA Craft Team</div>
                  <div className="text-sm text-taara-dark-wood/70">Artisans from Bangladesh</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="bg-taara-wood/5 rounded-3xl p-8">
                <img
                  src="https://i.postimg.cc/6pSQGxJ4/Copy-of-Business-Plan-Presentation.gif"
                  alt="Handcrafted wooden clock"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                
                <div className="mt-6 text-center">
                  <div className="text-2xl font-display font-bold text-taara-charcoal mb-2">
                    "Every tick tells a story"
                  </div>
                  <p className="text-taara-dark-wood/70 italic">
                    - Our Philosophy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
