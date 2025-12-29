import { Clock, Shield, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Benefits = () => {
  const { t } = useLanguage();

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    { icon: Clock, title: t("benefits.b1.title"), desc: t("benefits.b1.desc") },
    { icon: Shield, title: t("benefits.b2.title"), desc: t("benefits.b2.desc") },
    { icon: DollarSign, title: t("benefits.b3.title"), desc: t("benefits.b3.desc") },
  ];

  return (
    <section id="benefits" className="py-[46px]">
      <div className="container">
        <div className="mb-[18px]">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-[rgba(255,255,255,0.92)]">
            {t("benefits.title")}
          </h2>
          <p className="mt-2 text-sm text-[rgba(255,255,255,0.70)] font-semibold max-w-[60ch]">
            {t("benefits.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[14px]">
          {benefits.map((benefit, i) => (
            <div 
              key={i}
              className="p-[18px] rounded-[18px] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
            >
              <div className="w-10 h-10 rounded-[14px] bg-[rgba(34,197,94,0.12)] border border-[rgba(34,197,94,0.18)] flex items-center justify-center mb-2.5">
                <benefit.icon className="w-5 h-5 text-[#22c55e]" />
              </div>
              <h4 className="text-base font-extrabold tracking-[-0.01em] text-[rgba(255,255,255,0.92)]">{benefit.title}</h4>
              <p className="mt-1.5 text-sm text-[rgba(255,255,255,0.70)] font-semibold">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="h-px bg-[rgba(255,255,255,0.10)] my-[18px]" />

        {/* CTA Banner */}
        <div className="p-[22px] rounded-[26px] bg-gradient-to-r from-[rgba(110,231,255,0.15)] to-[rgba(167,139,250,0.12)] border border-[rgba(255,255,255,0.14)] shadow-[0_20px_60px_rgba(0,0,0,0.35)] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h3 className="text-lg font-extrabold tracking-[-0.01em] text-[rgba(255,255,255,0.92)]">
              {t("cta1.title")}
            </h3>
            <p className="mt-1 text-[rgba(255,255,255,0.70)] font-bold">
              {t("cta1.desc")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" onClick={scrollToForm}>
              {t("cta1.primary")}
            </Button>
            <Button variant="default" asChild>
              <a href="#faq">{t("cta1.secondary")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
