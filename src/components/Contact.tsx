import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: Phone,
      label: "Erik",
      value: "+46 79 048 9505",
      href: "tel:+46790489505",
    },
    {
      icon: Mail,
      label: "Erik's Email",
      value: "erik.bloom1@gmail.com",
      href: "mailto:erik.bloom1@gmail.com",
    },
    {
      icon: Phone,
      label: "Rafailia",
      value: "+46 72 445 7300",
      href: "tel:+46724457300",
    },
    {
      icon: Mail,
      label: "Rafailia's Email",
      value: "stavr.vlachou@yahoo.com",
      href: "mailto:stavr.vlachou@yahoo.com",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get in Touch"
          subtitle="We'd love to hear from you! Reach out with any questions."
        />
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center shadow-md border border-border hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sans font-semibold text-foreground mb-1">
                  {contact.label}
                </h3>
                <p className="text-muted-foreground text-sm font-sans">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
