import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, Code, Zap } from "lucide-react";
import profileImage from "@/assets/profile-pic.png";
import heroBackground from "@/assets/hero-background.jpg";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/20 pt-16">
      {/* Simplified professional background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--accent)/0.04),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Professional Profile Image */}
          <div className="mb-12 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Divya Raghavi Medisetti - Java Full Stack Developer" 
                  className="w-full h-full object-cover"
                  key="profile-image"
                />
              </div>
              
              {/* Professional status indicator */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                <div className="w-3 h-3 bg-background rounded-full" />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-8">
            {/* Professional Status Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-sm animate-fade-in">
              <div className="w-3 h-3 bg-accent rounded-full mr-3" />
              <span className="text-sm font-medium text-foreground">Available for new opportunities</span>
            </div>

            {/* Professional Name */}
            <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-2">
                Divya Raghavi Medisetti
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
            </div>
            
            {/* Professional Title */}
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">
                Senior Java Full Stack Developer
              </h2>
            </div>
            
            {/* Professional Description */}
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-muted-foreground animate-fade-in" style={{animationDelay: '0.3s'}}>
              Delivering enterprise-grade software solutions for <span className="font-semibold text-foreground">banking, healthcare, and insurance</span> industries 
              with expertise in scalable architectures, regulatory compliance, and modern development practices.
            </p>
            
            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-3 text-base transition-all duration-300 hover:shadow-lg" 
                onClick={() => scrollToSection('portfolio')}
              >
                View Portfolio 
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/40 text-foreground hover:bg-primary/5 font-medium px-8 py-3 text-base transition-all duration-300" 
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch 
                <Sparkles className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:bg-card/70 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground font-medium">Years Experience</div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:bg-card/70 transition-all duration-300">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="text-muted-foreground font-medium">Industry Domains</div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:bg-card/70 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground font-medium">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{animationDelay: '0.6s'}}>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default Hero;