import { Leaf, Users, Sparkles, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Materials",
      description: "We source our wood responsibly, ensuring environmental consciousness while maintaining the highest quality standards."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Skilled Artisans",
      description: "Each piece is handcrafted by master woodworkers with generations of traditional knowledge and expertise."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Unique Aesthetic",
      description: "Every clock is one-of-a-kind, featuring natural wood grains and handcrafted details that make it truly special."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timeless Design",
      description: "Our classic designs transcend trends, ensuring your timepiece remains beautiful and relevant for years to come."
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-taara-beige">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-taara-wood/10 text-taara-dark-wood rounded-full text-sm font-medium mb-6">
            Why Choose TAARA Craft
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-taara-charcoal mb-6">
            Crafted with Purpose
          </h2>
          
          <p className="text-xl text-taara-dark-wood/80 max-w-3xl mx-auto">
            When you choose TAARA Craft, you're not just buying a clock—you're investing in artistry, sustainability, and timeless beauty
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-taara-warm-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-taara-wood/10 rounded-2xl flex items-center justify-center text-taara-wood mx-auto mb-6">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold text-taara-charcoal mb-4">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-taara-dark-wood/80 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-r from-taara-brown to-taara-dark-brown rounded-3xl p-8 md:p-12 text-center text-white shadow-lg">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-taara-cream">
            Experience the Difference
          </h3>
          <p className="text-xl mb-8 text-taara-warm-white/90 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have transformed their spaces with our handcrafted wooden clocks.
          </p>
          <button 
            className="bg-taara-cream text-taara-dark-brown hover:bg-taara-warm-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => window.open('https://facebook.com/taaracraft', '_blank')}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
