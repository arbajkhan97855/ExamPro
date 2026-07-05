
import Hero from "../../components/peopleshow/Hero/Hero";
import Stats from "../../components/peopleshow/Stats/Stats";
import Features from "../../components/peopleshow/Features/Features";
import HowItWorks from "../../components/peopleshow/HowItWorks/HowItWorks";
import Analytics from "../../components/peopleshow/Analytics/Analytics";
import Testimonials from "../../components/peopleshow/Testimonials/Testimonials";
import CTA from "../../components/peopleshow/CTA/CTA";
import Footer from "../../components/peopleshow/Footer/Footer";
import Navbar from "../../components/peopleshow/Navbar/Navbar";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Analytics />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;