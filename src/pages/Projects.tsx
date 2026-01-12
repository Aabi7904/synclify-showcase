import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, FolderOpen, Timer } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

// --- 3D Component ---
const AnimatedIngredients = () => {
  return (
    <Canvas className="h-[400px] w-full" camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 100, 100]} scale={1.8}>
          <MeshDistortMaterial
            color="#f59e0b"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.1}
          />
        </Sphere>
      </Float>
    </Canvas>
  );
};

const Projects = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Notified!",
      description: "We'll show you our portfolio as soon as it's served.",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-background">
      <Navigation />

      <main className="flex-grow flex items-center justify-center pt-20 pb-20 overflow-hidden relative">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left space-y-8 animate-fade-in z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/20 mb-4">
              <FolderOpen className="w-5 h-5 animate-bounce" />
              <span className="text-sm font-semibold">Gallery Update</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              We are <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Plating</span> <br />
              Our Best Work.
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              We are curating a new gallery of our finest recipes (projects). The portfolio is getting a Michelin-star upgrade.
            </p>

            <div className="glass-hover p-2 rounded-xl max-w-md mx-auto lg:mx-0 border border-white/10 shadow-lg">
              <form onSubmit={handleNotify} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email me when portfolio is live..."
                  className="bg-transparent border-none focus-visible:ring-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Notify Me <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-muted-foreground pt-4">
              <Timer className="w-4 h-4" />
              <span>Launch Status: Finishing Touches</span>
            </div>
          </div>

          <div className="relative h-[400px] w-full flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
             <AnimatedIngredients />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;