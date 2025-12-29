import { Truck, MessageSquare, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Truck,
      title: t("services.f1.title"),
      desc: t("services.f1.desc"),
    },
    {
      icon: MessageSquare,
      title: t("services.f2.title"),
      desc: t("services.f2.desc"),
    },
    {
      icon: FileText,
      title: t("services.f3.title"),
      desc: t("services.f3.desc"),
    },
  ];

  return (
    <section id="services" className="py-[46px]">
      <div className="container">
        <div className="mb-[18px]">
          <h2 className="text-[26px] lg:text-[26px] font-extrabold tracking-[-0.02em] text-[rgba(255,255,255,0.92)]">
            {t("services.title")}
          </h2>
          <p className="mt-2 text-sm text-[rgba(255,255,255,0.70)] font-semibold max-w-[60ch]">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[14px]">
          {services.map((service, i) => (
            <div 
              key={i}
              className="p-[18px] rounded-[18px] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
            >
              <div className="w-10 h-10 rounded-[14px] bg-[rgba(110,231,255,0.12)] border border-[rgba(110,231,255,0.18)] flex items-center justify-center mb-2.5">
                <service.icon className="w-5 h-5 text-[#6EE7FF]" />
              </div>
              <h4 className="text-base font-extrabold tracking-[-0.01em] text-[rgba(255,255,255,0.92)]">{service.title}</h4>
              <p className="mt-1.5 text-sm text-[rgba(255,255,255,0.70)] font-semibold">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
