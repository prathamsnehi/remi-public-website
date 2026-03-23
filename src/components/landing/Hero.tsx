import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import appShowcase from "@/assets/mockups/app-showcase.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="text-center lg:text-left space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl lg:text-7xl font-bold leading-none font-rounded text-foreground flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span>remi:</span>
            <span className="text-4xl lg:text-5xl text-primary font-sans lg:-mt-1">
              memory bank
            </span>
          </motion.h1>

          <motion.div
            className="space-y-4 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-xl text-muted-foreground leading-relaxed">
              Be the person who remembers the small things. Remi is your external brain for social connections—capturing the nuances that matter so you can walk into any room with total confidence.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="https://apps.apple.com/us/app/remi-memory-bank/id123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-rounded text-white"
              >
                <ion-icon
                  name="logo-apple"
                  class="mr-3 h-6 w-6"
                  style={{ fontSize: "1.5rem", verticalAlign: "middle" }}
                ></ion-icon>
                Download for iOS
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - App Mockup */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-[2.5rem] blur-3xl bg-primary/20"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.img
              src={appShowcase}
              alt="Remi App Dashboard"
              className="relative z-10 max-w-sm sm:max-w-md w-full rounded-[2.5rem] shadow-2xl border border-white/20 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
