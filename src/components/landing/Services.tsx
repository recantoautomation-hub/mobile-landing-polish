import { Truck, MessageSquare, FileText } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Load search & lane planning",
    desc: "We find loads that match your equipment, target lanes, and preferred schedule across major load boards and broker networks.",
  },
  {
    icon: MessageSquare,
    title: "Rate negotiation",
    desc: "We negotiate aggressively to increase RPM and improve your weekly net. Transparent: you always see the numbers.",
  },
  {
    icon: FileText,
    title: "Paperwork & compliance",
    desc: "Broker setup packets, rate confirmations, insurance requests, and email follow-ups — organized and tracked.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
            Dispatch services built for car haulers
          </h2>
          <p className="mt-2 text-base text-muted-foreground font-semibold max-w-[60ch]">
            We operate as your dispatch desk: load sourcing, negotiations, documentation, and coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div 
              key={i}
              className="p-5 rounded-2xl glass shadow-card hover:bg-[hsla(0,0%,100%,0.08)] transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-3">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-base font-extrabold tracking-tight">{service.title}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground font-medium">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
