import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import DayOf from "@/components/DayOf";
import Activities from "@/components/Activities";
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
      <OurStory />
      <DayOf />
      <Activities />
      <Transportation />
      <FAQ />
      <RSVP />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
