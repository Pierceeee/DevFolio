import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "technologies", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  // Resume download handled via anchor tag below

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold gradient-text" data-testid="logo">AL</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => handleNavClick("home")}
                  className={`nav-link text-sm font-medium transition-colors ${
                    activeSection === "home" ? "text-secondary" : "hover:text-secondary"
                  }`}
                  data-testid="nav-home"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavClick("about")}
                  className={`nav-link text-sm font-medium transition-colors ${
                    activeSection === "about" ? "text-secondary" : "hover:text-secondary"
                  }`}
                  data-testid="nav-about"
                >
                  About
                </button>
                <button 
                  onClick={() => handleNavClick("technologies")}
                  className={`nav-link text-sm font-medium transition-colors ${
                    activeSection === "technologies" ? "text-secondary" : "hover:text-secondary"
                  }`}
                  data-testid="nav-technologies"
                >
                  Tech Stack
                </button>
                <button 
                  onClick={() => handleNavClick("experience")}
                  className={`nav-link text-sm font-medium transition-colors ${
                    activeSection === "experience" ? "text-secondary" : "hover:text-secondary"
                  }`}
                  data-testid="nav-experience"
                >
                  Experience
                </button>
                <button 
                  onClick={() => handleNavClick("projects")}
                  className={`nav-link text-sm font-medium transition-colors ${
                    activeSection === "projects" ? "text-secondary" : "hover:text-secondary"
                  }`}
                  data-testid="nav-projects"
                >
                  Projects
                </button>
                <button 
                  onClick={() => handleNavClick("contact")}
                  className={`nav-link text-sm font-medium transition-colors ${
                    activeSection === "contact" ? "text-secondary" : "hover:text-secondary"
                  }`}
                  data-testid="nav-contact"
                >
                  Contact
                </button>
                <Button
                  asChild
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  data-testid="button-resume-nav"
                  aria-label="Download Resume PDF"
                >
                  <a href="/resume.pdf" download>
                    Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(true)}
                data-testid="button-mobile-menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-menu open fixed top-0 right-0 h-full w-64 bg-card border-l border-border md:hidden z-50">
          <div className="p-6">
            <div className="flex justify-end mb-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="button-close-mobile-menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-6">
              <button 
                onClick={() => handleNavClick("home")}
                className="block text-lg font-medium hover:text-secondary transition-colors"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick("about")}
                className="block text-lg font-medium hover:text-secondary transition-colors"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick("technologies")}
                className="block text-lg font-medium hover:text-secondary transition-colors"
                data-testid="mobile-nav-technologies"
              >
                Tech Stack
              </button>
              <button 
                onClick={() => handleNavClick("experience")}
                className="block text-lg font-medium hover:text-secondary transition-colors"
                data-testid="mobile-nav-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => handleNavClick("projects")}
                className="block text-lg font-medium hover:text-secondary transition-colors"
                data-testid="mobile-nav-projects"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavClick("contact")}
                className="block text-lg font-medium hover:text-secondary transition-colors"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <Button
                asChild
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                data-testid="button-resume-mobile"
                aria-label="Download Resume PDF"
              >
                <a href="/resume.pdf" download>
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
