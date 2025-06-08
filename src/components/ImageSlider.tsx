
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=1200&h=400&fit=crop",
      title: "Handcrafted Wooden Clocks",
      subtitle: "Timeless elegance for your home"
    },
    {
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200&h=400&fit=crop",
      title: "Artisan Jewelry Collection",
      subtitle: "Unique pieces crafted with love"
    },
    {
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=400&fit=crop",
      title: "Custom Wood Crafting",
      subtitle: "Bringing your vision to life"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-96 overflow-hidden mt-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
            <div className="container mx-auto px-6 h-full flex items-center">
              <div className="text-white max-w-lg">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl opacity-90">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-taara-yellow' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
