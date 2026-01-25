import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const people = [
    {
      name: "Erik",
      phone: "+46 79 048 9505",
      phoneHref: "tel:+46790489505",
      email: "erik.bloom1@gmail.com",
      emailHref: "mailto:erik.bloom1@gmail.com",
    },
    {
      name: "Rafailia",
      phone: "+46 72 445 7300",
      phoneHref: "tel:+46724457300",
      email: "stavr.vlachou@yahoo.com",
      emailHref: "mailto:stavr.vlachou@yahoo.com",
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get in Touch"
          subtitle="Questions? We're here to help"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {people.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 border border-border"
              >
                <h3 className="font-serif text-xl text-foreground mb-6 text-center font-medium">
                  {person.name}
                </h3>
                
                <div className="space-y-4">
                  <a
                    href={person.phoneHref}
                    className="flex items-center gap-4 px-4 py-3 border border-border hover:border-gold/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 border border-gold/30 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm text-foreground font-light">
                      {person.phone}
                    </span>
                  </a>
                  
                  <a
                    href={person.emailHref}
                    className="flex items-center gap-4 px-4 py-3 border border-border hover:border-gold/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 border border-gold/30 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm text-foreground font-light truncate">
                      {person.email}
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
