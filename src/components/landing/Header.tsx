import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/i18n";
import logo from "@/assets/logo-95dispatch.png";

const Header = () => {
  const { lang, setLang, t } = useLanguage();

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-[rgba(11,18,32,0.55)] border-b border-[rgba(255,255,255,0.08)]">
      <div className="container">
        <nav className="flex items-center justify-between py-3 gap-3">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="95Dispatch logo" 
              className="w-10 h-10 lg:w-11 lg:h-11 rounded-[14px] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] object-cover shadow-[0_14px_40px_rgba(0,0,0,0.30)]"
            />
            <div className="flex flex-col leading-tight">
              <strong className="text-[15px] lg:text-base font-extrabold tracking-[0.2px]">95Dispatch</strong>
              <span className="text-xs text-[rgba(255,255,255,0.70)] font-bold">{t("brand.tagline")}</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-[18px] text-sm font-bold text-[rgba(255,255,255,0.70)]">
            <a href="#services" className="hover:text-[rgba(255,255,255,0.92)] transition-colors">{t("nav.services")}</a>
            <a href="#how" className="hover:text-[rgba(255,255,255,0.92)] transition-colors">{t("nav.how")}</a>
            <a href="#benefits" className="hover:text-[rgba(255,255,255,0.92)] transition-colors">{t("nav.benefits")}</a>
            <a href="#faq" className="hover:text-[rgba(255,255,255,0.92)] transition-colors">{t("nav.faq")}</a>
          </nav>

          {/* CTA + Language */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="inline-flex items-center gap-2 px-2.5 py-2 rounded-[14px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.12)]">
              <span className="text-[rgba(255,255,255,0.70)] font-extrabold text-xs tracking-[0.2px] hidden sm:inline">
                {t("lang.label")}
              </span>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="appearance-none bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.14)] text-[rgba(255,255,255,0.92)] rounded-xl px-2.5 py-1.5 font-black text-xs cursor-pointer outline-none focus:border-[rgba(110,231,255,0.45)]"
              >
                <option value="en">EN</option>
                <option value="pt">PT</option>
                <option value="es">ES</option>
              </select>
            </div>
            
            <Button 
              variant="primary" 
              size="sm"
              onClick={scrollToForm}
              className="font-extrabold hidden sm:inline-flex"
            >
              {t("nav.start")}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
