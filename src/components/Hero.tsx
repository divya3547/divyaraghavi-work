import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/20 rounded-full blur-xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/30 rotate-45 rounded-lg blur-lg animate-bounce delay-300" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-primary">
                <img 
                  src={profileImage} 
                  alt="Divya Raghavi Medisetti" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 rounded-full bg-gradient-accent opacity-50 blur-md -z-10 animate-pulse" />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Divya Raghavi <span className="text-accent">Medisetti</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-white/90 animate-fade-in delay-300">
            Java Full Stack Developer | Software Engineer
          </h2>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/80 leading-relaxed animate-fade-in delay-500">
            Building scalable, secure, and compliant software solutions for enterprises across banking, healthcare, and insurance domains
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-accent"
              onClick={() => scrollToSection('portfolio')}
            >
              View Portfolio <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-4 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me <Download className="ml-2 w-5 h-5" />
            </Button>
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