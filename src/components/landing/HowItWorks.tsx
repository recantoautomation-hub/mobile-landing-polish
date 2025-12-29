const steps = [
  {
    num: "1",
    title: "Share your lanes & minimum RPM",
    desc: "Equipment type, lanes, availability, and preferences. We build your dispatch profile.",
  },
  {
    num: "2",
    title: "We source & negotiate loads",
    desc: "We send options, confirm details, negotiate rates, and get your approval to book.",
  },
  {
    num: "3",
    title: "Paperwork + broker coordination",
    desc: "Rate con, setup packets, scheduling, and broker communication — streamlined.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
            How it works
          </h2>
          <p className="mt-2 text-base text-muted-foreground font-semibold max-w-[60ch]">
            Simple onboarding and fast execution. You keep control — we handle the dispatch operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <div 
              key={i}
              className="p-5 rounded-2xl glass shadow-card"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/15 border border-secondary/25 flex items-center justify-center mb-3 font-black text-lg text-secondary">
                {step.num}
              </div>
              <h4 className="text-base font-extrabold tracking-tight">{step.title}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
