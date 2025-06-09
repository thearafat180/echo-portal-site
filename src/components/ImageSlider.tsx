import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/471285958_122101646468696417_8001729684224055963_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeGXxmXiBxznYfrAgvIbfAwLNky3yd8fWLM2TLfJ3x9Ys-NMT1AL_NbHe_ak3Zyx08Al8DNEmp7omY8k5j76Lsp-&_nc_ohc=rh7-0H2t9FwQ7kNvwHn6GrY&_nc_oc=AdltuzcRq7J8OB8Ds5os95ZiUBcRhZqvYnhdSrJU2zrQMU2VzfNOaeyH88mf42zUpZ4&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=FoNqzEuiCIXhsvgNpDuSvw&oh=00_AfPXbt8WTgddHuxQFyEaVdAbKpXW0Y0fYJS_XsfDmzOY1Q&oe=684C42CF",
      title: "Handcrafted Wooden Clocks",
      subtitle: "Timeless elegance for your home"
    },
    {
      image: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/471821548_122105801744696417_2372239887802334796_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGeuWV4CRdShWaB1Ium1beccaA1ZIFQDm9xoDVkgVAOb0BidGk3Kiq3vQrvQw4QjtAU3x5qq5QvcyrqRHxqnItc&_nc_ohc=r4V2YXetmkIQ7kNvwHm1T2x&_nc_oc=AdmBCB9-C_ABBMDi-9c0qE-9aZuOR1ma310FSa0q1gGcZs-xfhHPiLmIotI3s7r-GxA&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=Fm1AdzIfuiufPyRspSLsew&oh=00_AfMrPAppyCtEXzME8BiEJeds77xsosf2HlH0zDxkX1GHbQ&oe=684C1A30",
      title: "Artisan Jewelry Collection",
      subtitle: "Unique pieces crafted with love"
    },
    {
      image: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/471702939_122106897974696417_8863687347181821834_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEByEJng2_uebETlR3yJLON09UvnkZ6L27T1S-eRnovbin4h_02zNgm_vX0U0mqZfjK5ihKH9dRXdhuoG9sBzof&_nc_ohc=e4DaNHB0hlAQ7kNvwGJsEUy&_nc_oc=Adk6dxgMLUHv-dtHSzvv0AyoWvAaivZCGB55Gs_5oeZ0Dbg0bcI9W568inC_uD5llII&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=G2R_3gPhheX_a2iPy7Wvpg&oh=00_AfN9v7MZoyapQM9mjsBE5rBP_9X_1C5POcvaHOcuIrL41Q&oe=684C4B03",
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
