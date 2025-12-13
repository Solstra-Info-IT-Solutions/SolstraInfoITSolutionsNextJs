import React from "react";
// app/about/page.tsx
import Navbar from "../Components/Navbar";
import AboutHero from "../Components/aboutComponents/AboutHero";
import AboutSection from "../Components/aboutComponents/AboutSection";
import AboutValues from "../Components/aboutComponents/AboutValues";
import ContactSection from "../Components/aboutComponents/ContactSection";
import CoreVerticals from "../Components/aboutComponents/CoreVerticals";
import MissionVision from "../Components/aboutComponents/MissionVision";
import MeetTheTeam from "../Components/aboutComponents/MeetTheTeam";
import TrustedBy from "../Components/aboutComponents/TrustedBy";
import CultureSection from "../Components/aboutComponents/CultureSection";
import OurOffices from "../Components/aboutComponents/OurOffices";
import TrustedLeadingCompany from "../Components/aboutComponents/TrustedLeadingCompany";
import FooterSection from "../Components/FooterSection";
import CallToAction from "../Components/aboutComponents/CalltoAction";
import CoreLeaders from "../Components/aboutComponents/CoreLeaders";
export default function AboutPage() {
  return (
    <main>
      <Navbar
        type="home"
        // extraIcons={[
        //   { src: "/telephone2.png", alt: "Email", link: "mailto:test@gmail.com" },
        //   { src: "/whatsapp.png", alt: "WhatsApp", link: "https://wa.me/9999" },
        //   { src: "/skype.png", alt: "Skype", link: "skype:live:username" },
        //   { src: "/orangeemail.png", alt: "Email", link: "mailto:test@gmail.com" },
        // ]}
      />
      {/* <AboutHero /> */}
      <AboutSection />
      <CoreVerticals />
      <MissionVision />
      <MeetTheTeam />
      <TrustedBy />
      <TrustedLeadingCompany />

      <CultureSection />
      {/* <AboutValues /> */}
      <CoreLeaders />
      {/* <ContactSection /> */}
      {/* <OurOffices /> */}
      {/* <FooterSection /> */}
      <CallToAction />
    </main>
  );
}
