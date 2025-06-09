import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import MostPopular from "@/components/MostPopular";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen smooth-scroll">
      <Header />
      <ImageSlider />
      <Hero />
      <MostPopular />
      <Products />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
