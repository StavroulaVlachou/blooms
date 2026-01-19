import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Heart } from "lucide-react";

const OurStory = () => {
  return (
    <section id="our-story" className="py-20 sm:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Story"
          subtitle="A journey of love that brought us together"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground font-sans leading-relaxed mb-6">
            Our story began in the most unexpected way, bringing together two hearts from different corners of the world. Through shared adventures, countless conversations, and a love that grew stronger each day, we knew we were meant to be together.
          </p>
          
          <p className="text-lg sm:text-xl text-muted-foreground font-sans leading-relaxed">
            Now, we invite you to join us in beautiful Messinia, Greece, where ancient olive groves meet the azure sea, to celebrate the next chapter of our journey together.
          </p>
          
          <p className="mt-8 font-serif text-2xl text-primary italic">
            "Two souls, one love, forever."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
