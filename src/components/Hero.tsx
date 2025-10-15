import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import armanPortrait from "@/assets/arman-portrait.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="text-foreground">Arman</span>{" "}
                <span className="text-primary glow-text-lg">Hossain</span>
              </h1>
            </div>

            <h2 className="text-2xl md:text-3xl text-foreground/90 font-light">
              I Design Stories That <span className="text-primary font-bold glow-text">Connect Emotionally</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-xl">
              Graphic Designer | Motion Designer | Video Editor | Photographer
            </p>

            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Founder & Creative Head of Craftiq Studio, crafting brand identities, packaging, and motion visuals that blend creativity with strategic design thinking.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="xl" onClick={scrollToPortfolio}>
                Explore My Work
              </Button>
              <Button variant="neon" size="xl" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl animate-glow-pulse"></div>
              <img
                src={armanPortrait}
                alt="Arman Hossain - Creative Designer"
                className="relative rounded-2xl w-full h-auto object-cover border-2 border-primary/30 glow-border-hover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-8 h-8 text-primary glow-text-md" />
      </button>
    </section>
  );
};

export default Hero;
