import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="font-serif text-3xl mb-4">
          Erik <span className="text-gold">&</span> Rafailia
        </p>
        
        <div className="flex items-center justify-center gap-2 text-sm font-sans text-primary-foreground/70 mb-4">
          <span>30 August 2026</span>
          <Heart className="w-4 h-4 text-primary" fill="currentColor" />
          <span>Messinia, Greece</span>
        </div>
        
        <p className="text-xs text-primary-foreground/50 font-sans">
          Made with love for our special day
        </p>
      </div>
    </footer>
  );
};

export default Footer;
