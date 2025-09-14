import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, Code, Zap } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>
      
      {/* Dynamic Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-accent opacity-15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500" />
        
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-20 opacity-30 animate-bounce delay-300">
          <Code className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-40 right-32 opacity-30 animate-bounce delay-700">
          <Zap className="w-6 h-6 text-accent" />
        </div>
        <div className="absolute bottom-32 left-32 opacity-30 animate-bounce delay-500">
          <Sparkles className="w-7 h-7 text-primary" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image with Modern Frame */}
          <div className="mb-12 flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-background/20 backdrop-blur-sm shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Divya Raghavi Medisetti - Java Full Stack Developer" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6">
            {/* Modern Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-foreground/10 backdrop-blur-sm rounded-full border border-foreground/20 animate-fade-in">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2" />
              <span className="text-sm font-medium text-foreground">Available for new opportunities</span>
            </div>

            {/* Name with Gradient */}
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold mb-6 animate-fade-in delay-200">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Divya Raghavi
              </span>
              <br />
              <span className="text-foreground">Medisetti</span>
            </h1>
            
            {/* Title with Modern Styling */}
            <div className="relative mb-8 animate-fade-in delay-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-4">
                Java Full Stack Developer & Software Engineer
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            </div>
            
            {/* Enhanced Tagline */}
            <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 text-foreground/80 leading-relaxed animate-fade-in delay-500">
              Crafting <span className="text-primary font-semibold">scalable</span>, 
              <span className="text-accent font-semibold"> secure</span>, and 
              <span className="text-primary font-semibold"> compliant</span> software solutions 
              for enterprises across banking, healthcare, and insurance domains
            </p>
            
            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-700">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg rounded-2xl shadow-primary transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onClick={() => scrollToSection('portfolio')}
              >
                View Portfolio 
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-foreground/20 bg-background/50 backdrop-blur-sm text-foreground hover:bg-foreground/10 font-semibold px-10 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch 
                <Sparkles className="ml-3 w-5 h-5 transition-transform group-hover:rotate-12" />
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in delay-1000">
              <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-foreground/70">Years Experience</div>
              </div>
              <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="text-foreground/70">Industry Domains</div>
              </div>
              <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-foreground/70">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;