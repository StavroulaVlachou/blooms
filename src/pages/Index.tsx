import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DayOf from "@/components/DayOf";
import Activities from "@/components/Activities";
import Accommodation from "@/components/Accommodation";
import Transportation from "@/components/Transportation";
import FAQ from "@/components/FAQ";
import RSVP from "@/components/RSVP";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <DayOf />
      <Transportation />
      <Accommodation />
      <Activities />
      <RSVP />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
