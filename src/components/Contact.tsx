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
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
              Ready to discuss your next project? I'd love to hear from you and explore how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-none shadow-primary hover:shadow-accent transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Your Name
                    </Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-2 border-border focus:border-primary" placeholder="Enter your full name" />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address
                    </Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="mt-2 border-border focus:border-primary" placeholder="Enter your email address" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message
                    </Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="mt-2 border-border focus:border-primary resize-none" placeholder="Tell me about your project or how I can help you..." />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-hero text-white shadow-primary hover:shadow-accent disabled:opacity-50 bg-indigo-600 hover:bg-indigo-500">
                    {isSubmitting ? <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </> : <>
                        Send Message <Send className="ml-2 w-4 h-4" />
                      </>}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-none shadow-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return <a key={index} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 group">
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-200">
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
              <Card className="border-none shadow-primary">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">Available for remote work worldwide</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Based in the United States with experience working with global teams. 
                    I'm open to remote opportunities and can adapt to different time zones 
                    for effective collaboration.
                  </p>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-gradient-hero text-white border-none shadow-primary">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-semibold mb-2 text-black">Quick Response</h4>
                  <p className="text-black">
                    I typically respond to messages within 24 hours during business days. 
                    For urgent inquiries, feel free to call directly.
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