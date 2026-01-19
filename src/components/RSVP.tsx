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
    setFormData({ name: "", email: "", accommodation: "", message: "" });
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

            {/* Guest Management */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="font-sans">Additional Guests</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addGuest}
                  className="gap-1"
                >
                  <Plus className="h-4 w-4" />
                  Add Guest
                </Button>
              </div>

              {guests.map((guest, index) => (
                <motion.div
                  key={guest.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 border border-border rounded-lg bg-card/50 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">
                      Guest {index + 1}
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeGuest(guest.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Input
                    placeholder="Guest name"
                    value={guest.name}
                    onChange={(e) => updateGuest(guest.id, "name", e.target.value)}
                    className="bg-card border-border"
                  />
                  
                  <Select
                    value={guest.dietary}
                    onValueChange={(value) => updateGuest(guest.id, "dietary", value)}
                  >
                    <SelectTrigger className="bg-card border-border">
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
                    className="bg-card border-border"
                  />
                </motion.div>
              ))}
            </div>

            {/* Accommodation */}
            <div className="space-y-2">
              <Label htmlFor="accommodation" className="font-sans">
                Accommodation
              </Label>
              <Input
                id="accommodation"
                name="accommodation"
                value={formData.accommodation}
                onChange={handleChange}
                className="bg-card border-border"
                placeholder="Hotel or accommodation name"
              />
            </div>

            {/* Arrival & Departure Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-sans">Arrival Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-card border-border",
                        !arrivalDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
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
                <Label className="font-sans">Departure Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-card border-border",
                        !departureDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
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
            Please RSVP by <span className="text-foreground font-medium">May 31, 2026</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
