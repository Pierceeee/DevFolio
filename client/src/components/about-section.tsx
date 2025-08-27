import { ChevronRight } from "lucide-react";

export default function AboutSection() {
  return (
    <>
      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4" data-testid="text-about-title">
              About Me
            </h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto"></div>
          </div>

          <div className="slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="text-about-intro">
              Hello! I'm Allen, a passionate fresh graduate and full-stack developer eager to create impactful digital solutions. 
              My journey in software development has been focused on building robust applications with modern technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="text-about-description">
              I specialize in full-stack development with experience in both frontend and backend technologies. From building 
              responsive user interfaces to designing efficient APIs and data processing pipelines, I enjoy tackling complex problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-current">
              Recently completed an internship where I worked on automated financial data processing 
              systems using Python, Django, and AI agents for XBRL compliance and validation.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4" data-testid="text-technologies-title">
              Technologies
            </h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto"></div>
          </div>

          <div className="slide-in-left">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-4">Languages</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="text-secondary text-xs mr-3" size={12} />
                    <span className="text-sm font-mono">Java</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="text-secondary text-xs mr-3" size={12} />
                    <span className="text-sm font-mono">Python</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="text-secondary text-xs mr-3" size={12} />
                    <span className="text-sm font-mono">JavaScript</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="text-secondary text-xs mr-3" size={12} />
                    <span className="text-sm font-mono">TypeScript</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-4">Frameworks</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="text-secondary text-xs mr-3" size={12} />
                    <span className="text-sm font-mono">React.js</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="text-secondary text-xs mr-3" size={12} />
                    <span className="text-sm font-mono">Spring Boot</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="text-secondary text-xs mr-3" size={12} />
                    <span className="text-sm font-mono">Django</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="text-secondary text-xs mr-3" size={12} />
                    <span className="text-sm font-mono">Next.js</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-4">Databases</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="text-secondary text-xs mr-3" size={12} />
                    <span className="text-sm font-mono">PostgreSQL</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="text-secondary text-xs mr-3" size={12} />
                    <span className="text-sm font-mono">MySQL</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-4">Tools</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ChevronRight className="text-secondary text-xs mr-3" size={12} />
                    <span className="text-sm font-mono">Git & GitHub</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="text-secondary text-xs mr-3" size={12} />
                    <span className="text-sm font-mono">AWS</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="text-secondary text-xs mr-3" size={12} />
                    <span className="text-sm font-mono">REST APIs</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="text-secondary text-xs mr-3" size={12} />
                    <span className="text-sm font-mono">Postman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4" data-testid="text-experience-title">
              Experience
            </h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto"></div>
          </div>

          <div className="slide-in-right">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="border-l-2 border-secondary pl-6" data-testid="experience-0">
                <div className="font-mono text-sm text-secondary mb-2">
                  2024
                </div>
                <div className="text-2xl font-bold text-primary-foreground mb-2">On-the-Job Training (OJT)</div>
                <ul className="text-muted-foreground space-y-3 mt-4">
                  <li className="flex items-start">
                    <ChevronRight className="text-secondary text-xs mr-3 mt-1" size={12} />
                    <span>Built automated pipeline for financial data extraction and XBRL conversion</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-secondary text-xs mr-3 mt-1" size={12} />
                    <span>Developed backend components using Python and Django with PostgreSQL</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-secondary text-xs mr-3 mt-1" size={12} />
                    <span>Implemented AI agents for data validation and compliance checks</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-secondary text-xs mr-3 mt-1" size={12} />
                    <span>Designed linear validation workflows for PDF to XBRL processing</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-secondary text-xs mr-3 mt-1" size={12} />
                    <span>Utilized regular expressions and PDF parsing for document processing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
