
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-taara-warm-white/90 backdrop-blur-md border-b border-taara-golden">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d8de54f9-1405-4e3f-b82a-f24a4d0f5b35.png" 
              alt="TAARA Craft Logo" 
              className="w-10 h-10"
            />
            <div className="text-2xl font-display font-bold text-taara-charcoal">
              TAARA Craft
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-taara-dark-brown hover:text-taara-brown transition-colors duration-300 font-medium ${
                  location.pathname === item.href ? 'text-taara-brown border-b-2 border-taara-brown' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-taara-brown hover:bg-taara-dark-brown text-white">
              Order on Facebook
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-taara-golden">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-taara-dark-brown hover:text-taara-brown transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-taara-brown hover:bg-taara-dark-brown text-white mt-4 w-full">
                Order on Facebook
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
