'use client';

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../Components/Navbar';
import FooterSection from '../Components/FooterSection';


// ---------------------------------------------------------------------------

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-600">
      <Head>
        <title>Terms & Conditions | Solstra Info IT Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header
        className="relative w-full h-48 flex items-center justify-center mt-16 sm:mt-20"
        style={{
          backgroundImage: "linear-gradient(to right, #6D28D9, #DB2777), url('/earth.jpg')",
          backgroundBlendMode: 'multiply',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="z-10 flex flex-col items-center mt-10">
          <h1 className="text-2xl sm:text-3xl font-light text-white tracking-wider mb-2 drop-shadow-md">
            Terms & Conditions
          </h1>
          <div className="w-16 sm:w-24 h-0.5 bg-orange-500 rounded-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-3xl text-justify">
          
          {/* Welcome Block */}
          <div className="text-center mb-10">
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              <span className="text-lg sm:text-xl font-bold text-orange-600 block mb-4">
                Welcome to Solstra Info IT Solutions.
              </span>
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties, and conditions relating to our
              website and the use of this website (including, without
              limitation, any warranties implied by law in respect of
              satisfactory quality, fitness for purpose, and/or the use of
              reasonable care and skill).
            </p>
          </div>

          {/* Disclaimer List */}
          <p className="mb-4 text-base font-semibold text-gray-900">
            Nothing in this disclaimer will:
          </p>

          <CustomList>
            <li>Limit or exclude our or your liability for death or personal injury resulting from negligence.</li>
            <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation.</li>
            <li>Limit any of our or your liabilities in any way that is not permitted under applicable law.</li>
            <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </CustomList>

          <p className="text-sm leading-relaxed mb-6">
            The limitations and exclusions of liability set out in this Section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort
            (including negligence), and for breach of statutory duty.
          </p>

          <p className="text-sm leading-relaxed mb-10">
            To the extent that the{' '}
            <Link href="#" className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors">
              website
            </Link>{' '}
            and the information and services on the website are provided free of
            charge, we will not be liable for any loss or damage of any nature.
          </p>

          <hr className="border-gray-200 my-8" />

          {/* Numbered Sections */}
          <Section title="1. Acceptance of Terms">
            By accessing or using any part of our services (including but not
            limited to Recruitment Services, Product Development, IT Services,
            and Software Solutions), you acknowledge that you have read,
            understood, and agreed to be bound by these Terms & Conditions.
          </Section>

          <Section title="2. Services">
            <p className="mb-2">
              Solstra Info IT Solutions offers a comprehensive range of business
              solutions, including but not limited to:
            </p>
            <CustomList>
              <li>
                <strong>Recruitment & Staffing:</strong> Talent acquisition for IT
                and non-IT roles, executive search, and workforce planning.
              </li>
              <li>
                <strong>Product Development:</strong> Custom software
                development, SaaS product creation, and MVP development.
              </li>
              <li>
                <strong>IT Services:</strong> Web & mobile app development,
                UI/UX design, and digital consultancy.
              </li>
            </CustomList>
            <p className="mt-2">
              We reserve the right to modify, suspend, or discontinue any part
              of our services at any time without prior notice.
            </p>
          </Section>

          <Section title="3. Client Responsibilities">
            <p className="mb-2">
              To ensure the success of the project or recruitment drive, you
              agree to:
            </p>
            <CustomList>
              <li>
                Provide complete, accurate, and current information regarding
                project requirements or job descriptions.
              </li>
              <li>
                Maintain timely communication and provide feedback on candidates
                (for Recruitment) or prototypes/builds (for IT Projects).
              </li>
              <li>
                Acknowledge that any delays in feedback or asset provision from
                your end may impact project delivery timelines or candidate
                availability.
              </li>
            </CustomList>
          </Section>

          <Section title="4. Payment Terms">
            <CustomList>
              <li>
                All fees are payable as per the mutually agreed proposal,
                service level agreement (SLA), or invoice.
              </li>
              <li>
                Late payments may result in delayed project deliveries or
                suspension of recruitment/IT services.
              </li>
              <li>
                Payments once made are non-refundable unless explicitly agreed
                upon in writing.
              </li>
            </CustomList>
          </Section>

          <Section title="5. Intellectual Property (IP)">
            <CustomList>
              <li>
                <strong>For IT Projects:</strong> All intellectual property
                rights of custom-built software, designs, or websites remain
                with Solstra Info IT Solutions until full payment is received.
                Upon full payment, IP rights for the specific deliverables are
                transferred to the client as per the agreement.
              </li>
              <li>
                <strong>For Recruitment:</strong> Solstra Info IT Solutions
                retains ownership of its candidate database and proprietary
                screening methodologies.
              </li>
            </CustomList>
          </Section>

          <Section title="6. Confidentiality">
            Both parties agree to maintain the strict confidentiality of all
            proprietary information, trade secrets, and candidate personal data
            shared during the course of the engagement. This applies to dealings
            with our diverse clientele, including but not limited to partners
            like NeevSystem, OpenMalo Technologies, Capgemini, TCS, and
            Infosys.
          </Section>

          <Section title="7. Limitation of Liability">
            Solstra Info IT Solutions shall not be held liable for any indirect,
            incidental, special, or consequential damages resulting from the use
            or inability to use our services, including but not limited to loss
            of profits, data, or business opportunities.
          </Section>

          <Section title="8. Termination">
            We reserve the right to terminate services or agreements at our
            discretion if a client violates any of these terms, acts
            unprofessionally, or fails to make timely payments.
          </Section>

          <Section title="9. Changes to Terms">
            We may update these Terms & Conditions at any time to reflect
            changes in our services or legal requirements. It is your
            responsibility to review this page periodically for updates.
          </Section>

          <Section title="10. Governing Law">
            These Terms are governed by and construed in accordance with the
            laws of India. Any disputes arising out of or in connection with
            these terms shall be subject to the exclusive jurisdiction of the
            courts located in Jaipur, Rajasthan.
          </Section>

          <hr className="border-gray-200 my-8" />

          {/* Contact Section */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h2>
            <p className="text-sm leading-relaxed mb-4 text-gray-600">
              If you have any questions regarding these Terms & Conditions,
              please contact us at:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold mr-2">Solstra Info IT Solutions Email:</span>
                <a
                  href="mailto:sjain01ajmer@gmail.com"
                  className="text-blue-600 hover:underline transition-colors"
                >
                  sjain01ajmer@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold mr-2">Phone:</span>
                +91-9001638396
              </li>
              <li>
                <span className="font-semibold mr-2">Location:</span>
                Rajasthan, India
              </li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

// --- Helper Components ---

// 1. Section Helper
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-6">
    <h2 className="text-xl font-bold text-gray-900 mt-6 mb-2">{title}</h2>
    <div className="text-sm leading-relaxed text-gray-600">
      {children}
    </div>
  </section>
);

// 2. Custom Bullet List Helper
const CustomList = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-none pl-0 mb-6 text-sm text-gray-600 leading-relaxed">
    {React.Children.map(children, (child) => {
      // FIX: Check if valid element AND Cast to ReactElement to access props safely
      if (React.isValidElement(child)) {
        const element = child as React.ReactElement<{ children: React.ReactNode }>;
        return (
          <li className="relative pl-6 mb-2">
            {/* The Custom Bullet */}
            <span className="absolute left-0 top-0 text-slate-900 font-bold text-xl leading-snug">
              •
            </span>
            {element.props.children}
          </li>
        );
      }
      return child;
    })}
  </ul>
);

export default TermsAndConditions;