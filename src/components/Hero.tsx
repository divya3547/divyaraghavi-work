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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/98">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-5" />
      </div>
      
      {/* Minimal Accent Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="mb-12 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-foreground/10 shadow-lg">
                <img src={profileImage} alt="Divya Raghavi Medisetti - Java Full Stack Developer" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-foreground/5 rounded-full border border-foreground/10 animate-fade-in">
              <div className="w-2 h-2 bg-primary rounded-full mr-2" />
              <span className="text-sm font-medium text-foreground/80">Available for new opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold mb-6 animate-fade-in delay-200">
              <span className="text-foreground">Divya Raghavi</span>
              <br />
              <span className="text-foreground/90">Medisetti</span>
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
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg rounded-2xl shadow-primary transition-all duration-300 hover:shadow-2xl hover:scale-105" onClick={() => scrollToSection('portfolio')}>
                View Portfolio 
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="group border-2 border-foreground/20 bg-background/50 backdrop-blur-sm text-foreground hover:bg-foreground/10 font-semibold px-10 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105" onClick={() => scrollToSection('contact')}>
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2" />
        </div>
      </div>
    </section>;
};
export default Hero;