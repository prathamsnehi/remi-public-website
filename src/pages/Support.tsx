import { Navigation } from "@/components/landing/Navigation";
import { SupportOptions } from "@/components/support/SupportOptions";
import { motion } from "framer-motion";

const Support = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-rounded text-foreground">
              How can we help?
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Whether you've found a bug or have a brilliant idea for a new feature, 
              your feedback helps make Remi better for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SupportOptions />
          </motion.div>
        </div>
      </main>

      <footer className="bg-surface py-8 px-4 border-t mt-auto">
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

export default Support;