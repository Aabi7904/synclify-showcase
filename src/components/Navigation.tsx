import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import StaggeredMenu from "./StaggeredMenu";
import logo from "@/assets/synclify-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navLinks = [
    { name: "Home", path: "/", ariaLabel: "Go to home page" },
    { name: "Services", path: "/services", ariaLabel: "View our services" },
    { name: "Projects", path: "/projects", ariaLabel: "See our projects" },
    { name: "About", path: "/about", ariaLabel: "Learn about us" },
    { name: "Contact", path: "/contact", ariaLabel: "Get in touch" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Mobile staggered menu
  if (isMobile) {
    const menuItems = navLinks.map(link => ({
      label: link.name,
      link: link.path,
      ariaLabel: link.ariaLabel
    }));

    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-40 glass shadow-none !border-0 border-none">
          <div className="container mx-auto px-4 py-2">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="SynclifySolutions" className="h-14 logo-glow" />
            </Link>
          </div>
        </nav>
        <StaggeredMenu
          position="right"
          items={menuItems}
          logoUrl={logo}
          menuButtonColor="hsl(180 85% 50%)"
          openMenuButtonColor="hsl(0 0% 0%)"
          accentColor="hsl(180 85% 50%)"
          changeMenuColorOnOpen={true}
          colors={['hsl(180 85% 15%)', 'hsl(180 85% 25%)']}
        />
      </>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-none !border-0 border-none">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="SynclifySolutions" className="h-14 md:h-16 logo-glow" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="default">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground/80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="default" className="w-full">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
