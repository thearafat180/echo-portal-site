
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hello@portray.pk",
      href: "mailto:hello@portray.pk"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+92 300 1234567",
      href: "tel:+923001234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Lahore, Pakistan",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm font-medium mb-6">
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-portfolio-dark mb-6">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-portfolio-text-light max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-portfolio-text mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="Your first name"
                    className="border-gray-200 focus:border-portfolio-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-portfolio-text mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Your last name"
                    className="border-gray-200 focus:border-portfolio-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-portfolio-text mb-2">
                  Email Address
                </label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="border-gray-200 focus:border-portfolio-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-portfolio-text mb-2">
                  Project Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent">
                  <option>Select a service</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Mobile Development</option>
                  <option>SEO Optimization</option>
                  <option>Brand Identity</option>
                  <option>Digital Strategy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-portfolio-text mb-2">
                  Project Budget
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent">
                  <option>Select budget range</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-portfolio-text mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your project..."
                  className="border-gray-200 focus:border-portfolio-accent min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90 text-white py-3">
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-portfolio-dark mb-4">Get in touch</h3>
              <p className="text-portfolio-text-light leading-relaxed">
                We'd love to hear from you. Choose the most convenient way to contact us, 
                and we'll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 bg-portfolio-accent/10 rounded-lg flex items-center justify-center text-portfolio-accent group-hover:bg-portfolio-accent group-hover:text-white transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-portfolio-text-light">{info.label}</div>
                    <div className="font-semibold text-portfolio-dark">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-portfolio-dark mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-portfolio-text-light">Monday - Friday</span>
                  <span className="text-portfolio-dark font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-portfolio-text-light">Saturday</span>
                  <span className="text-portfolio-dark font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-portfolio-text-light">Sunday</span>
                  <span className="text-portfolio-dark font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
