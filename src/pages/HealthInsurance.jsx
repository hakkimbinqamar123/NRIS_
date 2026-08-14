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
import nrisHeroBanner from "../assets/NRIS_hero_banner2.png";

const policyReasons = [
  { num: "01", title: "Medical Insurance Is Compulsory In The UAE", desc: "In order to renew the visa, GDRFA requires valid health insurance cover" },
  { num: "02", title: "Affordable Plans", desc: "We device policies that are tailored to your needs and are made available at very competitive rates" },
  { num: "03", title: "Pre And Post Hospitalization Expenses", desc: "In-Patient and Out-Patient services are covered depending on the health plan limits and co-pay" },
  { num: "04", title: "Health Cover For New Borns", desc: "New Borns will be automatically covered under the mother's policy up to 30 days securing proper medical support to the child" },
  { num: "05", title: "Maternity Cover", desc: "As per the UAE regulations, all married females from the age 18-50 will be having a maternity cover as per the terms and conditions of the policy" },
  { num: "06", title: "Pre-Existing And Chronic Conditions", desc: "All pre-existing medical conditions and chronic diseases are covered subject to continuity and depending on the plan's limit and co-pay" }
];



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
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-[position:65%_center]"
          style={{ backgroundImage: `url(${nrisHeroBanner})` }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      </div>
      <PageHero
        transparentBg={true}
        fullHeight={true}
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
            <span className="text-[#0B4EA2]">Comprehensive medical cover for</span> <span className="text-red-600">every stage of life</span>
          </>
        }
        subtitle={
          <span className="text-black font-medium drop-shadow-md">
            From personal plans to enterprise-wide group medical schemes — NRIS builds programs that keep employees, families, and individuals healthy and protected.
          </span>
        }
        cta={
          <Link to="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 shadow-blue-500/30 text-white">
            Request a health quote <ArrowRight size={18} />
          </Link>
        }
      />

      {/* Intro Text */}
      <section className="section bg-white pt-24 pb-16">
        <div className="container-xl max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-8 leading-tight">
              Providing access to quality and affordable healthcare in the UAE
            </h2>
            <div className="text-left space-y-6 text-muted text-lg leading-relaxed">
              <p>
                At NRiS, we make the optimum use of our long year's of experience, expertise and research in health sector by offering you a whole spectrum of health insurance benefits and providing insights in forming a unique health plan based on your needs and resources. We offer tailor made individual and Group medical health insurance plans & other general insurances as per your specific requirements. Whether you are an individual seeking insurance plans for your family or a mid or large level organization or employer in need of insuring your workforce, we have market metrics and our industry experience to bring you the best solutions.
              </p>
              <p>
                We research the availability of solutions based on your health data to determine the best deal that meets all your objectives. We then connect you with the right insurer, leveraging our sizeable portfolio and experience in brokering, to generate competition and favorable pricing. We give you access to innumerable health benefits by comparing products from different insurers and matching them against your needs. We regularly review and update your existing insurance portfolio to maintain optimum insurance coverage with changing circumstances. We aim to avail you best deals in competitive prices and make sure you are fully covered with no loopholes that might cost you later. Our goal is to ensure minimum hassle and assure your peace of mind in events of medical emergencies.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Insurance Policy Reasons */}
      <section className="bg-surface py-20">
        <div className="container-xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16" animation="slideUp">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
              Why do you need a health insurance policy?
            </h2>
          </AnimatedSection>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {policyReasons.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center bg-[#c61017] text-white font-bold text-lg h-10 w-10 shrink-0 rounded-[2px]">
                    {r.num}
                  </span>
                  <h3 className="font-bold text-ink leading-tight text-lg">{r.title}</h3>
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {r.desc}
                </p>
              </AnimatedSection>
            ))}
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
    </div>
  );
}
