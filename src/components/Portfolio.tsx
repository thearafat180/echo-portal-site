
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced features",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      featured: true
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "Design",
      description: "Complete brand identity for tech startup",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["Branding", "UI/UX", "Print"]
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "App Development",
      description: "Secure and intuitive mobile banking experience",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tags: ["React Native", "Security", "Finance"]
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      category: "Web Development",
      description: "Real-time data visualization platform",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tags: ["Vue.js", "D3.js", "Python"]
    },
    {
      id: 5,
      title: "Restaurant Website",
      category: "Web Design",
      description: "Elegant website for fine dining restaurant",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tags: ["WordPress", "SEO", "Photography"]
    },
    {
      id: 6,
      title: "SaaS Platform",
      category: "Full Stack",
      description: "Complete SaaS solution with subscription management",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      tags: ["Next.js", "Stripe", "PostgreSQL"]
    }
  ];

  const categories = ["All", "Web Development", "Design", "App Development", "Full Stack"];

  return (
    <section id="portfolio" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm font-medium mb-6">
            Our Portfolio
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-portfolio-dark mb-6">
            Featured Projects
          </h2>
          
          <p className="text-xl text-portfolio-text-light max-w-3xl mx-auto">
            Explore our latest work and see how we've helped clients achieve their digital goals
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={`${
                category === "All" 
                  ? "bg-portfolio-accent hover:bg-portfolio-accent/90 text-white" 
                  : "border-portfolio-text-light hover:bg-portfolio-accent/5"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    project.featured ? "h-64" : "h-48"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                      <ExternalLink size={16} className="mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-portfolio-accent bg-portfolio-accent/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs font-medium text-white bg-portfolio-accent px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-portfolio-dark mb-2 group-hover:text-portfolio-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-portfolio-text-light mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 text-portfolio-text rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
