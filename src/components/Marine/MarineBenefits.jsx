import AnimatedSection from "../AnimatedSection";

const marineBenefits = [
  { num: "01", title: "Cargo Protection", desc: "Covers goods against loss or damage during transit by sea, air, road, or rail." },
  { num: "02", title: "Financial Security", desc: "Reduces the financial impact of unexpected loss or damage to insured cargo." },
  { num: "03", title: "Transit Risk Coverage", desc: "Can protect against risks such as accidents, fire, theft, collision, and natural perils." },
  { num: "04", title: "Global Trade Protection", desc: "Supports importers, exporters, and traders with coverage for domestic and international shipments." },
  { num: "05", title: "Flexible Coverage Options", desc: "Policies can be arranged for single shipments or ongoing shipments under an annual/open cover." },
  { num: "06", title: "Business Continuity", desc: "Helps businesses recover more quickly from insured transit losses and minimize disruption to operations." }
];

export default function MarineBenefits() {
  return (
    <section className="relative z-10 py-20">
      <div className="container-xl">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16" animation="slideUp">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            <span className="block">What Are The Benefits Of A Marine</span>
            <span className="block">Insurance Policy?</span>
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marineBenefits.map((b, i) => {
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
