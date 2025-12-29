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
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero + Form Section */}
        <section className="lg:py-8">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8 items-start">
              <Hero />
              <div className="lg:sticky lg:top-24 lg:pt-8">
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
  );
};

export default Index;
