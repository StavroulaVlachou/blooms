import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="section-divider w-32 mx-auto mt-6" />
    </motion.div>
  );
};

export default SectionTitle;
