import { useParams } from "react-router-dom";
import { ExternalLink, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useCart } from "@/components/CartContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Mock product data - in a real app, this would come from an API
  const products = [
  {// id: parseInt(id || "1"),
    id: 1,
    name: "WC - 4A0",
    category: "Wooden Clocks",
    price: "৳990",
    images: [
      "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/471307482_122100997946696417_2176757133234934279_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG-y4_qyUn0Q816_1bWPl0LqxovZiAfjGOrGi9mIB-MY12Hj5zm3AzsPUItxW2WY6XJqs5edSILACTdlJQlMuW5&_nc_ohc=9hECdNPD99wQ7kNvwFgm_Ip&_nc_oc=AdnfWf5Jv-rxKJOhpLuXxyvhvgEdAAOLi1nQdclPdHs1QipZwG1Au8iLVijaSL5BGWo&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=D_u39G8n1l5RcLcdxQQbfA&oh=00_AfMqbcz2JrOMAKAV0UOdHcwWw-1O2PaRGJsOrbWf_SquhA&oe=684C328E",
      "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/471275010_122100997904696417_2350659953430937717_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEiVVKBpLVvYLiwfXIGTwr82PfzxCzuqDLY9_PELO6oMliaOi-G53jQz5xFnv7ZgeIbVp860tvMoqlE5ciulkcK&_nc_ohc=aFwfBRxrxSMQ7kNvwFJrRiv&_nc_oc=AdlPmm9TJW5S3D0-NcgtRWR51aYrTFPJ_dxW1X2OzC3FYb28_n4Sa1-zuiBrWI6HvYs&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=9pfhAZRZNOVT9ZRyqNcsIA&oh=00_AfOYhmvlquiDKTmO95lOaTlSIpFjLeRSwbuhLwT6IzzuTQ&oe=684CE894",
      "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/471348845_122100997988696417_6359450718702967852_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHk6hSMZeQs6fa9p_NK77DegSofA1JgNtSBKh8DUmA21Ki5iGmEx1Ek8SYpnqHHzhxAM29KX75KmFxnV_CjQBPF&_nc_ohc=W3dC2M5tZuQQ7kNvwFxjnQq&_nc_oc=AdkN7mwbuCa29LjOvXIqeNjOJlustjS2ibzVl3bcGoQ-JjvLHlo4OYJ7OV2X5XkBuTk&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=_nUCXY8G3tDhobQe4CXnuQ&oh=00_AfNi8y8BAqkyk_qpvDrrFUjV2WsimgzFNXcrx7XfHyNpqQ&oe=684C4F3D"
    ],
    description: "This handcrafted wooden clock with brass compass design represents the perfect fusion of functionality and artistry. Each piece is meticulously carved by skilled artisans in Bangladesh, using premium teak wood and genuine brass accents.",
    features: [
      "Premium teak wood construction",
      "Genuine brass compass design",
      "Silent quartz movement",
      "Handcrafted by skilled artisans",
      "Dimensions: 30cm x 30cm x 5cm",
      "Wall mounting hardware included"
    ],
    specifications: {
      "Material": "Premium Teak Wood & Brass",
      "Dimensions": "30cm x 30cm x 5cm",
      "Weight": "1.2 kg",
      "Movement": "Silent Quartz",
      "Origin": "Handcrafted in Bangladesh",
    }
  },
  {// id: parseInt(id || "1"),
    id: 21,
    name: "Rack Tool",
    category: "others",
    price: "৳2500",
    images: [
      "https://i.postimg.cc/ZKTfNNcN/1.png",
      "https://i.postimg.cc/L85NCMG6/1-0.png",
    ],
    description: "This minimal and elegant wooden rack is crafted to hold your jewelry or small items with style. Its curved open-shelf design blends perfectly with modern interiors while saving space on your desk or vanity.",
    features: [
      "Modern curved design",
      "Lightweight yet sturdy",
      "Ideal for desktop or vanity placement",
    ],
    specifications: {
      "Material": "Solid wood",
      "Dimensions": "12\" x 10\" x 8\"",
      "Weight": "1.2 kg",
      "Movement": "Silent Quartz",
    }
  },
  {// id: parseInt(id || "1"),
    id: 2,
    name: "WC - 4A1",
    category: "Wooden Clocks",
    price: "৳990",
    images: [
      "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/471165432_122100717080696417_3133648347393880866_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGf-MhfY9Sqi5S-QkjD_umspT44QnHQIWalPjhCcdAhZvHVq5RecPMGcTRtBgzCpIeyqQjVH38GtyqallBxdZab&_nc_ohc=stChLZrCGewQ7kNvwExNqi3&_nc_oc=AdkOi9ZyEFenZ3YpYilNMHAuyZQxjGXnVXuLu_M--V_vp4thO17KxfRRbeTJPtog9p0&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=4p9dbKVZrRIJgytBXOd5dQ&oh=00_AfN8hWqQnUsKrwPFYZT_lXbT8v8GFj9sS3EA3eic-iEEjw&oe=684C5454",
      "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/471148547_122100717146696417_777247730751399368_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEUwTFFOKwW946nNU9e_h5EDTTpub9xYlwNNOm5v3FiXLAPYwwsPF-M53PNLhuzsy2QqW0F9lvCkQdJKzCzlcos&_nc_ohc=joPi_tKvvQ8Q7kNvwHXXcSV&_nc_oc=Adl3e_xxlvnTBf-85r9qOBBzX0qUokrIJuuWRdDHsHaUyhIWFpvz_aLaM6vUOoUIQ8Q&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=DDz61VIpQ9EeeMbeGEvr1g&oh=00_AfPIYaj0C36CGEVq0k7nsVbAXpzwZhmQmcnFlE3ffljX7w&oe=684C370A",
      "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/471547688_122100717206696417_6221504476323230135_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGjnZrOYFzul9dhkaTbfMtNvixZwCFLZDm-LFnAIUtkOQi49r0f8FvoUnT2f8WvHScFFeLbAodbO1GYvmPdCXS-&_nc_ohc=LzMjJRVs9UYQ7kNvwHlUoHS&_nc_oc=AdnR4rT3iYj_Ql3BA19Dwtsut7vgozghVz0zLAHYQQfKskWmdfkHPNMkXpVEf7tjEfs&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=d1KAEPCf07zOtk94pcsLug&oh=00_AfMMjW-m61AtUHMr1N58wkZ5XXuA_VwBCpXUck6UkX4ITw&oe=684C201E"
    ],
    description: "This handcrafted wooden clock with brass compass design represents the perfect fusion of functionality and artistry. Each piece is meticulously carved by skilled artisans in Bangladesh, using premium teak wood and genuine brass accents.",
    features: [
      "Premium teak wood construction",
      "Genuine brass compass design",
      "Silent quartz movement",
      "Handcrafted by skilled artisans",
      "Dimensions: 30cm x 30cm x 5cm",
      "Wall mounting hardware included"
    ],
    specifications: {
      "Material": "Premium Teak Wood & Brass",
      "Dimensions": "30cm x 30cm x 5cm",
      "Weight": "1.2 kg",
      "Movement": "Silent Quartz",
      "Origin": "Handcrafted in Bangladesh",
    }
  },
  {// id: parseInt(id || "1"),
    id: 24,
    name: "WC - 4A11",
    category: "Wooden Clocks",
    price: "৳550",
    images: [
      "https://i.postimg.cc/CK78kwDN/2.png",
      "https://i.postimg.cc/9QGZXdQs/1.png",
      "https://i.postimg.cc/fbDXVV3y/3.png",
      "https://i.postimg.cc/JnhkQS5W/4.png",
    ],
    description: "Inspired by outdoor serenity, this white-painted wall clock is a charming addition to patios, balconies, or cozy rooms. The hanging rope and minimalist design make it both functional and decorative.",
    features: [
      "Silent quartz movement",
      "Handcrafted by skilled artisans",
      "Wall mounting hardware included"
    ],
    specifications: {
      "Material": "PVC Board",
      "Dimensions": "10.5 inch x 10 inch", 
      "Weight": "1.2 kg",
      "Movement": "Silent Quartz",
    }
  },
];

