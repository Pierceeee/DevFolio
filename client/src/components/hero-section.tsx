import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const skills = ["Java", "Python", "JavaScript", "React.js", "Spring Boot", "PostgreSQL"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center fade-in-up">
        <p className="text-secondary font-mono text-sm mb-4" data-testid="text-greeting">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4" data-testid="text-name">
          Allen Lacoste
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-6" data-testid="text-tagline">
          Full Stack Developer
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed" data-testid="text-description">
          Computer Science graduate passionate about creating exceptional digital experiences. 
          I specialize in building scalable web applications with modern technologies, from backend APIs to responsive frontends.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skills.map((skill, index) => (
            <span 
              key={skill}
              className="skill-tag px-3 py-1 rounded-full text-sm font-mono"
              data-testid={`skill-tag-${index}`}
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleScrollToProjects}
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            data-testid="button-check-work"
          >
            Check out my work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          {/* Removed top Download Resume button as requested */}
          <Button 
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300"
            data-testid="button-get-in-touch"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
