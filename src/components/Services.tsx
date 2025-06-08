
import { Code, Palette, Smartphone, Search, Globe, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React & Next.js", "Full-Stack Solutions", "API Integration", "Performance Optimization"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that drive engagement and conversion",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic",
      features: ["Technical SEO", "Content Strategy", "Local SEO", "Analytics Setup"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Complete brand identity and visual design solutions",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Strategy",
      description: "Strategic planning to achieve your digital transformation goals",
      features: ["Digital Audit", "Strategy Planning", "Technology Consulting", "Growth Planning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-portfolio-dark mb-6">
            What We Do Best
          </h2>
          
          <p className="text-xl text-portfolio-text-light max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-portfolio-accent/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-portfolio-accent/10 rounded-xl flex items-center justify-center text-portfolio-accent mb-6 group-hover:bg-portfolio-accent group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-portfolio-dark mb-4 group-hover:text-portfolio-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-portfolio-text-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-portfolio-text">
                    <div className="w-1.5 h-1.5 bg-portfolio-accent rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-portfolio-accent to-portfolio-accent/80 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our expert team and proven process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-portfolio-accent hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Get Free Consultation
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors">
              View Our Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
