import { Facebook, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-taara-charcoal text-white mt-12">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/Logo_Items/logo.png" 
                alt="TAARA Craft Logo" 
                className="w-8 h-8"
              />
              <div className="text-3xl font-display font-bold text-taara-yellow">
                TAARA Craft
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Handcrafted wooden clocks that bring timeless beauty and artistry to your space. 
              Made with love in Bangladesh by skilled artisans.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} />
                <span>craft.taara@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} />
                <span>Bhola Sadar, Bhola, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* TAARA Values */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-taara-yellow">Our Values</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-taara-yellow rounded-full"></span>
                <strong>T</strong>irelessness
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-taara-yellow rounded-full"></span>
                <strong>A</strong>rtistry
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-taara-yellow rounded-full"></span>
                <strong>A</strong>uthenticity
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-taara-yellow rounded-full"></span>
                <strong>R</strong>eliability
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-taara-yellow rounded-full"></span>
                <strong>A</strong>esthetic
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-taara-yellow">Connect With Us</h3>
            <div className="space-y-4">
              <a
                href="https://facebook.com/taaracraft"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-taara-yellow transition-colors"
              >
                <Facebook size={20} />
                <span>Follow us on Facebook</span>
              </a>
              
              <div className="mt-6">
                <p className="text-gray-300 mb-4">
                  Stay updated with our latest creations and behind-the-scenes content.
                </p>
                <Button 
                  variant="secondary"
                  className="rounded-full"
                  onClick={() => window.open('https://facebook.com/taaracraft', '_blank')}
                >
                  Order on Facebook
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <Button 
                variant="ghost"
                size="icon"
                className="rounded-lg"
                onClick={() => window.open('https://facebook.com/taaracraft', '_blank')}
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost"
                size="icon"
                className="rounded-lg"
                onClick={() => window.open('https://instagram.com/taaracraft', '_blank')}
              >
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 TAARA Craft. All rights reserved. Handcrafted with ❤️ in Bangladesh.
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://facebook.com/taaracraft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-taara-yellow hover:text-taara-charcoal transition-all"
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
