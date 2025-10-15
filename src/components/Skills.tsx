import {
  Palette,
  Video,
  Camera,
  Film,
  FileType,
  Grid3x3,
  Sparkles,
  Eye,
  Type,
  Target,
} from "lucide-react";
import { Card } from "./ui/card";

const Skills = () => {
  const skills = [
    { name: "Logo Design", icon: Sparkles },
    { name: "Brand Identity Design", icon: Target },
    { name: "Packaging Design", icon: Grid3x3 },
    { name: "Motion Graphics", icon: Film },
    { name: "Video Editing", icon: Video },
    { name: "Poster Design", icon: Palette },
    { name: "Product Manipulation", icon: Eye },
    { name: "Typography & Layout", icon: Type },
    { name: "Photography", icon: Camera },
    { name: "Visual Storytelling", icon: FileType },
  ];

  const highlights = [
    {
      icon: Film,
      title: "Motion Design",
      description: "Explainer graphics, dynamic transitions, and sound-synced animations.",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Cinematic cuts, story-driven flow, and professional color grading.",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Product and lifestyle shoots with mood and composition focus.",
    },
    {
      icon: Target,
      title: "Creative Direction",
      description: "Concept building, emotion-driven strategy, and design psychology.",
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Skills & <span className="text-primary glow-text-md">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto glow-border"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 bg-card/30 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group glow-border-hover text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <skill.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform glow-text-md" />
                <p className="text-sm font-semibold text-foreground">{skill.name}</p>
              </Card>
            ))}
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 glow-border-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg glow-border">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
