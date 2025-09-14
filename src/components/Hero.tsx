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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/40">
      {/* Dark accent sections */}
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-primary/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tl from-accent/8 to-transparent" />
      
      {/* Enhanced Background Pattern with mixed light/dark elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--card)),hsl(var(--muted)/0.5))] opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
      </div>
      
      {/* Dynamic Floating Elements with mixed light/dark tones */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/5 w-72 h-72 bg-gradient-to-br from-card to-accent/8 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-2/3 right-2/3 w-48 h-48 bg-gradient-to-br from-muted to-secondary/10 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}} />
        <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-gradient-to-br from-accent/12 to-transparent rounded-full blur-xl animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-primary/8 to-card rounded-full blur-lg animate-float" style={{animationDelay: '3s'}} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Profile Image with glassmorphism */}
          <div className="mb-20 flex justify-center animate-slide-up">
            <div className="relative group">
              {/* Dark background ring */}
              <div className="absolute inset-0 w-56 h-56 rounded-full bg-gradient-to-br from-muted/80 to-card border-2 border-primary/20 -translate-x-2 -translate-y-2" />
              
              <div className="relative w-52 h-52 rounded-full overflow-hidden ring-4 ring-primary/40 shadow-primary bg-gradient-to-br from-card to-primary/5 backdrop-blur-sm animate-glow">
                <img src={profileImage} alt="Divya Raghavi Medisetti - Java Full Stack Developer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Bright accent badge */}
              <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-br from-accent via-accent/90 to-primary rounded-full flex items-center justify-center shadow-accent border-4 border-background animate-pulse">
                <div className="w-5 h-5 bg-accent-foreground rounded-full animate-ping" />
              </div>
              
              {/* Mixed decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-muted/60 scale-125 animate-pulse" style={{animationDelay: '1s'}} />
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6">
            {/* Enhanced Status Badge with glassmorphism */}
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-card/90 to-muted/60 backdrop-blur-md rounded-full border-2 border-primary/40 shadow-primary animate-slide-up group hover:shadow-accent transition-all duration-300">
              <div className="w-4 h-4 bg-gradient-to-r from-accent via-accent/90 to-primary rounded-full mr-4 animate-pulse shadow-accent border border-background" />
              <span className="text-sm font-bold text-foreground tracking-wide">Available for new opportunities</span>
              <div className="ml-3 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-ping" />
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
              {/* Light card with dark accents */}
              <div className="relative group bg-gradient-to-br from-card to-background border-2 border-primary/40 rounded-3xl p-10 shadow-primary hover:shadow-xl transition-all duration-500 hover:scale-110 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-3xl" />
                <div className="relative text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent mb-4">5+</div>
                <div className="relative text-foreground/80 font-semibold tracking-wide">Years Experience</div>
              </div>
              
              {/* Dark card with bright accents */}
              <div className="relative group bg-gradient-to-br from-muted/60 to-card/80 border-2 border-accent/50 rounded-3xl p-10 shadow-accent hover:shadow-xl transition-all duration-500 hover:scale-110 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent/15 to-transparent rounded-tr-3xl" />
                <div className="relative text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/90 to-primary mb-4">3</div>
                <div className="relative text-foreground font-semibold tracking-wide">Industry Domains</div>
              </div>
              
              {/* Mixed light/dark card */}
              <div className="relative group bg-gradient-to-br from-background via-card to-muted/40 border-2 border-primary/30 rounded-3xl p-10 shadow-soft hover:shadow-primary transition-all duration-500 hover:scale-110 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-4">15+</div>
                <div className="relative text-foreground/90 font-semibold tracking-wide">Technologies</div>
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