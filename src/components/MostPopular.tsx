import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const MostPopular = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: number]: number }>({});

  const popularProducts = [
    {
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
      description: "This handcrafted wooden clock with brass compass design."
    },
    {
      id: 2,
      name: "WC - 4A1",
      category: "Wooden Clocks",
      price: "৳1390",
      images: [
        "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/471165432_122100717080696417_3133648347393880866_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGf-MhfY9Sqi5S-QkjD_umspT44QnHQIWalPjhCcdAhZvHVq5RecPMGcTRtBgzCpIeyqQjVH38GtyqallBxdZab&_nc_ohc=stChLZrCGewQ7kNvwExNqi3&_nc_oc=AdkOi9ZyEFenZ3YpYilNMHAuyZQxjGXnVXuLu_M--V_vp4thO17KxfRRbeTJPtog9p0&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=4p9dbKVZrRIJgytBXOd5dQ&oh=00_AfN8hWqQnUsKrwPFYZT_lXbT8v8GFj9sS3EA3eic-iEEjw&oe=684C5454",
        "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/471148547_122100717146696417_777247730751399368_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEUwTFFOKwW946nNU9e_h5EDTTpub9xYlwNNOm5v3FiXLAPYwwsPF-M53PNLhuzsy2QqW0F9lvCkQdJKzCzlcos&_nc_ohc=joPi_tKvvQ8Q7kNvwHXXcSV&_nc_oc=Adl3e_xxlvnTBf-85r9qOBBzX0qUokrIJuuWRdDHsHaUyhIWFpvz_aLaM6vUOoUIQ8Q&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=DDz61VIpQ9EeeMbeGEvr1g&oh=00_AfPIYaj0C36CGEVq0k7nsVbAXpzwZhmQmcnFlE3ffljX7w&oe=684C370A",
        "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/471547688_122100717206696417_6221504476323230135_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGjnZrOYFzul9dhkaTbfMtNvixZwCFLZDm-LFnAIUtkOQi49r0f8FvoUnT2f8WvHScFFeLbAodbO1GYvmPdCXS-&_nc_ohc=LzMjJRVs9UYQ7kNvwHlUoHS&_nc_oc=AdnR4rT3iYj_Ql3BA19Dwtsut7vgozghVz0zLAHYQQfKskWmdfkHPNMkXpVEf7tjEfs&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=d1KAEPCf07zOtk94pcsLug&oh=00_AfMMjW-m61AtUHMr1N58wkZ5XXuA_VwBCpXUck6UkX4ITw&oe=684C201E"
      ],
      description: "This handcrafted wooden clock with brass compass design."
    },
    {
      id: 15,
      name: "Sunset Cascade",
      category: "Jewelry",
      price: "৳300",
      images: [
      "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/503847407_122130851288696417_8527181941080412485_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEdm-BPesprcRoZ6AFk6T4V0Tccq-8AHcPRNxyr7wAdw5XQPiZCahKTuGBuFVDAngJIvLrGQ3Zv5HgXTnTcu3Zm&_nc_ohc=SNb0UtaJewoQ7kNvwEM7ml9&_nc_oc=AdmQpfxiRf_VhgmN0yTvuAHH9QJec9BLUUJWK7IuFyIwk8pE6t-RAMl9oPRE7Kv2rps&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=X_S4WcIUpBUAw8mChXg2hg&oh=00_AfN1V3pwFVwhZUNGufXhC0XKr7NxPQOup6B9wyGdOeR2tg&oe=684C4293",
      ],
      description: "Elegant wooden pendant with intricate star carving"
    },
    {
      id: 21,
      name: "Rack Tool",
      category: "others",
      price: "৳2500",
      images: [
        "https://i.postimg.cc/ZKTfNNcN/1.png",
        "https://i.postimg.cc/L85NCMG6/1-0.png",
      ],
      description: "Personalized wooden storage box with custom engraving"
    },
  ];

  const handleImageClick = (productId: number, imageIndex: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [productId]: imageIndex
    }));
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image Carousel */}
              <div className="relative overflow-hidden">
                <img
                  src={product.images[activeImageIndex[product.id] || 0]}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Image Thumbnails */}
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/40 backdrop-blur-sm flex gap-2 justify-center">
                  {product.images.map((image, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() => handleImageClick(product.id, imgIndex)}
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
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium text-taara-charcoal bg-taara-golden px-3 py-1 rounded-full">
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

                <h3 className="text-xl font-display font-bold text-taara-charcoal mb-2 group-hover:text-taara-golden transition-colors">
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
