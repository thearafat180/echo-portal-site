import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { useCart } from "./CartContext";

const MostPopular = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: number]: number }>({});
  const [popularProducts, setPopularProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPopular() {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('popular', true);
      if (!error) setPopularProducts(data || []);
      setLoading(false);
    }
    fetchPopular();
  }, []);

  const handleImageClick = (productId: number, imageIndex: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [productId]: imageIndex
    }));
  };

  const handleCardClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="py-20 bg-taara-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-taara-golden/20 text-taara-dark-brown rounded-full text-sm font-medium mb-6">
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
        {loading ? (
          <div className="text-center text-lg py-12">Loading popular products...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCardClick(product.id)}
              >
                {/* Product Image Carousel */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.images?.[activeImageIndex[product.id] || 0] || product.image_url || '/placeholder.svg'}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Image Thumbnails */}
                  {Array.isArray(product.images) && product.images.length > 1 && (
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/40 backdrop-blur-sm flex gap-2 justify-center">
                      {product.images.map((image: string, imgIndex: number) => (
                        <button
                          key={imgIndex}
                          onClick={e => { e.stopPropagation(); handleImageClick(product.id, imgIndex); }}
                          className={`w-10 h-10 rounded-md overflow-hidden border-2 transition-all ${
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
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-taara-charcoal bg-taara-golden px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <div className="text-sm text-taara-brown font-medium mb-2">
                    {product.category}
                  </div>

                  <h3 className="text-xl font-display font-bold text-taara-charcoal mb-2 group-hover:text-taara-golden transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-taara-dark-brown/70 mb-4 text-sm">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-taara-brown">
                      ৳{product.price}
                    </div>
                    <Button
                      size="sm"
                      className="bg-taara-brown hover:bg-taara-dark-brown text-white"
                      onClick={e => {
                        e.stopPropagation();
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image_url || (product.images && product.images[0]) || '/placeholder.svg',
                        });
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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

export default MostPopular;
