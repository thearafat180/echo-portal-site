import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "@/lib/database";

const Products = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: number]: number }>({});

  // const products = [
  //   {
  //     id: 24,
  //     name: "WC - 4A11",
  //     description: "Handcrafted from premium teak wood with elegant brass accents",
  //     images: [
  //       "https://i.postimg.cc/CK78kwDN/2.png",
  //       "https://i.postimg.cc/9QGZXdQs/1.png",
  //       "https://i.postimg.cc/fbDXVV3y/3.png",
  //       "https://i.postimg.cc/JnhkQS5W/4.png",
  //     ],
  //     featured: true
  //   },
  //   {
  //     id: 2,
  //     name: "Minimalist Oak Clock",
  //     description: "Clean lines and natural oak grain for modern homes",
  //     images: [
  //       "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/471165432_122100717080696417_3133648347393880866_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGf-MhfY9Sqi5S-QkjD_umspT44QnHQIWalPjhCcdAhZvHVq5RecPMGcTRtBgzCpIeyqQjVH38GtyqallBxdZab&_nc_ohc=stChLZrCGewQ7kNvwExNqi3&_nc_oc=AdkOi9ZyEFenZ3YpYilNMHAuyZQxjGXnVXuLu_M--V_vp4thO17KxfRRbeTJPtog9p0&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=4p9dbKVZrRIJgytBXOd5dQ&oh=00_AfN8hWqQnUsKrwPFYZT_lXbT8v8GFj9sS3EA3eic-iEEjw&oe=684C5454",
  //       "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/471148547_122100717146696417_777247730751399368_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEUwTFFOKwW946nNU9e_h5EDTTpub9xYlwNNOm5v3FiXLAPYwwsPF-M53PNLhuzsy2QqW0F9lvCkQdJKzCzlcos&_nc_ohc=joPi_tKvvQ8Q7kNvwHXXcSV&_nc_oc=Adl3e_xxlvnTBf-85r9qOBBzX0qUokrIJuuWRdDHsHaUyhIWFpvz_aLaM6vUOoUIQ8Q&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=DDz61VIpQ9EeeMbeGEvr1g&oh=00_AfPIYaj0C36CGEVq0k7nsVbAXpzwZhmQmcnFlE3ffljX7w&oe=684C370A",
  //       "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/471547688_122100717206696417_6221504476323230135_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGjnZrOYFzul9dhkaTbfMtNvixZwCFLZDm-LFnAIUtkOQi49r0f8FvoUnT2f8WvHScFFeLbAodbO1GYvmPdCXS-&_nc_ohc=LzMjJRVs9UYQ7kNvwHlUoHS&_nc_oc=AdnR4rT3iYj_Ql3BA19Dwtsut7vgozghVz0zLAHYQQfKskWmdfkHPNMkXpVEf7tjEfs&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=d1KAEPCf07zOtk94pcsLug&oh=00_AfMMjW-m61AtUHMr1N58wkZ5XXuA_VwBCpXUck6UkX4ITw&oe=684C201E"
  //     ]
  //   },
  //   {
  //     id: 23,
  //     name: "Mushroom",
  //     description: "Cute mushroom-style drop earrings inspired by forest acorns.",
  //     images: [
  //       "https://i.postimg.cc/7L3VcvzG/8-0.png",
  //     ]
  //   },
  //   {
  //     id: 18,
  //     name: "Cocoa Loops",
  //     description: "Smooth oval-shaped earrings crafted from rich walnut wood.",
  //     images: [
  //       "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/503911765_122130851420696417_8669763959493707537_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFKkamIFl--2r792iGmOV8MToNRm_mvaNhOg1Gb-a9o2IAXgyTrvT5d5_3gEeHHOLb_sVKs8lAg-DuOvYuEWq8-&_nc_ohc=km6EQXW2aQYQ7kNvwFpkPCD&_nc_oc=Adls0Xcdi4DHW31ElAAkYuWSEfTGbjFhjLpjlhjq_12QKnXxxoGEzI24aJaKko3mmFE&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=7tEeeQR60THUg2JnC_kYJw&oh=00_AfO2ieS_ef1CuFv8eJqui9Jw6ba8kjyiVmcJcHxTopucOQ&oe=684C45C2",
  //     ]
  //   },
  //   {
  //     id: 21,
  //     name: "Rack Tool",
  //     description: "Sustainable bamboo construction with peaceful design",
  //     images: [
  //       "https://i.postimg.cc/cLj4VBrq/Whats-App-Image-2025-06-09-at-10-36-18-3a47dd67.jpg",
  //     ]
  //   },
  //   {
  //     id: 10,
  //     name: "WC - 4A9",
  //     description: "Traditional walnut craftsmanship passed down generations",
  //     images: [
  //       "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/471507924_122105801642696417_3810479010648338497_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHk81ZaO-csfo_k4QwSSxGKKI7fRa1IJuAojt9FrUgm4AYNVHjGM0dFjYBJfldpMKbaHTeSplx573FQPCLgCDR-&_nc_ohc=mMOvyWluABwQ7kNvwHjIGe2&_nc_oc=AdlXho_nD6BV60gnj4_Ob_qTgngAy5qLKLnNN0juOGIlTgNMeDE-_64bnIbuMyXlmW8&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=4nDkhBVwvjoNSmi0YTr0Ww&oh=00_AfMjAtc0GZ61jlX8_xbdw3N1c60uK6G7SS_G2T0e1N0WLQ&oe=684C22F2",
  //     ]
  //   }
  // ];

  const handleImageClick = (productId: number, imageIndex: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [productId]: imageIndex
    }));
  };

  return (
    <section id="products" className="bg-taara-warm-white py-20">
      <div className="mx-auto px-6 container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center bg-taara-wood/10 mb-6 px-4 py-2 rounded-full font-medium text-taara-dark-wood text-sm">
            Our Collection
          </div>
          
          <h2 className="mb-6 font-display font-bold text-taara-charcoal text-4xl md:text-5xl">
            Handcrafted Wooden Items
          </h2>
          
          <p className="mx-auto max-w-3xl text-taara-dark-wood/80 text-xl">
            Each timepiece is lovingly crafted by skilled artisans, bringing together tradition and innovation
          </p>
        </div>

        {/* Products Grid */}
        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up ${
                product.displayMode.includes("featured") ? "md:col-span-2 lg:col-span-2" : ""
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
                      product.displayMode.includes("featured") ? "h-80" : "h-64"
                    }`}
                  />
                </Link>
                {/* Image Thumbnails */}
                <div className="right-0 bottom-0 left-0 absolute flex justify-center gap-2 bg-black/40 backdrop-blur-sm p-2">
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
                  <div className="right-6 bottom-6 left-6 absolute">
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
                <div className="flex justify-between items-center mb-4">
                  {product.displayMode.includes("featured") && (
                    <span className="bg-taara-wood px-3 py-1 rounded-full font-medium text-white text-xs">
                      Featured
                    </span>
                  )}
                </div>

                <Link to={`/product/${product.id}`}>
                  <h3 className="mb-3 font-display font-bold text-taara-charcoal group-hover:text-taara-wood text-2xl transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="mb-6 text-taara-dark-wood/80 leading-relaxed">
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
        <div className="bg-gradient-to-r from-taara-brown to-taara-dark-brown shadow-lg mt-20 p-8 md:p-12 rounded-3xl text-white text-center">
          <h3 className="mb-4 font-display font-bold text-taara-cream text-3xl md:text-4xl">
            Ready to Order?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-taara-warm-white/90 text-xl">
            Transform your space with our handcrafted wooden clocks. Each piece is made with care and precision by our skilled artisans.
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <Button 
              className="bg-taara-cream hover:bg-taara-warm-white shadow-md hover:shadow-lg px-8 py-4 rounded-full font-semibold text-taara-dark-brown transition-all duration-300"
              onClick={() => window.open('https://facebook.com/taaracraft', '_blank')}
            >
              Order Now
            </Button>
            <Button 
              variant="outline"
              className="hover:bg-taara-cream/10 px-8 py-4 border-taara-cream/30 rounded-full font-semibold text-taara-cream transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* View All Products Button */}
        <div className="mt-12 text-center">
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
