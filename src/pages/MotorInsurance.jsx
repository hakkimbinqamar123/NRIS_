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
import AnimatedBackground from "../components/AnimatedBackground";
import FAQAccordion from "../components/FAQAccordion";
import CTASection from "../components/CTASection";
import motorImg from "../assets/motor.png";
import motorHeroBg from "../assets/motor_hero_bg.png";
import nrisHeroBanner from "../assets/NRIS_hero_banner2.png";

const benefits = [
  { num: "01", title: "Third-Party Car Insurance Is Mandatory", desc: "The UAE Government has made it mandatory to buy TPL, as it protects Licensed Driver's Legal Liability towards third parties and their property" },
  { num: "02", title: "Saves You From Traffic Fines", desc: "Gives a great peace of mind to the policy holder and passengers when driving the vehicle" },
  { num: "03", title: "Provides Personal Accident Coverage For Owner And Driver", desc: "Provides legal cover to the owner in case of third party injury or death" },
  { num: "04", title: "Gives Easy Access To Replacement Cars", desc: "Emergency replacement allowing car owners to receive substitute vehicle" },
  { num: "05", title: "Covers Damages To The Car", desc: "Excellent financial protection against damage to the car or loss of vehicle" },
  { num: "06", title: "Covers Your Car Against Theft", desc: "Financial security in case of accidents, theft, and natural catastrophes" },
];





import motImg from "../assets/Mot.png";

export default function MotorInsurance() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen w-full">
        <motion.img
          src={motImg}
          alt="Motor Insurance Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Intro Text */}
      <section className="section bg-white">
        <div className="container-xl grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column: Hero Text */}
          <AnimatedSection>
            <div className="mb-4">
              <span className="badge-pill inline-flex items-center gap-2 bg-blue-50 text-blue-600 border-blue-100 px-4 py-1.5 font-semibold text-sm">
                <Car size={16} /> Motor Insurance
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] mb-6">
              <span className="block text-red-600 mb-2">Make Your Roads Shorter</span>
              <span className="block text-[#0B4EA2]"><span className="text-red-600">Your Safety</span> Is Our Priority</span>
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
              From a single family car to nationwide fleets — <span className="text-[#0B4EA2] font-bold">NRiS</span> structures motor policies that keep you moving and settle claims fast when it matters.
            </p>
            <Link to="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 text-white w-max px-8 py-3.5 rounded-full text-base transition-transform hover:scale-105">
              Get a motor quote <ArrowRight size={18} />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2} animation="slideRight">
            <div className="mb-8">
              <div className="h-1 w-24 bg-[#0B4EA2] mb-6"></div>
              <h2 className="font-display text-4xl font-bold text-ink leading-tight tracking-tight">
                <span className="text-[#0B4EA2]">NRiS</span> Assists You To Save Big On The Best Policy For Your Car.
              </h2>
            </div>

            <div className="space-y-6 text-ink/80 text-[16px] leading-[1.8] font-medium">
              <p>
                Car insurance is as important as buying the car itself. At <span className="text-[#0B4EA2] font-semibold">NRiS</span> we make sure that our clients' investments are protected against accidental damage. <span className="text-[#0B4EA2] font-semibold">NRiS</span> guides them through the complex options and confusing insurance jargons to select the best type of car Insurance suited to their specific needs. Based on the requirements we contrive the best solutions that provide the greatest value. We provide our client the best protection by evaluating their needs, understanding the available options and then matching them with the right coverage plan at a competitive price.
              </p>

              <p>
                We provide insurance advice on the following under our Motor Insurance service:
              </p>

              <p className="font-semibold text-ink">
                Cars, Pickups, Trucks, Buses, Bikes etc.
              </p>

              <p>
                Drive safe and leave the hassle of going through policies and paper work to us.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="section relative z-10">
        <div className="container-xl">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 relative">
            <div className="flex justify-center mb-4">
              <div className="h-1 w-16 bg-[#0B4EA2] rounded-full"></div>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
              What Are The Benefits Of A Motor<br />Insurance Policy?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const isNavy = i % 2 === 0;
              return (
                <AnimatedSection
                  key={b.num}
                  delay={i * 0.1}
                  className="relative bg-white border border-[#D8DEE6] p-[30px_28px_28px_96px] overflow-hidden hover:-translate-y-2 hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer"
                >
                  {/* Left side color bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[6px] ${isNavy ? 'bg-[#0B4EA2]' : 'bg-[#C81E2C]'}`} />
                  
                  {/* Number Box */}
                  <div className={`absolute left-[26px] top-[26px] font-sans font-bold text-[13px] tracking-[0.04em] text-white w-10 h-10 flex items-center justify-center rounded-sm ${isNavy ? 'bg-[#0B4EA2]' : 'bg-[#C81E2C]'}`}>
                    {b.num}
                  </div>



                  {/* Title */}
                  <h3 className="font-sans text-[19px] font-bold text-[#0A1830] mb-3 tracking-[-0.01em]">
                    {b.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[14.5px] leading-[1.55] text-[#4B5A6E] max-w-[34ch]">
                    {b.desc}
                  </p>

                  {/* Divider in bottom right corner */}
                  <div 
                    className="absolute right-0 bottom-0 w-16 h-16" 
                    style={{ background: isNavy ? 'linear-gradient(135deg, transparent 50%, rgba(11,78,162,0.035) 50%)' : 'linear-gradient(135deg, transparent 50%, rgba(200,30,44,0.05) 50%)' }}
                  />
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>



      <CTASection />
    </div>
  );
}
