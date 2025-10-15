import { Download, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const About = () => {
  const education = [
    {
      title: "Diploma in Graphic Design & Technology",
      institution: "Govt Graphic Arts Institute",
      year: "2020 - Present",
    },
    {
      title: "Advanced Design & Masters Course",
      institution: "Tech Era Academy",
      year: "2021",
    },
    {
      title: "Graphic Design Internship",
      institution: "Tech Era Academy",
      year: "2021",
    },
    {
      title: "Basic Graphic Design",
      institution: "Pentanik IT Institute",
      year: "2019",
    },
    {
      title: "Higher Secondary Certificate",
      institution: "Syed Ahmed College",
      year: "2019",
    },
    {
      title: "Secondary School Certificate",
      institution: "Nepaltali High School",
      year: "2017",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              About <span className="text-primary glow-text-md">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto glow-border"></div>
          </div>

          {/* Bio Section */}
          <div className="mb-16 animate-fade-in">
            <Card className="p-8 bg-card/50 backdrop-blur border-border glow-border-hover">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Arman Hossain</h3>
                  <p className="text-primary font-semibold text-lg">
                    Founder & Creative Head, Craftiq Studio
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  Arman Hossain is a Graphic Designer, Motion Designer, Video Editor, and Photographer, driven by a passion for visual storytelling and design that emotionally connects with people. As the Founder & Creative Head of Craftiq Studio, he specializes in crafting brand identities, packaging, and motion visuals that blend creativity with strategy.
                </p>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  His work is fueled by a belief that great design isn't just about visuals — it's about impact, emotion, and timeless presentation.
                </p>

                <div className="pt-4">
                  <Button variant="hero" size="lg">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Education Section */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary glow-text-md" />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/30 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 glow-border-hover"
                >
                  <h4 className="font-bold text-foreground mb-2">{edu.title}</h4>
                  <p className="text-muted-foreground text-sm mb-1">{edu.institution}</p>
                  <p className="text-primary text-sm font-semibold">{edu.year}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
