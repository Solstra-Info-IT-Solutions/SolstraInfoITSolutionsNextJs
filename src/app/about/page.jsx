import React from "react";
// app/about/page.tsx
import Navbar from "../Components/Navbar";
import AboutHero from "../Components/aboutComponents/AboutHero";
import AboutSection from "../Components/aboutComponents/AboutSection";
import AboutValues from "../Components/aboutComponents/AboutValues";
import ContactSection from "../Components/aboutComponents/ContactSection";
import CoreVerticals from "../components/aboutComponents/CoreVerticals";
import MissionVision from "../components/aboutComponents/MissionVision";
import MeetTheTeam from "../components/aboutComponents/MeetTheTeam";
import TrustedBy from "../components/aboutComponents/TrustedBy";
import CultureSection from "../components/aboutComponents/CultureSection";
import OurOffices from "../Components/aboutComponents/OurOffices";
import TrustedLeadingCompany from "../Components/aboutComponents/TrustedLeadingCompany";
import FooterSection from "../Components/FooterSection"
export default function AboutPage() {
  return (
    <main>
       <Navbar 
              type="other"
              icons={[
                { src: "/telephone2.png", alt: "Email", link: "mailto:test@gmail.com" },
                { src: "/whatsapp.png", alt: "WhatsApp", link: "https://wa.me/9999" },
                { src: "/skype.png", alt: "Skype", link: "skype:live:username" },
                { src: "/orangeemail.png", alt: "Email", link: "mailto:test@gmail.com" },
                
              ]}
            />
      <AboutHero />
      <AboutSection />
      <CoreVerticals/>
      <MissionVision />
      <MeetTheTeam />
      <TrustedBy />
      <TrustedLeadingCompany />
      <AboutValues />
      <CultureSection />
      <ContactSection />
      <OurOffices />
      <FooterSection /> 
    </main>
  );
}
