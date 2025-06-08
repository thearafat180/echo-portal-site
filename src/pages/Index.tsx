
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen smooth-scroll">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
