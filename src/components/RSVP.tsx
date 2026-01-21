import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, CalendarIcon, Edit3, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";

interface Guest {
  id: string;
  name: string;
  dietary: string;
  allergies: string;
}

interface RSVPData {
  formData: {
    name: string;
    email: string;
    dietary: string;
    allergies: string;
    accommodation: string;
    message: string;
  };
  guests: Guest[];
  arrivalDate: string | null;
  departureDate: string | null;
  submittedAt: string;
}

const RSVP_STORAGE_KEY = "wedding_rsvp_data";

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
  const [hasExistingRSVP, setHasExistingRSVP] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Load existing RSVP from localStorage on mount
  useEffect(() => {
    const savedRSVP = localStorage.getItem(RSVP_STORAGE_KEY);
    if (savedRSVP) {
      try {
        const data: RSVPData = JSON.parse(savedRSVP);
        setFormData(data.formData);
        setGuests(data.guests);
        setArrivalDate(data.arrivalDate ? parseISO(data.arrivalDate) : undefined);
        setDepartureDate(data.departureDate ? parseISO(data.departureDate) : undefined);
        setHasExistingRSVP(true);
      } catch (error) {
        console.error("Error loading saved RSVP:", error);
      }
    }
  }, []);

  const saveRSVP = () => {
    const rsvpData: RSVPData = {
      formData,
      guests,
      arrivalDate: arrivalDate ? arrivalDate.toISOString() : null,
      departureDate: departureDate ? departureDate.toISOString() : null,
      submittedAt: new Date().toISOString(),
    };
    localStorage.setItem(RSVP_STORAGE_KEY, JSON.stringify(rsvpData));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveRSVP();
    
    const isUpdate = hasExistingRSVP && isEditing;
    toast({
      title: isUpdate ? "RSVP Updated!" : "Thank you!",
      description: isUpdate 
        ? "Your RSVP has been updated successfully."
        : "Your RSVP has been received. We can't wait to celebrate with you!",
    });
    
    setHasExistingRSVP(true);
    setIsEditing(false);
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
        
        {/* Show confirmation if RSVP exists and not editing */}
        {hasExistingRSVP && !isEditing ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto text-center"
          >
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">
                You're on the list!
              </h3>
              <p className="text-muted-foreground mb-2">
                <span className="font-medium text-foreground">{formData.name}</span>
                {guests.length > 0 && (
                  <span> + {guests.length} guest{guests.length > 1 ? 's' : ''}</span>
                )}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                RSVP received for {formData.email}
              </p>
              <Button
                onClick={() => setIsEditing(true)}
                variant="outline"
                className="gap-2"
              >
                <Edit3 className="h-4 w-4" />
                Edit RSVP
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Note: Your RSVP is saved on this device only
              </p>
            </div>
          </motion.div>
        ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          {isEditing && (
            <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20 flex items-center justify-between">
              <p className="text-sm text-foreground">
                Editing your RSVP
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditing(false)}
                className="text-muted-foreground"
              >
                Cancel
              </Button>
            </div>
          )}
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
              <Label className="font-sans">Dietary Preference</Label>
              <Select
                value={formData.dietary}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, dietary: value }))}
              >
                <SelectTrigger className="bg-card border-border">
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
              <Label htmlFor="allergies" className="font-sans">
                Allergies
              </Label>
              <Input
                id="allergies"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                className="bg-card border-border"
                placeholder="Any allergies or dietary restrictions"
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
              {isEditing ? "Update RSVP" : "Send RSVP"}
            </Button>
          </form>
          
          <p className="text-center text-muted-foreground text-sm mt-6 font-sans">
            Please RSVP by <span className="text-foreground font-medium">May 31, 2026</span>
          </p>
        </motion.div>
        )}
      </div>
    </section>
  );
};

export default RSVP;
