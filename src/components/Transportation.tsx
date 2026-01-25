import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Plane, Bus, Car, ExternalLink } from "lucide-react";

const Transportation = () => {
  const transportOptions = [
    {
      icon: Plane,
      title: "By Air",
      description: "Fly into Kalamata International Airport (KLX), just 45 minutes from the wedding venue. Alternatively, Athens International Airport offers more flight options, with a scenic 3-hour drive to Messinia.",
    },
    {
      icon: Car,
      title: "Car Rental",
      description: "We recommend renting a car to explore the beautiful Peloponnese region. Major rental companies are available at both airports.",
    },
  ];

  return (
    <section id="transportation" className="py-24 sm:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Getting There"
          subtitle="Your journey to Messinia"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {transportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 border border-border"
              >
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6">
                  <option.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3 font-medium">
                  {option.title}
                </h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Local Transport Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card p-10 border border-border"
          >
            <h3 className="text-2xl font-serif text-foreground mb-8 text-center font-medium">
              Local Transportation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Bus Information */}
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Bus className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-foreground mb-2 font-medium">
                    KTEL Bus Service
                  </h4>
                  <p className="text-muted-foreground text-sm font-light mb-3 leading-relaxed">
                    Regional buses connect major towns and villages in Messinia.
                  </p>
                  <a
                    href="https://www.ktelmessinias.gr/en/homepage-en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-gold hover:text-gold/80 transition-colors uppercase tracking-widest"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Visit website
                  </a>
                </div>
              </div>
              
              {/* Taxi Information */}
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Car className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-foreground mb-2 font-medium">
                    Local Taxi Services
                  </h4>
                  <p className="text-muted-foreground text-sm font-light mb-3 leading-relaxed">
                    Pre-book a taxi for airport transfers or local trips.
                  </p>
                  <a
                    href="https://www.messiniaride.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-gold hover:text-gold/80 transition-colors uppercase tracking-widest"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Messinia Ride
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Transportation;
