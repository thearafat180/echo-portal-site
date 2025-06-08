
import { CheckCircle, Users, Zap, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for performance and speed"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Focused",
      description: "Tailored solutions for every need"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award Winning",
      description: "Recognized design excellence"
    }
  ];

  const achievements = [
    "5+ Years of Experience",
    "Professional Design Standards",
    "Mobile-First Approach",
    "SEO Optimized",
    "24/7 Support",
    "Custom Solutions"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm font-medium mb-6">
              About Portray
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-portfolio-dark mb-6 leading-tight">
              Crafting Digital Excellence Since 2019
            </h2>
            
            <p className="text-lg text-portfolio-text-light mb-8 leading-relaxed">
              We specialize in creating stunning digital portfolios that tell your unique story. 
              Our team combines creative design with cutting-edge technology to deliver 
              exceptional results that exceed expectations.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-portfolio-accent/10 rounded-full flex items-center justify-center text-portfolio-accent mx-auto mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-portfolio-dark mb-2">{feature.title}</h3>
                  <p className="text-sm text-portfolio-text-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="bg-gradient-to-br from-portfolio-accent/5 to-portfolio-accent/10 rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-portfolio-dark mb-6">
                Why Choose Us?
              </h3>
              
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-portfolio-accent flex-shrink-0" />
                    <span className="text-portfolio-text">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-portfolio-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                    P
                  </div>
                  <div>
                    <div className="font-semibold text-portfolio-dark">Portfolio Team</div>
                    <div className="text-sm text-portfolio-text-light">Creative Directors</div>
                  </div>
                </div>
                <p className="text-portfolio-text italic">
                  "Excellence is not a skill, it's an attitude. We bring passion and 
                  precision to every project we undertake."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
