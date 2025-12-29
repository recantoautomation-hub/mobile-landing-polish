import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

const LeadForm = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    carrierType: "",
    capacity: "",
    lanes: "",
    availability: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Request sent successfully! We'll contact you within 24 hours.");
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      carrierType: "",
      capacity: "",
      lanes: "",
      availability: "",
    });
    setIsSubmitting(false);
  };

  const inputClass = "w-full px-3 py-3 rounded-[14px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.14)] text-[rgba(255,255,255,0.92)] placeholder:text-[rgba(255,255,255,0.40)] focus:border-[rgba(110,231,255,0.45)] focus:bg-[rgba(255,255,255,0.08)] outline-none transition-all text-sm min-h-[46px]";
  const selectClass = `${inputClass} appearance-none cursor-pointer`;

  return (
    <aside 
      id="lead-form"
      className="bg-gradient-to-b from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.12)] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden"
    >
      <div className="p-[18px] pb-3 border-b border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.03)]">
        <h3 className="text-base font-extrabold tracking-[-0.01em] text-[rgba(255,255,255,0.92)]">
          {t("form.title")}
        </h3>
        <p className="mt-1.5 text-[13px] text-[rgba(255,255,255,0.70)] font-semibold">
          {t("form.subtitle")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-4 lg:p-[18px] space-y-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
          <div>
            <label className="block text-[13px] font-extrabold text-[rgba(255,255,255,0.70)] mb-1.5">
              {t("form.fullName.label")}
            </label>
            <input
              name="fullName"
              type="text"
              placeholder={t("form.fullName.placeholder")}
              value={formData.fullName}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-[13px] font-extrabold text-[rgba(255,255,255,0.70)] mb-1.5">
              {t("form.phone.label")}
            </label>
            <input
              name="phone"
              type="tel"
              placeholder={t("form.phone.placeholder")}
              value={formData.phone}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
          <div>
            <label className="block text-[13px] font-extrabold text-[rgba(255,255,255,0.70)] mb-1.5">
              {t("form.email.label")}
            </label>
            <input
              name="email"
              type="email"
              placeholder={t("form.email.placeholder")}
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-[13px] font-extrabold text-[rgba(255,255,255,0.70)] mb-1.5">
              {t("form.carrierType.label")}
            </label>
            <select
              name="carrierType"
              value={formData.carrierType}
              onChange={handleChange}
              required
              className={selectClass}
            >
              <option value="" disabled>{t("form.select")}</option>
              <option value="open">{t("form.carrierType.open")}</option>
              <option value="enclosed">{t("form.carrierType.enclosed")}</option>
              <option value="hotshot">{t("form.carrierType.hotshot")}</option>
              <option value="fleet">{t("form.carrierType.fleet")}</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
          <div>
            <label className="block text-[13px] font-extrabold text-[rgba(255,255,255,0.70)] mb-1.5">
              {t("form.capacity.label")}
            </label>
            <select
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="" disabled>{t("form.select")}</option>
              <option value="1-3">{t("form.capacity.1")}</option>
              <option value="4-6">{t("form.capacity.2")}</option>
              <option value="7-9">{t("form.capacity.3")}</option>
              <option value="10+">{t("form.capacity.4")}</option>
            </select>
          </div>
          <div>
            <label className="block text-[13px] font-extrabold text-[rgba(255,255,255,0.70)] mb-1.5">
              {t("form.availability.label")}
            </label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="" disabled>{t("form.select")}</option>
              <option value="now">{t("form.availability.now")}</option>
              <option value="48h">{t("form.availability.48")}</option>
              <option value="week">{t("form.availability.week")}</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-extrabold text-[rgba(255,255,255,0.70)] mb-1.5">
            {t("form.lanes.label")}
          </label>
          <input
            name="lanes"
            type="text"
            placeholder={t("form.lanes.placeholder")}
            value={formData.lanes}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <Button 
          type="submit" 
          variant="heroPrimary" 
          className="w-full mt-1"
          disabled={isSubmitting}
        >
          {isSubmitting ? "..." : t("form.submit")}
        </Button>

        <p className="text-xs text-[rgba(255,255,255,0.55)] leading-relaxed">
          {t("form.legal")}
        </p>
      </form>
    </aside>
  );
};

export default LeadForm;
