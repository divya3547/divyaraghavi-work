import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitBranch, Zap, Heart } from "lucide-react";
import paymentTrackerImage from "@/assets/project-payment-tracker.jpg";
import telehealthImage from "@/assets/project-telehealth.jpg";
const projects = [{
  title: "Real-Time Cross-Border Payment Tracker",
  emoji: "🚀",
  description: "Enterprise-grade payment tracking system with real-time monitoring and compliance reporting for international transactions.",
  image: paymentTrackerImage,
  problem: "Financial institutions needed real-time visibility into cross-border payments with regulatory compliance and fraud detection.",
  techStack: ["Spring Boot", "Kafka", "AWS", "Angular", "PostgreSQL", "Redis"],
  keyFeatures: ["Real-time payment status tracking across multiple corridors", "Automated compliance reporting for PSD2 and AML regulations", "Event-driven architecture with Kafka for stream processing", "Multi-tenant architecture supporting multiple financial institutions", "Advanced fraud detection with machine learning integration"],
  achievements: ["Processed 1M+ transactions daily with 99.9% uptime", "Reduced compliance reporting time by 85%", "Improved payment visibility for 500+ banking partners"]
}, {
  title: "Intelligent Telehealth Recommendation Engine",
  emoji: "🩺",
  description: "AI-powered healthcare platform providing personalized treatment recommendations and virtual consultation management.",
  image: telehealthImage,
  problem: "Healthcare providers needed intelligent patient care recommendations while ensuring HIPAA compliance and data security.",
  techStack: ["React", "Azure Cognitive Services", "Node.js", "MongoDB", "Twilio", "Docker"],
  keyFeatures: ["AI-driven patient diagnosis and treatment recommendations", "Secure video consultation platform with Twilio integration", "HIPAA-compliant patient data management system", "Real-time health monitoring dashboard for providers", "Automated appointment scheduling and reminder system"],
  achievements: ["Served 10,000+ patients across multiple healthcare networks", "Improved diagnosis accuracy by 30% with AI recommendations", "Achieved 99.9% data security compliance rating"]
}];
const Portfolio = () => {
  return <section id="portfolio" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Professional Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade applications demonstrating expertise in modern technologies, 
              industry compliance, and scalable architecture design.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => <Card key={index} className="border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Project Visual */}
                    <div className={`relative overflow-hidden bg-muted/30 p-8 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="text-center">
                        <span className="text-8xl mb-4 block">{project.emoji}</span>
                        <div className="text-sm text-muted-foreground font-medium">
                          Enterprise Project
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Problem Statement */}
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <Zap className="w-5 h-5 text-accent mr-3" />
                          <h4 className="font-semibold text-foreground">Challenge Addressed</h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed pl-8">
                          {project.problem}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <GitBranch className="w-5 h-5 text-primary mr-3" />
                          <h4 className="font-semibold text-foreground">Technology Stack</h4>
                        </div>
                        <div className="flex flex-wrap gap-2 pl-8">
                          {project.techStack.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20">
                              {tech}
                            </Badge>)}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                        <ul className="space-y-3 pl-4">
                          {project.keyFeatures.slice(0, 3).map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground leading-relaxed">{feature}</span>
                            </li>)}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <Heart className="w-5 h-5 text-accent mr-3" />
                          <h4 className="font-semibold text-foreground">Impact & Results</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-3 pl-8">
                          {project.achievements.map((achievement, achievementIndex) => <div key={achievementIndex} className="bg-muted/40 border border-border/30 p-4 rounded-lg">
                              <span className="text-foreground font-medium">{achievement}</span>
                            </div>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Additional Projects CTA */}
          <div className="text-center mt-16">
            <Card className="bg-card border border-border/50 shadow-lg">
              <CardContent className="p-12">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Interested in More Details?
                </h3>
                <p className="text-muted-foreground mb-6">
                  These projects represent a fraction of my portfolio. Let's discuss how similar solutions 
                  can address your specific business challenges.
                </p>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View More Projects
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Portfolio;