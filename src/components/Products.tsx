import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: number]: number }>({});

  const products = [
    {
      id: 1,
      name: "Classic Teak Timepiece",
      description: "Handcrafted from premium teak wood with elegant brass accents",
      images: [
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop"
      ],
      featured: true
    },
    {
      id: 2,
      name: "Minimalist Oak Clock",
      description: "Clean lines and natural oak grain for modern homes",
      images: [
        "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Rustic Pine Collection",
      description: "Weathered pine finish perfect for countryside aesthetics",
      images: [
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Mahogany Masterpiece",
      description: "Rich mahogany wood with intricate carved details",
      images: [
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 5,
      name: "Bamboo Zen Timer",
      description: "Sustainable bamboo construction with peaceful design",
      images: [
        "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 6,
      name: "Walnut Heritage Clock",
      description: "Traditional walnut craftsmanship passed down generations",
      images: [
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
      ]
    }
  ];

  const handleImageClick = (productId: number, imageIndex: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [productId]: imageIndex
    }));
  };

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
              {/* Product Image Carousel */}
              <div className="relative overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[activeImageIndex[product.id] || 0]}
                    alt={product.name}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      product.featured ? "h-80" : "h-64"
                    }`}
                  />
                </Link>
                {/* Image Thumbnails */}
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/40 backdrop-blur-sm flex gap-2 justify-center">
                  {product.images.map((image, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleImageClick(product.id, imgIndex);
                      }}
                      className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-all ${
                        (activeImageIndex[product.id] || 0) === imgIndex
                          ? 'border-taara-yellow scale-110'
                          : 'border-transparent hover:border-white/50'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - View ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-6 left-6 right-6">
                    <Button 
                      variant="default"
                      className="w-full"
                      onClick={() => window.open('https://facebook.com/taaracraft', '_blank')}
                    >
                      Order Now
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

                <Link to={`/product/${product.id}`}>
                  <h3 className="text-2xl font-display font-bold text-taara-charcoal mb-3 group-hover:text-taara-wood transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-taara-dark-wood/80 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <Button 
                  variant="default"
                  className="w-full"
                  onClick={() => window.open('https://facebook.com/taaracraft', '_blank')}
                >
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Ready to Order Section */}
        <div className="mt-20 bg-gradient-to-r from-taara-brown to-taara-dark-brown rounded-3xl p-8 md:p-12 text-center text-white shadow-lg">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-taara-cream">
            Ready to Order?
          </h3>
          <p className="text-xl mb-8 text-taara-warm-white/90 max-w-2xl mx-auto">
            Transform your space with our handcrafted wooden clocks. Each piece is made with care and precision by our skilled artisans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-taara-cream text-taara-dark-brown hover:bg-taara-warm-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => window.open('https://facebook.com/taaracraft', '_blank')}
            >
              Order Now
            </Button>
            <Button 
              variant="outline"
              className="border-taara-cream/30 text-taara-cream hover:bg-taara-cream/10 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link to="/products">
            <Button 
              variant="default"
              size="lg"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
