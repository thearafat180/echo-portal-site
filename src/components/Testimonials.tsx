
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "TAARA's craftsmanship is absolutely unmatched. The attention to detail in my wooden clock is extraordinary—every grain tells a story.",
      author: "Sarah Ahmed",
      location: "Dhaka, Bangladesh",
      rating: 5
    },
    {
      quote: "I purchased a custom piece for my home office, and it has become the centerpiece of the room. The quality and artistry exceeded all my expectations.",
      author: "Rahman Khan",
      location: "Chittagong, Bangladesh", 
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-taara-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-taara-wood/10 text-taara-dark-wood rounded-full text-sm font-medium mb-6">
            Customer Stories
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-taara-charcoal mb-6">
            What Our Customers Say
          </h2>
          
          <p className="text-xl text-taara-dark-wood/80 max-w-3xl mx-auto">
            Real experiences from people who have brought TAARA Craft into their homes
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-taara-warm-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-taara-wood/10 rounded-full flex items-center justify-center text-taara-wood mb-6">
                <Quote className="w-6 h-6" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-taara-wood text-taara-wood" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-taara-dark-wood/90 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-taara-wood rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-taara-charcoal">{testimonial.author}</div>
                  <div className="text-sm text-taara-dark-wood/70">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-12">
          <p className="text-lg text-taara-dark-wood/80">
            Ready to create your own story with TAARA Craft?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
