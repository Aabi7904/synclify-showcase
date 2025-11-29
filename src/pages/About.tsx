import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Users, Award, Lightbulb } from "lucide-react";
import Shuffle from "@/components/Shuffle";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering businesses through innovative software solutions that drive measurable results.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Building lasting partnerships by understanding and exceeding our clients' expectations.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering high-quality solutions with attention to every detail.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and creative problem-solving approaches.",
    },
  ];

  const team = [
    { name: "Alex Rivera", role: "Founder & CEO", expertise: "Full-Stack Development" },
    { name: "Jordan Smith", role: "CTO", expertise: "Cloud Architecture" },
    { name: "Taylor Johnson", role: "Lead Designer", expertise: "UX/UI Design" },
    { name: "Casey Brown", role: "Project Manager", expertise: "Agile Management" },
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
                text="ABOUT US"
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
              We're a passionate team of innovators dedicated to transforming businesses through technology
            </p>
          </div>

          {/* Company Story */}
          <div className="glass-hover rounded-2xl p-12 mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018, SynclifySolutions emerged from a simple belief: every business deserves 
                access to world-class software solutions that drive growth and innovation. What started as 
                a small team of developers has grown into a full-service software development company.
              </p>
              <p>
                Today, we've delivered over 150 successful projects across diverse industries, from 
                healthcare to retail, finance to education. Our commitment to excellence and client 
                satisfaction has earned us a reputation as a trusted technology partner.
              </p>
              <p>
                We don't just build software—we build relationships. Every project is an opportunity 
                to understand your unique challenges and create solutions that make a real difference.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass-hover rounded-xl p-6 text-center space-y-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="glass-hover rounded-xl p-6 text-center space-y-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 glass-hover rounded-2xl p-12 text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Us on <span className="gradient-text">This Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a startup or an established enterprise, we're here to help you succeed
            </p>
            <a href="/contact" className="inline-block">
              <button className="glass-hover px-8 py-4 rounded-lg font-semibold text-lg hover:text-primary transition-colors">
                Let's Work Together
              </button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
