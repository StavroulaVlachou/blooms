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
    <section id="contact" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get in Touch"
          subtitle="If it's all Greek to you, reach out!"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {people.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm"
              >
                <h3 className="font-serif text-xl text-foreground mb-4 text-center">
                  {person.name}
                </h3>
                
                <div className="space-y-3">
                  <a
                    href={person.phoneHref}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground font-medium">
                      {person.phone}
                    </span>
                  </a>
                  
                  <a
                    href={person.emailHref}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground font-medium truncate">
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
