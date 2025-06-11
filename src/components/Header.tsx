import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "@/components/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { getCartCount } = useCart();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-taara-warm-white/80 backdrop-blur-2xl border-b border-taara-golden bg-gradient-to-b from-taara-warm-white/90 to-taara-warm-white/60">
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

          {/* CTA, Auth Buttons, Cart Icon */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://facebook.com/taaracraft"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded bg-taara-brown text-white font-medium shadow hover:bg-taara-dark-brown transition-colors duration-300"
            >
              Order on Facebook
            </a>
            <Link to="/login">
              <Button className="ml-2 bg-taara-brown text-white">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="ml-2 bg-taara-brown text-white">Sign Up</Button>
            </Link>
            <button
              className="relative ml-4"
              onClick={() => navigate("/cart")}
              aria-label="View cart"
            >
              <ShoppingCart size={28} className="text-taara-brown" />
              <span className="absolute -top-2 -right-2 bg-taara-yellow text-xs text-white rounded-full px-2 py-0.5 font-bold shadow">
                {getCartCount()}
              </span>
            </button>
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
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-taara-dark-brown hover:text-taara-brown transition-colors duration-300 font-medium py-2">Login</Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="text-taara-dark-brown hover:text-taara-brown transition-colors duration-300 font-medium py-2">Sign Up</Link>
              <a
                href="https://facebook.com/taaracraft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 w-full px-4 py-2 rounded bg-taara-brown text-white font-medium shadow hover:bg-taara-dark-brown transition-colors duration-300 text-center"
              >
                Order on Facebook
              </a>
              <button
                className="relative mt-4 flex items-center justify-center w-full"
                onClick={() => { setIsMenuOpen(false); navigate('/cart'); }}
                aria-label="View cart"
              >
                <ShoppingCart size={28} className="text-taara-brown" />
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-taara-yellow text-xs text-white rounded-full px-2 py-0.5 font-bold shadow">
                  {getCartCount()}
                </span>
                <span className="ml-2 text-taara-brown font-medium">Cart</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
