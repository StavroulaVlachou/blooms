import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import saveTheDate1 from "@/assets/save-the-date-1.jpg";
import saveTheDate2 from "@/assets/save-the-date-2.jpg";

const pages = [
  { src: saveTheDate1, alt: "Save the Date - Page 1" },
  { src: saveTheDate2, alt: "Accommodation Options - Page 2" },
];

const SaveTheDate = () => {
  return (
    <section id="save-the-date" className="py-20 sm:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Save the Date"
          subtitle="Our original invitation that we sent out"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl shadow-lg border border-border bg-card"
              >
                <img
                  src={page.src}
                  alt={page.alt}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SaveTheDate;
