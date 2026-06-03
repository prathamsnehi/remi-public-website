import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import appHomepage from "@/assets/mockups/app-homepage.png";
import appFaceScan from "@/assets/mockups/app-face-scan.png";
import appMemories from "@/assets/mockups/app-memories.png";

const showcaseItems = [
  {
    title: "Restoring Autonomy for Patients",
    description:
      "Dementia patients can identify faces using Remi's facial scan feature and access memories associated with them, transforming strange stares into warm and loving interactions.",
    image: appFaceScan,
    icon: "person",
    features: [
      "AI Face Recognition",
      "Instant memory retrieval",
      "Sense of control",
    ],
    gradient: "from-primary/80 to-primary",
  },
  {
    title: "Healing the Connection for Loved Ones",
    description:
      "Remi mitigates the chronic emotional toll on caregivers. By bridging the recognition gap, loved ones spend time actually connecting rather than constantly re-introducing themselves.",
    image: appMemories,
    icon: "heart",
    features: ["Reduces emotional toll", "Meaningful interactions", "No more re-introductions"],
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Accessible by Design",
    description:
      "Designed with Hick's Law and motor limitations of the elderly in mind. Features a highly minimalist interface with large touch targets and comprehensive voiceover support.",
    image: appHomepage,
    icon: "accessibility",
    features: ["Minimalist UI (Hick's Law)", "Large touch targets", "Full Voiceover support"],
    gradient: "from-primary/80 to-primary",
  },
];

export const AppShowcase = () => {
  return (
    <section className="py-24 px-4 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-none rounded-full">
            Purpose & Philosophy
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-rounded tracking-tight">
            Bridging the Recognition Gap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Remi is built to provide psychological relief to patients suffering from dementia, as well as their devoted loved ones.
          </p>
        </motion.div>

        <div className="space-y-32">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Content */}
              <div
                className={`flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row items-center gap-5">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} p-3 shadow-lg flex items-center justify-center`}
                  >
                    <ion-icon
                      name={item.icon}
                      class="text-white"
                      style={{ fontSize: "1.75rem" }}
                    ></ion-icon>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold font-rounded tracking-tight">{item.title}</h3>
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-4 pt-4 mx-auto lg:mx-0 w-max text-left">
                  {item.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + featureIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-lg text-foreground font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <motion.div
                className={`relative flex justify-center ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 w-full max-w-xs sm:max-w-sm rounded-[2.5rem] shadow-2xl border border-border/50"
                  />
                  <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/5 to-transparent blur-2xl transform scale-105" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
