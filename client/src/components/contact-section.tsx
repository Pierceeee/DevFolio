import { useState } from "react";
import { Mail, Phone, MapPin, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent!",
        description: data.message,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
      console.error("Contact form error:", error);
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields.",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  // Resume download handled via anchor tag with `download` attribute below

  const socialLinks = [
    { icon: Github, href: "https://github.com/Pierceeee", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/allen-vincent-lacoste-4b7289367/", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <div className="w-20 h-0.5 bg-secondary mx-auto"></div>
        </div>

        <div className="mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8" data-testid="text-contact-intro">
            I'm currently looking for new opportunities and exciting projects. Whether you have a question, 
            want to collaborate, or just want to say hi, I'll do my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-primary-foreground mb-6" data-testid="text-connect-title">
              Let's Connect
            </h3>
            <div className="space-y-4">
              <div className="flex items-center" data-testid="contact-email">
                <Mail className="text-secondary mr-4" size={20} />
                <span className="text-muted-foreground">allenvynz7@gmail.com</span>
              </div>
              <div className="flex items-center" data-testid="contact-phone">
                <Phone className="text-secondary mr-4" size={20} />
                <span className="text-muted-foreground">+63 9949670887</span>
              </div>
              <div className="flex items-center" data-testid="contact-location">
                <MapPin className="text-secondary mr-4" size={20} />
                <span className="text-muted-foreground">Quezon City</span>
              </div>
            </div>

            <div className="flex space-x-6 mt-8">
              {socialLinks.map((social, index) => (
                <Button key={social.label} variant="ghost" size="sm" asChild data-testid={`link-social-${index}`}>
                  <a href={social.href} className="text-foreground hover:text-secondary transition-colors">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-input border-border text-foreground placeholder-muted-foreground focus:ring-ring"
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-input border-border text-foreground placeholder-muted-foreground focus:ring-ring"
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-input border-border text-foreground placeholder-muted-foreground focus:ring-ring"
                  required
                  data-testid="input-subject"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-input border-border text-foreground placeholder-muted-foreground focus:ring-ring resize-none"
                  required
                  data-testid="textarea-message"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                disabled={contactMutation.isPending}
                data-testid="button-send-message"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            data-testid="button-download-resume"
            aria-label="Download Resume PDF"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
