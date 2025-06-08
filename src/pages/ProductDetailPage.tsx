
import { useParams } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetailPage = () => {
  const { id } = useParams();

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: parseInt(id || "1"),
    name: "Golden Compass Clock",
    category: "Wooden Clocks",
    price: "৳2,500",
    images: [
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=600&fit=crop"
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
      "Warranty": "1 Year"
    }
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
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
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
                  onClick={() => window.open(`https://m.me/taaracraft?text=Hi! I'm interested in ${product.name} (Product ID: ${product.id}). Can you provide more details?`, '_blank')}
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
                  <p>📧 Email: info@taaracraft.com</p>
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
