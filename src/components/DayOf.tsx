import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Church, Wine, UtensilsCrossed, PartyPopper, LucideIcon } from "lucide-react";
import cocktailHour from "@/assets/cocktail-hour.png";
import churchImage from "@/assets/church-hero.png";
import dinnerImage from "@/assets/dinner.png";
import partyImage from "@/assets/party.png";

interface Event {
  time: string;
  title: string;
  location?: string;
  icon: LucideIcon;
  image?: string;
}

const events: Event[] = [
  {
    time: "18:00",
    title: "Wedding Ceremony",
    location: "Holy Church of Saint Spyridon, Gargalianoi 24400",
    icon: Church,
    image: churchImage,
  },
  {
    time: "19:00",
    title: "Cocktail Hour",
    location: "Ktima Vrysomylos",
    icon: Wine,
    image: cocktailHour,
  },
  {
    time: "20:00",
    title: "Dinner",
    location: "Ktima Vrysomylos",
    icon: UtensilsCrossed,
    image: dinnerImage,
  },
  {
    time: "21:30",
    title: "Party",
    location: "Ktima Vrysomylos",
    icon: PartyPopper,
    image: partyImage,
  },
];

const DayOf = () => {
  return (
    <section id="day-of" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="The Celebration"
          subtitle="An evening of joy and togetherness"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-green-accent/25 hidden sm:block" />

            <div className="space-y-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  {/* Icon circle */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 border border-green-accent/30 bg-background flex items-center justify-center">
                    <event.icon className="w-6 h-6 text-green-accent" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div 
                      className={`relative flex items-center justify-between py-6 px-8 border border-border overflow-hidden ${
                        event.image ? 'min-h-[200px]' : 'bg-card'
                      }`}
                    >
                      {event.image && (
                        <>
                          <img
                            src={event.image}
                            alt={event.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-foreground/50" />
                        </>
                      )}
                      <div className="relative z-10">
                        <h3 className={`font-serif text-xl font-medium ${event.image ? 'text-white' : 'text-foreground'}`}>
                          {event.title}
                        </h3>
                        {event.location && (
                          <p className={`font-sans text-sm tracking-wide mt-1 ${event.image ? 'text-white/90' : 'text-muted-foreground'}`}>
                            {event.location}
                          </p>
                        )}
                      </div>
                      <span className={`relative z-10 font-sans text-sm tracking-widest ${event.image ? 'text-white/80' : 'text-gold'}`}>
                        {event.time}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DayOf;
