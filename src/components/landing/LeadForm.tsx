import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const LeadForm = () => {
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
    
    // Simulate form submission
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

  return (
    <aside 
      id="lead-form"
      className="glass rounded-2xl lg:rounded-3xl shadow-card overflow-hidden mt-8 lg:mt-0"
    >
      <div className="p-4 lg:p-5 border-b border-[hsla(0,0%,100%,0.10)] bg-[hsla(0,0%,100%,0.03)]">
        <h3 className="text-lg font-extrabold tracking-tight">
          Get a free dispatch consultation
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground font-semibold">
          Tell us about your equipment and lanes. We'll contact you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-4 lg:p-5 space-y-3.5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <label htmlFor="fullName" className="block text-sm font-extrabold text-muted-foreground mb-1.5">
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="John Carter"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-3.5 lg:py-3 rounded-xl bg-[hsla(0,0%,100%,0.06)] border border-[hsla(0,0%,100%,0.14)] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/45 focus:bg-[hsla(0,0%,100%,0.08)] outline-none transition-all text-base min-h-[54px] lg:min-h-[48px]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-extrabold text-muted-foreground mb-1.5">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-3.5 lg:py-3 rounded-xl bg-[hsla(0,0%,100%,0.06)] border border-[hsla(0,0%,100%,0.14)] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/45 focus:bg-[hsla(0,0%,100%,0.08)] outline-none transition-all text-base min-h-[54px] lg:min-h-[48px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <label htmlFor="email" className="block text-sm font-extrabold text-muted-foreground mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-3.5 lg:py-3 rounded-xl bg-[hsla(0,0%,100%,0.06)] border border-[hsla(0,0%,100%,0.14)] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/45 focus:bg-[hsla(0,0%,100%,0.08)] outline-none transition-all text-base min-h-[54px] lg:min-h-[48px]"
            />
          </div>
          <div>
            <label htmlFor="carrierType" className="block text-sm font-extrabold text-muted-foreground mb-1.5">
              Carrier type
            </label>
            <select
              id="carrierType"
              name="carrierType"
              value={formData.carrierType}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-3.5 lg:py-3 rounded-xl bg-[hsla(0,0%,100%,0.06)] border border-[hsla(0,0%,100%,0.14)] text-foreground focus:border-primary/45 focus:bg-[hsla(0,0%,100%,0.08)] outline-none transition-all text-base min-h-[54px] lg:min-h-[48px] appearance-none cursor-pointer"
            >
              <option value="" disabled>Select one</option>
              <option value="open">Open carrier</option>
              <option value="enclosed">Enclosed carrier</option>
              <option value="hotshot">Hotshot / trailer</option>
              <option value="fleet">Small fleet (2+ trucks)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <label htmlFor="capacity" className="block text-sm font-extrabold text-muted-foreground mb-1.5">
              Capacity
            </label>
            <select
              id="capacity"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className="w-full px-3.5 py-3.5 lg:py-3 rounded-xl bg-[hsla(0,0%,100%,0.06)] border border-[hsla(0,0%,100%,0.14)] text-foreground focus:border-primary/45 focus:bg-[hsla(0,0%,100%,0.08)] outline-none transition-all text-base min-h-[54px] lg:min-h-[48px] appearance-none cursor-pointer"
            >
              <option value="" disabled>Select</option>
              <option value="1-3">1–3 cars</option>
              <option value="4-6">4–6 cars</option>
              <option value="7-9">7–9 cars</option>
              <option value="10+">10+ cars</option>
            </select>
          </div>
          <div>
            <label htmlFor="availability" className="block text-sm font-extrabold text-muted-foreground mb-1.5">
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-3.5 py-3.5 lg:py-3 rounded-xl bg-[hsla(0,0%,100%,0.06)] border border-[hsla(0,0%,100%,0.14)] text-foreground focus:border-primary/45 focus:bg-[hsla(0,0%,100%,0.08)] outline-none transition-all text-base min-h-[54px] lg:min-h-[48px] appearance-none cursor-pointer"
            >
              <option value="" disabled>Select</option>
              <option value="now">Ready now</option>
              <option value="48h">Next 24–48 hours</option>
              <option value="week">Next week</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="lanes" className="block text-sm font-extrabold text-muted-foreground mb-1.5">
            Preferred lanes
          </label>
          <input
            id="lanes"
            name="lanes"
            type="text"
            placeholder="e.g., TX → FL, CA → AZ"
            value={formData.lanes}
            onChange={handleChange}
            className="w-full px-3.5 py-3.5 lg:py-3 rounded-xl bg-[hsla(0,0%,100%,0.06)] border border-[hsla(0,0%,100%,0.14)] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/45 focus:bg-[hsla(0,0%,100%,0.08)] outline-none transition-all text-base min-h-[54px] lg:min-h-[48px]"
          />
        </div>

        <Button 
          type="submit" 
          variant="heroPrimary" 
          className="w-full mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send request →"}
        </Button>

        <p className="text-xs text-muted-foreground/70 leading-relaxed">
          By submitting, you agree to be contacted about dispatch services. We do not sell your data.
        </p>
      </form>
    </aside>
  );
};

export default LeadForm;
