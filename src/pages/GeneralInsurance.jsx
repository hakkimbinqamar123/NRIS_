import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Building,
  Ship,
  Scale,
  Factory,
  HardHat,
  ArrowRight,
  Check,
  Cog,
  MonitorSmartphone,
  Flame,
  Waves,
  Briefcase
} from "lucide-react";
import PageHero from "../components/PageHero";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
// For now, reuse engineering image as a placeholder for general
import generalImg from "../assets/Eng.png";
import generalHeroBg from "../assets/engineering_hero_bg.png";
import nrisHeroBanner from "../assets/NRIS_hero_banner2.png";
import property1Img from "../assets/Home.png";
import property2Img from "../assets/property2.png";
import property3Img from "../assets/property3.png";
import property4Img from "../assets/home2.png";
import marine1Img from "../assets/marine1.png";
import marine2Img from "../assets/marine2.png";
import marine3Img from "../assets/marine3.png";
import marine4Img from "../assets/Marine.png";

const engineeringCards = [
  { num: "01", title: "Contractors' All Risks", desc: "Secures the contractor from any accidents that happen on the construction site while working" },
  { num: "02", title: "Erection All Risks", desc: "Provides coverage for losses and/or damages to materials and erection works owned by principals and contractors/subcontractors" },
  { num: "03", title: "Contractors' Plant & Machinery", desc: "Protection for loss or damage to machinery/plant. A wide range of risks and damage cases covered" },
  { num: "04", title: "Third Party Liability", desc: "Covers accidental damage to third party property or accidental death or bodily injury to third party" },
  { num: "05", title: "Machinery Breakdown", desc: "Covers loss or damage to machinery caused by defects in casting and material, faulty design, bad workmanship etc" },
  { num: "06", title: "Owner's Controlled Insurance Program (OCIP)", desc: "OCIP is an insurance policy held by a property owner during the construction or renovation of a property" }
];

