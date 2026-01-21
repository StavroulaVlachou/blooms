import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Hotel, Home, MapPin, ExternalLink } from "lucide-react";

const accommodationOptions = [
  {
    icon: Hotel,
    title: "Booking.com List",
    description: "Our curated list of recommended hotels near the venue",
    link: "https://booking.com/mywishlist.html?wl=6816a744c757408599f8fe226b8187a7",
    placeholder: false,
  },
  {
    icon: Home,
    title: "Airbnb Wishlist",
    description: "Handpicked apartments and villas for a local experience",
    link: "https://www.airbnb.com/wishlists/1924011412",
    placeholder: false,
  },
  {
    icon: MapPin,
    title: "Other Options",
    description: "Alternative accommodations and local guesthouses",
    link: "#", // Placeholder
    placeholder: true,
  },
];

const Accommodation = () => {
  return (
    <section id="accommodation" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Where to Stay"
          subtitle="Find the perfect place to rest during your visit to Messinia"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accommodationOptions.map((option, index) => (
              <motion.a
                key={option.title}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-all group hover:-translate-y-1 text-center ${
                  option.placeholder ? 'opacity-70' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif text-foreground mb-2 flex items-center justify-center gap-2">
                  {option.title}
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  {option.description}
                </p>
                {option.placeholder && (
                  <span className="inline-block mt-3 text-xs text-muted-foreground/60 italic">
                    Link coming soon
                  </span>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accommodation;
