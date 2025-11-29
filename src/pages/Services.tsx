import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Code, Smartphone, Layers, Receipt, Database, Cloud, Shield, Zap } from "lucide-react";
import Shuffle from "@/components/Shuffle";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Creating stunning, responsive websites that captivate audiences and drive conversions.",
      features: ["Custom Design", "E-commerce Solutions", "CMS Integration", "SEO Optimization"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Building native and cross-platform mobile applications for iOS and Android.",
      features: ["Native Development", "React Native", "Flutter", "App Store Deployment"],
    },
    {
      icon: Layers,
      title: "Custom Software Solutions",
      description: "Tailored software designed to address your unique business challenges and workflows.",
      features: ["Business Automation", "System Integration", "Legacy Modernization", "API Development"],
    },
    {
      icon: Receipt,
      title: "Billing & Invoicing Software",
      description: "Streamlined billing systems to manage finances, subscriptions, and payments efficiently.",
      features: ["Automated Invoicing", "Payment Gateway Integration", "Subscription Management", "Financial Reports"],
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Robust database solutions for secure data storage, management, and analytics.",
      features: ["Database Design", "Migration Services", "Performance Optimization", "Cloud Database"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
      features: ["Cloud Migration", "AWS/Azure Setup", "DevOps Integration", "Scalability Planning"],
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Ensuring your software meets industry standards and protects against threats.",
      features: ["Security Audits", "Compliance Standards", "Penetration Testing", "Data Encryption"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing existing applications for speed, efficiency, and better user experience.",
      features: ["Code Optimization", "Load Time Reduction", "Database Tuning", "Caching Strategies"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <Shuffle
                text="OUR SERVICES"
                tag="span"
                shuffleDirection="right"
                duration={0.4}
                animationMode="evenodd"
                shuffleTimes={2}
                ease="power3.out"
                stagger={0.04}
                threshold={0.2}
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
                className="gradient-text"
                style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
              />
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software solutions designed to transform your business and drive digital success
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-hover rounded-2xl p-8 space-y-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 glass-hover rounded-2xl p-12 text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business vision into reality
            </p>
            <a href="/contact" className="inline-block">
              <button className="glass-hover px-8 py-4 rounded-lg font-semibold text-lg hover:text-primary transition-colors">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
