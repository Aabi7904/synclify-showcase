import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollVelocity from "../ScrollVelocity";
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </motion.div>

      <motion.div className="container mx-auto px-4 relative z-10" style={{ opacity }}>
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 lightning-border rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm">Transforming Ideas into Digital Reality</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Build Your Digital
            <br />
            <span className="gradient-text">Future With Us</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We craft cutting-edge websites, mobile apps, and software solutions that drive your business forward. Your vision, our expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-lg">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg glass-hover">
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>

          {/* Scroll Velocity Animation */}
          <div className="pt-10 w-screen relative left-1/2 -translate-x-1/2">
             <ScrollVelocity
                texts={['Synclify Solutions • Your Digital Partner •', 'Innovate • Develop • Elevate •']} 
                velocity={50} 
                className="text-primary/30 font-['Dancing_Script'] text-2xl md:text-6xl"
             />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
