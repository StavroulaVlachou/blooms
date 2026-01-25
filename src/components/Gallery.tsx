import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Gallery"
          subtitle="Moments captured through your eyes"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="border border-border p-16 bg-card">
            <div className="w-16 h-16 mx-auto mb-8 border border-gold/30 flex items-center justify-center">
              <Camera className="w-7 h-7 text-gold" strokeWidth={1.5} />
            </div>
            
            <h3 className="font-serif text-2xl text-foreground mb-4 font-medium">
              Photos Coming Soon
            </h3>
            
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              After our celebration, this space will be filled with beautiful moments 
              captured by our loved ones. We look forward to seeing the day through your eyes.
            </p>

            <p className="text-xs text-muted-foreground/70 uppercase tracking-[0.2em] font-light">
              Upload details will be shared at the event
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
