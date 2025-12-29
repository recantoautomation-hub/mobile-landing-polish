import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    { q: t("faq.q1.q"), a: t("faq.q1.a") },
    { q: t("faq.q2.q"), a: t("faq.q2.a") },
    { q: t("faq.q3.q"), a: t("faq.q3.a") },
    { q: t("faq.q4.q"), a: t("faq.q4.a") },
    { q: t("faq.q5.q"), a: t("faq.q5.a") },
  ];

  return (
    <section id="faq" className="py-[46px]">
      <div className="container">
        <div className="mb-[18px]">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-[rgba(255,255,255,0.92)]">
            {t("faq.title")}
          </h2>
          <p className="mt-2 text-sm text-[rgba(255,255,255,0.70)] font-semibold max-w-[60ch]">
            {t("faq.subtitle")}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-2.5">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] rounded-[18px] px-4 py-1"
            >
              <AccordionTrigger className="text-left font-black text-[15px] hover:no-underline py-[14px] text-[rgba(255,255,255,0.92)]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[rgba(255,255,255,0.70)] font-semibold text-sm pb-[14px]">
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
