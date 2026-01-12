import { Database, Layout, Smartphone, Cloud, Shield, Code2 } from "lucide-react";

const TechStack = () => {
  const stack = [
    {
      icon: <Layout className="w-8 h-8 text-primary" />,
      title: "Modern Frontend",
      description: "Responsive, lightning-fast interfaces built for user engagement.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile Development",
      description: "Native-like performance across iOS and Android devices.",
      tags: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Backend & Data",
      description: "Robust architectures designed for scale and security.",
      tags: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background/50 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powered by <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We build your vision using the latest, most reliable technologies in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stack.map((item, index) => (
            <div
              key={index}
              className="glass-hover rounded-xl p-8 space-y-6 animate-fade-in border border-white/5 hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit">
                {item.icon}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;