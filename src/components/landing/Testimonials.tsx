const testimonials = [
  {
    text: "\"They negotiated better rates and kept me booked with minimal downtime. Worth it.\"",
    author: "Owner-Operator",
    meta: "Open Carrier",
  },
  {
    text: "\"Paperwork and communication improved immediately. I can focus on driving.\"",
    author: "Small Fleet",
    meta: "2 Trucks",
  },
  {
    text: "\"They understand lanes and seasonality. More consistent weeks, fewer dead miles.\"",
    author: "Independent Carrier",
    meta: "Nationwide",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
            Carrier feedback
          </h2>
          <p className="mt-2 text-base text-muted-foreground font-semibold max-w-[60ch]">
            Examples of what carriers typically report after starting dispatching with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {testimonials.map((item, i) => (
            <div 
              key={i}
              className="p-5 rounded-2xl glass"
            >
              <p className="text-foreground/90 font-bold leading-relaxed">{item.text}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground font-extrabold">
                <span>{item.author}</span>
                <span>{item.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
