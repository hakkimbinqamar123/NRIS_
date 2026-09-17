import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ship, ArrowRight, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import AnimatedBackground from "../components/AnimatedBackground";
import marine1Img from "../assets/marine1.png";
import marine2Img from "../assets/marine2.png";
import marine3Img from "../assets/marine3.png";
import marine4Img from "../assets/Marine.png";
import generalHeroBg from "../assets/engineering_hero_bg.png"; // reusing hero bg

import marImg from "../assets/MAR.png";

const marineBenefits = [
  { num: "01", title: "Cargo Protection", desc: "Covers goods against loss or damage during transit by sea, air, road, or rail." },
  { num: "02", title: "Financial Security", desc: "Reduces the financial impact of unexpected loss or damage to insured cargo." },
  { num: "03", title: "Transit Risk Coverage", desc: "Can protect against risks such as accidents, fire, theft, collision, and natural perils." },
  { num: "04", title: "Global Trade Protection", desc: "Supports importers, exporters, and traders with coverage for domestic and international shipments." },
  { num: "05", title: "Flexible Coverage Options", desc: "Policies can be arranged for single shipments or ongoing shipments under an annual/open cover." },
  { num: "06", title: "Business Continuity", desc: "Helps businesses recover more quickly from insured transit losses and minimize disruption to operations." }
];
export default function Marine() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      {/* HERO */}
      <section className="relative w-full bg-black/5">
        <motion.img loading="lazy"
          src={marImg}
          alt="Marine Hero"
          className="w-full h-auto block z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <section className="section bg-white relative z-10 border-t border-black/5">
        <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Hero Text */}
          <AnimatedSection>
            <div className="mb-4">
              <span className="badge-pill inline-flex items-center gap-2 bg-blue-50 text-blue-600 border-blue-100 px-4 py-1.5 font-semibold text-sm">
                <Ship size={16} /> Marine Insurance
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] mb-6">
              <span className="block text-[#0B4EA2]">Protecting Global</span>
              <span className="block text-red-600">Supply Chains</span>
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
              Tailored coverage for all forms of transit—by sea, air, and land.
            </p>
            <Link to="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 text-white w-max px-8 py-3.5 rounded-full text-base transition-transform hover:scale-105">
              Request a quote <ArrowRight size={18} />
            </Link>
          </AnimatedSection>

          {/* Right Column: Existing Intro Text */}
          <AnimatedSection delay={0.2} animation="slideRight">
            <span className="badge-pill mb-4 bg-blue-50 text-blue-600 border-blue-100">
              <Ship size={14} className="mr-1" /> Marine
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5">
              Comprehensive Marine Coverage
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Whether you are importing raw materials, exporting finished goods, or operating a commercial vessel, our marine specialists tailor coverage for all forms of transit—by sea, air, and land.
            </p>
            <ul className="space-y-3">
              {["Marine Cargo (Single or Open Cover)", "Marine Hull & Machinery", "Freight Forwarders Liability", "Inland Transit"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-ink/80">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#0B4EA2] text-[#0B4EA2]">
                    <Check size={12} strokeWidth={4} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Marine Insurance Benefits */}
      <section className="relative z-10 py-20">
        <div className="container-xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16" animation="slideUp">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
              <span className="block">What Are The Benefits Of A Marine</span>
              <span className="block">Insurance Policy?</span>
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {marineBenefits.map((b, i) => {
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
