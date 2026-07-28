import { Link } from "react-router-dom";
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
import generalImg from "../assets/engineering.jpg";
import generalHeroBg from "../assets/engineering_hero_bg.png";
import property1Img from "../assets/property1.png";
import property2Img from "../assets/property2.png";
import property3Img from "../assets/property3.png";
import property4Img from "../assets/property4.png";
import marine1Img from "../assets/marine1.png";
import marine2Img from "../assets/marine2.png";
import marine3Img from "../assets/marine3.png";
import marine4Img from "../assets/marine4.png";

export default function GeneralInsurance() {
  return (
    <>
      <PageHero
        bgImage={generalHeroBg}
        noOverlay={true}
        crumb="General Insurance"
        eyebrow={
          <>
            <Shield size={14} /> General Insurance
          </>
        }
        title={<>Comprehensive protection for <span className="text-red-600">commercial enterprise</span></>}
        subtitle={<span className="text-white">From property portfolios and global supply chains to complex engineering projects and liability exposures — NRIS secures your operations.</span>}
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
            <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-lg">
              <img src={generalImg} alt="General Insurance Overview" className="h-full w-full object-cover" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} animation="slideRight">
            <span className="badge-pill mb-4 bg-red-50 text-red-600 border-red-100">Overview</span>
            <h2 className="font-display text-3xl font-bold text-ink mb-5">
              Enterprise-grade risk transfer
            </h2>
            <p className="text-muted leading-relaxed">
              Modern businesses face interconnected risks. A fire doesn't just damage property; it halts production and disrupts supply chains. NRIS structures holistic general insurance programs that interlock property, marine, engineering, and liability covers — ensuring no gaps in your protection.
            </p>
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Factory, title: "Contractors All Risk (CAR)", desc: "Cover for construction works, materials on-site, and third-party liability during the project." },
              { icon: Cog, title: "Plant & Machinery", desc: "Physical damage and breakdown protection for heavy equipment and construction plant." },
              { icon: MonitorSmartphone, title: "Electronic Equipment", desc: "Coverage for servers, telecom systems, and specialist IT hardware." }
            ].map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.15} animation="scaleUp" className="group overflow-hidden flex flex-col rounded-2xl border border-blue-500/10 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-7">
                <span className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                  <p.icon size={24} />
                </span>
                <h3 className="font-display font-semibold text-ink mb-2">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
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
              Secure your physical assets & continuity
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Property insurance is the bedrock of commercial risk management. We go beyond basic fire policies to include comprehensive "All Risk" wordings and Business Interruption coverage, ensuring that if a disaster strikes, your cash flow doesn't stop.
            </p>
            <ul className="space-y-3">
              {["Property All Risk (PAR)", "Business Interruption (BI)", "Fire and Allied Perils", "Terrorism and Sabotage"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-ink/80">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <Check size={14} />
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
    </>
  );
}
