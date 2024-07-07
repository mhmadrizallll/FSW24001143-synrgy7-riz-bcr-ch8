import MainSection from "../components/MainSection.tsx";
import Navbar from "../components/Navbar.tsx";
import OurSection from "../components/OurSection.tsx";
import WhyUsSection from "../components/WhyUsSection.tsx";
// import TestimonialSection from "../components/TestimonialSection";
import TestimonialCarousel from "../components/TestimonialSection.tsx";
import GettingStartedSection from "../components/GettingStartedSection.tsx";
import FAQSection from "../components/FaqSection.tsx";
import Footer from "../components/Footer.tsx";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MainSection />
      <OurSection />
      <WhyUsSection />
      {/* <TestimonialSection /> */}
      <TestimonialCarousel />
      <GettingStartedSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default HomePage;
