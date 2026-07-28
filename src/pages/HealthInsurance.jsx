import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Check,
  Building2,
  Users,
  ShieldPlus,
  Hospital,
  Wallet,
  Stethoscope,
  Baby,
  Brain,
  Globe2,
  ArrowRight,
} from "lucide-react";
import PageHero from "../components/PageHero";
import AnimatedSection from "../components/AnimatedSection";
import PhotoBlock from "../components/PhotoBlock";
import FAQAccordion from "../components/FAQAccordion";
import CTASection from "../components/CTASection";
import healthImg from "../assets/health.png";
import healthHeroBg from "../assets/health_hero_bg.png";

const riskScenarios = {
  who: [
    "Small, medium, and large employers, including multinationals",
    "Financial institutions",
    "Colleges, universities, and other institutions of higher learning",
    "Affinity groups, including associations, clubs, societies, labor unions, amateur sports teams, and volunteer groups",
    "Cruise lines, travel agencies, and tour operators",
    "A range of industries, including retailing, publishing, oil and natural gas, utilities, and telecommunications"
  ],
  what: [
    "Personal accident coverage including accidental death and disability (AD&D), injury medical expenses, repatriation to home country and temporary total disability benefits",
    "Travel insurance, business and personal",
    "Student accident insurance and international academic field-trips insurance",
    "Global medical insurance: short-term accident and sickness coverage for employees traveling outside their home country or country of permanent assignment, as well as benefits for lost baggage and personal effects",
    "Employee benefits such as AD&D and occupational injuries"
  ]
};

const plans = [
  {
    icon: ShieldPlus,
    title: "Individual Plans",
    desc: "Personal medical coverage with outpatient, inpatient, and maternity add-ons.",
    points: ["Cashless network hospitals", "Chronic condition cover", "Preventive care & wellness"],
  },
  {
    icon: Users,
    title: "Family Plans",
    desc: "Consolidated policies covering spouse, children, and dependent parents.",
    points: ["Shared or per-member limits", "Newborn cover from day 1", "Global emergency assistance"],
  },
  {
    icon: Building2,
    title: "Corporate Medical",
    desc: "Group medical schemes designed around your workforce and industry.",
    points: ["Custom benefit design", "Wellness programs", "Dedicated account manager"],
  },
];



export default function HealthInsurance() {
  return (
    <>
      <PageHero
        bgImage={healthHeroBg}
        noOverlay={true}
        crumb="Health Insurance"
        eyebrow={
          <>
            <HeartPulse size={14} /> Health Insurance
          </>
        }
        title={
          <>
            Comprehensive medical cover for <span className="text-red-600">every stage of life</span>
          </>
        }
        subtitle={
          <span className="text-white font-medium drop-shadow-md">
            From personal plans to enterprise-wide group medical schemes — NRIS builds programs that keep employees, families, and individuals healthy and protected.
          </span>
        }
        cta={
          <Link to="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 shadow-blue-500/30 text-white">
            Request a health quote <ArrowRight size={18} />
          </Link>
        }
      />

      {/* Overview */}
      <section className="section">
        <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
              <motion.img 
                src={healthImg} 
                alt="Health Insurance Overview" 
                className="w-full h-auto origin-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} animation="slideRight">
            <span className="badge-pill mb-4 bg-red-50 text-red-600 border-red-100">Overview</span>
            <h2 className="font-display text-3xl font-bold text-ink mb-5">
              Advisory-led health insurance broking
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Medical inflation is outpacing salaries. NRIS negotiates on your
              behalf with regional and international insurers to structure a
              plan that protects your people without inflating your budget. We
              handle onboarding, claims escalations, and renewal benchmarking
              end-to-end.
            </p>
            <ul className="space-y-3">
              {["Multi-insurer market comparison", "Clinically-informed benefit design", "24/7 claims escalation desk"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-ink/80">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check size={14} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
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

      {/* Plans */}
      <section className="section bg-surface">
        <div className="container-xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16" animation="slideUp">
            <span className="badge-pill mb-4 bg-blue-50 text-blue-600 border-blue-100">Plans</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
              Choose the coverage model that fits
            </h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((p, i) => (
              <AnimatedSection
                key={p.title}
                delay={i * 0.15}
                animation="scaleUp"
                className="group overflow-hidden flex flex-col rounded-2xl bg-white shadow-md border border-blue-500/10 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-8 flex-1 flex flex-col">
                  <span className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                    <p.icon size={24} />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">{p.title}</h3>
                  <p className="text-muted text-sm mb-5">{p.desc}</p>
                  <ul className="space-y-2 mt-auto">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-ink/80">
                        <Check size={14} className="text-primary shrink-0 mt-1" /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why NRIS */}
      <section className="section bg-gradient-to-br from-red-50 to-blue-50 border-t border-white">
        <div className="container-xl text-center max-w-2xl mx-auto">
          <AnimatedSection animation="scaleUp">
            <span className="badge-pill mb-4 bg-red-100 text-red-700 border-red-200">Why NRIS</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
              Broker advantage — not just paperwork
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              You get a partner that treats your medical program as a
              strategic lever, not a compliance line item.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}