const product = products.find((p) => p.id === parseInt(id));

const { addToCart } = useCart();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
      }, 5000); // Change image every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, product.images.length]);

  const handlePreviousImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleNextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const handleThumbnailClick = (index: number) => {
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
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden group">
                <img 
                  src={product.images[currentImageIndex]} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                {/* Navigation Arrows */}
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

                {/* Play/Pause Button */}
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-taara-brown hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                >
                  {isAutoPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {product.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? 'border-taara-brown scale-105'
                        : 'border-transparent hover:border-taara-brown/50'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="text-taara-brown font-medium mb-2">{product.category}</div>
                <h1 className="text-4xl font-display font-bold text-taara-charcoal mb-4">
                  {product.name}
                </h1>
                <div className="text-3xl font-bold text-taara-brown mb-6">
                  {product.price}
                </div>
                <Button 
                  className="w-full bg-taara-brown hover:bg-taara-dark-brown text-white text-lg py-4 mb-4"
                  onClick={() => window.open(`https://m.me/taaracraft?text=Hi! I want to order ${product.name} (Product ID: ${product.id}).`, '_blank')}
                >
                  Order Now
                </Button>
              </div>

              <div className="prose prose-lg text-taara-dark-brown/80">
                <p>{product.description}</p>
              </div>

              {/* Features */}
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

              {/* Specifications */}
              <div>
                <h3 className="text-xl font-bold text-taara-charcoal mb-4">Specifications</h3>
                <div className="bg-taara-cream rounded-lg p-4 space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-taara-golden/30 last:border-b-0">
                      <span className="font-medium text-taara-dark-brown">{key}:</span>
                      <span className="text-taara-dark-brown/80">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-6">
                <Button 
                  className="w-full bg-taara-brown hover:bg-taara-dark-brown text-white text-lg py-6"
                  onClick={() => window.open(`https://m.me/taaracraft?text=Hi! I'm interested in ${product.name}. Can you provide more details?`, '_blank')}
                >
                  <ExternalLink size={20} className="mr-2" />
                  Message Us About This Product
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-taara-brown text-taara-brown hover:bg-taara-brown hover:text-white text-lg py-6"
                  onClick={() => window.open('https://facebook.com/taaracraft', '_blank')}
                >
                  Visit Our Facebook Page
                </Button>
              </div>

              {/* Contact Info */}
              <div className="bg-taara-golden/20 rounded-lg p-6 mt-8">
                <h4 className="font-bold text-taara-charcoal mb-2">Need Help?</h4>
                <p className="text-taara-dark-brown/80 text-sm mb-4">
                  Have questions about this product? Our artisans are here to help you make the perfect choice.
                </p>
                <div className="text-sm text-taara-dark-brown/70">
                  <p>📧 Email: craft.taara@gmail.com</p>
                  <p>📱 Facebook: @taaracraft</p>
                  <p>🇧🇩 Made in Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;