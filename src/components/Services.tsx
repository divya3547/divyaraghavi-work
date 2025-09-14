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
  return <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Professional Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My <span className="text-primary">Services</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software development services tailored for enterprise needs with focus on scalability and compliance.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
            const IconComponent = service.icon;
            return <Card key={index} className="border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                  <CardContent className="p-0">
                    {/* Professional Header */}
                    <div className={`p-8 ${service.gradient === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} border-b border-border/50`}>
                      <div className="flex items-center">
                        <div className={`p-4 ${service.gradient === 'primary' ? 'bg-primary/20' : 'bg-accent/20'} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-8 h-8 ${service.gradient === 'primary' ? 'text-primary' : 'text-accent'}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h4 className="text-lg font-semibold text-foreground mb-6">What I Deliver:</h4>
                      <ul className="space-y-4 mb-8">
                        {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${service.gradient === 'primary' ? 'bg-primary' : 'bg-accent'}`}></div>
                            <span className="text-muted-foreground leading-relaxed">{feature}</span>
                          </li>)}
                      </ul>

                      <div className="mb-8">
                        <h5 className="font-semibold text-foreground mb-4">Core Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => <span key={techIndex} className={`px-4 py-2 text-sm font-medium rounded-full border ${service.gradient === 'primary' ? 'bg-primary/5 text-primary border-primary/20' : 'bg-accent/5 text-accent border-accent/20'}`}>
                              {tech}
                            </span>)}
                        </div>
                      </div>

                      <Button 
                        onClick={scrollToContact} 
                        className={`w-full ${service.gradient === 'primary' ? 'bg-primary hover:bg-primary/90' : 'bg-accent hover:bg-accent/90'} text-white font-medium transition-all duration-300 group-hover:shadow-lg`}
                      >
                        Discuss Project <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-muted/30 border border-border/50 shadow-lg">
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Build Something Exceptional?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                  Let's collaborate to transform your vision into enterprise-grade software solutions 
                  that drive business growth and ensure regulatory compliance.
                </p>
                <Button 
                  size="lg" 
                  onClick={scrollToContact} 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Conversation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;