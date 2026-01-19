import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Waves, Castle, Mountain, Compass, ExternalLink, Anchor, Landmark } from "lucide-react";

import pylosCastleImg from "@/assets/pylos-castle.jpg";
import voidokoiliaBeachImg from "@/assets/voidokoilia-beach.jpg";
import palaceNestorImg from "@/assets/palace-nestor.jpg";
import nestorsCaveImg from "@/assets/nestors-cave.jpg";
import kyparissiaCastleImg from "@/assets/kyparissia-castle.jpg";
import protiCruisesImg from "@/assets/proti-cruises.jpg";
import scubaDivingImg from "@/assets/scuba-diving.jpg";
import ancientMesseneImg from "@/assets/ancient-messene.jpg";

const activities = [
  {
    icon: Castle,
    title: "Pylos Castle",
    description: "Explore the historic Niokastro fortress overlooking the stunning Bay of Navarino.",
    link: "https://www.google.com/maps/place/Niokastro/@36.9082,21.6917,15z",
    image: pylosCastleImg,
  },
  {
    icon: Waves,
    title: "Voidokoilia Beach",
    description: "Visit one of the most beautiful beaches in the world with its iconic omega-shaped bay.",
    link: "https://www.google.com/maps/place/Voidokilia+Beach/@36.9622,21.6586,15z",
    image: voidokoiliaBeachImg,
  },
  {
    icon: Castle,
    title: "Palace of Nestor",
    description: "Discover the best-preserved Mycenaean palace in Greece, dating back 3,200 years.",
    link: "https://www.google.com/maps/place/Palace+of+Nestor/@37.0264,21.6941,15z",
    image: palaceNestorImg,
  },
  {
    icon: Mountain,
    title: "Nestor's Cave",
    description: "Hike to the legendary cave where King Nestor's cattle were said to be kept.",
    link: "https://www.google.com/maps/place/Nestor's+Cave/@36.9672,21.6483,15z",
    image: nestorsCaveImg,
  },
  {
    icon: Castle,
    title: "Kyparissia Castle & Old Town",
    description: "Wander through charming cobblestone streets and explore the Byzantine-Frankish castle ruins.",
    link: "https://www.google.com/maps/place/Kyparissia+Castle/@37.2513,21.6678,15z",
    image: kyparissiaCastleImg,
  },
  {
    icon: Compass,
    title: "Proti Cruises Adventure",
    description: "Take a boat trip to the beautiful Proti Island for swimming, snorkeling, and exploration.",
    link: "https://www.protocruises.gr/",
    image: protiCruisesImg,
  },
  {
    icon: Anchor,
    title: "Scuba Turtles Diving",
    description: "Dive into the crystal-clear Mediterranean waters and discover the underwater world with experienced guides.",
    link: "https://scubaturtles.gr/",
    image: scubaDivingImg,
  },
  {
    icon: Landmark,
    title: "Ancient Messene",
    description: "Explore one of the best-preserved ancient cities in Greece, featuring a stunning theater, stadium, and temples.",
    link: "https://www.google.com/maps/place/Ancient+Messene/@37.1709,21.9208,15z",
    image: ancientMesseneImg,
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
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-border group hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                  <activity.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-serif text-foreground mb-2">
                    {activity.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-muted-foreground font-sans text-sm">
                  {activity.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
