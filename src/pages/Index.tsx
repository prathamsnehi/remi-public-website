import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { AppShowcase } from "@/components/landing/AppShowcase";
import { CTA } from "@/components/landing/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <Hero />
        <section id="showcase">
          <AppShowcase />
        </section>
        {/* <section id="features">
          <Features />
        </section> */}
        {/* <section id="testimonials">
          <Testimonials />
        </section> */}
        <CTA />
      </main>

      <footer className="bg-surface py-8 px-4 border-t">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs font-rounded">R</span>
            </div>
            <span className="text-lg font-semibold font-rounded">Remi</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Built with ❤️ for those who value authentic connections.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
