import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import appShowcase from "@/assets/mockups/app-showcase.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden pt-20 bg-background">
      {/* Subtle minimalist background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="text-center lg:text-left space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl lg:text-8xl font-bold leading-none font-rounded text-foreground flex flex-col tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span>remi:</span>
            <span className="text-4xl lg:text-5xl text-primary font-sans lg:-mt-1">
              memory bank
            </span>
          </motion.h1>

          <motion.div
            className="space-y-6 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl lg:text-3xl font-medium text-foreground tracking-tight">
              A cognitive anchor for dementia patients.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              An offline iOS app using AI Face Recognition to bridge the gap between patients and their loved ones, turning an environment of unrecognizable faces into a welcoming space.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href="https://apps.apple.com/us/app/remi-memory-bank/id6757212316"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block shrink-0"
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] font-rounded text-white bg-primary hover:bg-primary/90"
              >
                <ion-icon
                  name="logo-apple"
                  class="mr-3 h-6 w-6"
                  style={{ fontSize: "1.5rem", verticalAlign: "middle" }}
                ></ion-icon>
                View on App Store
              </Button>
            </a>
            
            <div className="flex items-center gap-3 px-5 py-3 bg-primary/10 border border-primary/30 rounded-2xl shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] backdrop-blur-sm text-left hover:bg-primary/15 transition-all duration-300">
              <span className="text-2xl drop-shadow-sm">🏆</span>
              <span className="text-sm font-medium text-foreground leading-tight">
                Apple Swift Student<br/>
                Challenge <span className="text-primary font-bold">2026 Winner</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - App Mockup */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-[2.5rem] blur-3xl bg-primary/10"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.img
              src={appShowcase}
              alt="Remi App Dashboard"
              className="relative z-10 max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-2xl w-full rounded-[2.5rem] shadow-2xl border border-border/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
