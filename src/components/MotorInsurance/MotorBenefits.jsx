import AnimatedSection from "../AnimatedSection";

const benefits = [
  { num: "01", title: "Third-Party Car Insurance Is Mandatory", desc: "The UAE Government has made it mandatory to buy TPL, as it protects Licensed Driver's Legal Liability towards third parties and their property" },
  { num: "02", title: "Saves You From Traffic Fines", desc: "Gives a great peace of mind to the policy holder and passengers when driving the vehicle" },
  { num: "03", title: "Provides Personal Accident Coverage For Owner And Driver", desc: "Provides legal cover to the owner in case of third party injury or death" },
  { num: "04", title: "Gives Easy Access To Replacement Cars", desc: "Emergency replacement allowing car owners to receive substitute vehicle" },
  { num: "05", title: "Covers Damages To The Car", desc: "Excellent financial protection against damage to the car or loss of vehicle" },
  { num: "06", title: "Covers Your Car Against Theft", desc: "Financial security in case of accidents, theft, and natural catastrophes" },
];

export default function MotorBenefits() {
  return (
    <section className="section relative z-10">
      <div className="container-xl">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-16 bg-[#0B4EA2] rounded-full"></div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            What Are The Benefits Of A Motor<br />Insurance Policy?
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
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
