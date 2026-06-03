import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { SSCWinner } from "@/components/landing/SSCWinner";
import { AppShowcase } from "@/components/landing/AppShowcase";
import { Technology } from "@/components/landing/Technology";
import { Impact } from "@/components/landing/Impact";
import { CTA } from "@/components/landing/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <Hero />
        <SSCWinner />
        <section id="showcase">
          <AppShowcase />
        </section>
        <Technology />
        <Impact />
        <CTA />
      </main>

      <footer className="bg-surface py-8 px-4 border-t border-border/50">
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
