"use client";

import ContactHero from "../Components/contactComponents/ContactHero";
import Navbar from "../Components/Navbar";
import ContactHeading from "../Components/contactComponents/ContactHeading";
import QuestionBox from "../Components/contactComponents/QuestionBox";
import FooterSection from "../Components/FooterSection";
export default function ContactPage() {
 

  return (
    <main>
      <Navbar
                  type="other"
                  extraIcons={[
                    { src: "/telephone2.png", alt: "Email", link: "mailto:test@gmail.com" },
                    { src: "/whatsapp.png", alt: "WhatsApp", link: "https://wa.me/9999" },
                    { src: "/skype.png", alt: "Skype", link: "skype:live:username" },
                    { src: "/orangeemail.png", alt: "Email", link: "mailto:test@gmail.com" },
                  ]}
                />
     <ContactHero />
     <ContactHeading />
     <QuestionBox />
     <FooterSection />
    </main>
  );
}
