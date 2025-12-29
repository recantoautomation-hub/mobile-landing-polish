import { Clock, Shield, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Clock,
    title: "Save hours every day",
    desc: "No more endless calls and emails. We keep your pipeline full so you can drive and rest.",
  },
  {
    icon: Shield,
    title: "Fewer surprises",
    desc: "We confirm load requirements, pickup/delivery windows, and payment terms before you roll.",
  },
  {
    icon: DollarSign,
    title: "More consistent gross",
    desc: "Better negotiation, smart lanes, and strong backhauls translate into stronger weekly revenue.",
  },
];

const Benefits = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="benefits" className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
            Why carriers choose 95Dispatch
          </h2>
          <p className="mt-2 text-base text-muted-foreground font-semibold max-w-[60ch]">
            Dispatching is not just finding loads — it's maximizing revenue and protecting your time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, i) => (
            <div 
              key={i}
              className="p-5 rounded-2xl glass shadow-card"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-green/15 border border-brand-green/25 flex items-center justify-center mb-3">
                <benefit.icon className="w-5 h-5 text-brand-green" />
              </div>
              <h4 className="text-base font-extrabold tracking-tight">{benefit.title}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground font-medium">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-8 p-5 lg:p-6 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-primary/15 to-secondary/12 border border-[hsla(0,0%,100%,0.14)] shadow-card flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h3 className="text-lg font-extrabold tracking-tight">
              Want a dispatcher that works like a partner?
            </h3>
            <p className="mt-1 text-muted-foreground font-medium">
              Get a free consultation and we'll build a dispatch plan for your truck.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" onClick={scrollToForm}>
              Request consultation
            </Button>
            <Button variant="default" asChild>
              <a href="#faq">Read FAQ</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
