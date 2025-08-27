import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const featuredProjects = [
    {
      title: "Inventory Management System",
      description: "Designed and developed a full-featured inventory management system to track products, stock levels, and transaction history. Built using Java and PostgreSQL, applying Object-Oriented Programming (OOP) principles for modular and scalable backend architecture. Developed a clean and responsive user interface using React.js, HTML, CSS, and JavaScript, ensuring a smooth user experience.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=700",
      technologies: ["Java", "PostgreSQL", "React.js", "HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
      reverse: false
    },
    {
      title: "Gym Workout Tracker",
      description: "Designed and developed a full-stack fitness tracking application to manage workouts, exercises, and progress history. Built the backend using Java, Spring Boot, and MySQL, applying Object-Oriented Programming (OOP) and REST API design principles for scalability and maintainability. Created an interactive frontend with React.js, HTML, CSS, and JavaScript, enabling users to log workouts, view history, and visualize progress.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=700",
      technologies: ["Java", "Spring Boot", "MySQL", "React.js", "JWT", "REST APIs"],
      github: "#",
      demo: "#",
      reverse: true
    }
  ];

  const otherProjects = [];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4" data-testid="text-projects-title">
            Some Things I've Built
          </h2>
          <div className="w-20 h-0.5 bg-secondary"></div>
        </div>

        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-12 gap-8 items-center ${project.reverse ? 'lg:grid-flow-col-dense' : ''}`} data-testid={`featured-project-${index}`}>
              <div className={`lg:col-span-7 ${project.reverse ? 'lg:order-2' : ''}`}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-2xl w-full"
                  data-testid={`img-project-${index}`}
                />
              </div>
              <div className={`lg:col-span-5 ${project.reverse ? 'lg:pr-8 lg:order-1' : 'lg:pl-8'}`}>
                <div className="text-secondary font-mono text-sm mb-2">Featured Project</div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-4" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <div className="bg-card border border-border rounded-lg p-6 mb-6">
                  {index === 0 ? (
                    <div className="text-muted-foreground leading-relaxed" data-testid={`text-project-description-${index}`}>
                      <p className="mb-3">Designed and developed a full-featured inventory management system to track products, stock levels, and transaction history.</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Built using Java and PostgreSQL with OOP principles for scalable architecture</li>
                        <li>• Developed responsive UI with React.js, HTML, CSS, and JavaScript</li>
                        <li>• Implemented CRUD operations, real-time stock updates, and user authentication</li>
                        <li>• Ensured data integrity through validation and database constraints</li>
                        <li>• Optimized query performance using SQL joins and stored procedures</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="text-muted-foreground leading-relaxed" data-testid={`text-project-description-${index}`}>
                      <p className="mb-3">Designed and developed a full-stack fitness tracking application to manage workouts, exercises, and progress history.</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Built backend using Java, Spring Boot, and MySQL with OOP and REST API principles</li>
                        <li>• Created interactive frontend with React.js for workout logging and progress visualization</li>
                        <li>• Implemented user authentication (JWT), workout plan creation, and exercise tracking</li>
                        <li>• Ensured data consistency and security through validation and Spring Security</li>
                        <li>• Developed progress analytics for sets, reps, weights, and duration tracking</li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground" data-testid={`tech-${index}-${techIndex}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" asChild data-testid={`link-github-${index}`}>
                    <a href={project.github} className="text-foreground hover:text-secondary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild data-testid={`link-demo-${index}`}>
                    <a href={project.demo} className="text-foreground hover:text-secondary transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Notable Projects - Hidden since array is empty */}
        {otherProjects.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-primary-foreground mb-8 text-center" data-testid="text-other-projects-title">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 card-hover" data-testid={`other-project-${index}`}>
                  <div className="flex items-center justify-between mb-4">
                    <Folder className="text-secondary text-2xl" />
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" asChild data-testid={`link-other-github-${index}`}>
                        <a href={project.github} className="text-foreground hover:text-secondary transition-colors">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      {project.demo && (
                        <Button variant="ghost" size="sm" asChild data-testid={`link-other-demo-${index}`}>
                          <a href={project.demo} className="text-foreground hover:text-secondary transition-colors">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary-foreground mb-3" data-testid={`text-other-title-${index}`}>
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed" data-testid={`text-other-description-${index}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={tech} className="text-xs font-mono text-muted-foreground" data-testid={`other-tech-${index}-${techIndex}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
