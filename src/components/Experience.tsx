import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
const experiences = [{
  title: "Java Full Stack Engineer",
  company: "HSBC",
  period: "July 2024 – Present",
  location: "Remote",
  description: "Leading development of enterprise banking solutions with focus on regulatory compliance and security.",
  achievements: ["Architected microservices for real-time payment processing", "Implemented PSD2 compliance standards", "Optimized system performance by 35%"],
  technologies: ["Java", "Spring Boot", "Angular", "AWS", "Kafka", "PostgreSQL"]
}, {
  title: "Java Full Stack Developer",
  company: "Banner Health",
  period: "January 2024 – June 2024",
  location: "Remote",
  description: "Developed healthcare applications ensuring HIPAA compliance and patient data security.",
  achievements: ["Built telehealth platform serving 10K+ patients", "Integrated Azure Cognitive Services for AI recommendations", "Achieved 99.9% system uptime"],
  technologies: ["Java", "React", "Azure", "MongoDB", "Twilio", "Spring Security"]
}, {
  title: "Software Engineer",
  company: "BNP Paribas",
  period: "February 2021 – December 2022",
  location: "Mumbai, India",
  description: "Developed trading and risk management systems for global investment banking operations.",
  achievements: ["Created real-time trading analytics dashboard", "Reduced trade settlement time by 40%", "Implemented automated risk calculation engine"],
  technologies: ["Java", "Spring", "Angular", "Oracle", "Redis", "Jenkins"]
}, {
  title: "Java Developer",
  company: "Bupa Global",
  period: "May 2019 – December 2020",
  location: "Pune, India",
  description: "Built insurance management systems with focus on claims processing and customer portal.",
  achievements: ["Developed automated claims processing system", "Improved customer portal performance by 50%", "Integrated multiple third-party insurance APIs"],
  technologies: ["Java", "JSP", "MySQL", "JavaScript", "REST APIs", "JUnit"]
}];
const Experience = () => {
  return <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary"></div>
            
            {experiences.map((exp, index) => <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}>
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-primary z-10"></div>
                
                <Card className={`border-none shadow-primary hover:shadow-accent transition-all duration-300 hover:-translate-y-1 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <CardContent className="p-8">
                    <div className={`${index % 2 === 0 ? '' : 'md:text-right'}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-primary font-semibold">{exp.period}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-2 text-left">{exp.title}</h3>
                      <h4 className="text-xl font-semibold text-accent mb-2 text-left">{exp.company}</h4>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{exp.location}</span>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed text-left">{exp.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {exp.achievements.map((achievement, i) => <div key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-foreground">{achievement}</span>
                          </div>)}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                            {tech}
                          </Badge>)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;