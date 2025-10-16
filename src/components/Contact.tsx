import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = "service_qtzcsan";
  const EMAILJS_TEMPLATE_ID = "template_y23u5fx";
  const EMAILJS_PUBLIC_KEY = "L2qZ-RdvAIIdECUcR";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arman.design03@gmail.com",
      link: "mailto:arman.design03@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1773985304",
      link: "tel:+8801773985304",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangladesh",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://facebook.com/armanthedesigner",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/arman_designs3",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/armanthedesigner",
    },
    {
      icon: ExternalLink,
      label: "Behance",
      url: "https://behance.net/armanh0ssain",
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Get In <span className="text-primary glow-text-md">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto glow-border"></div>
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
              Let's create something amazing together. Reach out for collaborations or just to say hello!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur border-border glow-border-hover animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-background/50"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Contact Info & Socials */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card/30 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 glow-border-hover"
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className="flex items-center gap-4 group"
                      >
                        <div className="p-3 bg-primary/10 rounded-lg glow-border">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-semibold group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg glow-border">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-semibold">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <Card className="p-8 bg-card/50 backdrop-blur border-border glow-border-hover">
                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="neon"
                      size="lg"
                      asChild
                      className="justify-start"
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="w-5 h-5" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
