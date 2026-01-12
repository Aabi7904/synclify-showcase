import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import TechStack from "@/components/home/TechStack"; // Updated import
// import Lanyard from "@/components/Lanyard";
// import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  // const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Lanyard component commented out until assets are added */}
        {/* {!isMobile && <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />} */}
        
        <Hero />
        <ServicesPreview />
        <TechStack /> {/* Replaced Testimonials */}
      </main>

      <Footer />
    </div>
  );
};

export default Index;