import AnimatedSection from "../AnimatedSection";

const propertyBenefits = [
  { num: "01", title: "Property Damage Protection", desc: "Covers insured property against damage caused by events such as fire, storms, and other covered perils." },
  { num: "02", title: "Contents Protection", desc: "Helps protect furniture, appliances, electronics, and other insured belongings against covered loss or damage." },
  { num: "03", title: "Theft & Burglary Coverage", desc: "Provides financial protection for insured property or belongings in the event of theft or burglary, subject to policy terms." },
  { num: "04", title: "Third-Party Liability", desc: "Can cover legal liability for accidental injury or property damage caused to third parties at the insured premises." },
  { num: "05", title: "Alternative Accommodation", desc: "May cover temporary accommodation costs if the home becomes uninhabitable following an insured event." },
  { num: "06", title: "Financial Security & Peace of Mind", desc: "Helps reduce the financial burden of unexpected property-related losses and provides greater security for homeowners and tenants." }
];

export default function PropertyBenefits() {
  return (
    <section className="relative z-10 py-20">
      <div className="container-xl">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16" animation="slideUp">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            <span className="block">What Are The Benefits Of A Property</span>
            <span className="block">Insurance Policy?</span>
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {propertyBenefits.map((b, i) => {
            return (
              <AnimatedSection
                key={i}
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
