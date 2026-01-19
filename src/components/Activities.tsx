import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { UtensilsCrossed, Waves, Castle, Mountain, Wine, Compass } from "lucide-react";

const activities = [
  {
    icon: Waves,
    title: "Costa Navarino Beaches",
    description: "Crystal clear waters and pristine sandy beaches perfect for relaxation and water sports.",
  },
  {
    icon: Castle,
    title: "Ancient Messene",
    description: "Explore one of the best-preserved ancient Greek cities with its impressive theater and stadium.",
  },
  {
    icon: Wine,
    title: "Olive Oil Tasting",
    description: "Experience the famous Kalamata olive oil at local estates and learn about traditional production.",
  },
  {
    icon: Mountain,
    title: "Polylimnio Waterfalls",
    description: "Discover hidden waterfalls and natural pools surrounded by lush vegetation.",
  },
  {
    icon: UtensilsCrossed,
    title: "Local Cuisine",
    description: "Savor traditional Greek dishes, fresh seafood, and local wines at tavernas by the sea.",
  },
  {
    icon: Compass,
    title: "Methoni Castle",
    description: "Visit the stunning Venetian fortress with its iconic Bourtzi tower standing in the sea.",
  },
];

const Activities = () => {
  return (
    <section id="activities" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Discover Messinia"
          subtitle="Make the most of your visit to this beautiful corner of Greece"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <activity.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-2">
                {activity.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
