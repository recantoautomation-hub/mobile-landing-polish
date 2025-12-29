import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-95dispatch.png";

const Header = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-[hsla(220,45%,7%,0.55)] border-b border-[hsla(0,0%,100%,0.08)]">
      <div className="container">
        <nav className="flex items-center justify-between py-3 gap-3">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="95Dispatch logo" 
              className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl border border-[hsla(0,0%,100%,0.12)] bg-[hsla(0,0%,100%,0.06)] object-cover shadow-card"
            />
            <div className="flex flex-col leading-tight">
              <strong className="text-sm lg:text-base font-extrabold tracking-tight">95Dispatch</strong>
              <span className="text-xs text-muted-foreground font-bold">American Dispatch • USA Nationwide</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#benefits" className="hover:text-foreground transition-colors">Benefits</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <Button 
              variant="primary" 
              size="sm"
              onClick={scrollToForm}
              className="font-extrabold"
            >
              Start dispatching
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
