import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesPreview />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
