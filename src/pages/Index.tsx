import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DayOf from "@/components/DayOf";
import Activities from "@/components/Activities";
import Accommodation from "@/components/Accommodation";
import Transportation from "@/components/Transportation";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import RSVP from "@/components/RSVP";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <main className="min-h-screen border-x border-green-accent/30">
      <Navigation />
      <Hero />
      <SectionDivider />
      <DayOf />
      <SectionDivider />
      <RSVP />
      <SectionDivider />
      <Transportation />
      <SectionDivider />
      <Accommodation />
      <SectionDivider />
      <Activities />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer />
    </main>
  );
};

export default Index;
