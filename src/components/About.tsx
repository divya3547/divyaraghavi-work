import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Professional Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced developer specializing in enterprise solutions with a focus on quality, security, and scalability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Professional Background */}
            <Card className="border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl mr-4">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Professional Background</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Java Full Stack Developer with 5+ years of experience delivering enterprise solutions across banking, healthcare, 
                  and insurance sectors. Specialized in Spring Boot, Angular/React, microservices architecture, and cloud platforms 
                  (AWS, Azure, GCP). Proven track record of building scalable, secure, and compliant applications that meet industry 
                  standards including HIPAA, GDPR, and PSD2.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-accent/10 rounded-xl mr-4">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Master of Computer Science</h4>
                    <p className="text-primary font-medium mb-1">Fitchburg State University</p>
                    <p className="text-sm text-muted-foreground">January 2023 – May 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-8 bg-card border border-border/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary mb-3">5+</div>
              <div className="text-muted-foreground font-medium">Years of Experience</div>
            </div>
            <div className="text-center p-8 bg-card border border-border/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-accent mb-3">3</div>
              <div className="text-muted-foreground font-medium">Industry Domains</div>
            </div>
            <div className="text-center p-8 bg-card border border-border/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary mb-3">15+</div>
              <div className="text-muted-foreground font-medium">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;