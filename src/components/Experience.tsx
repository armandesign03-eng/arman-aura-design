import { Briefcase } from "lucide-react";
import { Card } from "./ui/card";

const Experience = () => {
  const experiences = [
    {
      year: "2024 - Present",
      role: "Founder & Creative Head",
      company: "Craftiq Studio",
      description:
        "Founded and led a full-service design agency focusing on branding, packaging, motion design, and content creation.",
      highlight: true,
    },
    {
      year: "2023 - 2024",
      role: "Sales Representative",
      company: "Amrita Consumer Food Products Ltd.",
      description:
        "Promoted products, managed client relationships, and improved sales strategy through market insights.",
      highlight: false,
    },
    {
      year: "2021 - 2022",
      role: "Graphic Designer",
      company: "Graphic Point 360",
      description:
        "Designed logos, packaging, social media assets, and digital campaigns for diverse clients.",
      highlight: false,
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Professional <span className="text-primary glow-text-md">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto glow-border"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary glow-border hidden md:block -translate-x-1/2"></div>

                  <Card
                    className={`p-6 bg-card/50 backdrop-blur border-border transition-all duration-300 ${
                      exp.highlight
                        ? "border-primary/50 glow-border"
                        : "hover:border-primary/30 glow-border-hover"
                    } ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                          <span className="text-sm text-primary font-semibold glow-text">
                            {exp.year}
                          </span>
                        </div>
                        <p className="text-lg text-muted-foreground font-medium mb-3">
                          {exp.company}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
