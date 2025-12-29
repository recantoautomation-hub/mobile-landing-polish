import logo from "@/assets/logo-95dispatch.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 lg:py-12 border-t border-[hsla(0,0%,100%,0.10)]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="95Dispatch logo" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-sm text-muted-foreground font-bold">
              © {currentYear} 95Dispatch. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground font-bold">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#benefits" className="hover:text-foreground transition-colors">Benefits</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
