import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    async function fetchSlides() {
      const { data, error } = await supabase
        .from("slider_images")
        .select("image_url, caption, link, sort_order")
        .eq("active", true)
        .order("sort_order", { ascending: true });
      if (!error && data) {
        setSlides(data);
      }
    }
    fetchSlides();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className="hidden md:block relative h-[80rem] sm:h-80 overflow-hidden mt-10">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image_url}
            alt={slide.caption || `Slide ${index + 1}`}
            className="w-full h-full object-cover object-top"
          />
          {/* Optionally show caption or link */}
          {slide.caption && (
            <div className="absolute bottom-8 left-8 bg-black/60 text-white px-4 py-2 rounded-lg">
              {slide.caption}
            </div>
          )}
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
