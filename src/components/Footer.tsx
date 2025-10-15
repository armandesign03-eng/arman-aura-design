const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Arman Hossain. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed with <span className="text-primary glow-text">passion</span> and{" "}
            <span className="text-primary glow-text">creativity</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
