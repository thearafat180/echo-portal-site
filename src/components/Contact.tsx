
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-taara-warm-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-taara-wood/10 text-taara-dark-wood rounded-full text-sm font-medium mb-6">
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-taara-charcoal mb-6">
            Let's Create Together
          </h2>
          
          <p className="text-xl text-taara-dark-wood/80 max-w-3xl mx-auto">
            Ready to bring a piece of handcrafted artistry into your space? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Facebook */}
            <div className="bg-taara-cream rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-taara-wood/10 rounded-full flex items-center justify-center text-taara-wood mx-auto mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-taara-charcoal mb-4">
                Message Us
              </h3>
              <p className="text-taara-dark-wood/80 mb-6">
                Connect with us on Facebook for quick responses and to see our latest creations.
              </p>
              <Button 
                className="w-full bg-taara-wood hover:bg-taara-dark-wood text-white"
                onClick={() => window.open('https://facebook.com/taaracraft', '_blank')}
              >
                Message on Facebook
              </Button>
            </div>

            {/* Email */}
            <div className="bg-taara-cream rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-taara-wood/10 rounded-full flex items-center justify-center text-taara-wood mx-auto mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-taara-charcoal mb-4">
                Email Us
              </h3>
              <p className="text-taara-dark-wood/80 mb-6">
                Send us detailed inquiries about custom orders or general questions.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-taara-wood text-taara-wood hover:bg-taara-wood hover:text-white"
                onClick={() => window.location.href = 'mailto:info@taaracraft.com'}
              >
                Send Email
              </Button>
            </div>

            {/* Location */}
            <div className="bg-taara-cream rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-taara-wood/10 rounded-full flex items-center justify-center text-taara-wood mx-auto mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-taara-charcoal mb-4">
                Our Workshop
              </h3>
              <p className="text-taara-dark-wood/80 mb-6">
                Located in the heart of Bangladesh, where tradition meets innovation.
              </p>
              <div className="text-taara-dark-wood font-medium">
                Bangladesh
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-taara-wood to-taara-dark-wood rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Order?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Browse our collection, ask about custom pieces, or simply say hello. 
              We're here to help you find the perfect timepiece for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-taara-dark-wood hover:bg-taara-cream px-8"
                onClick={() => window.open('https://facebook.com/taaracraft', '_blank')}
              >
                <MessageCircle className="mr-2" size={20} />
                Start Conversation
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
