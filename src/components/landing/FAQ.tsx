import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you work with open and enclosed carriers?",
    a: "Yes. We dispatch for open, enclosed, hotshot setups, and small fleets — across major USA lanes.",
  },
  {
    q: "Do I have the final approval on loads?",
    a: "Always. We present options and negotiate, but you choose what to book based on your goals and availability.",
  },
  {
    q: "How fast can you start dispatching?",
    a: "Typically within 24–48 hours after onboarding and receiving your carrier setup details.",
  },
  {
    q: "How do you charge?",
    a: "Most dispatch services charge either a flat weekly fee or a percentage of gross. We'll discuss the best model for your operation in the consultation.",
  },
  {
    q: "Do you help with paperwork and broker setup?",
    a: "Yes. We coordinate broker packets, rate confirmations, and key email communication so everything is organized.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
            FAQ
          </h2>
          <p className="mt-2 text-base text-muted-foreground font-semibold max-w-[60ch]">
            Clear answers to common dispatch questions for auto transport carriers.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="glass rounded-2xl px-4 py-1 border-[hsla(0,0%,100%,0.12)]"
            >
              <AccordionTrigger className="text-left font-extrabold text-base hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-medium pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
