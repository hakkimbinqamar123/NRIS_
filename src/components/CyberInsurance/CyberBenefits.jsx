import AnimatedSection from "../AnimatedSection";

const cyberBenefits = [
  { num: "01", title: "Data Breach Protection", desc: "Helps cover costs arising from the loss, theft, or exposure of sensitive data." },
  { num: "02", title: "Ransomware & Cyber Extortion", desc: "Provides support for costs related to ransomware attacks and cyber extortion incidents." },
  { num: "03", title: "Business Interruption Cover", desc: "Helps protect against financial losses caused by cyber-related operational downtime." },
  { num: "04", title: "Data Recovery Costs", desc: "Covers expenses associated with restoring or recovering damaged, lost, or encrypted data." },
  { num: "05", title: "Cyber Liability Protection", desc: "Helps cover legal costs and third-party claims resulting from cyber incidents or privacy breaches." },
  { num: "06", title: "Incident Response Support", desc: "Provides access to specialist support for investigation, notification, legal advice, and crisis management." },
];

export default function CyberBenefits() {
  return (
    <section className="section relative z-10 pb-24">
      <div className="container-xl">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-16 bg-[#0B4EA2] rounded-full"></div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            What Are The Benefits Of A Cyber<br />Security Insurance Policy?
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cyberBenefits.map((b, i) => {
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
