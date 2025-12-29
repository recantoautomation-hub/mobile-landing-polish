import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import LeadForm from "@/components/landing/LeadForm";
import Services from "@/components/landing/Services";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero + Form Section */}
          <section className="hero">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-[22px] items-start">
                <Hero />
                <div className="lg:mt-[66px]">
                  <LeadForm />
                </div>
              </div>
            </div>
          </section>

          <Services />
          <HowItWorks />
          <Benefits />
          <Testimonials />
          <FAQ />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
