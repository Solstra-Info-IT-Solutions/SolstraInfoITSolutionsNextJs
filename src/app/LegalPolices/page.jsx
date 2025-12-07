"use client";

import FooterSection from "../Components/FooterSection";
import PrivacyContent from "../Components/LegalPolices/PrivacyContent";
import PrivacyHeader from "../Components/LegalPolices/PrivacyHeader";
import Navbar from "../Components/Navbar";

export default function LegalPolices() {
 

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
     <PrivacyHeader />
     <PrivacyContent />
     <FooterSection />
     
    </main>
  );
}
