import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Waves, Castle, Mountain, Compass, ExternalLink } from "lucide-react";

const activities = [
  {
    icon: Castle,
    title: "Pylos Castle",
    description: "Explore the historic Niokastro fortress overlooking the stunning Bay of Navarino.",
    link: "https://en.wikipedia.org/wiki/Niokastro",
  },
  {
    icon: Waves,
    title: "Voidokoilia Beach",
    description: "Visit one of the most beautiful beaches in the world with its iconic omega-shaped bay.",
    link: "https://en.wikipedia.org/wiki/Voidokilia_beach",
  },
  {
    icon: Castle,
    title: "Palace of Nestor",
    description: "Discover the best-preserved Mycenaean palace in Greece, dating back 3,200 years.",
    link: "https://en.wikipedia.org/wiki/Palace_of_Nestor",
  },
  {
    icon: Mountain,
    title: "Nestor's Cave",
    description: "Hike to the legendary cave where King Nestor's cattle were said to be kept.",
    link: "https://en.wikipedia.org/wiki/Cave_of_Nestor",
  },
  {
    icon: Castle,
    title: "Kyparissia Castle & Old Town",
    description: "Wander through charming cobblestone streets and explore the Byzantine-Frankish castle ruins.",
    link: "https://en.wikipedia.org/wiki/Kyparissia",
  },
  {
    icon: Compass,
    title: "Proti Cruises Adventure",
    description: "Take a boat trip to the beautiful Proti Island for swimming, snorkeling, and exploration.",
    link: "https://www.protocruises.gr/",
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
            <motion.a
              key={activity.title}
              href={activity.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-border group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <activity.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-serif text-foreground mb-2">
                  {activity.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
              <p className="text-muted-foreground font-sans text-sm">
                {activity.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
