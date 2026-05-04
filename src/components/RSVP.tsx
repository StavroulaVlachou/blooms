import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, CalendarIcon, Check, X, Bus } from "lucide-react";
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
import { Checkbox } from "./ui/checkbox";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from "@/config/emailjs";

interface Guest {
  id: string;
  name: string;
  dietary: string;
  allergies: string;
}

const RSVP = () => {
  const { toast } = useToast();
  const [attending, setAttending] = useState<boolean | null>(null);
  const [needsTransport, setNeedsTransport] = useState(false);
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
  const [submittedRSVP, setSubmittedRSVP] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailData = {
      attending: attending ? "Yes" : "No",
      name: formData.name,
      email: formData.email,
      dietary: formData.dietary || "None",
      allergies: formData.allergies || "None",
      accommodation: formData.accommodation || "None",
      arrival_date: arrivalDate ? format(arrivalDate, "PPP") : "Not specified",
      departure_date: departureDate ? format(departureDate, "PPP") : "Not specified",
      needs_transport: needsTransport ? "Yes" : "No",
      guests: guests.length > 0
        ? guests
          .map(
            (g) => `${g.name} (${g.dietary}, allergies: ${g.allergies || 'None'})`
          )
          .join("; ")
        : "None",
      message: formData.message || "None",
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        emailData,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast({
        title: attending ? "Thank you!" : "We'll miss you!",
        description: attending
          ? "Your RSVP has been received. We can't wait to celebrate with you!"
          : "Thank you for letting us know. We hope to see you another time!",
      });

      setSubmittedRSVP(emailData);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue sending your RSVP. Please try again.",
        variant: "destructive",
      });
      console.error("EmailJS error:", error);
    }
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
          {submittedRSVP ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 text-center"
            >
              <div className="text-6xl">🎉</div>
              <h3 className="text-2xl font-light text-foreground">
                {submittedRSVP.attending === "Yes"
                  ? "Thank you for RSVPing!"
                  : "We'll miss you!"}
              </h3>
              <div className="space-y-2 text-left bg-card p-6 border border-border">
                <p>
                  <strong>Name:</strong> {submittedRSVP.name}
                </p>
                <p>
                  <strong>Email:</strong> {submittedRSVP.email}
                </p>
                <p>
                  <strong>Attending:</strong> {submittedRSVP.attending}
                </p>
                {submittedRSVP.attending === "Yes" && (
                  <>
                    <p>
                      <strong>Dietary:</strong> {submittedRSVP.dietary}
                    </p>
                    <p>
                      <strong>Allergies:</strong> {submittedRSVP.allergies}
                    </p>
                    <p>
                      <strong>Accommodation:</strong> {submittedRSVP.accommodation}
                    </p>
                    <p>
                      <strong>Arrival:</strong> {submittedRSVP.arrival_date}
                    </p>
                    <p>
                      <strong>Departure:</strong> {submittedRSVP.departure_date}
                    </p>
                    <p>
                      <strong>Transport:</strong> {submittedRSVP.needs_transport}
                    </p>
                    <p>
                      <strong>Guests:</strong> {submittedRSVP.guests}
                    </p>
                  </>
                )}
                <p>
                  <strong>Message:</strong> {submittedRSVP.message}
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                className="mt-4"
                onClick={() => setSubmittedRSVP(null)}
              >
                Edit RSVP
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="mt-4"
                onClick={() => {
                  setSubmittedRSVP(null);
                  setFormData({ name: "", email: "", dietary: "", allergies: "", accommodation: "", message: "" });
                  setGuests([]);
                  setArrivalDate(undefined);
                  setDepartureDate(undefined);
                  setAttending(null);
                  setNeedsTransport(false);
                }}
              >
                Start New RSVP
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <Label className="font-sans text-xs uppercase tracking-widest font-light text-muted-foreground">
                  Will you be joining us? *
                </Label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setAttending(true)}
                    className={cn(
                      "h-14 border flex items-center justify-center gap-3 transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] font-light",
                      attending === true
                        ? "border-gold bg-gold/10 text-foreground"
                        : "border-border bg-card text-muted-foreground hover:border-gold/40"
                    )}
                  >
                    <Check className="w-4 h-4" strokeWidth={1.5} />
                    Joyfully Accept
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttending(false)}
                    className={cn(
                      "h-14 border flex items-center justify-center gap-3 transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] font-light",
                      attending === false
                        ? "border-blush bg-blush/10 text-foreground"
                        : "border-border bg-card text-muted-foreground hover:border-blush/40"
                    )}
                  >
                    <X className="w-4 h-4" strokeWidth={1.5} />
                    Regretfully Decline
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {attending !== null && (
                  <motion.div
                    key={attending ? "accept" : "decline"}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8 overflow-hidden"
                  >
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

                    {attending && (
                      <>
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

                        <div className="flex items-start space-x-4 p-6 border border-border bg-card/50">
                          <Checkbox
                            id="transport"
                            checked={needsTransport}
                            onCheckedChange={(checked) => setNeedsTransport(checked === true)}
                            className="mt-0.5 border-gold/40 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                          />
                          <div className="space-y-1">
                            <Label
                              htmlFor="transport"
                              className="font-sans text-sm font-light text-foreground cursor-pointer leading-relaxed"
                            >
                              <Bus className="w-4 h-4 inline-block mr-2 text-gold" strokeWidth={1.5} />
                              We will need transportation on the wedding day
                            </Label>
                            <p className="text-xs text-muted-foreground font-light">
                              Shuttle service between the church, reception venue, and back to your accommodation
                            </p>
                          </div>
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-sans text-xs uppercase tracking-widest font-light text-muted-foreground">
                        {attending ? "Message for the Couple" : "Send us a note (optional)"}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-card border-border min-h-[140px] font-light"
                        placeholder={attending ? "Share your wishes or any questions..." : "We'd love to hear from you..."}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 uppercase tracking-[0.3em] text-xs font-light"
                    >
                      Send Response
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          )}

          <p className="text-center text-muted-foreground text-xs mt-8 font-light uppercase tracking-widest">
            Kindly respond by <span className="text-foreground">June 30, 2026</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
