import { motion } from "framer-motion";

const technologies = [
  {
    name: "ARKit",
    description: "Creates a live, responsive scanning interface. Gives patients immediate visual feedback of their surroundings, eliminating the anxiety of staring at a delayed camera screen.",
    icon: "scan",
  },
  {
    name: "Vision",
    description: "Instantly detects and crops human faces as the user scans the room. Processes everything on-device right away so patients don't have to wait in confusion.",
    icon: "eye",
  },
  {
    name: "Core ML",
    description: "Runs the SFace model locally to create and match facial fingerprints. Processing sensitive biometric data entirely offline guarantees absolute privacy for vulnerable users.",
    icon: "hardware-chip",
  },
  {
    name: "SwiftData",
    description: "Stores facial fingerprint data and all memories associated with loved ones directly on the device, meaning patients can access their memories without ever needing an internet connection.",
    icon: "server",
  },
  {
    name: "SwiftUI",
    description: "Powers the beautiful, responsive layouts — enabling the minimalist, accessible interface that makes the app easy to use for the elderly.",
    icon: "color-palette",
  }
];

export const Technology = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-rounded">
            Powered by <span className="text-primary">Apple Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Remi uses cutting-edge, on-device machine learning and frameworks to ensure an instantaneous, private, and offline experience.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm bg-surface border border-border/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <ion-icon
                  name={tech.icon}
                  class="text-primary"
                  style={{ fontSize: "1.5rem" }}
                ></ion-icon>
              </div>
              <h3 className="text-2xl font-bold font-rounded mb-4">{tech.name}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
