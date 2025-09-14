import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
const contactInfo = [{
  icon: Mail,
  label: "Email",
  value: "divyaraghavi1999@gmail.com",
  href: "mailto:divyaraghavi1999@gmail.com"
}, {
  icon: Phone,
  label: "Phone",
  value: "+1 (603) 884-9494",
  href: "tel:+16038849494"
}, {
  icon: Linkedin,
  label: "LinkedIn",
  value: "linkedin.com/in/divyaraghavim",
  href: "https://linkedin.com/in/divyaraghavim"
}, {
  icon: Github,
  label: "GitHub",
  value: "github.com/divya3547",
  href: "https://github.com/divya3547"
}];
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon."
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  return <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Professional Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your project? Let's explore how we can work together to deliver 
              exceptional software solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium mb-2 block">
                      Full Name
                    </Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      className="border-border/50 focus:border-primary transition-colors" 
                      placeholder="Enter your full name" 
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium mb-2 block">
                      Email Address
                    </Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                      className="border-border/50 focus:border-primary transition-colors" 
                      placeholder="Enter your email address" 
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium mb-2 block">
                      Project Details
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      required 
                      rows={6} 
                      className="border-border/50 focus:border-primary resize-none transition-colors" 
                      placeholder="Tell me about your project requirements, timeline, and how I can help..." 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-3 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Sending Message...
                      </> : <>
                        Send Message <Send className="ml-2 w-4 h-4" />
                      </>}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border border-border/50 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return <a key={index} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-200 group border border-transparent hover:border-border/50">
                          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-200">
                            <IconComponent className="w-6 h-6 text-primary group-hover:text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{contact.label}</p>
                            <p className="text-muted-foreground">{contact.value}</p>
                          </div>
                        </a>;
                  })}
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="border border-border/50 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location & Availability</h4>
                      <p className="text-muted-foreground">Remote work worldwide</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Based in the United States with extensive experience working with distributed teams. 
                    Available for remote collaboration across different time zones to ensure seamless 
                    project execution and communication.
                  </p>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-primary/5 border border-primary/20 shadow-lg">
                <CardContent className="p-8 text-center">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Response Commitment</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I respond to all inquiries within 24 hours during business days. 
                    For urgent project discussions, please feel free to call directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;