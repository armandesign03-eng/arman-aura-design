import { Button } from "./ui/button";
import { ArrowDown, Sparkles, Zap } from "lucide-react";
import armanPortrait from "@/assets/arman-portrait.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "64+", label: "Completed Projects" },
    { value: "151+", label: "Happy Clients" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: "2s" }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full glow-border-hover">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Available for Projects</span>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-muted-foreground text-lg font-medium tracking-wide uppercase">
                  Creative Director & Designer
                </p>
                <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="text-foreground block">Arman</span>
                  <span className="text-primary glow-text-lg block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-glow-pulse">
                    Hossain
                  </span>
                </h1>
              </div>

              <div className="relative">
                <h2 className="text-2xl md:text-4xl text-foreground/90 font-light leading-relaxed">
                  I Design Stories That{" "}
                  <span className="relative inline-block">
                    <span className="text-primary font-bold glow-text">Connect Emotionally</span>
                    <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                      <path d="M0 4C50 4 50 4 100 4C150 4 150 4 200 4" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                    </svg>
                  </span>
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              <Zap className="w-5 h-5 text-primary" />
              <p className="text-lg font-medium">
                Graphic Design • Motion Design • Photography • Video Editing
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Founder & Creative Head of{" "}
              <span className="text-primary font-semibold">Craftiq Studio</span>, crafting
              brand identities, packaging, and motion visuals that blend creativity with
              strategic design thinking.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="xl" onClick={scrollToPortfolio} className="group">
                Explore My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="neon" size="xl" asChild>
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-black text-primary glow-text-md">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Portrait with 3D effect */}
          <div className="relative animate-fade-in lg:scale-110" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              {/* Multiple glow layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-accent/20 to-primary/30 rounded-2xl blur-3xl animate-glow-pulse opacity-75"></div>
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl group-hover:bg-primary/20 transition-colors duration-500"></div>
              
              {/* Image container with enhanced border */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 glow-border-hover">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10"></div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary rounded-tl-2xl z-20"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary rounded-br-2xl z-20"></div>
                
                <img
                  src={armanPortrait}
                  alt="Arman Hossain - Creative Designer"
                  className="relative w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating decoration elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1.5s" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 group"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
            Scroll
          </span>
          <div className="p-3 rounded-full border-2 border-primary/50 glow-border group-hover:border-primary transition-colors">
            <ArrowDown className="w-5 h-5 text-primary glow-text-md" />
          </div>
        </div>
      </button>
    </section>
  );
};

export default Hero;
