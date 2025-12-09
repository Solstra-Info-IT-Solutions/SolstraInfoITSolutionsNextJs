import Navbar from "../Components/Navbar";
import FooterSection from "../Components/FooterSection";
import CommonHeader from "../Components/careerHub/CommonHeader";
import CTASection from "../Components/careerHub/CTASection";
import TipsSection from "../Components/careerHub/TipsSection";

export const metadata = {
  title: "Career Hub - Expert Tips",
  description: "Career guidance and interview tips by Solstra Info.",
};

export default function CareerHubPage() {
  const tipsData = [
  {
    title: "Beat the Robots (ATS Optimization)",
    points: [
      "Most top companies use an Applicant Tracking System (ATS) to filter resumes before a human ever sees them.",
      "Keywords are King: Read the Job Description (JD) carefully. If they ask for 'Python' and 'Django', ensure those exact words appear in your skills section.",
      "Keep it Simple: Avoid complex columns, graphics, or photos in your resume. Simple text formats parse better.",
      "Results > Responsibilities: Don't just list what you did; list what you achieved.",
      "Bad Example: Worked on sales.",
      "Good Example: Increased sales revenue by 20% in Q3."
    ],
  },

  {
    title: "Master the STAR Method",
    points: [
      "Technical skills get you the interview, but soft skills get you the job. When an interviewer asks 'Tell me about a time you faced a challenge', use the STAR Method to structure your answer clearly."
    ],
    image: "/STAR.png",
  },

  {
    title: "For Developers: Show, Don’t Tell",
    points: [
      "For IT roles, your code speaks louder than your degree.",
      "GitHub is Your Portfolio: Ensure your repositories are public and clean. A half-finished project is fine if the code is structured.",
      "Live Demos: If you are a web or mobile developer, provide links to live apps or websites.",
      "Know Your Basics: Even senior developers get rejected for failing core DSA questions. Brush up on fundamentals."
    ],
  },

  {
    title: 'The "Culture Fit" Factor',
    points: [
      "Companies like Capgemini and NeevSystem place a high value on cultural fit.",
      "Research the Company: Visit their website and About Us page. Mentioning recent projects or values shows genuine interest.",
      "Ask Questions: Ask thoughtful questions like 'What does a typical day look like?' or 'What is the team's biggest challenge?'"
    ],
  },

  {
    title: "Common Mistakes to Avoid",
    points: [
      "The 'Generic' Cover Letter: Stop copy-pasting the same cover letter. Customize the first paragraph for every application.",
      "Ignoring Soft Skills: In remote work, communication is critical. Highlight teamwork, clarity, and time management.",
      "Ghosting: If you're not interested in a role, communicate professionally. The IT world is small — courtesy matters."
    ],
  },
];


  return (
    <>
       <Navbar 
        type="other"
        icons={[
          { src: "/telephone2.png", alt: "Email", link: "mailto:test@gmail.com" },
          { src: "/whatsapp.png", alt: "WhatsApp", link: "https://wa.me/9999" },
          { src: "/skype.png", alt: "Skype", link: "skype:live:username" },
          { src: "/orangeemail.png", alt: "Email", link: "mailto:test@gmail.com" },
          
        ]}
      />

      <CommonHeader
        title="Career Hub"
        subtitle="Expert Tips to Land Your Dream Job"
      />

      <TipsSection tips={tipsData} />

      <CTASection
        title="Ready to Start Your Journey?"
        subtitle="We are hiring for IT, Management & HR roles."
        primaryBtn="View Current Openings"
        secondaryBtn="Submit Your Resume"
      />

      <FooterSection />
    </>
  );
}
