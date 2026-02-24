import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Waves, Castle, Mountain, Compass, ExternalLink, Anchor, Landmark, TreePine } from "lucide-react";

import pylosCastleImg from "@/assets/pylos-castle.jpg";
import voidokoiliaBeachImg from "@/assets/voidokoilia-beach.jpg";
import palaceNestorImg from "@/assets/palace-nestor.jpg";
import nestorsCaveImg from "@/assets/nestors-cave.jpg";
import kyparissiaCastleImg from "@/assets/kyparissia-castle.jpg";
import protiCruisesImg from "@/assets/proti-cruises.jpg";
import scubaDivingImg from "@/assets/scuba-diving.jpg";
import ancientMesseneImg from "@/assets/ancient-messene.jpg";
import polylimnioImg from "@/assets/polylimnio-waterfalls.jpg";

const activities = [
  {
    icon: Castle,
    title: "Pylos Castle",
    description: "Historic Niokastro fortress overlooking the Bay of Navarino",
    link: "https://www.google.com/maps/place/Niokastro/@36.9128,21.6947,15z",
    image: pylosCastleImg,
    size: "large",
  },
  {
    icon: Waves,
    title: "Voidokoilia Beach",
    description: "One of the world's most beautiful omega-shaped bays",
    link: "https://www.google.com/maps/place/Voidokilia+Beach/@36.9622,21.6586,15z",
    image: voidokoiliaBeachImg,
    size: "large",
  },
  {
    icon: Castle,
    title: "Palace of Nestor",
    description: "Best-preserved Mycenaean palace, 3,200 years old",
    link: "https://www.google.com/maps/place/Palace+of+Nestor/@37.0264,21.6941,15z",
    image: palaceNestorImg,
    size: "small",
  },
  {
    icon: Mountain,
    title: "Nestor's Cave",
    description: "Legendary cave with stunning views",
    link: "https://www.google.com/maps/place/Nestor's+Cave/@36.9672,21.6483,15z",
    image: nestorsCaveImg,
    size: "small",
  },
  {
    icon: Castle,
    title: "Kyparissia Castle",
    description: "Byzantine-Frankish ruins and charming old town",
    link: "https://www.google.com/maps/place/Kyparissia+Castle/@37.2513,21.6678,15z",
    image: kyparissiaCastleImg,
    size: "small",
  },
  {
    icon: Compass,
    title: "Proti Cruises",
    description: "Boat trips to Proti Island for swimming and snorkeling",
    link: "https://www.protocruises.gr/",
    image: protiCruisesImg,
    size: "medium",
  },
  {
    icon: Anchor,
    title: "Scuba Diving",
    description: "Explore underwater with Scuba Turtles",
    link: "https://scubaturtles.gr/",
    image: scubaDivingImg,
    size: "medium",
  },
  {
    icon: Landmark,
    title: "Ancient Messene",
    description: "One of Greece's best-preserved ancient cities",
    link: "https://www.google.com/maps/place/Ancient+Messene/@37.1709,21.9208,15z",
    image: ancientMesseneImg,
    size: "large",
  },
  {
    icon: TreePine,
    title: "Polylimnio Waterfalls",
    description: "Magical gorge with turquoise pools and cascades",
    link: "https://www.google.com/maps/place/Polylimnio+Waterfalls/@37.0847,21.8689,15z",
    image: polylimnioImg,
    size: "medium",
  },
];

const Activities = () => {
  return (
    <section id="activities" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Discover Messinia"
          subtitle="Make the most of your visit to this beautiful corner of Greece"
        />
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-5xl mx-auto">
          {activities.map((activity, index) => {
            const heightClass = 
              activity.size === "large" ? "h-80" : 
              activity.size === "medium" ? "h-64" : "h-52";
            
            return (
              <motion.a
                key={activity.title}
                href={activity.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="block mb-5 break-inside-avoid group"
              >
                <div className={`relative ${heightClass} overflow-hidden`}>
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <activity.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                      <h3 className="text-white font-serif text-lg font-medium">
                        {activity.title}
                      </h3>
                    </div>
                    <p className="text-white/70 text-sm font-light leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                  
                  <div className="absolute top-4 right-4 w-8 h-8 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
