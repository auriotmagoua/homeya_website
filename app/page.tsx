import Navbar from "../app/components/sections/Navbar";
import Hero from "../app/components/sections/Hero";
import Features from "../app/components/sections/Features";
import Testimonials from "../app/components/sections/Testimonials";
import CtaBanner from "../app/components/sections/CtaBanner";
import Footer from "../app/components/sections/Footer";
import MobileAppSection from "../app/components/sections/MobileAppSection";
import WhyChooseUs from "../app/components/sections/WhyChooseUs";
import DownloadBanner from "../app/components/sections/DownloadBanner";
import ContactForm from "../app/components/sections/ContactForm";
import About from "../app/components/sections/About";
import ScrollToTop from "../app/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <MobileAppSection />
      <WhyChooseUs />
      <Testimonials />
      <DownloadBanner />
      <ContactForm />
      <ScrollToTop />
      <Footer />
    </main>
  );
}