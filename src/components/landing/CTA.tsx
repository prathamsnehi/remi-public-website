import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const CTA = () => {
  return (
    <section id="cta" className="py-24 px-4 relative overflow-hidden bg-background">
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 bg-surface rounded-[2.5rem] p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-medium"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Heart className="w-4 h-4" />
            Connect Deeply
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-foreground leading-tight font-rounded"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Build Stronger, More Meaningful Relationships
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Master the subtle details and build meaningful relationships that stand the test of time.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a
              href="https://apps.apple.com/us/app/remi-memory-bank/id123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-rounded"
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
      </div>
    </section>
  );
};
