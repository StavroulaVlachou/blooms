import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, CalendarIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface Guest {
  id: string;
  name: string;
  dietary: string;
  allergies: string;
}

const RSVP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dietary: "",
    allergies: "",
    accommodation: "",
    message: "",
  });
  const [guests, setGuests] = useState<Guest[]>([]);
  const [arrivalDate, setArrivalDate] = useState<Date>();
  const [departureDate, setDepartureDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "Your RSVP has been received. We can't wait to celebrate with you!",
    });
    setFormData({ name: "", email: "", dietary: "", allergies: "", accommodation: "", message: "" });
    setGuests([]);
    setArrivalDate(undefined);
    setDepartureDate(undefined);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addGuest = () => {
    setGuests([
      ...guests,
      { id: crypto.randomUUID(), name: "", dietary: "", allergies: "" },
    ]);
  };

  const removeGuest = (id: string) => {
    setGuests(guests.filter((guest) => guest.id !== id));
  };

  const updateGuest = (id: string, field: keyof Guest, value: string) => {
    setGuests(
      guests.map((guest) =>
        guest.id === id ? { ...guest, [field]: value } : guest
      )
    );
  };

  return (
    <section id="rsvp" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Répondez S'il Vous Plaît"
          subtitle="We would be honored by your presence"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-sans text-xs uppercase tracking-widest font-light text-muted-foreground">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-card border-border h-12 font-light"
                placeholder="Your full name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="font-sans text-xs uppercase tracking-widest font-light text-muted-foreground">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card border-border h-12 font-light"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label className="font-sans text-xs uppercase tracking-widest font-light text-muted-foreground">
                Dietary Preference
              </Label>
              <Select
                value={formData.dietary}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, dietary: value }))}
              >
                <SelectTrigger className="bg-card border-border h-12 font-light">
                  <SelectValue placeholder="Select dietary preference" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="normal">No restrictions</SelectItem>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="pescetarian">Pescetarian</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="allergies" className="font-sans text-xs uppercase tracking-widest font-light text-muted-foreground">
                Allergies
              </Label>
              <Input
                id="allergies"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                className="bg-card border-border h-12 font-light"
                placeholder="Any allergies or dietary restrictions"
              />
            </div>

            {/* Guest Management */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="font-sans text-xs uppercase tracking-widest font-light text-muted-foreground">
                  Additional Guests
                </Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addGuest}
                  className="gap-2 text-xs uppercase tracking-widest font-light border-gold/30 hover:border-gold hover:bg-gold/5"
                >
                  <Plus className="h-3 w-3" />
                  Add Guest
                </Button>
              </div>

              {guests.map((guest, index) => (
                <motion.div
                  key={guest.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 border border-border bg-card/50 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-light text-muted-foreground uppercase tracking-widest">
                      Guest {index + 1}
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeGuest(guest.id)}
                      className="text-destructive hover:text-destructive h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Input
                    placeholder="Guest name"
                    value={guest.name}
                    onChange={(e) => updateGuest(guest.id, "name", e.target.value)}
                    className="bg-card border-border h-12 font-light"
                  />
                  
                  <Select
                    value={guest.dietary}
                    onValueChange={(value) => updateGuest(guest.id, "dietary", value)}
                  >
                    <SelectTrigger className="bg-card border-border h-12 font-light">
                      <SelectValue placeholder="Dietary preference" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="normal">No restrictions</SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="vegan">Vegan</SelectItem>
                      <SelectItem value="pescetarian">Pescetarian</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Input
                    placeholder="Allergies (if any)"
                    value={guest.allergies}
                    onChange={(e) => updateGuest(guest.id, "allergies", e.target.value)}
                    className="bg-card border-border h-12 font-light"
                  />
                </motion.div>
              ))}
            </div>

            {/* Accommodation */}
            <div className="space-y-2">
              <Label htmlFor="accommodation" className="font-sans text-xs uppercase tracking-widest font-light text-muted-foreground">
                Accommodation
              </Label>
              <Input
                id="accommodation"
                name="accommodation"
                value={formData.accommodation}
                onChange={handleChange}
                className="bg-card border-border h-12 font-light"
                placeholder="Hotel or accommodation name"
              />
            </div>

            {/* Arrival & Departure Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="font-sans text-xs uppercase tracking-widest font-light text-muted-foreground">
                  Arrival Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-light bg-card border-border h-12",
                        !arrivalDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-3 h-4 w-4 text-gold" />
                      {arrivalDate ? format(arrivalDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                    <Calendar
                      mode="single"
                      selected={arrivalDate}
                      onSelect={setArrivalDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label className="font-sans text-xs uppercase tracking-widest font-light text-muted-foreground">
                  Departure Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-light bg-card border-border h-12",
                        !departureDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-3 h-4 w-4 text-gold" />
                      {departureDate ? format(departureDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={setDepartureDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="font-sans text-xs uppercase tracking-widest font-light text-muted-foreground">
                Message for the Couple
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-card border-border min-h-[140px] font-light"
                placeholder="Share your wishes or any questions..."
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 uppercase tracking-[0.3em] text-xs font-light"
            >
              Send Response
            </Button>
          </form>
          
          <p className="text-center text-muted-foreground text-xs mt-8 font-light uppercase tracking-widest">
            Kindly respond by <span className="text-foreground">May 31, 2026</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
