import { Link } from "react-router-dom";
import { HardHat, ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

export default function EngineeringIntro() {
  return (
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
  );
}
