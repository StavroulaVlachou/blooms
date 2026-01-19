import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Plane, Bus, Car, Phone, ExternalLink } from "lucide-react";

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
    <section id="transportation" className="py-20 sm:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Getting There"
          subtitle="Everything you need to know about traveling to Messinia"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {transportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-md border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-mediterranean/10 flex items-center justify-center mb-4">
                  <option.icon className="w-6 h-6 text-mediterranean" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm">
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
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl p-8 shadow-md border border-border"
          >
            <h3 className="text-2xl font-serif text-foreground mb-6 text-center">
              Local Transportation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bus Information */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Bus className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-2">
                    KTEL Bus Service
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Regional buses connect major towns and villages in Messinia.
                  </p>
                  <a
                    href="https://www.ktelmessinias.gr/en/homepage-en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-mediterranean hover:text-mediterranean/80 transition-colors font-sans"
                  >
                    <ExternalLink className="w-4 h-4" />
                    www.ktelmessinias.gr
                  </a>
                </div>
              </div>
              
              {/* Taxi Information */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Car className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-2">
                    Local Taxi Services
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Pre-book a taxi for airport transfers or local trips.
                  </p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Gargalianoi / Pylos Area:</p>
                      <div className="flex items-center gap-2 text-sm text-foreground font-sans">
                        <Phone className="w-4 h-4 text-primary" />
                        <a href="tel:+306974021231" className="hover:text-primary transition-colors">+30 697 402 1231</a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground font-sans mt-1">
                        <Phone className="w-4 h-4 text-primary" />
                        <a href="tel:+306972186836" className="hover:text-primary transition-colors">+30 697 218 6836</a>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Messinia Ride (24/7):</p>
                      <a
                        href="https://www.messiniaride.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-mediterranean hover:text-mediterranean/80 transition-colors font-sans"
                      >
                        <ExternalLink className="w-4 h-4" />
                        www.messiniaride.com
                      </a>
                    </div>
                  </div>
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
