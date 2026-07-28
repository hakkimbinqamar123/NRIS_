import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Car,
  Truck,
  ShieldCheck,
  ShieldAlert,
  Check,
  Phone,
  UserSearch,
  Wrench,
  ArrowRight,
} from "lucide-react";
import PageHero from "../components/PageHero";
import AnimatedSection from "../components/AnimatedSection";
import PhotoBlock from "../components/PhotoBlock";
import FAQAccordion from "../components/FAQAccordion";
import CTASection from "../components/CTASection";
import motorImg from "../assets/motor.png";
import motorHeroBg from "../assets/motor_hero_bg.png";

const riskScenarios = {
  who: [
    "Individual vehicle owners and families",
    "Logistics and transportation companies",
    "Taxi operators and ride-hailing fleets",
    "Corporate entities with company-owned executive vehicles",
    "Car rental and leasing businesses",
    "Construction and heavy-duty transport operators"
  ],
  what: [
    "Comprehensive coverage against accidental damage, theft, and fire",
    "Mandatory third-party liability for property damage and bodily injury",
    "Agency and non-agency repair options with guaranteed workmanship",
    "Personal accident benefits for drivers and passengers",
    "Roadside assistance, towing, and courtesy vehicle provision",
    "Territorial extensions across the GCC and wider regions"
  ]
};

const products = [
  { icon: Car, title: "Private Vehicle Insurance", desc: "Cover for personal cars — sedans, SUVs, and electric vehicles — with agency repairs and courtesy car add-ons." },
  { icon: Truck, title: "Commercial Vehicle Insurance", desc: "Fleets, delivery vehicles, taxis, and heavy trucks with tailored fleet-level pricing." },
  { icon: ShieldCheck, title: "Comprehensive Cover", desc: "Full protection against accidents, theft, fire, and third-party liability with optional extensions." },
  { icon: ShieldAlert, title: "Third Party Cover", desc: "Mandatory liability cover for damages caused to other people and their property." },
];



export default function MotorInsurance() {
  return (
    <>
      <PageHero
        bgImage={motorHeroBg}
        noOverlay={true}
        crumb="Motor Insurance"
        eyebrow={
          <>
            <Car size={14} /> Motor Insurance
          </>
        }
        title={
          <>
            <span className="text-black drop-shadow-md">Cover for every kilometer</span><br />
            <span className="text-red-600 drop-shadow-md">on any road</span>
          </>
        }
        subtitle={
          <span className="text-white font-medium drop-shadow-md">
            From a single family car to nationwide fleets — NRIS structures motor policies that keep you moving and settle claims fast when it matters.
          </span>
        }
        cta={
          <Link to="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 shadow-blue-500/30 text-white">
            Get a motor quote <ArrowRight size={18} />
          </Link>
        }
      />

      {/* Products */}
      <section className="section">
        <div className="container-xl grid gap-12 lg:grid-cols-2 items-start">
          <AnimatedSection>
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-lg lg:sticky lg:top-24 transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl cursor-pointer">
              <motion.img
                src={motorImg}
                alt="Motor Insurance Overview"
                className="h-full w-full object-cover origin-center"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} animation="slideRight">
            <span className="badge-pill mb-4 bg-red-50 text-red-600 border-red-100">Products</span>
            <h2 className="font-display text-3xl font-bold text-ink mb-4">
              Every driver, every use case
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Whether you drive a single vehicle or run a commercial fleet, our
              motor specialists compare quotes across insurers to secure the
              best pricing without compromising claims quality.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {products.map((p, i) => (
                <AnimatedSection
                  key={p.title}
                  delay={i * 0.15}
                  animation="scaleUp"
                  className="group overflow-hidden flex flex-col rounded-2xl border border-blue-500/10 bg-white shadow-md hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                      <p.icon size={20} />
                    </span>
                    <h3 className="font-display font-semibold text-ink mb-2 text-sm">{p.title}</h3>
                    <p className="text-muted text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Risk Scenarios */}
      <section className="bg-gradient-to-b from-[#fcfdfd] to-[#f4f7fb] py-16 border-t border-blue-500/10">
        <div className="container-xl max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1fr_2.5fr]">
          <AnimatedSection animation="scaleUp">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink border-l-[6px] border-blue-600 pl-5 leading-tight">
              Risk Scenarios
            </h2>
          </AnimatedSection>

          <div className="grid gap-12 sm:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <h3 className="font-bold text-ink mb-6">Who it's for:</h3>
              <ul className="space-y-4">
                {riskScenarios.who.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink/80 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h3 className="font-bold text-ink mb-6">What it covers:</h3>
              <ul className="space-y-4">
                {riskScenarios.what.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink/80 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>



      <CTASection />
    </>
  );
}
