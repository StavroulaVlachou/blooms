const Footer = () => {
  return (
    <footer className="py-16 sm:py-24 bg-green-accent text-green-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="font-serif text-3xl sm:text-4xl mb-6 font-medium">
          Erik <span className="text-green-accent-foreground/70 italic" style={{ fontFamily: "'EB Garamond', serif" }}>&</span> Rafailia
        </p>
        
        <div className="flex items-center justify-center gap-4 text-xs font-sans text-green-accent-foreground/60 mb-8 uppercase tracking-[0.2em] font-light">
          <span>30 August 2026</span>
          <span className="text-green-accent">•</span>
          <span>Messinia, Greece</span>
        </div>
        
        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-8" />
        
        <p className="text-[10px] text-green-accent-foreground/40 font-sans uppercase tracking-[0.3em] font-light">
          See you in Greece
        </p>
      </div>
    </footer>
  );
};

export default Footer;
