
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Classic Teak Timepiece",
      description: "Handcrafted from premium teak wood with elegant brass accents",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      name: "Minimalist Oak Clock",
      description: "Clean lines and natural oak grain for modern homes",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Rustic Pine Collection",
      description: "Weathered pine finish perfect for countryside aesthetics",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Mahogany Masterpiece",
      description: "Rich mahogany wood with intricate carved details",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Bamboo Zen Timer",
      description: "Sustainable bamboo construction with peaceful design",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      name: "Walnut Heritage Clock",
      description: "Traditional walnut craftsmanship passed down generations",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-20 bg-taara-warm-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-taara-wood/10 text-taara-dark-wood rounded-full text-sm font-medium mb-6">
            Our Collection
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-taara-charcoal mb-6">
            Handcrafted Wooden Clocks
          </h2>
          
          <p className="text-xl text-taara-dark-wood/80 max-w-3xl mx-auto">
            Each timepiece is lovingly crafted by skilled artisans, bringing together tradition and innovation
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up ${
                product.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    product.featured ? "h-80" : "h-64"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <Button 
                      className="w-full bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                      onClick={() => window.open('https://facebook.com/taaracraft', '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Order on Facebook
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  {product.featured && (
                    <span className="text-xs font-medium text-white bg-taara-wood px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-display font-bold text-taara-charcoal mb-3 group-hover:text-taara-wood transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-taara-dark-wood/80 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <Button 
                  className="w-full bg-taara-wood hover:bg-taara-dark-wood text-white"
                  onClick={() => window.open('https://facebook.com/taaracraft', '_blank')}
                >
                  Order on Facebook
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-taara-dark-wood/80 mb-6">
            Don't see exactly what you're looking for? We create custom pieces too!
          </p>
          <Button 
            size="lg" 
            className="bg-taara-wood hover:bg-taara-dark-wood text-white px-8"
            onClick={() => window.open('https://facebook.com/taaracraft', '_blank')}
          >
            Request Custom Design
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
