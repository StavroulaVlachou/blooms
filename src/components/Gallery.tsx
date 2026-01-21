import { motion } from "framer-motion";
import { Camera, Upload } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Gallery"
          subtitle="Share your memories from the celebration"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-card rounded-2xl p-12 shadow-sm border border-border/50">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Camera className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="font-serif text-2xl text-foreground mb-4">
              Photos Coming Soon
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              After the wedding, this is where all the beautiful moments captured 
              by our guests will live. We can't wait to see the celebration through 
              your eyes!
            </p>

            <div className="inline-flex items-center gap-2 text-sm text-primary/80 bg-primary/5 px-4 py-2 rounded-full">
              <Upload className="w-4 h-4" />
              <span>Upload instructions will be shared at the event</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
