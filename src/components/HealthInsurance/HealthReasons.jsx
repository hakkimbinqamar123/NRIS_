import AnimatedSection from "../AnimatedSection";

const policyReasons = [
  { num: "01", title: "Medical Insurance Is Compulsory In The UAE", desc: "In order to renew the visa, GDRFA requires valid health insurance cover" },
  { num: "02", title: "Affordable Plans", desc: "We device policies that are tailored to your needs and are made available at very competitive rates" },
  { num: "03", title: "Pre And Post Hospitalization Expenses", desc: "In-Patient and Out-Patient services are covered depending on the health plan limits and co-pay" },
  { num: "04", title: "Health Cover For New Borns", desc: "New Borns will be automatically covered under the mother's policy up to 30 days securing proper medical support to the child" },
  { num: "05", title: "Maternity Cover", desc: "As per the UAE regulations, all married females from the age 18-50 will be having a maternity cover as per the terms and conditions of the policy" },
  { num: "06", title: "Pre-Existing And Chronic Conditions", desc: "All pre-existing medical conditions and chronic diseases are covered subject to continuity and depending on the plan's limit and co-pay" }
];

export default function HealthReasons() {
  return (
    <section className="relative z-10 py-20">
      <div className="container-xl">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16" animation="slideUp">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            <span className="block">What Are The Benefits Of A Health</span>
            <span className="block">Insurance Policy?</span>
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {policyReasons.map((r, i) => {
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
                  {r.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[17px] leading-[1.55] text-[#4B5A6E]">
                  {r.desc}
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
