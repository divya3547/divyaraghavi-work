import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Bio */}
            <Card className="border-none shadow-primary hover:shadow-accent transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Professional Background</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I am a Java Full Stack Developer with over 5 years of experience in banking, healthcare, and insurance domains. 
                  Skilled in Java, Spring Boot, Angular/React, and microservices with expertise in cloud platforms (AWS, Azure, GCP) 
                  and event-driven systems (Kafka). Proven ability to deliver scalable, secure, and compliant solutions aligned with 
                  HIPAA, GDPR, and PSD2 standards.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="border-none shadow-primary hover:shadow-accent transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg mr-4">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-semibold text-foreground mb-2">Masters in Computer Science</h4>
                    <p className="text-lg text-primary font-medium mb-1">Fitchburg State University</p>
                    <p className="text-muted-foreground">January 2023 – May 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border hover:shadow-primary transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border hover:shadow-primary transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">3</div>
              <div className="text-muted-foreground">Industry Domains</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border hover:shadow-primary transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;