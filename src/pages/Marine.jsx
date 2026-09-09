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

import homePageImg from "../assets/Home Page.png";

export default function Marine() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen w-full">
        <motion.img
          src={homePageImg}
          alt="Marine Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <section className="section border-t border-black/5">
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

      <CTASection />
    </div>
  );
}
