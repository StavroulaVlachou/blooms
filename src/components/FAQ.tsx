import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, Shirt, Camera, Car, Gift } from "lucide-react";

const faqs = [
  {
    icon: Users,
    question: "Can I bring a plus one?",
    answer:
      "Yes! You are welcome to bring your significant other and children. Please make sure to include all their names in the RSVP form so we can plan accordingly.",
  },
  {
    icon: Shirt,
    question: "What is the dress code?",
    answer:
      "For the rehearsal dinner, the dress code is cocktail attire. For the wedding ceremony and reception, we ask for formal attire. Please bring a jacket for the reception as the evening may get cool.",
  },
  {
    icon: Camera,
    question: "Can I take photos during the wedding?",
    answer:
      "Absolutely! You are welcome to take photos throughout the celebration. We will set up a shared space (app to be determined) where everyone can upload and share their photos with us and other guests.",
  },
  {
    icon: Car,
    question: "Will transportation be provided?",
    answer:
      "Yes, we will provide transportation from the church to the reception venue, and from the venue back to your accommodation at the end of the evening. Please make sure to register your interest in transportation when filling out the RSVP form.",
  },
  {
    icon: Gift,
    question: "What about wedding gifts?",
    answer:
      "Your presence is the biggest present you could give us! If you wish to contribute to our honeymoon, we will share some options soon — stay tuned for updates.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our wedding celebration"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <faq.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-left font-serif text-lg text-foreground">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans pb-5 pl-14">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
