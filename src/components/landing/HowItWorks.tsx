import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { num: "1", title: t("how.s1.title"), desc: t("how.s1.desc") },
    { num: "2", title: t("how.s2.title"), desc: t("how.s2.desc") },
    { num: "3", title: t("how.s3.title"), desc: t("how.s3.desc") },
  ];

  return (
    <section id="how" className="py-[46px]">
      <div className="container">
        <div className="mb-[18px]">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-[rgba(255,255,255,0.92)]">
            {t("how.title")}
          </h2>
          <p className="mt-2 text-sm text-[rgba(255,255,255,0.70)] font-semibold max-w-[60ch]">
            {t("how.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[14px]">
          {steps.map((step, i) => (
            <div 
              key={i}
              className="p-[18px] rounded-[18px] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
            >
              <div className="w-10 h-10 rounded-[14px] bg-[rgba(167,139,250,0.12)] border border-[rgba(167,139,250,0.18)] flex items-center justify-center mb-2.5 font-black text-lg text-[#A78BFA]">
                {step.num}
              </div>
              <h4 className="text-base font-extrabold tracking-[-0.01em] text-[rgba(255,255,255,0.92)]">{step.title}</h4>
              <p className="mt-1.5 text-sm text-[rgba(255,255,255,0.70)] font-semibold">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
