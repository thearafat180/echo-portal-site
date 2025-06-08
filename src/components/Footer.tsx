
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Web Development", href: "#" },
    { label: "UI/UX Design", href: "#" },
    { label: "Mobile Apps", href: "#" },
    { label: "SEO Services", href: "#" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-portfolio-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-display font-bold mb-4">Portray</div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              We create stunning digital experiences that tell your story and drive results. 
              From concept to launch, we're your trusted partner in digital transformation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} />
                <span>hello@portray.pk</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-portfolio-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-portfolio-accent transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
              <p className="text-gray-300">Subscribe to our newsletter for the latest updates and insights.</p>
            </div>
            
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-portfolio-accent text-white placeholder-gray-400"
              />
              <button className="bg-portfolio-accent hover:bg-portfolio-accent/90 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Portray. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-portfolio-accent hover:text-white transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-portfolio-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-portfolio-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
