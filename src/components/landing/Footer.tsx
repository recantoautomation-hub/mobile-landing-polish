import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo-95dispatch.png";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-7 lg:py-[46px] border-t border-[rgba(255,255,255,0.10)]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2.5 pt-[18px]">
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="95Dispatch logo" 
              className="w-6 h-6 rounded-lg"
            />
            <span className="text-[13px] text-[rgba(255,255,255,0.55)] font-semibold">
              <strong className="text-[rgba(255,255,255,0.70)]">95Dispatch</strong> — {t("brand.tagline")}
            </span>
          </div>
          
          <div className="text-[13px] text-[rgba(255,255,255,0.55)] font-semibold">
            © {currentYear} 95Dispatch. {t("footer.rights")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
