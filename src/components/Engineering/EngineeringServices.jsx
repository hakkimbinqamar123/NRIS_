import AnimatedSection from "../AnimatedSection";

const engineeringCards = [
  { num: "01", title: "Contractors' All Risks", desc: "Secures the contractor from any accidents that happen on the construction site while working" },
  { num: "02", title: "Erection All Risks", desc: "Provides coverage for losses and/or damages to materials and erection works owned by principals and contractors/subcontractors" },
  { num: "03", title: "Contractors' Plant & Machinery", desc: "Protection for loss or damage to machinery/plant. A wide range of risks and damage cases covered" },
  { num: "04", title: "Third Party Liability", desc: "Covers accidental damage to third party property or accidental death or bodily injury to third party" },
  { num: "05", title: "Machinery Breakdown", desc: "Covers loss or damage to machinery caused by defects in casting and material, faulty design, bad workmanship etc" },
  { num: "06", title: "Professional Indemnity", desc: "Protects professionals and businesses against claims arising from errors, omissions, negligence, or inadequate professional services" }
];

export default function EngineeringServices() {
  return (
    <section className="section relative z-10 pt-0">
      <div className="container-xl">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-16 bg-[#0B4EA2] rounded-full"></div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            Different Policies Under Engineering Insurance
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringCards.map((b, i) => {
            return (
              <AnimatedSection
                key={b.num}
                delay={i * 0.1}
                className="relative bg-white border border-[#D8DEE6] p-6 overflow-hidden hover:-translate-y-2 hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer"
              >
                {/* Left side color bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#0B4EA2]" />

                {/* Title */}
                <h3 className="font-sans text-[23px] font-bold text-[#0A1830] mb-3 tracking-[-0.01em]">
                  {b.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[17px] leading-[1.55] text-[#4B5A6E]">
                  {b.desc}
                </p>

                {/* Divider in bottom right corner */}
                <div
                  className="absolute right-0 bottom-0 w-16 h-16"
                  style={{ background: 'linear-gradient(135deg, transparent 50%, rgba(11,78,162,0.035) 50%)' }}
                />
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
