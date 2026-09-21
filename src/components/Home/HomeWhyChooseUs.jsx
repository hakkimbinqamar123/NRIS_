import { Smile, Users, ShieldCheck, Smartphone, Wallet, Car } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import wc1 from "../../assets/Tailored Solutaions.png";
import wc2 from "../../assets/Partnership with world class insurers.png";
import wc3 from "../../assets/Risk Management.png";
import wc4 from "../../assets/Consultancy You Can Trust.png";
import wc5 from "../../assets/Up To Date Business Insights.png";
import wc6 from "../../assets/Claim Assistance.png";

const whyChoose = [
  {
    icon: Smile,
    title: "Tailored Solutions",
    desc: "Coverage engineered around your risk profile — never off-the-shelf.",
    img: wc1,
  },
  {
    icon: Users,
    title: "Partnership with World Class Insurers",
    desc: "Access to a curated network of A-rated regional and global insurers.",
    img: wc2,
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    desc: "Proactive risk identification and mitigation strategies.",
    img: wc3,
  },
  {
    icon: Smartphone,
    title: "Consultancy You Can Trust",
    desc: "Expert advisory services tailored to your specific needs.",
    img: wc4,
  },
  {
    icon: Wallet,
    title: "Up To Date Business Insights",
    desc: "Data-driven market analytics to inform your insurance decisions.",
    img: wc5,
  },
  {
    icon: Car,
    title: "Claim Assistance",
    desc: "Dedicated claims managers with 24/7 response and end-to-end tracking.",
    img: wc6,
  },
];

export default function HomeWhyChooseUs() {
  return (
    <section className="section">
      <div className="container-xl">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge-pill mb-4 bg-red-50 text-red-700 border-red-100">Why Choose NRiS</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
            Advisory That Goes Beyond The Policy
          </h2>
          <p className="text-[#0B4EA2] text-lg">
            Six commitments that define the way we protect our clients — from
            the first quote to the final claim.
          </p>
        </AnimatedSection>

        <AnimatedSection className="w-full relative py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="group h-[380px] w-full [perspective:1000px] relative transition-transform duration-500 hover:scale-125 hover:z-10"
              >
                <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md hover:shadow-xl">
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-red-100 bg-white/90 backdrop-blur-sm p-4 sm:p-6 text-center [backface-visibility:hidden]">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/30">
                      <item.icon size={24} />
                    </span>
                    <h3 className="font-display text-lg lg:text-base xl:text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <img loading="lazy" src={item.img} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
