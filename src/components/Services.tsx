import {
  Sparkles,
  Package,
  Palette,
  Eye,
  Film,
  Video,
} from "lucide-react";
import { Card } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Logo & Brand Identity Design",
      description: "Meaningful, timeless brand visuals that capture your essence and resonate with your audience.",
    },
    {
      icon: Package,
      title: "Packaging Design",
      description: "Premium, story-driven packaging that stands out on shelves and creates emotional connections.",
    },
    {
      icon: Palette,
      title: "Poster & Social Media Design",
      description: "Creative, high-engagement visuals optimized for digital platforms and print campaigns.",
    },
    {
      icon: Eye,
      title: "Product Manipulation Design",
      description: "Hyper-realistic marketing compositions that showcase products in stunning, aspirational contexts.",
    },
    {
      icon: Film,
      title: "Motion Graphics",
      description: "Text animations and brand storytelling that bring your message to life with dynamic visuals.",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Emotionally engaging cinematic edits with professional color grading and compelling narratives.",
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              What I <span className="text-primary glow-text-md">Offer</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto glow-border"></div>
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
              Full-service creative solutions that blend strategic thinking with visual excellence
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group glow-border-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-primary/10 rounded-xl glow-border group-hover:animate-glow-pulse">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
