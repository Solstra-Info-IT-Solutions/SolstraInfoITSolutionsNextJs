export default function CallToAction() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="w-full bg-[#f7941d] py-12 sm:py-16 md:py-20 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2
          id="cta-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E2A57]"
        >
          Ready to Collaborate?
        </h2>

        {/* Button */}
        <div className="mt-6">
          <a
            href="/contact"
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-[#1E2A57] text-white
              px-8 py-3
              text-sm sm:text-base font-semibold
              transition hover:bg-[#162044]
              focus:outline-none focus:ring-2 focus:ring-white
            "
            aria-label="Contact Solstra Info IT Solutions"
          >
            Contact Us
          </a>
        </div>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-base text-[#1E2A57] max-w-3xl mx-auto leading-relaxed">
          When you work with Solstra, you get the agility of a startup with the
          reliability required by industry giants.
        </p>
      </div>
    </section>
  );
}
