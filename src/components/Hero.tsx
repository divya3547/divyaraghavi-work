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
      {/* Enhanced Background Pattern with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--accent)/0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--secondary)/0.03),transparent_50%)]" />
      </div>
      
      {/* Dynamic Floating Elements with animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/5 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/5 w-60 h-60 bg-accent/12 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-2/3 right-2/3 w-40 h-40 bg-secondary/15 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}} />
        <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-primary/8 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-lg animate-float" style={{animationDelay: '3s'}} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Profile Image with glassmorphism */}
          <div className="mb-20 flex justify-center animate-slide-up">
            <div className="relative group">
              <div className="w-52 h-52 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-primary bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm animate-glow">
                <img src={profileImage} alt="Divya Raghavi Medisetti - Java Full Stack Developer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-accent animate-pulse">
                <div className="w-4 h-4 bg-accent-foreground rounded-full animate-ping" />
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-accent/10 scale-125 animate-pulse" style={{animationDelay: '1s'}} />
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6">
            {/* Enhanced Status Badge with glassmorphism */}
            <div className="inline-flex items-center px-8 py-4 bg-card/80 backdrop-blur-md rounded-full border border-primary/30 shadow-primary animate-slide-up group hover:shadow-accent transition-all duration-300">
              <div className="w-3 h-3 bg-gradient-to-r from-accent to-accent/80 rounded-full mr-4 animate-pulse shadow-accent" />
              <span className="text-sm font-semibold text-foreground/90 tracking-wide">Available for new opportunities</span>
              <div className="ml-2 w-2 h-2 bg-accent/50 rounded-full animate-ping" />
            </div>

            {/* Enhanced Name with gradient text */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-8 animate-slide-up leading-tight" style={{animationDelay: '0.2s'}}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground block mb-2">Divya Raghavi</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground/80 via-accent to-foreground/80 text-4xl xl:text-6xl md:text-5xl block">Medisetti</span>
            </h1>
            
            {/* Enhanced Title with animated elements */}
            <div className="relative mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-6 tracking-wide">Java Full Stack Developer</h2>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-1 bg-gradient-primary rounded-full animate-pulse" />
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                <div className="w-12 h-1 bg-gradient-primary rounded-full animate-pulse" />
              </div>
            </div>
            
            {/* Enhanced Tagline with better typography */}
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed animate-slide-up text-foreground/85" style={{animationDelay: '0.6s'}}>
              Crafting <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">scalable</span>, 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80 font-bold"> secure</span>, and 
              <span className="text-muted-foreground font-bold"> compliant</span> software solutions 
              for enterprises across <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-semibold">banking, healthcare, and insurance</span> domains
            </p>
            
            {/* Enhanced CTA Buttons with modern effects */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.8s'}}>
              <Button size="lg" className="group relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold px-10 py-5 text-lg rounded-2xl shadow-primary transition-all duration-500 hover:shadow-xl hover:scale-110 overflow-hidden" onClick={() => scrollToSection('portfolio')}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center">
                  View Portfolio 
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="group relative border-2 border-primary/40 bg-card/80 backdrop-blur-md text-foreground hover:bg-primary/10 hover:border-primary/60 font-semibold px-10 py-5 text-lg rounded-2xl transition-all duration-500 hover:scale-110 shadow-soft hover:shadow-primary overflow-hidden" onClick={() => scrollToSection('contact')}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center">
                  Get In Touch 
                  <Sparkles className="ml-3 w-5 h-5 transition-transform group-hover:rotate-180" />
                </span>
              </Button>
            </div>

            {/* Enhanced Stats Cards with glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 animate-slide-up" style={{animationDelay: '1s'}}>
              <div className="relative group bg-card/80 backdrop-blur-md rounded-3xl p-10 border border-primary/30 shadow-primary hover:shadow-xl transition-all duration-500 hover:scale-110 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 mb-4">5+</div>
                <div className="relative text-muted-foreground font-semibold tracking-wide">Years Experience</div>
              </div>
              <div className="relative group bg-card/80 backdrop-blur-md rounded-3xl p-10 border border-accent/30 shadow-accent hover:shadow-xl transition-all duration-500 hover:scale-110 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80 mb-4">3</div>
                <div className="relative text-muted-foreground font-semibold tracking-wide">Industry Domains</div>
              </div>
              <div className="relative group bg-card/80 backdrop-blur-md rounded-3xl p-10 border border-secondary/40 shadow-soft hover:shadow-primary transition-all duration-500 hover:scale-110 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">15+</div>
                <div className="relative text-muted-foreground font-semibold tracking-wide">Technologies</div>
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