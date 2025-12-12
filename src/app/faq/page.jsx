import Navbar from "../Components/Navbar";
import FAQItem from "../Components/FAQItem/FaqItem";
import FooterSection from "../Components/FooterSection";

export const metadata = {
  title: "FAQ - Solstra Info IT Solutions",
  description:
    "Frequently asked questions about Solstra Info IT Solutions – services, IT development, recruitment, and company info.",
};


export default function FAQPage() {
  return (
    <>
       <Navbar
                   type="other"
                   extraIcons={[
                     { src: "/telephone2.png", alt: "Email", link: "mailto:test@gmail.com" },
                     { src: "/whatsapp.png", alt: "WhatsApp", link: "https://wa.me/9999" },
                     { src: "/skype.png", alt: "Skype", link: "skype:live:username" },
                     { src: "/orangeemail.png", alt: "Email", link: "mailto:test@gmail.com" },
                   ]}
                 />

      <main className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* MAIN HEADING */}
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-3">
              Frequently Asked Questions
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our company and services.
            </p>
          </header>

          {/* SECTION 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#06114f] mb-6 text-center mx-auto md:text-left md:mx-45">
              General & Company Information
            </h2>

            <div className="max-w-3xl mx-auto">
              <FAQItem
                question="What exactly does Solstra Info IT Solutions do?"
                answer={
                  <>
                    We specialize in two major verticals:
                    <br /><br />
                    <strong>1. IT Services & Product Development:</strong> Websites, apps, software.
                    <br />
                    <strong>2. Recruitment & Staffing:</strong> We hire skilled IT & non-IT talent.
                  </>
                }
              />

              <FAQItem
                question="Who are some of your previous clients?"
                answer="We have worked with startups and giants like TCS, Infosys, Capgemini, NeevSystem, and OpenMalo Technologies."
              />

              <FAQItem
                question="Where is Solstra Info IT Solutions based?"
                answer="We are headquartered in Rajasthan, India, and serve global clients (USA, UK, Australia)."
              />
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#06114f] mb-6 text-center mx-auto md:text-left md:mx-45">
              For IT Services & Product Development Clients
            </h2>

            <div className="max-w-3xl mx-auto">

              <FAQItem
                question="Do you work with startups on MVP development?"
                answer="Yes, we help startups build market-ready MVPs quickly and budget-friendly."
              />

              <FAQItem
                question="What technologies do you work with?"
                answer={
                  <>
                    ● Web: React, Angular, Node.js, PHP, Python.
                    <br />
                    ● Mobile: Flutter, Swift, Kotlin.
                    <br />
                    ● Cloud: AWS, Azure, Google Cloud.
                  </>
                }
              />

              <FAQItem
                question="Do you provide support after the project is live?"
                answer="Yes, we offer support & maintenance to keep everything secure and updated."
              />

              <FAQItem
                question="How do you ensure the security of my project idea?"
                answer="We sign an NDA to ensure full confidentiality of your idea."
              />
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#06114f] mb-6 text-center mx-auto md:text-left md:mx-45">
              For Recruitment & Staffing Clients
            </h2>

            <div className="max-w-3xl mx-auto">
              <FAQItem
                question="Why should I use Solstra instead of a general HR agency?"
                answer="Because we are an IT company first. We technically screen candidates before sending them to you."
              />

              <FAQItem
                question="What roles can you help us fill?"
                answer="We specialize in IT roles but also handle non-IT roles as per client requirements."
              />

              <FAQItem
                question="What is your pricing model?"
                answer="Success-fee model — you pay only when the candidate joins."
              />

              <FAQItem
                question="How long does it take to close a position?"
                answer="For most IT positions, we share the first shortlist within 48–72 hours."
              />
            </div>
          </section>

          {/* SECTION 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#06114f] mb-6 text-center mx-auto md:text-left md:mx-45">
              For Job Seekers (Candidates)
            </h2>

            <div className="max-w-3xl mx-auto">
              <FAQItem
                question="Do you charge candidates?"
                answer="No. All recruitment fees are paid by the hiring companies."
              />

              <FAQItem
                question="How can I apply for a job?"
                answer="Visit our Careers Page or email your resume to careers@solstrainfo.com."
              />
            </div>
          </section>
        </div>
      </main>

      <FooterSection />
    </>
  );
}
