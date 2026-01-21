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
    link: "https://share.google/5G9KGW1zyctB6L4lj",
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
    <section id="activities" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Discover Messinia"
          subtitle="Make the most of your visit to this beautiful corner of Greece"
        />
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-5xl mx-auto">
          {activities.map((activity, index) => {
            const heightClass = 
              activity.size === "large" ? "h-72" : 
              activity.size === "medium" ? "h-56" : "h-44";
            
            return (
              <motion.a
                key={activity.title}
                href={activity.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="block mb-4 break-inside-avoid group"
              >
                <div className={`relative ${heightClass} rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all`}>
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 saturate-[0.85] brightness-[0.95] contrast-[1.05] sepia-[0.1] group-hover:saturate-100 group-hover:brightness-100 group-hover:sepia-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-stone-900/10" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <activity.icon className="w-4 h-4 text-white/80" />
                      <h3 className="text-white font-serif text-lg">
                        {activity.title}
                      </h3>
                    </div>
                    <p className="text-white/80 text-sm leading-snug">
                      {activity.description}
                    </p>
                  </div>
                  
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-white" />
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
