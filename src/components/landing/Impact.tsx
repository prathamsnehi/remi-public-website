import { motion } from "framer-motion";

export const Impact = () => {
  return (
    <section className="py-24 px-4 bg-surface border-t border-border/50">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-rounded mb-8">
            Community Impact
          </h2>
          
          <div className="prose prose-lg dark:prose-invert mx-auto text-left">
            <p className="text-xl leading-relaxed text-muted-foreground mb-6">
              My driving philosophy as a developer is that the software I build must actively help the community. This is the foundation of my entire portfolio, where I try to use software as a bridge that helps people live a better quality of life.
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground mb-6">
              I also believe that creating a positive impact requires stepping away from simply coding and walking alongside the community you actually want to help. Along with my friend <a href="https://zinmk.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Zin Khant</a>, who spearheaded our outreach efforts, we connected with <strong>local dementia care facilities in Minnesota</strong> to learn more about the requirements of dementia patients — not to pitch, but to refine the solution by understanding their pain points.
            </p>
            <p className="text-xl leading-relaxed text-foreground font-medium text-center mt-12 border-t border-border pt-12">
              After the Swift Student Challenge, my plan is to keep iterating on Remi and to use the software I build to improve the lives of people living with dementia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
