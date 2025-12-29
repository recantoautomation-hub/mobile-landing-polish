import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import logo from "@/assets/logo-95dispatch.png";

const highlights = [
  {
    title: "Rate negotiation",
    desc: "We push for stronger RPM to improve your weekly revenue.",
  },
  {
    title: "Paperwork handled",
    desc: "Broker setup, rate con, and load confirmation organized for you.",
  },
  {
    title: "Nationwide coverage",
    desc: "Open and enclosed dispatch support across all major lanes.",
  },
  {
    title: "Fast updates",
    desc: "We keep you informed with lane options and quick confirmations.",
  },
];

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-10 pb-6 lg:pt-8 lg:pb-0" id="top">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full glass text-sm font-extrabold text-muted-foreground animate-fade-up">
        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary pulse-glow" />
        <span>Auto Transport Dispatching • USA Nationwide</span>
      </div>

      {/* Brand Row */}
      <div className="flex items-center gap-3 mt-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        <img 
          src={logo} 
          alt="95Dispatch logo" 
          className="w-14 h-14 rounded-2xl border border-[hsla(0,0%,100%,0.12)] bg-[hsla(0,0%,100%,0.06)] object-cover shadow-card"
        />
        <div className="flex flex-col gap-0.5">
          <strong className="text-base font-extrabold">95Dispatch</strong>
          <span className="text-sm text-muted-foreground font-bold">We dispatch your loads • You drive • You profit</span>
        </div>
      </div>

      {/* Headline */}
      <h1 className="mt-4 text-[2.5rem] lg:text-[3.25rem] font-extrabold leading-[1.04] tracking-tight animate-fade-up" style={{ animationDelay: "0.15s" }}>
        Load dispatch for car haulers.<br />
        <span className="gradient-text">Stronger rates. Less downtime.</span>
      </h1>

      {/* Sub */}
      <p className="mt-3 text-base lg:text-lg text-muted-foreground font-medium max-w-[44ch] leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
        95Dispatch helps owner-operators and small fleets maximize revenue with better-paying loads, 
        strong rate negotiations, and fast paperwork handling.
      </p>

      {/* CTAs */}
      <div className="flex flex-col lg:flex-row gap-3 mt-5 animate-fade-up" style={{ animationDelay: "0.25s" }}>
        <Button variant="heroPrimary" onClick={scrollToForm}>
          Get started →
        </Button>
        <Button variant="hero" asChild>
          <a href="#services">See services</a>
        </Button>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 mt-5 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        {highlights.map((item, i) => (
          <div 
            key={i}
            className="flex gap-3 items-start p-3.5 rounded-2xl glass"
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-success/15 border border-success/25 flex items-center justify-center mt-0.5">
              <Check className="w-4 h-4 text-success" />
            </div>
            <div>
              <strong className="text-sm font-extrabold">{item.title}</strong>
              <p className="text-sm text-muted-foreground font-medium line-clamp-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
