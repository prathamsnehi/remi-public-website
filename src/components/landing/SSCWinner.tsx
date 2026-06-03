import { motion } from "framer-motion";
import sscWinnerImg from "@/assets/ssc-images/ssc-winner-background.jpg";
import { Badge } from "@/components/ui/badge";

export const SSCWinner = () => {
  return (
    <section className="relative py-24 px-4 bg-background overflow-hidden border-b border-border/50">
      <div className="container max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-primary/10 text-primary border-none rounded-full">
            Winner
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-rounded tracking-tight mb-4">
            Apple Swift Student Challenge 2026
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Remi was selected as a winning submission for its innovative use of machine learning, accessibility features, and potential to make a meaningful difference in the lives of dementia patients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl relative rounded-3xl overflow-hidden shadow-2xl border border-border/50"
        >
          <img 
            src={sscWinnerImg} 
            alt="Swift Student Challenge 2026 Winner" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
