
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "jewelry", name: "Jewelry Items" },
    { id: "crafting", name: "Craftings" },
    { id: "clocks", name: "Wooden Clocks" },
    { id: "others", name: "Others" }
  ];

  const products = [
    {
      id: 1,
      name: "Golden Compass Clock",
      category: "clocks",
      price: "৳2,500",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      description: "Handcrafted wooden clock with brass compass design"
    },
    {
      id: 2,
      name: "Wooden Star Pendant",
      category: "jewelry",
      price: "৳800",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop",
      description: "Elegant wooden pendant with intricate star carving"
    },
    {
      id: 3,
      name: "Artisan Desk Organizer",
      category: "crafting",
      price: "৳1,200",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      description: "Multi-compartment wooden desk organizer"
    },
    {
      id: 4,
      name: "Custom Wooden Box",
      category: "others",
      price: "৳900",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      description: "Personalized wooden storage box with custom engraving"
    },
    {
      id: 5,
      name: "Wooden Earrings Set",
      category: "jewelry",
      price: "৳600",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop",
      description: "Handcrafted wooden earrings with natural finish"
    },
    {
      id: 6,
      name: "Rustic Wall Clock",
      category: "clocks",
      price: "৳1,800",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      description: "Large rustic wooden wall clock for home decor"
    }
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-taara-warm-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-taara-warm-white to-taara-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-taara-charcoal mb-8">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-taara-dark-brown/80 mb-12 leading-relaxed">
              Discover our handcrafted collection of wooden treasures
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-taara-cream">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-taara-brown text-white shadow-lg'
                    : 'bg-white text-taara-dark-brown hover:bg-taara-golden hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-taara-warm-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button 
                        className="w-full bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                        onClick={() => window.open(`https://m.me/taaracraft?text=Hi! I'm interested in ${product.name}`, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Message Us
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-taara-charcoal mb-2 group-hover:text-taara-brown transition-colors">
                    <Link to={`/product/${product.id}`}>
                      {product.name}
                    </Link>
                  </h3>
                  
                  <p className="text-taara-dark-brown/70 mb-4 text-sm">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-taara-brown">
                      {product.price}
                    </div>
                    <Button 
                      size="sm"
                      className="bg-taara-brown hover:bg-taara-dark-brown text-white"
                      onClick={() => window.open(`https://m.me/taaracraft?text=Hi! I'm interested in ${product.name}`, '_blank')}
                    >
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
