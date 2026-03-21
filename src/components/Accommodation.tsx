import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Hotel, Home, ExternalLink } from "lucide-react";

const accommodationOptions = [
  {
    icon: Hotel,
    title: "Booking.com List",
    description: "Our curated list of recommended hotels near the venue",
    link: "https://booking.com/mywishlist.html?wl=6816a744c757408599f8fe226b8187a7",
  },
  {
    icon: Home,
    title: "Airbnb Wishlist",
    description: "Handpicked apartments and villas for a local experience",
    link: "https://www.airbnb.com/wishlists/1924011412",
  },
];

const Accommodation = () => {
  return (
    <section id="accommodation" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Accommodations"
          subtitle="Some accommodation options to stay during your visit to Messinia"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodationOptions.map((option, index) => (
              <motion.a
                key={option.title}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 border border-border hover:border-gold/40 transition-all duration-500 group text-center"
              >
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-serif text-foreground mb-3 flex items-center justify-center gap-2 font-medium">
                  {option.title}
                  <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-gold transition-colors" />
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  {option.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accommodation;
