import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Layers, ArrowRight } from "lucide-react";
const services = [{
  title: "Java Full Stack Development",
  description: "Building enterprise-grade applications, end-to-end",
  icon: Code2,
  features: ["Complete application architecture design", "Backend API development with Spring Boot", "Frontend development with Angular/React", "Database design and optimization", "Microservices architecture", "RESTful API integration"],
  technologies: ["Java", "Spring Boot", "Angular", "React", "PostgreSQL", "MongoDB"],
  gradient: "primary"
}, {
  title: "Software Engineering",
  description: "Secure, scalable, cloud-native solutions",
  icon: Layers,
  features: ["Cloud-native application development", "Security implementation and compliance", "Performance optimization and scaling", "DevOps and CI/CD pipeline setup", "Code review and quality assurance", "Technical architecture consulting"],
  technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Terraform"],
  gradient: "accent"
}];
const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="text-primary">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full text-black"></div>
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
              Delivering comprehensive software solutions from concept to deployment with enterprise-grade quality
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
            const IconComponent = service.icon;
            return <Card key={index} className="border-none shadow-primary hover:shadow-accent transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header with gradient */}
                    <div className={`p-8 ${service.gradient === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-accent'} text-white`}>
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-white/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                          <p className="text-white/90">{service.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h4 className="text-lg font-semibold text-foreground mb-4">What I Offer:</h4>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${service.gradient === 'primary' ? 'bg-primary' : 'bg-accent'}`}></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>)}
                      </ul>

                      <div className="mb-6">
                        <h5 className="font-semibold text-foreground mb-3">Key Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => <span key={techIndex} className={`px-3 py-1 text-sm rounded-full ${service.gradient === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                              {tech}
                            </span>)}
                        </div>
                      </div>

                      <Button onClick={scrollToContact} className={`w-full ${service.gradient === 'primary' ? 'bg-primary hover:bg-primary/90' : 'bg-accent hover:bg-accent/90 text-white'} group-hover:scale-105 transition-all duration-300`}>
                        Get Started <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-muted/50 border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let's discuss your project requirements and how I can help bring your vision to life 
                  with robust, scalable software solutions.
                </p>
                <Button size="lg" onClick={scrollToContact} className="bg-gradient-hero shadow-primary hover:shadow-accent text-white bg-indigo-600 hover:bg-indigo-500">
                  Start a Conversation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;