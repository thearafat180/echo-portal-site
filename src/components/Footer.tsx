
import { Facebook, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-taara-charcoal text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <div className="text-3xl font-display font-bold mb-4 text-taara-accent">
              TAARA Craft
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Handcrafted wooden clocks that bring timeless beauty and artistry to your space. 
              Made with love in Bangladesh by skilled artisans.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} />
                <span>info@taaracraft.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} />
                <span>Bangladesh</span>
              </div>
            </div>
          </div>

          {/* TAARA Values */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-taara-accent">Our Values</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-taara-accent rounded-full"></span>
                <strong>T</strong>irelessness
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-taara-accent rounded-full"></span>
                <strong>A</strong>rtistry
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-taara-accent rounded-full"></span>
                <strong>A</strong>uthenticity
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-taara-accent rounded-full"></span>
                <strong>R</strong>eliability
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-taara-accent rounded-full"></span>
                <strong>A</strong>esthetic
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-taara-accent">Connect With Us</h3>
            <div className="space-y-4">
              <a
                href="https://facebook.com/taaracraft"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-taara-accent transition-colors"
              >
                <Facebook size={20} />
                <span>Follow us on Facebook</span>
              </a>
              
              <div className="mt-6">
                <p className="text-gray-300 mb-4">
                  Stay updated with our latest creations and behind-the-scenes content.
                </p>
                <button 
                  className="bg-taara-accent hover:bg-taara-accent/90 px-6 py-3 rounded-full font-semibold transition-colors text-taara-charcoal"
                  onClick={() => window.open('https://facebook.com/taaracraft', '_blank')}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 TAARA Craft. All rights reserved. Handcrafted with ❤️ in Bangladesh.
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://facebook.com/taaracraft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-taara-accent hover:text-taara-charcoal transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
