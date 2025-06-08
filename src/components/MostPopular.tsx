
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MostPopular = () => {
  const popularProducts = [
    {
      id: 1,
      name: "Golden Compass Clock",
      category: "Wooden Clocks",
      price: "৳2,500",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      description: "Handcrafted wooden clock with brass compass design"
    },
    {
      id: 2,
      name: "Wooden Star Pendant",
      category: "Jewelry",
      price: "৳800",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop",
      description: "Elegant wooden pendant with intricate star carving"
    },
    {
      id: 3,
      name: "Artisan Desk Organizer",
      category: "Crafting",
      price: "৳1,200",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      description: "Multi-compartment wooden desk organizer"
    },
    {
      id: 4,
      name: "Custom Wooden Box",
      category: "Others",
      price: "৳900",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      description: "Personalized wooden storage box with custom engraving"
    }
  ];

  return (
    <section className="py-20 bg-taara-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-taara-yellow/20 text-taara-dark-brown rounded-full text-sm font-medium mb-6">
            ⭐ Most Popular
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-taara-charcoal mb-6">
            Customer Favorites
          </h2>
          
          <p className="text-xl text-taara-dark-brown/80 max-w-3xl mx-auto">
            Discover the products our customers love most - handpicked for their exceptional quality and design
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularProducts.map((product, index) => (
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
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium text-white bg-taara-yellow px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
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
                <div className="text-sm text-taara-brown font-medium mb-2">
                  {product.category}
                </div>

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

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link to="/products">
            <Button 
              size="lg" 
              className="bg-taara-brown hover:bg-taara-dark-brown text-white px-8"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MostPopular;
