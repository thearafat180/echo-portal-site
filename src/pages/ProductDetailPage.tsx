import { useParams } from "react-router-dom";
import { ExternalLink, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useCart } from "@/components/CartContext";
import { supabase } from "../../supabaseClient";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { addToCart } = useCart();
  const [showMessengerPopup, setShowMessengerPopup] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      setError("");
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        setError(error.message);
      } else {
        setProduct(data);
      }
      setLoading(false);
    }
    if (id) fetchProduct();
  }, [id]);

  useEffect(() => {
    let interval;
    if (product && product.images && isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, product]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  if (error || !product) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error || "Product not found."}</div>;
  }

  const images = Array.isArray(product.images) ? product.images : [product.image_url];

  const handlePreviousImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleNextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  const handleThumbnailClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-taara-warm-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Link 
            to="/products" 
            className="inline-flex items-center text-taara-brown hover:text-taara-dark-brown mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Products
          </Link>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4 lg:max-w-md mx-auto">
              <div className="relative aspect-square rounded-2xl overflow-hidden group">
                <img 
                  src={images[currentImageIndex]} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                {/* Navigation Arrows */}
                {images.length > 1 && <>
                <button
                  onClick={handlePreviousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-taara-brown hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-taara-brown hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={24} />
                </button>
                </>}
                {/* Play/Pause Button */}
                {images.length > 1 && <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-taara-brown hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                >
                  {isAutoPlaying ? (
                    <span>❚❚</span>
                  ) : (
                    <span>▶</span>
                  )}
                </button>}
              {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/40 backdrop-blur-sm flex gap-2 justify-center">
                    {images.map((img, idx) => (
                  <button
                        key={idx}
                        onClick={() => handleThumbnailClick(idx)}
                        className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-all ${
                          currentImageIndex === idx
                            ? 'border-taara-yellow scale-110'
                            : 'border-transparent hover:border-white/50'
                        }`}
                      >
                        <img src={img} alt={`thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center gap-4 mt-4">
                <div className="text-3xl font-bold text-taara-brown">
                  ৳{product.price}
                </div>
                <Button 
                  className="w-full bg-taara-brown hover:bg-taara-dark-brown text-white text-lg py-4"
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: images[0]
                  })}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="text-taara-brown font-medium mb-2">{product.category}</div>
                <h1 className="text-4xl font-display font-bold text-taara-charcoal mb-4">
                  {product.name}
                </h1>
              </div>
              <div className="prose prose-lg text-taara-dark-brown/80">
                <p>{product.long_desc || product.description}</p>
              </div>
              {/* Features */}
              {product.features && Array.isArray(product.features) && (
              <div>
                <h3 className="text-xl font-bold text-taara-charcoal mb-4">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-taara-dark-brown/80">
                      <span className="w-2 h-2 bg-taara-yellow rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              )}
              {/* Specifications */}
              {product.material && product.size && product.weight && (
              <div>
                <h3 className="text-xl font-bold text-taara-charcoal mb-4">Specifications</h3>
                <div className="bg-taara-cream rounded-lg p-4 space-y-2">
                    <div className="flex justify-between py-2 border-b border-taara-golden/30">
                      <span className="font-medium text-taara-dark-brown">Material:</span>
                      <span className="text-taara-dark-brown/80">{product.material}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-taara-golden/30">
                      <span className="font-medium text-taara-dark-brown">Size:</span>
                      <span className="text-taara-dark-brown/80">{product.size}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium text-taara-dark-brown">Weight:</span>
                      <span className="text-taara-dark-brown/80">{product.weight}</span>
                </div>
              </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* Floating Messenger Chat Widget with Popup */}
      <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end">
        {showMessengerPopup && (
          <div className="mb-3 relative animate-fade-in-up">
            <div className="bg-white shadow-lg rounded-xl px-4 py-3 flex items-center relative" style={{ minWidth: 220 }}>
            <button
                className="absolute -top-2 -left-2 bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-gray-600 text-xs"
                onClick={() => setShowMessengerPopup(false)}
                aria-label="Close"
              >
                &times;
            </button>
              <span className="text-taara-dark-brown text-base">How can I help you?</span>
            </div>
          </div>
        )}
            <button
          className="flex items-center justify-center bg-white shadow-lg rounded-full p-4 border border-orange-300 hover:shadow-xl transition-all group"
          style={{ minWidth: 56, minHeight: 56 }}
          onClick={() => {
            const url = window.location.href;
            const msg = encodeURIComponent(`Hi! I'm interested in the product: ${product.name}. Here is the link: ${url}`);
            window.open(`https://m.me/taaracraft?text=${msg}`, '_blank');
          }}
        >
          {/* Font Awesome SVG Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32"><path d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"/></svg>
        </button>
          
      </div>
    </div>
  );
};

export default ProductDetailPage;