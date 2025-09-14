import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, Code, Zap, Star, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile-pic.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Hero Profile Section */}
          <div className="mb-16 flex justify-center slide-up">
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 pulse-glow" />
              
              {/* Profile image container */}
              <div className="relative w-56 h-56 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Divya Raghavi Medisetti - Java Full Stack Developer" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  key="profile-image"
                />
                
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10" />
              </div>
              
              {/* Status indicator with animation */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 glass-effect rounded-full flex items-center justify-center shadow-lg border border-primary/20">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <Star className="w-4 h-4 text-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center px-8 py-4 glass-effect rounded-full shadow-lg animate-fade-in mb-8">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
            <span className="text-sm font-semibold text-foreground">Available for new opportunities</span>
            <Sparkles className="ml-3 w-4 h-4 text-accent" />
          </div>

          {/* Main heading with gradient text */}
          <div className="slide-up space-y-6" style={{animationDelay: '0.2s'}}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent glow-text">
                Divya Raghavi
              </span>
              <br />
              <span className="text-foreground">Medisetti</span>
            </h1>
            
            {/* Animated underline */}
            <div className="flex justify-center">
              <div className="w-32 h-2 bg-gradient-to-r from-primary to-accent rounded-full shadow-glow" />
            </div>
          </div>
          
          {/* Professional title with modern styling */}
          <div className="slide-up mt-8" style={{animationDelay: '0.4s'}}>
            <div className="inline-flex items-center px-6 py-3 glass-effect rounded-full">
              <Code className="w-5 h-5 text-primary mr-3" />
              <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Senior Java Full Stack Developer
              </h2>
              <Zap className="w-5 h-5 text-accent ml-3" />
            </div>
          </div>
          
          {/* Enhanced description */}
          <p className="text-lg md:text-xl max-w-4xl mx-auto mt-8 leading-relaxed text-muted-foreground slide-up" style={{animationDelay: '0.6s'}}>
            Crafting <span className="font-bold text-primary">enterprise-grade software solutions</span> for 
            <span className="font-semibold text-foreground"> banking, healthcare, and insurance</span> industries. 
            Specializing in <span className="font-semibold text-accent">scalable architectures</span>, regulatory compliance, 
            and cutting-edge development practices that drive business success.
          </p>
          
          {/* Modern CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 slide-up" style={{animationDelay: '0.8s'}}>
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold px-10 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
              onClick={() => scrollToSection('portfolio')}
            >
              <span className="relative z-10 flex items-center">
                View Portfolio 
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="group glass-effect border-primary/30 text-foreground hover:bg-primary/5 font-semibold px-10 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg" 
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch 
              <Sparkles className="ml-2 w-5 h-5 transition-transform group-hover:rotate-12" />
            </Button>
          </div>

          {/* Enhanced stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 slide-up" style={{animationDelay: '1s'}}>
            <div className="floating-card glass-effect rounded-2xl p-8 text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-muted-foreground font-semibold text-lg">Years Experience</div>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full" />
            </div>
            
            <div className="floating-card glass-effect rounded-2xl p-8 text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="text-muted-foreground font-semibold text-lg">Industry Domains</div>
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-3 rounded-full" />
            </div>
            
            <div className="floating-card glass-effect rounded-2xl p-8 text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-muted-foreground font-semibold text-lg">Technologies</div>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 slide-up" style={{animationDelay: '1.2s'}}>
        <div className="flex flex-col items-center space-y-2 group cursor-pointer" onClick={() => scrollToSection('about')}>
          <div className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            Scroll to explore
          </div>
          <div className="glass-effect w-8 h-12 rounded-full flex justify-center items-end pb-2 group-hover:scale-110 transition-transform duration-300">
            <ChevronDown className="w-4 h-4 text-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;