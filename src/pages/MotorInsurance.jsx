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





export default function MotorInsurance() {
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
        bgImage={motorHeroBg}
        noOverlay={true}
        crumb="Motor Insurance"
        eyebrow={
          <>
            <Car size={14} /> Motor Insurance
          </>
        }
        title={
          <>
            <span className="block text-red-600 mb-2">Make your roads shorter</span>
            <span className="block text-[#0B4EA2]">Your safety is our priority</span>
          </>
        }
        subtitle={
          <span className="text-black font-medium drop-shadow-md">
            From a single family car to nationwide fleets — NRIS structures motor policies that keep you moving and settle claims fast when it matters.
          </span>
        }
        cta={
          <Link to="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 shadow-blue-500/30 text-white">
            Get a motor quote <ArrowRight size={18} />
          </Link>
        }
      />

      {/* Intro Text */}
      <section className="section bg-white">
        <div className="container-xl grid gap-12 lg:grid-cols-2 items-center">
          <AnimatedSection>
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
              <motion.img
                src={motorImg}
                alt="Motor Insurance"
                className="h-full w-full object-cover origin-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} animation="slideRight">
            <div className="mb-8">
              <div className="h-1 w-24 bg-[#0B4EA2] mb-6"></div>
              <h2 className="font-display text-4xl font-bold text-ink leading-tight tracking-tight">
                <span className="text-[#0B4EA2]">NRiS</span> assists you to save big on the best policy for your car.
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
      <section className="section bg-[#fcfdfd]">
        <div className="container-xl">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 relative">
            <div className="flex justify-center mb-4">
              <div className="h-1 w-16 bg-[#0B4EA2] rounded-full"></div>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
              What are the benefits of a motor<br />insurance policy?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
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
                <p className="text-muted text-sm leading-relaxed mt-2">
                  {b.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>



      <CTASection />
    </div>
  );
}
