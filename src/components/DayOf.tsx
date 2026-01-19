import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Church, Wine, UtensilsCrossed, PartyPopper } from "lucide-react";

const events = [
  {
    time: "18:00",
    title: "Wedding Ceremony",
    icon: Church,
  },
  {
    time: "19:00",
    title: "Cocktail Hour",
    icon: Wine,
  },
  {
    time: "20:00",
    title: "Dinner",
    icon: UtensilsCrossed,
  },
  {
    time: "21:30",
    title: "Party",
    icon: PartyPopper,
  },
];

const DayOf = () => {
  return (
    <section id="day-of" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Day Of"
          subtitle="Join us as we celebrate our special day"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/30 hidden sm:block" />

            <div className="space-y-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-6"
                >
                  {/* Icon circle */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <event.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex items-center justify-between py-4 px-6 bg-card rounded-lg border border-border">
                    <h3 className="font-serif text-xl text-foreground">
                      {event.title}
                    </h3>
                    <span className="text-primary font-sans font-medium text-lg">
                      {event.time}
                    </span>
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
