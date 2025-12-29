import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t("testimonials.q1.text"),
      author: t("testimonials.q1.a"),
      meta: t("testimonials.q1.b"),
    },
    {
      text: t("testimonials.q2.text"),
      author: t("testimonials.q2.a"),
      meta: t("testimonials.q2.b"),
    },
    {
      text: t("testimonials.q3.text"),
      author: t("testimonials.q3.a"),
      meta: t("testimonials.q3.b"),
    },
  ];

  return (
    <section id="testimonials" className="py-[46px]">
      <div className="container">
        <div className="mb-[18px]">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-[rgba(255,255,255,0.92)]">
            {t("testimonials.title")}
          </h2>
          <p className="mt-2 text-sm text-[rgba(255,255,255,0.70)] font-semibold max-w-[60ch]">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[14px]">
          {testimonials.map((item, i) => (
            <div 
              key={i}
              className="p-[18px] rounded-[18px] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)]"
            >
              <p className="text-[rgba(255,255,255,0.86)] font-bold leading-relaxed mb-2.5">{item.text}</p>
              <div className="flex items-center justify-between text-[13px] text-[rgba(255,255,255,0.70)] font-extrabold">
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
