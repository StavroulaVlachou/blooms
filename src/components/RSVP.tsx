import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const RSVP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "",
    dietary: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "Your RSVP has been received. We can't wait to celebrate with you!",
    });
    setFormData({ name: "", email: "", guests: "", dietary: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="rsvp" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="RSVP"
          subtitle="Please let us know if you can join us for our special day"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-sans">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-card border-border"
                placeholder="Your full name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="font-sans">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card border-border"
                placeholder="your@email.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="guests" className="font-sans">
                Number of Guests
              </Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
                className="bg-card border-border"
                placeholder="Including yourself"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dietary" className="font-sans">
                Dietary Requirements
              </Label>
              <Input
                id="dietary"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="bg-card border-border"
                placeholder="Any allergies or dietary restrictions"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="font-sans">
                Message for the Couple
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-card border-border min-h-[120px]"
                placeholder="Share your wishes or any questions..."
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 uppercase tracking-widest font-sans"
            >
              Send RSVP
            </Button>
          </form>
          
          <p className="text-center text-muted-foreground text-sm mt-6 font-sans">
            Please RSVP by <span className="text-foreground font-medium">July 30, 2026</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