export default function GeneralInsurance() {
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
        bgImage={generalHeroBg}
        noOverlay={true}
        crumb="General Insurance"
        eyebrow={
          <>
            <Shield size={14} /> General Insurance
          </>
        }
        title={<><span className="text-[#0B4EA2]">Comprehensive Protection For</span> <span className="text-red-600">Commercial Enterprise</span></>}
        subtitle={<span className="text-black drop-shadow-md">From property portfolios and global supply chains to complex engineering projects and liability exposures — NRIS secures your operations.</span>}
        cta={
          <Link to="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 shadow-blue-500/30 text-white">
            Request a quote <ArrowRight size={18} />
          </Link>
        }
      />

      {/* Overview */}
      <section className="section bg-surface">
        <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
              <motion.img
                src={generalImg}
                alt="General Insurance Overview"
                className="h-full w-full object-cover origin-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} animation="slideRight">
            <span className="badge-pill mb-4 bg-red-50 text-red-600 border-red-100">Overview</span>
            <h2 className="font-display text-3xl font-bold text-ink mb-5">
              <span className="text-[#0B4EA2]">Enterprise</span>-grade risk transfer
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Modern businesses face interconnected risks. A fire doesn't just damage property; it halts production and disrupts supply chains. NRIS structures holistic general insurance programs that interlock property, marine, engineering, and liability covers — ensuring no gaps in your protection.
              </p>
              <p>
                Whether you are mitigating daily operational hazards or preparing for catastrophic events, our team offers tailored solutions to keep your business resilient. We specialize in evaluating complex exposures and aligning them with robust insurance products from A-rated international markets.
              </p>
              <p>
                Protect your balance sheet and secure your company's future with our comprehensive commercial insurance strategies.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Engineering Section */}
      <section id="engineering" className="section border-t border-black/5 scroll-mt-20">
        <div className="container-xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16" animation="slideUp">
            <span className="badge-pill mb-4 bg-blue-50 text-blue-600 border-blue-100">
              <HardHat size={14} className="mr-1" /> Engineering
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
              Protection built for complex projects
            </h2>
            <p className="text-muted leading-relaxed">
              Contractors All Risk, machinery, and industrial coverage engineered around your project timeline, contract obligations, and risk exposure.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringCards.map((b, i) => (
              <AnimatedSection
                key={b.num}
                delay={i * 0.1}
                className="group bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col hover:-translate-y-2 hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-[#e61919] text-white font-bold text-xl h-10 w-10 flex items-center justify-center rounded shrink-0 group-hover:bg-[#cc1616] transition-colors duration-300">
                    {b.num}
                  </div>
                  <h3 className="font-bold text-ink text-[15px] leading-snug pt-1 group-hover:text-[#0B4EA2] transition-colors duration-300">
                    {b.title}
                  </h3>
                </div>
                <p className="text-muted text-[14px] leading-relaxed mt-2">
                  {b.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Property Section */}
      <section id="property" className="section bg-gradient-to-b from-[#fcfdfd] to-[#f4f7fb] border-t border-blue-500/10 scroll-mt-20">
        <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection animation="slideRight">
            <span className="badge-pill mb-4 bg-blue-50 text-blue-600 border-blue-100">
              <Building size={14} className="mr-1" /> Property
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5">
              Stay covered against natural calamities
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-8">
              We understand the emotional and financial importance of a home and therefore commit ourselves to providing the best coverage plans that will give protection against any unforeseeable risk. It can be quite difficult to navigate through a myriad of policies and decide which one would be ideal. <span className="text-[#0B4EA2] font-semibold">NRiS</span> offers complete assistance from selecting the right policy for their home till processing any claim. We give counseling in obtaining comprehensive protection from unforeseen events that can cause damage to houses and provide overall coverage to Assets, Interests, Liabilities and the residents.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Property All Risk", "Strata Insurance",
                "Fire and Allied Perils", "Tenants & Occupied Liability",
                "Business interruption", "Hotel Comprehensive"
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-ink font-medium text-[15px]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#f39c12] text-[#f39c12]">
                    <Check size={12} strokeWidth={4} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={0.2} animation="scaleUp">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-end gap-4">
                <div className="h-48 rounded-2xl overflow-hidden shadow-lg group transition-transform duration-500 hover:scale-[1.03] cursor-pointer">
                  <img src={property3Img} alt="Fire & Perils" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="h-40 rounded-2xl overflow-hidden shadow-lg group transition-transform duration-500 hover:scale-[1.03] cursor-pointer">
                  <img src={property2Img} alt="Business Continuity" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="h-48 rounded-2xl overflow-hidden shadow-lg group transition-transform duration-500 hover:scale-[1.03] cursor-pointer">
                  <img src={property1Img} alt="Property Insurance" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="h-40 rounded-2xl overflow-hidden shadow-lg group transition-transform duration-500 hover:scale-[1.03] cursor-pointer">
                  <img src={property4Img} alt="All Risk Cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Marine Section */}
      <section id="marine" className="section border-t border-black/5 scroll-mt-20">
        <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection className="order-2 lg:order-1" animation="scaleUp">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="h-40 rounded-2xl overflow-hidden shadow-lg group transition-transform duration-500 hover:scale-[1.03] cursor-pointer">
                  <img src={marine3Img} alt="Hull & Machinery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="h-48 rounded-2xl overflow-hidden shadow-lg group transition-transform duration-500 hover:scale-[1.03] cursor-pointer">
                  <img src={marine1Img} alt="Marine" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
              <div className="flex flex-col justify-end gap-4">
                <div className="h-40 rounded-2xl overflow-hidden shadow-lg group transition-transform duration-500 hover:scale-[1.03] cursor-pointer">
                  <img src={marine2Img} alt="Cargo Transit" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="h-48 rounded-2xl overflow-hidden shadow-lg group transition-transform duration-500 hover:scale-[1.03] cursor-pointer">
                  <img src={marine4Img} alt="Cargo Transit" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="order-1 lg:order-2" delay={0.2} animation="slideRight">
            <span className="badge-pill mb-4 bg-blue-50 text-blue-600 border-blue-100">
              <Ship size={14} className="mr-1" /> Marine
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5">
              Protecting global supply chains
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Whether you are importing raw materials, exporting finished goods, or operating a commercial vessel, our marine specialists tailor coverage for all forms of transit—by sea, air, and land.
            </p>
            <ul className="space-y-3">
              {["Marine Cargo (Single or Open Cover)", "Marine Hull & Machinery", "Freight Forwarders Liability", "Inland Transit"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-ink/80">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Check size={14} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Liability Section */}
      <section id="liability" className="section bg-surface border-t border-black/5 scroll-mt-20">
        <div className="container-xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16" animation="slideUp">
            <span className="badge-pill mb-4 bg-blue-50 text-blue-600 border-blue-100">
              <Scale size={14} className="mr-1" /> Liability
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
              Shield your balance sheet from claims
            </h2>
            <p className="text-muted leading-relaxed">
              Litigation and third-party claims can be catastrophic. We provide specialized liability covers to protect your directors, your products, and your professional services.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: "Public Liability", desc: "Covers third-party injury or property damage claims arising from your business operations." },
              { icon: Briefcase, title: "Directors & Officers (D&O)", desc: "Protects personal assets of corporate directors against management liability claims." },
              { icon: Scale, title: "Professional Indemnity", desc: "Essential for consultants and firms providing professional advice to protect against negligence claims." }
            ].map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.15} animation="scaleUp" className="group overflow-hidden flex flex-col rounded-2xl border border-blue-500/10 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-7">
                <span className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <p.icon size={24} />
                </span>
                <h3 className="font-display font-semibold text-ink mb-2">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why NRIS */}
      <section className="section bg-gradient-to-br from-red-50 to-blue-50 border-t border-white">
        <div className="container-xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto" animation="scaleUp">
            <span className="badge-pill mb-4 bg-red-100 text-red-700 border-red-200">Why NRIS</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
              A broker that speaks your industry
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              We don't just sell policies; we analyze your operational workflow, supply chain dependencies, and contractual liabilities to engineer a robust safety net.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
