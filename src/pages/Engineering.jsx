import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HardHat, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import AnimatedBackground from "../components/AnimatedBackground";
import engineeringHeroBg from "../assets/engineering_hero_bg.png";

const engineeringCards = [
  { num: "01", title: "Contractors' All Risks", desc: "Secures the contractor from any accidents that happen on the construction site while working" },
  { num: "02", title: "Erection All Risks", desc: "Provides coverage for losses and/or damages to materials and erection works owned by principals and contractors/subcontractors" },
  { num: "03", title: "Contractors' Plant & Machinery", desc: "Protection for loss or damage to machinery/plant. A wide range of risks and damage cases covered" },
  { num: "04", title: "Third Party Liability", desc: "Covers accidental damage to third party property or accidental death or bodily injury to third party" },
  { num: "05", title: "Machinery Breakdown", desc: "Covers loss or damage to machinery caused by defects in casting and material, faulty design, bad workmanship etc" },
  { num: "06", title: "Professional Indemnity", desc: "Protects professionals and businesses against claims arising from errors, omissions, negligence, or inadequate professional services" }
];

import homePageImg from "../assets/Engineerig.png";

export default function Engineering() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      {/* HERO */}
      <section className="relative overflow-hidden h-[calc(100dvh-81px)] w-full">
        <motion.img
          src={homePageImg}
          alt="Engineering Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <section className="section bg-white relative z-10 border-t border-black/5">
        <div className="container-xl mb-16 grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column: Hero Text */}
          <AnimatedSection>
            <div className="mb-4">
              <span className="badge-pill inline-flex items-center gap-2 bg-blue-50 text-blue-600 border-blue-100 px-4 py-1.5 font-semibold text-sm">
                <HardHat size={16} /> Engineering
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] mb-6">
              <span className="block text-[#0B4EA2]">Protection Security</span>
              <span className="block text-red-600">Complex Projects</span>
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
              Contractors All Risk, machinery, and industrial coverage engineered around your project timeline, contract obligations, and risk exposure.
            </p>
            <Link to="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 text-white w-max px-8 py-3.5 rounded-full text-base transition-transform hover:scale-105">
              Request a quote <ArrowRight size={18} />
            </Link>
          </AnimatedSection>

          {/* Right Column: Existing Intro Text */}
          <AnimatedSection delay={0.2} animation="slideRight">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
              Comprehensive Engineering Coverage
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              We specialize in evaluating complex exposures and aligning them with robust insurance products from A-rated international markets.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section relative z-10 pt-0">
        <div className="container-xl">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 relative">
            <div className="flex justify-center mb-4">
              <div className="h-1 w-16 bg-[#0B4EA2] rounded-full"></div>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Different Policies Under Engineering Insurance
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringCards.map((b, i) => {
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
      {/* <CTASection /> */}
    </div>
  );
}
