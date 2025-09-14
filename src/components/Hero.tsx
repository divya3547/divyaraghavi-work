import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, Code, Zap } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";
import heroBackground from "@/assets/hero-background.jpg";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>
      
      {/* Soft Accent Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/5 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/5 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-2/3 right-2/3 w-40 h-40 bg-secondary/15 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="mb-16 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-44 h-44 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-soft">
                <img src={profileImage} alt="Divya Raghavi Medisetti - Java Full Stack Developer" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-soft">
                <div className="w-3 h-3 bg-accent-foreground rounded-full" />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-card/70 backdrop-blur-sm rounded-full border border-primary/20 shadow-soft animate-fade-in">
              <div className="w-2.5 h-2.5 bg-accent rounded-full mr-3 animate-pulse" />
              <span className="text-sm font-medium text-foreground/90">Available for new opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 animate-fade-in delay-200 leading-tight">
              <span className="text-foreground block mb-2">Divya Raghavi</span>
              <span className="text-foreground/80 text-3xl xl:text-5xl md:text-4xl block">Medisetti</span>
            </h1>
            
            {/* Title with Modern Styling */}
            <div className="relative mb-10 animate-fade-in delay-300">
              <h2 className="text-xl font-semibold text-primary mb-4 tracking-wide">Java Full Stack Developer</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-primary rounded-full" />
                <div className="w-3 h-3 bg-primary/30 rounded-full" />
                <div className="w-8 h-0.5 bg-gradient-primary rounded-full" />
              </div>
            </div>
            
            {/* Enhanced Tagline */}
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed animate-fade-in delay-500 text-foreground/80">
              Crafting <span className="font-semibold text-primary">scalable</span>, 
              <span className="text-accent font-semibold"> secure</span>, and 
              <span className="text-muted-foreground font-semibold"> compliant</span> software solutions 
              for enterprises across banking, healthcare, and insurance domains
            </p>
            
            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in delay-700">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-4 text-base rounded-2xl shadow-primary transition-all duration-300 hover:shadow-xl hover:scale-105" onClick={() => scrollToSection('portfolio')}>
                View Portfolio 
                <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="group border-2 border-primary/30 bg-card/60 backdrop-blur-sm text-foreground hover:bg-primary/5 hover:border-primary/50 font-medium px-8 py-4 text-base rounded-2xl transition-all duration-300 hover:scale-105 shadow-soft" onClick={() => scrollToSection('contact')}>
                Get In Touch 
                <Sparkles className="ml-3 w-4 h-4 transition-transform group-hover:rotate-12" />
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-fade-in delay-1000">
              <div className="bg-card/70 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 shadow-soft hover:shadow-primary transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-primary mb-3">5+</div>
                <div className="text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div className="bg-card/70 backdrop-blur-sm rounded-3xl p-8 border border-accent/20 shadow-soft hover:shadow-accent transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-accent mb-3">3</div>
                <div className="text-muted-foreground font-medium">Industry Domains</div>
              </div>
              <div className="bg-card/70 backdrop-blur-sm rounded-3xl p-8 border border-secondary/30 shadow-soft hover:shadow-soft transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-primary mb-3">15+</div>
                <div className="text-muted-foreground font-medium">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2" />
        </div>
      </div>
    </section>;
};
export default Hero;