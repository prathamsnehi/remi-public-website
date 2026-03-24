import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import appHomepage from "@/assets/mockups/app-homepage.png";
import appFaceScan from "@/assets/mockups/app-face-scan.png";
import appMemories from "@/assets/mockups/app-memories.png";

const showcaseItems = [
  {
    title: "Be the Person Who Remembers",
    description:
      "Transform everyday acquaintances into deep, thoughtful connections in seconds.",
    image: appHomepage,
    icon: "person",
    features: [
      "External brain for social life",
      "Bridge the gap to knowing",
      "Refresh memory in seconds",
    ],
    gradient: "from-primary/80 to-primary",
  },
  {
    title: "Instant Search",
    description:
      "Every detail is always at your fingertips. No more awkward pauses or forgotten contexts.",
    image: appFaceScan,
    icon: "search",
    features: ["Lightning fast search", "Always at your fingertips", "No more awkward pauses"],
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Show You Truly Care",
    description:
      "Show people you truly care by turning fleeting conversations into lasting impressions.",
    image: appMemories,
    icon: "heart",
    features: ["Tools for thoughtfulness", "Honor people in your life", "Turn conversations into impressions"],
    gradient: "from-primary/80 to-primary",
  },
];

export const AppShowcase = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-none rounded-full">
            The Remi Experience
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-rounded">
            Transform from a passive acquaintance to a
            <span className="text-primary">
              {" "}
              thoughtful connection
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Remi isn't about tracking data; it's about honoring the people in your life.
          </p>
        </motion.div>

        <div className="space-y-24">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Content */}
              <div
                className={`flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} p-3 shadow-md flex items-center justify-center`}
                  >
                    <ion-icon
                      name={item.icon}
                      class="text-white"
                      style={{ fontSize: "1.5rem" }}
                    ></ion-icon>
                  </div>
                  <h3 className="text-3xl font-bold font-rounded">{item.title}</h3>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-3 pt-2 mx-auto lg:mx-0 w-max text-left">
                  {item.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + featureIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <motion.div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 w-full max-w-xs mx-auto rounded-[2rem]"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
