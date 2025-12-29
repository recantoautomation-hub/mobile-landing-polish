import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo-95dispatch.png";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const highlights = [
    { title: t("hero.p1.title"), desc: t("hero.p1.desc") },
    { title: t("hero.p2.title"), desc: t("hero.p2.desc") },
    { title: t("hero.p3.title"), desc: t("hero.p3.desc") },
    { title: t("hero.p4.title"), desc: t("hero.p4.desc") },
  ];

  return (
    <div className="pt-[66px] pb-[26px] lg:pt-[66px] lg:pb-[26px]" id="top">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] text-[13px] font-extrabold text-[rgba(255,255,255,0.70)] w-fit animate-fade-up">
        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#6EE7FF] to-[#A78BFA] shadow-[0_0_0_6px_rgba(110,231,255,0.12)]" />
        <span>{t("hero.badge")}</span>
      </div>

      {/* Brand Row */}
      <div className="flex items-center gap-3 mt-[14px] animate-fade-up" style={{ animationDelay: "0.1s" }}>
        <img 
          src={logo} 
          alt="95Dispatch logo" 
          className="w-14 h-14 rounded-[18px] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] object-cover shadow-[0_18px_44px_rgba(0,0,0,0.35)]"
        />
        <div className="flex flex-col gap-0.5">
          <strong className="text-base font-extrabold">95Dispatch</strong>
          <span className="text-[13px] text-[rgba(255,255,255,0.70)] font-bold">{t("hero.brandline")}</span>
        </div>
      </div>

      {/* Headline */}
      <h1 className="mt-[14px] text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.03em] animate-fade-up" style={{ animationDelay: "0.15s" }}>
        {t("hero.h1.1")}<br />
        <span className="bg-gradient-to-r from-[#6EE7FF] to-[#A78BFA] bg-clip-text text-transparent">
          {t("hero.h1.2")}
        </span>
      </h1>

      {/* Sub */}
      <p className="mt-[10px] text-base text-[rgba(255,255,255,0.70)] font-medium max-w-[60ch] leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
        {t("hero.sub")}
      </p>

      {/* CTAs */}
      <div className="flex flex-col lg:flex-row gap-3 mt-5 animate-fade-up" style={{ animationDelay: "0.25s" }}>
        <Button variant="heroPrimary" onClick={scrollToForm}>
          {t("hero.ctaPrimary")}
        </Button>
        <Button variant="hero" asChild>
          <a href="#services">{t("hero.ctaSecondary")}</a>
        </Button>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 mt-[18px] animate-fade-up" style={{ animationDelay: "0.3s" }}>
        {highlights.map((item, i) => (
          <div 
            key={i}
            className="flex gap-2.5 items-start p-3 rounded-[14px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]"
          >
            <div className="flex-shrink-0 w-[22px] h-[22px] rounded-lg bg-[rgba(34,197,94,0.14)] border border-[rgba(34,197,94,0.25)] flex items-center justify-center mt-0.5">
              <Check className="w-3.5 h-3.5 text-[#22c55e]" />
            </div>
            <div>
              <strong className="text-sm font-extrabold text-[rgba(255,255,255,0.92)]">{item.title}</strong>
              <p className="text-sm text-[rgba(255,255,255,0.70)] font-semibold">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
