import { ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "ChaiSoul",
      category: "Premium Tea Brand Identity & Packaging",
      description: "Complete brand identity and packaging design for a premium tea brand focused on mindful moments.",
    },
    {
      title: "South Storm",
      category: "Healthy Snack Branding",
      description: "Bold, energetic branding for a healthy snack company targeting active lifestyles.",
    },
    {
      title: "Dining",
      category: "Gluten-Free Beverage Design",
      description: "Clean, modern packaging design for gluten-free beverage products.",
    },
    {
      title: "Fruit Splash",
      category: "Multi-Flavor Juice Campaign",
      description: "Vibrant visual campaign for a multi-flavor juice brand.",
    },
    {
      title: "GreenNest",
      category: "Organic Food Packaging",
      description: "Natural, eco-friendly packaging design for organic food products.",
    },
    {
      title: "Craftiq Studio",
      category: "Self Branding",
      description: "Complete brand identity and visual system for Craftiq Studio.",
    },
    {
      title: "PixelThread",
      category: "Fashion Brand Visuals",
      description: "Modern, sophisticated visual identity for a contemporary fashion brand.",
    },
    {
      title: "Aromora",
      category: "Luxury Candle Packaging",
      description: "Elegant packaging design for a luxury candle collection.",
    },
    {
      title: "NutLeaf",
      category: "Premium Nut Brand Identity",
      description: "Premium brand identity for an organic nut company.",
    },
    {
      title: "Reelwise",
      category: "Educational Motion Campaign",
      description: "Engaging motion graphics for an educational platform.",
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Featured <span className="text-primary glow-text-md">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto glow-border"></div>
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
              A selection of brand identities, packaging designs, and creative campaigns
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group p-6 bg-card/30 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 glow-border-hover cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-video bg-secondary/50 rounded-lg mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <ExternalLink className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold">{project.category}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center animate-fade-in">
            <Button variant="neon" size="lg" asChild>
              <a
                href="https://behance.net/armanh0ssain"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Portfolio on Behance
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
