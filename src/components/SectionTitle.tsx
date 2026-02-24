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
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-16 sm:mb-20"
    >
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-accent/40" />
        <span className="text-green-accent text-xs uppercase tracking-[0.4em] font-sans font-light">•</span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-accent/40" />
      </div>
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-6 font-medium tracking-tight">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-muted-foreground font-sans font-light max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
