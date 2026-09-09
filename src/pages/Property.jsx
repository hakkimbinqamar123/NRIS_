import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building, ArrowRight, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import AnimatedBackground from "../components/AnimatedBackground";
import property1Img from "../assets/Home.png";
import property2Img from "../assets/property2.png";
import property3Img from "../assets/property3.png";
import property4Img from "../assets/home2.png";
import generalHeroBg from "../assets/engineering_hero_bg.png"; // reusing hero bg
import homePageImg from "../assets/Home Page.png";

export default function Property() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen w-full">
        <motion.img
          src={homePageImg}
          alt="Property Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <section className="section bg-gradient-to-b from-[#fcfdfd] to-[#f4f7fb] border-t border-blue-500/10">
        <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Hero Text */}
          <AnimatedSection>
            <div className="mb-4">
              <span className="badge-pill inline-flex items-center gap-2 bg-blue-50 text-blue-600 border-blue-100 px-4 py-1.5 font-semibold text-sm">
                <Building size={16} /> Property Insurance
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] mb-6">
              <span className="block text-[#0B4EA2]">Stay Covered Against</span> 
              <span className="block text-red-600">Natural Calamities</span>
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
              Complete assistance from selecting the right policy for your property to processing any claim.
            </p>
            <Link to="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 text-white w-max px-8 py-3.5 rounded-full text-base transition-transform hover:scale-105">
              Request a quote <ArrowRight size={18} />
            </Link>
          </AnimatedSection>

          {/* Right Column: Existing Intro Text */}
          <AnimatedSection delay={0.2} animation="slideRight">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5">
              Secure Your Real Estate Assets
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
        </div>
      </section>

      <CTASection />
    </div>
  );
}
