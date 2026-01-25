import { motion } from "framer-motion";
import Countdown from "./Countdown";
import churchHero from "@/assets/church-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${churchHero})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-primary-foreground/80 uppercase tracking-[0.4em] text-xs sm:text-sm mb-8 font-sans font-light"
        >
          Together with their families
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-primary-foreground mb-6 font-medium"
        >
          Erik <span className="font-light italic text-gold">&</span> Rafailia
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <div className="h-px w-16 sm:w-32 bg-gradient-to-r from-transparent to-gold/60" />
          <p className="text-primary-foreground/90 text-base sm:text-lg font-serif italic tracking-wide">
            Thirtieth of August, Two Thousand Twenty-Six
          </p>
          <div className="h-px w-16 sm:w-32 bg-gradient-to-l from-transparent to-gold/60" />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-primary-foreground/70 text-sm sm:text-base mb-16 font-sans font-light tracking-widest uppercase"
        >
          Messinia, Greece
        </motion.p>
        
        <Countdown />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16"
        >
          <a
            href="#rsvp"
            className="inline-block border border-primary-foreground/40 hover:border-gold hover:bg-gold/10 text-primary-foreground px-12 py-4 uppercase tracking-[0.3em] text-xs font-sans font-light transition-all duration-500"
          >
            Respond
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary-foreground/50 text-[10px] uppercase tracking-[0.3em] font-sans">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary-foreground/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
