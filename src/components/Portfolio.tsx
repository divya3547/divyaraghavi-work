import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitBranch, Zap, Heart } from "lucide-react";
import paymentTrackerImage from "@/assets/project-payment-tracker.jpg";
import telehealthImage from "@/assets/project-telehealth.jpg";

const projects = [
  {
    title: "Real-Time Cross-Border Payment Tracker",
    emoji: "🚀",
    description: "Enterprise-grade payment tracking system with real-time monitoring and compliance reporting for international transactions.",
    image: paymentTrackerImage,
    problem: "Financial institutions needed real-time visibility into cross-border payments with regulatory compliance and fraud detection.",
    techStack: ["Spring Boot", "Kafka", "AWS", "Angular", "PostgreSQL", "Redis"],
    keyFeatures: [
      "Real-time payment status tracking across multiple corridors",
      "Automated compliance reporting for PSD2 and AML regulations",
      "Event-driven architecture with Kafka for stream processing",
      "Multi-tenant architecture supporting multiple financial institutions",
      "Advanced fraud detection with machine learning integration"
    ],
    achievements: [
      "Processed 1M+ transactions daily with 99.9% uptime",
      "Reduced compliance reporting time by 85%",
      "Improved payment visibility for 500+ banking partners"
    ]
  },
  {
    title: "Intelligent Telehealth Recommendation Engine",
    emoji: "🩺",
    description: "AI-powered healthcare platform providing personalized treatment recommendations and virtual consultation management.",
    image: telehealthImage,
    problem: "Healthcare providers needed intelligent patient care recommendations while ensuring HIPAA compliance and data security.",
    techStack: ["React", "Azure Cognitive Services", "Node.js", "MongoDB", "Twilio", "Docker"],
    keyFeatures: [
      "AI-driven patient diagnosis and treatment recommendations",
      "Secure video consultation platform with Twilio integration",
      "HIPAA-compliant patient data management system",
      "Real-time health monitoring dashboard for providers",
      "Automated appointment scheduling and reminder system"
    ],
    achievements: [
      "Served 10,000+ patients across multiple healthcare networks",
      "Improved diagnosis accuracy by 30% with AI recommendations",
      "Achieved 99.9% data security compliance rating"
    ]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
              Showcase of enterprise-grade applications built with modern technologies and industry best practices
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border-none shadow-primary hover:shadow-accent transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Project Image */}
                    <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="text-4xl">{project.emoji}</span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Problem Statement */}
                      <div className="mb-6">
                        <div className="flex items-center mb-3">
                          <Zap className="w-5 h-5 text-accent mr-2" />
                          <h4 className="font-semibold text-foreground">Problem Solved</h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <div className="flex items-center mb-3">
                          <GitBranch className="w-5 h-5 text-primary mr-2" />
                          <h4 className="font-semibold text-foreground">Tech Stack</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="secondary" 
                              className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project.keyFeatures.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div className="mb-8">
                        <div className="flex items-center mb-3">
                          <Heart className="w-5 h-5 text-accent mr-2" />
                          <h4 className="font-semibold text-foreground">Impact & Results</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          {project.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="bg-muted/50 p-3 rounded-lg">
                              <span className="text-foreground text-sm font-medium">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button 
                        className="bg-gradient-hero text-white shadow-primary hover:shadow-accent"
                        onClick={() => {
                          const element = document.getElementById('contact');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Learn More <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Projects CTA */}
          <div className="text-center mt-16">
            <Card className="bg-card border-none shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Interested in More Projects?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I have worked on numerous other projects across different domains. 
                  Let's discuss how my experience can benefit your next project.
                </p>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View All Projects <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;