import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Cloud, Database, MessageSquare, Settings, Shield, TestTube } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Frameworks",
    icon: Code,
    skills: ["Java", "Spring Boot", "Hibernate", "JPA", "REST APIs", "Microservices"],
    color: "primary"
  },
  {
    title: "Frontend Technologies",
    icon: Globe,
    skills: ["Angular (10-15)", "React.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    color: "accent"
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Azure", "GCP"],
    color: "primary"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "Oracle", "MongoDB", "MySQL", "Redis"],
    color: "accent"
  },
  {
    title: "Messaging/Streaming",
    icon: MessageSquare,
    skills: ["Kafka", "RabbitMQ"],
    color: "primary"
  },
  {
    title: "DevOps & CI/CD",
    icon: Settings,
    skills: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "Docker", "Kubernetes", "Terraform"],
    color: "accent"
  },
  {
    title: "Testing & Quality",
    icon: TestTube,
    skills: ["JUnit", "Mockito", "Selenium", "Postman"],
    color: "primary"
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    skills: ["Spring Security", "OAuth2.0", "JWT", "GDPR", "HIPAA", "PSD2"],
    color: "accent"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
              Comprehensive expertise across the full technology stack with focus on enterprise-grade solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              
              return (
                <Card 
                  key={index} 
                  className="border-none shadow-primary hover:shadow-accent transition-all duration-300 hover:-translate-y-2 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-4 rounded-full ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 text-sm rounded-full ${
                            category.color === 'primary' 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-accent/10 text-accent'
                          } hover:scale-105 transition-transform duration-200`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Expertise Highlight */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-hero text-white border-none shadow-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Core Expertise</h3>
                <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Specialized in building enterprise-grade applications with strong focus on security, compliance, 
                  and scalability. Experienced in financial services, healthcare, and insurance industry standards 
                  including GDPR, HIPAA, and PSD2 compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;