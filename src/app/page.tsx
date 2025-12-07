"use client";

import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";
import Marquee from "./Components/Marquee";
import WhySolstra from "./Components/WhySolstra";
import ServicesSection from "./Components/ServicesSection";
import AboutSection from "./Components/AboutSection";
import Industriesservice from "./Components/Industriesservice";
import FooterSection from "./Components/FooterSection";
import AutoPopup from "./components/AutoPopup"
import TabContent from "./Components/tabContent"
import TalkToConsultantSection from "./Components/TalkToConsultantSection"
export default function HomePage() {
  return (
    <div>
      <AutoPopup />
      <Navbar type="home" />
      <Herosection />
      <Marquee />
      <WhySolstra />
      <ServicesSection />
      <AboutSection />
      <Industriesservice />
      <TabContent />
        <TalkToConsultantSection />
      <FooterSection />
    </div>
  );
}
