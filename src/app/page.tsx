"use client";

import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";
import Marquee from "./Components/Marquee";
import WhySolstra from "./Components/WhySolstra";
import ServicesSection from "./Components/ServicesSection";
import AboutSection from "./Components/AboutSection";
import FooterSection from "./Components/FooterSection";
import AutoPopup from "./Components/AutoPopup"
import TabContent from "./Components/tabContent"
import TalkToConsultantSection from "./Components/TalkToConsultantSection"
import BlogSection from "./Components/BlogSection"
import StatsCounter from "./Components/StatsCounter"



export default function HomePage() {
  return (
    <div>
      <AutoPopup />
      <Navbar type="home" />
      <Herosection />
      <Marquee />
      <WhySolstra />
      <StatsCounter/>
      <ServicesSection />
      <AboutSection />
  
      <TabContent />
      <TalkToConsultantSection />
      {/* <BlogSection /> */}
      <FooterSection />
    </div>
  );
}
