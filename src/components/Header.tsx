import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "@/components/CartContext";
import { supabase } from "../../supabaseClient";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      getUser();
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-taara-warm-white/80 backdrop-blur-2xl border-b border-taara-golden bg-gradient-to-b from-taara-warm-white/90 to-taara-warm-white/60">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/Logo_Items/logo.png" 
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
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
            {user ? (
              <>
                <Link to="/account">
                  <Button className="ml-2 bg-taara-brown text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Account">
                    <User size={22} />
                  </Button>
                </Link>
                <Button onClick={handleLogout} className="ml-2 bg-taara-brown text-white">Logout</Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button className="ml-2 bg-taara-brown text-white">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="ml-2 bg-taara-brown text-white">Sign Up</Button>
                </Link>
              </>
            )}
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
              {user ? (
                <>
                  <Link to="/account" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-taara-dark-brown hover:text-taara-brown transition-colors duration-300 font-medium py-2">
                    <User size={20} /> <span>Account</span>
                  </Link>
                  <button onClick={() => { setIsMenuOpen(false); handleLogout(); }} className="text-taara-dark-brown hover:text-taara-brown transition-colors duration-300 font-medium py-2">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-taara-dark-brown hover:text-taara-brown transition-colors duration-300 font-medium py-2">Login</Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="text-taara-dark-brown hover:text-taara-brown transition-colors duration-300 font-medium py-2">Sign Up</Link>
                </>
              )}
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
